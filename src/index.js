import uniqueRandomArray from 'unique-random-array'
const breakingBadNames = require('./breaking-bad-names.json')

const mainExport = {
  all: breakingBadNames,
  random: uniqueRandomArray(breakingBadNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
