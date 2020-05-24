function write(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

function read(name) {
  return JSON.parse(localStorage.getItem(name));
}

function remove(name) {
  return localStorage.removeItem(name);
}

export default {
  write,
  read,
  remove
};
