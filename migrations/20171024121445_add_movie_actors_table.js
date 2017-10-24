exports.up = (knex) => {
  return knex.schema.createTable('movie_actors', (table) => {
    table.increments('id')
    table.integer('movie_id')
    table.foreign('movie_id').references('movies.id')
    table.integer('actor_id')
    table.foreign('actor_id').references('actors.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('movie_actors')
}
