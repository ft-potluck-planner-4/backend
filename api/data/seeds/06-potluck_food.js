exports.seed = async function(knex) {
    await knex('potluck_food').insert([
      {food_id: '1',
      potluck_user_id: '1'},
      {food_id: '2',
      potluck_user_id: '1'},
      {food_id: '8',
      potluck_user_id: '2'},
      {food_id: '9',
      potluck_user_id: '3'},
      {food_id: '13',
      potluck_user_id: '4'},
      {food_id: '3',
      potluck_user_id: '4'},
      {food_id: '13',
      potluck_user_id: '5'},
      {food_id: '4',
      potluck_user_id: '5'},
      {food_id: '5',
      potluck_user_id: '6'},
      {food_id: '6',
      potluck_user_id: '6'},
      {food_id: '12',
      potluck_user_id: '7'},
      {food_id: '11',
      potluck_user_id: '8'},
      {food_id: '10',
      potluck_user_id: '9'},
      {food_id: '7',
      potluck_user_id: '9'},
    ]);
  };
  