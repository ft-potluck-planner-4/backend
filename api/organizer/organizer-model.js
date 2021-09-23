const db = require('../data/db-config')

async function getPotlucks(organizer) {
    const result = await db('potlucks').where('organizer', organizer)
    return result;
}

async function createPotluck(newPotluck) {
    const result = await db('potlucks')
        .returning(['date', 'duration', 'location_name', 
        'location_address', 'location_city', 'location_state', 
        'location_zip', 'organizer', 'potluck_id', 'potluck_name'])
        .insert(newPotluck);
    return result;
}

async function createFoodList(foodListArray, potluck_id) {
    const foodsToInsert = foodListArray.map(footItem => 
        ({food_name: footItem, potluck_id}));

    // const result = await db('potluck_food')
    //     .insert(newPotluck);
    return foodsToInsert;
}

async function updatePotluck(potluck_id, changes) {
    const result = await db('potlucks')
        .where('potluck_id', potluck_id)
        .update(changes, ['date', 'duration', 'location_name', 
        'location_address', 'location_city', 'location_state', 
        'location_zip', 'organizer', 'potluck_id', 'potluck_name']);
    return result;
}


module.exports = { getPotlucks, createPotluck, createFoodList, updatePotluck };