_ = require("lodash")

describe "savesProblem", ->
    Given -> @subject = requireSubject 'lib/saves-problem'
    # this is a pure function: no collaborator, no fakes.

    Given -> @problem = fake : 'problem stuff'
    When -> @result = @subject(@problem)
    Then -> _(@result.id).isNumber()
    And -> @result.fake = 'problem stuff'



    describe '.retrieve', ->
        When -> @retrieved = @subject.retrieve(@result.id)
        Then -> expect(@result).toEqual(@retrieved)

