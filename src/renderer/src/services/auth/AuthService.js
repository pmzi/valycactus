import {
  setToken as defaultSetToken,
  getToken as defaultGetToken,
  deleteToken as defaultDeleteToken
} from "./tokenHandler";

export default class Auth {
  user = null;
  isLoggedIn = false;
  isGettingUserInfo = false;
  constructor({
    login,
    logout,
    fetchUser,
    setToken = defaultSetToken,
    getToken = defaultGetToken,
    deleteToken = defaultDeleteToken
  }) {
    if (login) this.login = login;
    if (logout) this.logout = logout;
    if (fetchUser) this.fetchUser = fetchUser;

    if (setToken) this.setToken = setToken;
    if (getToken) this.getToken = getToken;
    if (deleteToken) this.deleteToken = deleteToken;

    this._wrapFetchUser();
    this._wrapLogout();
    this._wrapLogin();

    this.isLoggedIn = Boolean(getToken());
    if (this.isLoggedIn) this.fetchUser();
  }

  _wrapLogin() {
    const login = this.login;
    this.login = (...args) => {
      return login.call(this, ...args).then(token => {
        this.isLoggedIn = true;
        this.setToken(token);
        return this.fetchUser();
      });
    };
  }

  _wrapLogout() {
    const logout = this.logout;
    this.logout = (...args) => {
      return logout.call(this, ...args).then(() => {
        this.wipUser();
      });
    };
  }

  wipUser() {
    this.deleteToken();
    this.isLoggedIn = false;
    this.user = null;
  }

  _wrapFetchUser() {
    const fetchUser = this.fetchUser;
    this.isGettingUserInfo = true;
    this.fetchUser = (...args) => {
      return fetchUser
        .call(this, ...args)
        .then(userData => {
          this.user = userData;
        })
        .catch(() => {
          this.wipUser();
        })
        .finally(() => {
          this.isGettingUserInfo = false;
        });
    };
  }
}
