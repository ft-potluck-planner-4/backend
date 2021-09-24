const db = require("../data/db-config");

function getAllUsers() {
  return db("users");
}

const findByEmail = (email) => {
  return db("users").where("users.email", email).first();
};

function findById(id) {
  return db("users").where("users.user_id", id).first();
}

function addNewUser(newUser) {
  return db("users")
    .returning(["user_id", "email", "first_name", "last_name"])
    .insert(newUser);
}

module.exports = {
  getAllUsers,
  findByEmail,
  findById,
  addNewUser,
};
