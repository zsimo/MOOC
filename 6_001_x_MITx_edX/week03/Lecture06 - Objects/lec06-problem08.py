def applyEachTo(L, x):
    '''
    apply every function in the list L to the value x
    and return an array with all the results
    '''
    result = []
    for i in range(len(L)):
        result.append(L[i](x))
    return result
    

# the same function with a my better implementation! (more clear)
def myApplyEachTo(L, x):
    '''
    apply every function in the list L to the value x
    and return an array with all the results
    '''
    result = []
    for fun in L:
        result.append(fun(x))
    return result    


    
def square(a):
    return a*a

def halve(a):
    return a/2

def inc(a):
    return a+1


print(applyEachTo([inc, square, halve, abs], -3))
print(applyEachTo([inc, square, halve, abs], 3.0))
print(applyEachTo([inc, max, int], -3))

# my test
# print(myApplyEachTo([inc, square, halve, abs], -3))
# print(myApplyEachTo([inc, square, halve, abs], 3.0))




