exports.seed = async function(knex) {
    await knex('potluck_users').insert([
      {potluck_id: '1',
      user_id: '1'},
      {potluck_id: '1',
      user_id: '2'},
      {potluck_id: '1',
      user_id: '5'},
      {potluck_id: '1',
      user_id: '6'},
      {potluck_id: '2',
      user_id: '2'},
      {potluck_id: '2',
      user_id: '3'},
      {potluck_id: '2',
      user_id: '4'},
      {potluck_id: '2',
      user_id: '5'},
      {potluck_id: '2',
      user_id: '6'}
    ]);
  };
  