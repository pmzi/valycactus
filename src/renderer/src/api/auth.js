import { dispatcher, actions } from "@/services/dispatch";

function login({ username, password }) {
  return dispatcher
    .dispatch(actions.AUTH_LOGIN, { username, password })
    .then(({ data: { token } }) => token);
}

function logout() {
  return dispatcher.dispatch(actions.AUTH_LOGOUT);
}

function fetchUser() {
  return dispatcher.dispatch(actions.AUTH_FETCH_USER).then(({ user }) => user);
}

export default {
  login,
  logout,
  fetchUser
};
