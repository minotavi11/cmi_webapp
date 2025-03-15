import { User } from "@iconoir/vue";
import { z } from "zod";

const bodySchema = z.object({
  userId: z.string().uuid(),
  makeAdmin: z.boolean(),
});

export default defineEventHandler(async (event) => {
  const db = useDatabase();
  const session = await getUserSession(event);

  if (!session?.user?.isAdmin) {
    throw createError({ statusCode: 403, statusMessage: "Acces interzis" });
  }

  const { userId, makeAdmin } = await readValidatedBody(event, bodySchema.parse);

  try {
    await db.sql`UPDATE users SET "isAdmin" = ${makeAdmin} WHERE id = ${userId}`;
    
    return { message: makeAdmin ? "Utilizator promovat la admin" : "Drepturi de admin eliminate" };
  } catch (error) {
    console.error(error);
    throw createError({ statusCode: 500, statusMessage: "Eroare internă" });
  }
});
