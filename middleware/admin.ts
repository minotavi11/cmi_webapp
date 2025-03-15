// middleware/admin.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
    const { user, status } = useUserSession();
    
    // Verifică dacă utilizatorul este autentificat
    if (status.value !== 'authenticated') {
      return navigateTo('/login');
    }
    
    // Verifică dacă utilizatorul are drepturi de admin
    if (!user.value?.isAdmin) {
      // Redirecționează utilizatorii non-admin
      return navigateTo('/dashboard');
    }
  });