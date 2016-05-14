describe "RomanNumeralThing", ->
  Given -> @subject = new ConvertsNumerals()

  #  more verbose
  #  describe "it converts I to 1", ->
  #    When -> @result = @subject.fromRoman("I")
  #    Then -> @result == 1

  # more concise
  Then -> @subject.fromRoman("I") == 1
  Then -> @subject.fromRoman("II") == 2
  Then -> @subject.fromRoman("III") == 3
  Then -> @subject.fromRoman("IV") == 4