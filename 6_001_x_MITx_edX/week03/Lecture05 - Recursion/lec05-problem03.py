def recurPowerNew(base, exp):
    '''
    base: int or float.
    exp: int >= 0

    returns: int or float; base^exp
    '''
    if isinstance(base, float):
        result = 1.0
    else:   
        result = 1


    if exp == 0:
        return result   
    elif exp <= 1:
        return result*base
    else:
        if exp%2==0: # pari
            # return (base**2)**(exp/2)      
            # return recurPowerNew((recurPowerNew(base, 2), exp/2))
            return recurPowerNew(base*base, exp/2)
        else: #dispari
            return base * recurPowerNew(base, exp-1)
        
        
        
    
    
# b = 2
# e = 5
# b = -8.96
# e = 0
# b = 1.73
# e = 8
b = -4.5
e = 5

    
print(recurPowerNew(b, e))
print("expected: "+ str(b**e))    