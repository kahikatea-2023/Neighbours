exports.up = async function (knex) {
  await knex.schema.createTable('market_advertisement_offers', (table) => {
    table.increments('id').references('market_advertisement.comment_section')
    table.string('user_auth0_id').references('users.auth0_id')
    table.string('user_name')
    table.string('time')
    table.string('comment')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('market_advertisement_offers')
}
