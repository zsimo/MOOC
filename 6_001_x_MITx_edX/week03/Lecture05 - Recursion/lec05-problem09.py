def semordnilap(str1, str2):
    '''
    str1: a string
    str2: a string
    
    returns: True if str1 and str2 are semordnilap;
             False otherwise.
    '''
    # Your code here
    if len(str1) != len(str2):
        #print("1")
        return False
    elif len(str1) == 1 and len(str2) == 1:
        #print("2")
        return True
    else:
        #print("3")
        return str1[0] == str2[-1] and semordnilap(str1[1:], str2[:-1])
    
def semordnilapWrapper(str1, str2):
    # A single-length string cannot be semordnilap
    if len(str1) == 1 or len(str2) == 1:
        return False

    # Equal strings cannot be semordnilap
    if str1 == str2:
        return False

    return semordnilap(str1, str2)
    
   
print(semordnilap("nametag", "gateman"))