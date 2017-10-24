exports.up = (knex) => {
  return knex.schema.createTable('actors', (table) => {
    table.increments('id')
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('actors')
}
