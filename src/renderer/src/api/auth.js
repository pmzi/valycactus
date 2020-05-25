import { dispatch, actions } from "@/services/dispatch";

function login({ username, password }) {
  return dispatch(actions.AUTH_LOGIN, { username, password }).then(
    ({ data: { token } }) => token
  );
}

function logout() {
  return dispatch(actions.AUTH_LOGOUT);
}

function fetchUser() {
  return dispatch(actions.AUTH_FETCH_USER).then(({ user }) => user);
}

export default {
  login,
  logout,
  fetchUser
};
