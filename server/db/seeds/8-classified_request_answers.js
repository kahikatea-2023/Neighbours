exports.seed = async function (knex) {
  await knex('classified_request_answers').insert([
    // Answers for Request 1
    {
      id: 1,
      classified_request_id: 1,
      user_auth0_id: 'auth0_2',
      time: '2023-07-16 09:30:00',
      comment:
        'I can help you with that! I have experience dealing with pests.',
    },
    {
      id: 2,
      classified_request_id: 1,
      user_auth0_id: 'auth0_3',
      time: '2023-07-16 10:15:00',
      comment:
        'I recommend using a cockroach bait. It worked for me in the past.',
    },

    // Answers for Request 2
    {
      id: 3,
      classified_request_id: 2,
      user_auth0_id: 'auth0_1',
      time: '2023-08-05 19:45:00',
      comment:
        "I enjoy gardening and would be happy to assist you. Let's discuss the details.",
    },

    // Answers for Request 3
    {
      id: 4,
      classified_request_id: 3,
      user_auth0_id: 'auth0_2',
      time: '2023-09-10 20:30:00',
      comment:
        "I'm good at math and can help you understand algebra and calculus concepts. Let's schedule a session.",
    },
  ])
}
