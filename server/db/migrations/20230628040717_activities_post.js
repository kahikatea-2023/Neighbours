exports.up = async function (knex) {
  await knex.schema.createTable('activities_post', (table) => {
    table.increments('id').primary()
    table.string('auth0_id').references('users.auth0_id')
    table.string('created_by')
    table.integer('location_id').references('locations.id')
    table.string('title')
    table.string('type')
    table.string('image')
    table.string('date')
    table.string('time')
    table.string('venue')
    table.string('attendees')
    table.string('description')
    table.integer('comment_section').primary()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('activities_post')
}
