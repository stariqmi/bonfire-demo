const Actor = require('../models/actor')

module.exports.fetchAllActors = (req, res) => {
  Actor.fetchAll()
    .then(actors => res.send({ actors }))
}