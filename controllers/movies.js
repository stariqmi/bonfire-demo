const Movie = require('../models/movie')

module.exports.fetchAllMovies = (req, res) => {
  Movie.fetchAll()
    .then(movies => res.send({ movies }))
}

module.exports.addToHomeCollection = (req, res) => {
  const movieId = req.body.id

  Movie.addToHomeCollection(movieId)
    .then(movie => res.send({ movie }))
}

module.exports.removeFromHomeCollection = (req, res) => {
  const movieId = req.body.id

  Movie.removeFromHomeCollection(movieId)
    .then(movie => res.send({ movie })) 
}

module.exports.search = (req, res) => {
  const searchBy = req.query.search_by
  const query = req.query.query

  Movie.search({ searchBy, query })
    .then(movies => res.send({ movies }))
}
