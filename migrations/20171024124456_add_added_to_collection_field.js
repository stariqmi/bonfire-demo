exports.up = (knex) => {
  return knex.schema.alterTable('movies', (table) => {
    table.boolean('added_to_collection')
  })
}

exports.down = (knex) => {
  return knex.schema.alterTable('movies', (table) => {
    table.dropColumn('added_to_collection')
  })
}
