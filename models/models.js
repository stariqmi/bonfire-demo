const knex = require('knex');
const bookshelf = require('bookshelf');

const knexConn = knex({
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
});

const DB = bookshelf(knexConn);
DB.plugin('registry')

const Movie = DB.model('Movie', {
  tableName: 'movies',
  actors() {
    return this.belongsToMany('Actor').through('MovieActor')
  },
})

const Actor = DB.model('Actor', {
  tableName: 'actors',
  movies() {
    return this.belongsToMany('Movie').through('MovieActor')
  },
})

const MovieActor = DB.model('MovieActor', {
  tableName: 'movie_actors',
  movies() {
    return this.belongsTo('Movie')
  },
  actors() {
    return this.belongsTo('Actor')
  }
})

module.exports = { Movie, Actor }