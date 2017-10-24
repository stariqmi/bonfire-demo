module.exports = {
  development: {
      client: 'postgresql',
      connection: {
        database: 'bonfire',
        user: 'diligen',
        password: 'diligen#123',
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
      },
    },

    production: {
      client: 'postgresql',
      connection: {
          database: 'bonfire',
          user: 'diligen',
          password: 'diligen#123',
      },
      pool: {
          min: 2,
          max: 10,
      },
      migrations: {
          tableName: 'knex_migrations',
      },
    },
};