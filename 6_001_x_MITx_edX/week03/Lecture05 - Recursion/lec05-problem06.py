def lenIter(aStr):
    '''
    aStr: a string
    
    returns: int, the length of aStr
    '''
    # Your code here
    def toChars(s):
        import string
        s = string.lower(s)
        ans = ''
        for c in s:
            if c in string.lowercase:
                ans = ans + c
        return ans
    
    
    aStr = toChars(aStr)
    
    count = 0
    for c in aStr:
        count +=1
    
    return count
    
    
test = "simonemioalkaskAAA"    
print(lenIter(test))
print("expected: "+str(len(test)))    
        