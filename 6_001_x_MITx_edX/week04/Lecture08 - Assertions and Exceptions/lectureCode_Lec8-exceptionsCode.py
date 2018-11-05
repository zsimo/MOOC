# EXCEPTION:
# - TypeError
# - NameError
# - IndexError
# - SyntaxError
# - AttributeError # refer to class error
# - ValueError
# - IOError
# - ZeroDivisionError
# +
# AssertionError (defensive programming, raise an AssertionError)
# assert 2==3

try:
    print("code to run")
    f = open('grades.txt')
except IOError, e:
    print("can't open the file" + str(e))
    # close the file
    #sys.exit(0)
except ArithmeticError, e:
   raise ValueError("bug in " + str(e))
except:
    # default exception
    print("cosa fare in caso di errore")
    raise Exception("descriptive string")
else:
    print("this code run if there is no error")
finally:
    print("code that always run, at the end")


def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError, e:
        print "division by zero! " + str(e)
    else:
        print("no error in try block!")
        print "result is", result
    finally:
        print "executing finally clause"

def divideNew(x, y):
    try:
        result = x / y
    except ZeroDivisionError, e:
        print "division by zero! " + str(e)
    except TypeError:
        divideNew(int(x), int(y))
    else:
        print "result is", result
    finally:
        print "executing finally clause"
