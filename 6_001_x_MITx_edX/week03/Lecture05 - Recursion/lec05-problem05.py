def gcdRecur(a, b):
    '''
    a, b: positive integers
    
    returns: a positive integer, the greatest common divisor of a & b.
    '''
    # Your code here
    if b==0:
        return a
    else:
        return gcdRecur(b, a%b)
    
    
a=20
b=84   
correct = 4
a=2
b=12 
correct = 2
a=17
b=12 
correct = 1



print("expected: " +str(correct))    
print(gcdRecur(b, a))    