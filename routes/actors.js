const router = require('express').Router()
const actorsController = require('../controllers/actors')


router.get('/actors', actorsController.fetchAllActors)
module.exports = router