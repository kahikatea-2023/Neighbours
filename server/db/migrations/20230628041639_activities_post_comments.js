exports.up = async function (knex) {
  await knex.schema.createTable('activities_post_comments', (table) => {
    table.increments('id')
    table.integer('activity_post_id').references('activities_post.id')
    table.string('user_auth0_id').references('users.auth0_id')
    table.string('time')
    table.string('comment')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('activities_post_comments')
}
