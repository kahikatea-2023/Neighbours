exports.up = async function (knex) {
  await knex.schema.createTable('market_advertisement', (table) => {
    table.increments('id').primary()
    table.string('user_auth0_id').references('users.auth0_id')
    table.integer('location_id').references('locations.id')
    table.string('title')
    table.string('type')
    table.string('image')
    table.string('date')
    table.string('time')
    table.string('venue')
    table.integer('price')
    table.boolean('sale_completion')
    table.string('attendees')
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('market_advertisment')
}
