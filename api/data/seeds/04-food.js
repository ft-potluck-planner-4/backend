exports.seed = async function(knex) {
    await knex('food').insert([
      {food_name: 'mashed potatoes'},
      {food_name: 'broccoli casserole'},
      {food_name: 'sweet potato casserole'},
      {food_name: 'mojitos'},
      {food_name: 'macaroni salad'},
      {food_name: 'grilled cheese'},
      {food_name: 'brownies'},
      {food_name: 'apple pie'},
      {food_name: 'sangria'},
      {food_name: 'assorted grilled veggies'},
      {food_name: 'chicken skewers'},
      {food_name: 'mini hot dogs'},
      {food_name: 'snickerdoodle cookies'}
    ]);
  };
  