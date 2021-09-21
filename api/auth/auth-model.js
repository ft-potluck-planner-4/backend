const db = require("../data/db-config");

const getByUsername = (username) => {
  return db("users").where("username", "=", username).first();
};

function add(user) {
  return db("users").returning(["id", "username", "password"]).insert(user);
}

module.exports = {
  getByUsername,
  add,
};
