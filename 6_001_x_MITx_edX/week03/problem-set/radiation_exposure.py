# first submission:
# anni = range(start, stop)
    # out = map(f, anni)
    
    # return sum(out)    


# def f(x):
    # import math
    # return 10*math.e**(math.log(0.5)/5.27 * x)
    
def f(x):
	import math
	return 10*math.e**(math.log(0.5)/5.27 * x)    

def area(base, altezza):
    return base*altezza

# out = []
    
global out
out = 0
def radiationExposure(start, stop, step):
    '''
    Computes and returns the amount of radiation exposed
    to between the start and stop times. Calls the 
    function f (defined for you in the grading script)
    to obtain the value of the function at any point.
 
    start: integer, the time at which exposure begins
    stop: integer, the time at which exposure ends
    step: float, the width of each rectangle. You can assume that
      the step size will always partition the space evenly.

    returns: float, the amount of radiation exposed to 
      between start and stop times.
    '''
    # FILL IN YOUR CODE HERE...
    # base = stop-(stop-step)
    # print(base)
    # altezza = f(base)
    global out
    
    if stop == start:
        # return sum(out)
        # print("1")
        return out
    else:
        temp = (step)*f(start)
        # print(temp)
        # out.append(temp)
        #print("2")
        return temp + radiationExposure(start+step, stop, step)
    
   
# print("expected: 39.10318784326239")
# print(radiationExposure(0, 5, 1))

# print("expected: 22.94241041057671")
# print(radiationExposure(5, 11, 1))

# print("expected: 62.0455982538")
# print(radiationExposure(0, 11, 1))

# print("expected: 0.434612356115")
# print(radiationExposure(40, 100, 1.5))

# print("expected: 6.848645835538622")
# print(radiationExposure(12, 16, 1))

print("expected: 559.2259707824549")
print(radiationExposure(0, 3, 0.1))
