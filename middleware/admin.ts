export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("Middleware is running!");

  const { user } = useUserSession();
  console.log("User session:", user.value);

  if (!user.value?.isAdmin) {
    return navigateTo("/");
  }
});
