def lace(s1, s2):
    counter = 0
    result = ""
    for char in s1:
        result += s1[counter]
        result += s2[counter]
        counter += 1
    return result

def laceStrings(s1, s2):
    """
    s1 and s2 are strings.

    Returns a new str with elements of s1 and s2 interlaced,
    beginning with s1. If strings are not of same length, 
    then the extra elements should appear at the end.
    """
    # Your Code Here
    # result = ""
    # if len(s1) > len(s1):
        # lon = s1
        # min = s2
    # elif len(s2) > len(s1):
        # lon = s2
        # min = s1
    # else:
        # return lace(s1, s2)
        
    # result = lace(min, lon)
    
    # lon = lon[len(min):]
    
    # for char in lon:
        # result += char
    # return result
    
    counter = 0
    result = ""
    for char in s1:
        if counter < len(s1) and counter < len(s2):    
            result += s1[counter]
            result += s2[counter]
            
        counter += 1
    
    if len(s1) == len(s2):
        return result
    else:
        if len(s1) > len(s2):
            s1 = s1[len(s2):]
            for char in s1:
                result += char
        else:
            s2 = s2[len(s1):]
            for char in s2:
                result += char
        
        return result
            
    
print(laceStrings('abcd', 'efghi'))
print("exptected: aebfcgdhi")