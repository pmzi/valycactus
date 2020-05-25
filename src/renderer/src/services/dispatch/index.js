import { driver, actions } from "./driver";

const dispatcher = {
  before: [],
  after: [],
  dispatch(action = "", data = {}) {
    this._doBefore(action, data);
    return driver(action, data)
      .then(response => {
        this._doAfter(action, response);
        return response;
      })
      .catch(err => {
        this._doAfter(data, err);
        throw err;
      });
  },
  registerBefore(fn) {
    this.before.push(fn);
  },
  registerAfter(fn) {
    this.after.push(fn);
  },
  _doBefore(action, data) {
    this.before.forEach(fn => fn(action, data));
  },
  _doAfter(action, data) {
    this.after.forEach(fn => fn(action, data));
  }
};

export { dispatcher, actions };
