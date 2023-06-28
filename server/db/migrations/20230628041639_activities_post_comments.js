exports.up = async function (knex) {
  await knex.schema.createTable('activities_post_comments', (table) => {
    table.increments('id').references('activities_post.comment_section')
    table.string('user_auth0_id').references('users.auth0_id')
    table.string('user_name')
    table.string('time')
    table.string('comment')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('activities_post_comments')
}
