exports.seed = async function (knex) {
  await knex('activities_post_comments').insert([
    {
      id: 1,
      activity_post_id: 1,
      user_auth0_id: 'auth0_2',
      time: '2023-07-16 09:30:00',
      comment: "I'm excited to join the yoga workshop!",
    },
    {
      id: 2,
      activity_post_id: 2,
      user_auth0_id: 'auth0_1',
      time: '2023-07-16 10:15:00',
      comment: 'What should I bring for the workshop?',
    },
    {
      id: 3,
      activity_post_id: 3,
      user_auth0_id: 'auth0_1',
      time: '2023-08-05 19:45:00',
      comment: "I've always wanted to learn painting. Count me in!",
    },
    {
      id: 4,
      activity_post_id: 4,
      user_auth0_id: 'auth0_3',
      time: '2023-09-10 20:30:00',
      comment: 'Looking forward to discussing some great books!',
    },
    {
      id: 5,
      activity_post_id: 5,
      user_auth0_id: 'auth0_3',
      time: '2023-10-20 21:10:00',
      comment: 'Can I bring my guitar to the jam session?',
    },
  ])
}
