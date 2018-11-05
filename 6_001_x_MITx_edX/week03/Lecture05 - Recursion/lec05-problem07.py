def toChars(s):
    import string
    s = string.lower(s)
    ans = ''
    for c in s:
        if c in string.lowercase:
            ans = ans + c
    return ans


def lenRecur(aStr):
    '''
    aStr: a string
    
    returns: int, the length of aStr
    '''
    # Your code here   
    
    aStr = toChars(aStr)
    
    if aStr == '':
        return 0
    else:
        return 1 + lenRecur(aStr[1:])
    

    
test = "simonesssss"    
print(lenRecur(test))
print("expected: "+str(len(test))) 