exports.seed = async function(knex) {

  await knex('activities_post').insert([
    {
      id: 1,
      user_auth0_id: "auth0_2345678901",
      user_name: "Sarah Johnson",
      time: "2023-07-16 09:30:00",
      comment: "I'm excited to join the yoga workshop!"
    },
    {
      id: 2,
      user_auth0_id: "auth0_3456789012",
      user_name: "Michael Smith",
      time: "2023-07-16 10:15:00",
      comment: "What should I bring for the workshop?"
    },
    {
      id: 3,
      user_auth0_id: "auth0_4567890123",
      user_name: "Emily Brown",
      time: "2023-08-05 19:45:00",
      comment: "I've always wanted to learn painting. Count me in!"
    },
    {
      id: 4,
      user_auth0_id: "auth0_5678901234",
      user_name: "Alex Johnson",
      time: "2023-09-10 20:30:00",
      comment: "Looking forward to discussing some great books!"
    },
    {
      id: 5,
      user_auth0_id: "auth0_6789012345",
      user_name: "Jessica Davis",
      time: "2023-10-20 21:10:00",
      comment: "Can I bring my guitar to the jam session?"
    }
  ]
  );
};
