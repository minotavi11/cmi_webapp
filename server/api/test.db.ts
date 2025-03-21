export default defineEventHandler(async () => {
    try {
      const db = useDatabase();
      return { success: true, message: "Nitro database is working!" };
    } catch (error) {
      return { success: false, error: error.message };
    }
  });
  