import authService from "@/services/auth";

export default function authGuard({ meta: { auth = true } }, from, next) {
  if ((auth && authService.isLoggedIn) || !auth) {
    next();
    return;
  }
  next({
    name: "login"
  });
}
