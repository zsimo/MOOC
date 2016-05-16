picksRandom = require "./picks-random"

module.exports = ->
  operator: picksRandom(["+", "-", "*", "/"])
  operands: picksRandom([1..100])