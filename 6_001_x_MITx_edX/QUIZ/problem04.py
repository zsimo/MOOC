def my_square(number, pot):
    for i in range(pot-1):
        number += number

    return number

def myLog(x, b):
    '''
    x: a positive integer
    b: a positive integer; b >= 2

    returns: log_b(x), or, the logarithm of x relative to a base b.
    '''
    # Your Code Here
    guess = 1
    
    # while my_square(b, guess) < x:
    while True:
        # print(guess)
        if b**guess >= x:
            # return guess
            if b**guess == x:
                return guess
            else:
                return guess -1
        else:
            guess += 1
            
        # return guess
    
    # return guess
    

  
import math                                             
    
print(myLog(16, 2))
print("expected: 4")


print(myLog(15, 3))
print("expected: 2")

#print(my_square(2, 1))    
    