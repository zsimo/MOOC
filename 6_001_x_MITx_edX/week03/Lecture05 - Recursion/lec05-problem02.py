def recurPower(base, exp):
    '''
    base: int or float.
    exp: int >= 0
 
    returns: int or float, base^exp
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
        return base * recurPower(base, exp-1)
	
    
	
b = 2
e = 5
# b = -8.96
# e = 0
    
print(recurPower(b, e))
print("expected: "+ str(b**e))