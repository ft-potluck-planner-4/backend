<<<<<<< HEAD
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
=======
const db = require('../data/db-config');

function getAllUsers() {
  return db("users");
}

const findByEmail = (email) => {
  return db('users')
    .where('users.email', email)
    .first();
};

function findById(id) {
  return db('users')
      .where('users.user_id', id)
      .first();
}

function addNewUser(newUser) {
  return db("users")
    .returning(['user_id', 'email', 'first_name', 'last_name'])
    .insert(newUser);
}

module.exports = {
  getAllUsers,
  findByEmail,
  findById,
  addNewUser,
>>>>>>> c4c08275de84f98b7e5240d4922734a7210a4464
};
