exports.seed = async function (knex) {
  await knex('classified_request_answers').del()
  await knex('classified_request').del()

  await knex('market_advertisement_offers').del()
  await knex('market_advertisement').del()

  await knex('activities_post_comments').del()
  await knex('activities_post').del()

  await knex('locations').del()
  await knex('users').del()
}
