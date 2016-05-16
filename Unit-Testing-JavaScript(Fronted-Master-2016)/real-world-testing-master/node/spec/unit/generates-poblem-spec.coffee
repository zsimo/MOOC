describe "generateProblems", ->
# "lib/gets-problem" as Collaborator
# with 3 sub collaborators
  Given -> @subject = global.requireSubject "lib/generates-problem",
    "./picks-random" : @picksRandom = jasmine.createSpy("picksRandom")

  Given -> @picksRandom.when(["+", "-", "*", "/"]).thenReturn("+")
  Given -> @picksRandom.when([0..100]).thenReturn(5)
  When -> @result = @subject()
  Then -> @result.operator == "+"
  Then -> @result.operands.left == 5
