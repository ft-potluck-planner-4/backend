const db = require('../data/db-config')

async function getPotlucks() {
    /* SQL QUERY TO MODEL FUNCTION OFF OF:
        TBD
    */
    const result = await db('');

    return result;
}

async function createPotluck(newPotluck) {
    /* SQL QUERY TO MODEL FUNCTION OFF OF:
        TBD
    */
    const result = await db('potlucks').insert(newPotluck);

    return result;
}


module.exports = { getPotlucks, createPotluck };