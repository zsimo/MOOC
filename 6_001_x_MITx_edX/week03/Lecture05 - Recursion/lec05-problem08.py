import string
        
def isIn(char, aStr):
    '''
    char: a single character
    aStr: an alphabetized string
    
    returns: True if char is in aStr; False otherwise
    '''
    
    if aStr == "":
        return False
    elif len(aStr) == 1:
        if aStr[0] == char:
            return True
        else:
            return False
    else:
        
        mid_str_index = len(aStr)/2
        mid_str = aStr[mid_str_index]
        
        if mid_str == char:       
            return True
        else:
            # se mid_str
            if char < mid_str:
                return isIn(char, aStr[:mid_str_index])
            else:
                return isIn(char, aStr[mid_str_index+1:])
    
    
    
print isIn("c", "abdef")    
    
    
