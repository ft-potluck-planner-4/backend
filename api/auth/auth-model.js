const db = require("../data/db-config");

function find() {
  return db("users");
}

const getByUsername = (username) => {
  return db("users").where("email", "=", username).first();
};

function add(user) {
  return db("users").returning(["id", "username", "password"]).insert(user);
}

module.exports = {
  find,
  getByUsername,
  add,
};
