var aggregatePaginate = require('./lib/mongoose-aggregate-paginate-extend')

module.exports = function (schema) {
  schema.statics.aggregatePaginate = aggregatePaginate
}
