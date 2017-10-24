const Actor = require('./models').Actor

module.exports.fetchAll = () => {
  return Actor.where({}).orderBy('id', 'ASC').fetchAll()
}
