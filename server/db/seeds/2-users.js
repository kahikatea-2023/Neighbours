exports.seed = async function (knex) {
  //!!!!!!!!!!!!!!!!!!!1currently these are fake users!!!!!!!!!!!!!!!!!!!!!
  await knex('users').insert([
    {
      auth0_id: 'auth0_1',
      first_name: 'John',
      last_name: 'Doe',
      name: 'John Doe',
      email: 'johndoe@example.com',
      location_id: 4,
      pronouns: 'he/him',
      bio: 'Passionate about technology and music.',
    },
    {
      auth0_id: 'auth0_2',
      first_name: 'Jane',
      last_name: 'Smith',
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      location_id: 4,
      pronouns: 'she/her',
      bio: 'Loves photography and traveling.',
    },
    {
      auth0_id: 'auth0_3',
      first_name: 'Alex',
      last_name: 'Johnson',
      name: 'Alex Johnson',
      email: 'alexjohnson@example.com',
      location_id: 4,
      pronouns: 'they/them',
      bio: 'Enjoys reading, painting, and hiking.',
    },
    {
      auth0_id: 'auth0|649d005f1506170f44b8c113',
      first_name: 'test',
      last_name: 'person',
      name: 'test person',
      email: 'test_member@example.com',
      location_id: 4,
      pronouns: 'they/them',
      bio: 'Enjoys testing.',
    },
    {
      auth0_id: 'auth0|123',
      first_name: 'Clark',
      last_name: 'Kent',
      name: 'Superman',
      email: 'member@example.com',
      location_id: 4,
      pronouns: 'he/him',
      bio: 'Passionate about punching people.',
    },
  ])
  //!!!!!!!!!!!!!!!!!!!1currently these are fake users!!!!!!!!!!!!!!!!!!!!!
}
