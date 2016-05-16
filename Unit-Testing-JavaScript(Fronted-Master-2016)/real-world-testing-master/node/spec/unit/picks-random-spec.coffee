_ = require("lodash")

describe "picksRandom", ->
  Given -> @subject = requireSubject 'lib/picks-random'

  Then -> @subject([]) == undefined
  Then -> @subject(["foo"]) == "foo"
