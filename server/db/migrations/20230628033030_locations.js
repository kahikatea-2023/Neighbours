exports.up = async function (knex) {
  await knex.schema.createTable('locations', (table) => {
    table.increments('id').primary()
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('locations')
}
