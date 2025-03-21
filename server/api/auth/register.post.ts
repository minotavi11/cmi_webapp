import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  terms: z.boolean(),
});

export default defineEventHandler(async (event) => {
  const db = useDatabase();

  const { email, password, confirmPassword, terms } =
    await readValidatedBody(event, bodySchema.parse);

  if (password !== confirmPassword) {
    throw createError({
      statusCode: 400,
      statusMessage: "Parolele nu coincid",
    });
  }

  if (!terms) {
    throw createError({
      statusCode: 400,
      statusMessage: "Trebuie să accepți termenii și condițiile",
    });
  }

  try {
    // Creare tabel utilizatori dacă nu există (adăugăm câmpul isAdmin)
    await db.sql`CREATE TABLE IF NOT EXISTS users (
      "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(), 
      "email" TEXT UNIQUE, 
      "password" TEXT, 
      "isAdmin" BOOLEAN DEFAULT FALSE
    )`;

    // Verificare dacă utilizatorul există deja
    const { rows } = await db.sql`SELECT * FROM users WHERE email = ${email}`;

    if (rows && rows.length > 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "Un utilizator cu acest email există deja",
      });
    }

    // Hash parola
    const hashedPassword = await hashPassword(password);

    // Inserare utilizator nou (cu isAdmin setat implicit la false)
    await db.sql`INSERT INTO users (email, password, "isAdmin") VALUES (${email}, ${hashedPassword}, FALSE)`;

    return {
      message: "Contul a fost creat cu succes",
    };
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Eroare internă a serverului",
    });
  }
});