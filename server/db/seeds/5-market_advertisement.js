exports.seed = async function (knex) {
  await knex('market_advertisement').insert([
    {
      id: 1,
      user_auth0_id: 'auth0_1',
      location_id: 4,
      title: 'Fresh Organic Vegetables',
      venue: 'Farmers Market',
      price: 10,
      sale_completion: false,
      description:
        'I have a variety of freshly harvested organic vegetables available for sale. Perfect for healthy meals!',
    },
    {
      id: 2,
      user_auth0_id: 'auth0_2',
      location_id: 4,
      title: 'Handcrafted Jewelry',
      venue: 'Craft Fair',
      price: 50,
      sale_completion: false,
      description:
        'Discover unique handcrafted jewelry pieces made with love and attention to detail. Perfect for special occasions!',
    },
    {
      id: 3,
      user_auth0_id: 'auth0_3',
      location_id: 4,
      title: 'Vintage Vinyl Records',
      venue: 'Record Store',
      price: 20,
      sale_completion: false,
      description:
        "I'm selling a collection of rare and classic vinyl records. Perfect for music enthusiasts and collectors!",
    },
  ])
}
