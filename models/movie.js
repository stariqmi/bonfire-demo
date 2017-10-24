const R = require('ramda')
const Movie = require('./models').Movie
const Actor = require('./models').Actor

const findMoviesByActor = (id) => {
  return Actor.where({ id })
    .fetch({ withRelated: ['movies', 'movies.actors' ]})
    .then((actor) => {
      return R.filter(movie => movie.added_to_collection, actor.toJSON().movies)
    })
}

const findMoviesByGenre = (genre) => {
  return Movie.where({ genre, added_to_collection: true })
    .fetchAll({ withRelated: ['actors' ]})
    .then((movies) => {
      return movies.toJSON()
    })
}

const findMovieByTitle = (title) => {
  return Movie.where({ title, added_to_collection: true })
      .fetchAll({ withRelated: ['actors' ]})
      .then((movies) => {
        return movies.toJSON()
      })
}

module.exports.fetchAll = () => {
  return Movie.where({}).orderBy('id', 'ASC').fetchAll({ withRelated: ['actors'] })
}

module.exports.addToHomeCollection = (id) => {
  return Movie.forge({ id })
    .save({ added_to_collection: true }, { patch: true })
}

module.exports.removeFromHomeCollection = (id) => {
  return Movie.forge({ id })
    .save({ added_to_collection: false }, { patch: true })
}

module.exports.search = ({ searchBy, query }) => {
  if (searchBy === 'actor') return findMoviesByActor(query)
  else if (searchBy === 'genre') return findMoviesByGenre(query)
  else return findMovieByTitle(query)
}