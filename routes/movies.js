const router = require('express').Router()
const moviesController = require('../controllers/movies')


router.get('/movies', moviesController.fetchAllMovies)
router.post('/add_to_collection', moviesController.addToHomeCollection)
router.post('/remove_from_collection', moviesController.removeFromHomeCollection)
router.get('/search', moviesController.search)

module.exports = router