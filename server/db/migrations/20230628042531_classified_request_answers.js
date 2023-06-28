exports.up = async function (knex) {
  await knex.schema.createTable('classified_request_answers', (table) => {
    table.increments('id')
    table
      .interger('comment_section_id')
      .references('classified_request.comment_section')
    table.string('user_auth0_id').references('users.auth0_id')
    table.string('user_name')
    table.string('time')
    table.string('comment')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('classified_request_answer')
}
