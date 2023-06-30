exports.up = async function (knex) {
  await knex.schema.createTable('market_advertisement_offers', (table) => {
    table.increments('id')
    table
      .integer('market_advertisement_id')
      .references('market_advertisement.id')
    table.string('user_auth0_id').references('users.auth0_id')
    table.string('time')
    table.string('comment')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('market_advertisement_offers')
}
