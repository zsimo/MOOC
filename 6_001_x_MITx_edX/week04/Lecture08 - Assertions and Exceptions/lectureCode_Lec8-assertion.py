# AssertionError (defensive programming, raise an AssertionError)
# un moodo per fermare l'esecuzione se certe condizioni non vengono soddisfatte
    
# simple assertion + custom error message
#assert 2==3, "my custom AssertionError message!!!"


# handle the assertion error
try:
    assert 2==3, "my custom AssertionError message!!!"
except AssertionError, e:
    print("my assertionerror: " + str(e))