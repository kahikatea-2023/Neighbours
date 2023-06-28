exports.seed = async function(knex) {
  
  //!!!!!!!!!!!!!!!!!!!1currently these are fake users!!!!!!!!!!!!!!!!!!!!!
  await knex('table_name').insert([
    {
      auth0_id: "auth0_1234567890",
      first_name: "John",
      last_name: "Doe",
      name: "John Doe",
      email: "johndoe@example.com",
      location_name: "New York City",
      pronouns: "he/him",
      bio: "Passionate about technology and music."
    },
    {
      auth0_id: "auth0_0987654321",
      first_name: "Jane",
      last_name: "Smith",
      name: "Jane Smith",
      email: "janesmith@example.com",
      location_name: "Los Angeles",
      pronouns: "she/her",
      bio: "Loves photography and traveling."
    },
    {
      auth0_id: "auth0_5678901234",
      first_name: "Alex",
      last_name: "Johnson",
      name: "Alex Johnson",
      email: "alexjohnson@example.com",
      location_name: "Chicago",
      pronouns: "they/them",
      bio: "Enjoys reading, painting, and hiking."
    }
  ]
  );
  //!!!!!!!!!!!!!!!!!!!1currently these are fake users!!!!!!!!!!!!!!!!!!!!!
};
