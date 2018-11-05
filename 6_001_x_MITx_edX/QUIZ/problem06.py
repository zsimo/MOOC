def laceStringsRecur(s1, s2):
    """
    s1 and s2 are strings.

    Returns a new str with elements of s1 and s2 interlaced,
    beginning with s1. If strings are not of same length, 
    then the extra elements should appear at the end.
    """
    def helpLaceStrings(s1, s2, out):
        if s1 == '':
            #PLACE A LINE OF CODE HERE
            #return helpLaceStrings(s1, s2, '')
            # return out + helpLaceStrings('', s2[1:], s2[0])
            return out + s2[len(s1):]
        if s2 == '':
            #PLACE A LINE OF CODE HERE
            # return out + helpLaceStrings(s1[1:], '', s1[0])
            return out + s1[len(s2):]
        else:
            #PLACE A LINE OF CODE HERE
            # print(s1)
            return out + helpLaceStrings(s1[1:], s2[1:], s1[0]+s2[0])
            
    return helpLaceStrings(s1, s2, '')

    
    
print(laceStringsRecur('abcd', 'efghi'))
print("exptected: aebfcgdhi")