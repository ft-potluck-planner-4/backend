const db = require('../data/db-config')

async function getAllPotlucks() {
    /* SQL QUERY TO MODEL FUNCTION OFF OF:
        TBD
    */
    const result = await db('potlucks');

    return result;
}


module.exports = { getAllPotlucks };