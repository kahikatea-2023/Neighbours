exports.up = async function (knex) {
  await knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('name')
    table.string('email')
    table.string('location_name').references('locations.name')
    table.string('pronouns')
    table.string('bio')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
