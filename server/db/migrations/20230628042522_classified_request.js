exports.up = async function (knex) {
  await knex.schema.createTable('classified_request', (table) => {
    table.increments('id').primary()
    table.string('user_auth0_id').references('users.auth0_id')
    table.integer('location_id').references('locations.id')
    table.string('title')
    table.string('type')
    table.string('image')
    table.string('date')
    table.string('time')
    table.string('venue')
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('classified_request')
}
