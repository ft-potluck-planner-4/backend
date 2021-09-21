exports.seed = async function(knex) {
    await knex('potlucks').insert([
      {potluck_name: 'Thanksgiving at the Ones House',
      location_name: 'Ones House',
      location_address: '1 Ones Street',
      location_city: 'Miami',
      location_state: 'FL',
      location_zip: '33101',
      date: 'November, 25 2021',
      duration: '3 hours',
      organizer: '1'},
      {potluck_name: 'Christmas at the Twos House',
      location_name: 'Twos House',
      location_address: '2 Twos Street',
      location_city: 'New York City',
      location_state: 'NY',
      location_zip: '10011',
      date: 'December, 25 2021',
      duration: '3 hours',
      organizer: '2'}
    ]);
  };
  