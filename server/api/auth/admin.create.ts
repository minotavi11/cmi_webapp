import { z } from "zod";

const bodySchema = z.object({
  userId: z.string().uuid(),
  makeAdmin: z.boolean(),
});

export default defineEventHandler(async (event) => {
  const db = useDatabase();
  
  // Verifică dacă utilizatorul curent este admin
  const session = await getUserSession(event);
  if (!session?.user?.isAdmin) {
    throw createError({
      statusCode: 403,
      statusMessage: "Accesul interzis. Necesită drepturi de administrator.",
    });
  }

  const { userId, makeAdmin } = await readValidatedBody(event, bodySchema.parse);

  try {
    // Actualizează câmpul isAdmin pentru utilizatorul specificat
    await db.sql`UPDATE users SET "isAdmin" = ${makeAdmin} WHERE id = ${userId}`;
    
    return {
      message: makeAdmin ? "Utilizatorul a primit drepturi de administrator" : "Drepturile de administrator au fost revocate",
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