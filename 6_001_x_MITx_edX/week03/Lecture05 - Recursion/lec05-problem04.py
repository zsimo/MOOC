def gcdIter(a, b):
    '''
    a, b: positive integers
    
    returns: a positive integer, the greatest common divisor of a & b.
    '''
    # inizio a provare con il minore dei 2 input
    other = 0
    if a < b:
        guess = a
        other = b
    else:
        guess = b
        other = a
    
    # ITERATIVE implementation
    while True:
        if a%guess==0 and b%guess==0:
            break
        else:
            guess -= 1
    
    return guess

    # RECURSIVE implementation
    # if a%guess==0 and b%guess==0:
        # return guess
    # else:
        # return gcdIter(guess-1, other)
    
    


a=2
b=12 
correct = 2
a=20
b=84   
correct = 4

print("expected: " +str(correct))    
print(gcdIter(b, a))    
    