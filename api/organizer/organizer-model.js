const db = require("../data/db-config");

async function getPotlucks() {
  return db("potlucks");
}

async function createPotluck(newPotluck) {
  const result = await db("potlucks").insert(newPotluck);
  return result;
}

async function updatePotluck(args) {
  return db("");
}

async function joinPotluck(user_id, potluck_id) {
  console.log("hereagain");
  const result = await db("potluck_users")
    .insert({
      user_id: user_id,
      potluck_id: potluck_id,
    })
    .returning(["user_id", "potluck_id"]);
  console.log(result);

  return result;
}

module.exports = { getPotlucks, createPotluck, updatePotluck, joinPotluck };
