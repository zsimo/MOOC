describe "getProblems", ->
# "lib/gets-problem" as Collaborator
# with 3 sub collaborators
  Given -> @subject = global.requireSubject "lib/gets-problem",
    "./generates-problem" : @generatesProblem = jasmine.createSpy("generatesProblem")
    "./saves-problem" : @savesProblem = jasmine.createSpy("savesProblem")
    "./presents-problem" : @presentsProblem = jasmine.createSpy("presentsProblem")

#  test = jasmine.createSpy("test")
#  console.log("******")
#  console.log(test.andReturn("########"))
#  console.log("******")

  Given -> @generatesProblem.andReturn("a problem")
  Given -> @savesProblem.when("a problem").thenReturn("a saved problem")
  Given -> @presentsProblem.when("a saved problem").thenReturn("json of a problem")


  When -> @result = @subject()
  Then -> @result == "json of a problem"