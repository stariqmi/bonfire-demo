exports.up = (knex) => {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id')
    table.string('title').notNullable()
    table.string('genre').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('movies')
}
