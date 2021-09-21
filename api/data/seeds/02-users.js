exports.seed = async function(knex) {
    await knex('users').insert([
      {email: 'testU1@test.com',
      first_name: 'firstU1',
      last_name: 'lastU1',
      password: 'testP1'},
      {email: 'testU2@test.com',
      first_name: 'firstU2',
      last_name: 'lastU2',
      password: 'testP2'},
      {email: 'testU3@test.com',
      first_name: 'firstU3',
      last_name: 'lastU3',
      password: 'testP3'},
      {email: 'testU4@test.com',
      first_name: 'firstU4',
      last_name: 'lastU4',
      password: 'testP4'},
      {email: 'testU5@test.com',
      first_name: 'firstU5',
      last_name: 'lastU5',
      password: 'testP5'},
      {email: 'testU6@test.com',
      first_name: 'firstU6',
      last_name: 'lastU6',
      password: 'testP6'}
    ]);
  };
  