exports.seed = async function (knex) {
  await knex('market_advertisement_offers').insert([
    // Comments for Market Advert 1
    {
      id: 1,
      market_advertisement_id: 1,
      user_auth0_id: 'auth0_3',
      time: '2023-07-16 09:30:00',
      comment: "Your organic vegetables look amazing! Can't wait to try them!",
    },
    {
      id: 2,
      market_advertisement_id: 1,
      user_auth0_id: 'auth0_1',
      time: '2023-07-16 10:15:00',
      comment: 'What other produce do you have available?',
    },

    // Comments for Market Advert 2
    {
      id: 3,
      market_advertisement_id: 2,
      user_auth0_id: 'auth0_3',
      time: '2023-08-05 19:45:00',
      comment:
        'Your jewelry pieces are stunning! Do you have any discounts for multiple purchases?',
    },

    // Comments for Market Advert 3
    {
      id: 4,
      market_advertisement_id: 3,
      user_auth0_id: 'auth0_2',
      time: '2023-09-10 20:30:00',
      comment: "I'm a big fan of vinyl records! Are they in good condition?",
    },
  ])
}
