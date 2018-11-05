# 6.00x Problem Set 6
#
# Part 2 - RECURSION

#
# Problem 3: Recursive String Reversal
#

def reverseString(aStr):
    """
    Given a string, recursively returns a reversed copy of the string.
    For example, if the string is 'abc', the function returns 'cba'.
    The only string operations you are allowed to use are indexing,
    slicing, and concatenation.
    
    aStr: a string
    returns: a reversed string
    """
    if len(aStr) == 0:
        return ""
    # print(len(aStr))
    return reverseString(aStr[1:]) + aStr[0]

# print(reverseString("abc"))
# print("expected: cba")   
    
#
# Problem 4: X-ian
#

def x_ian(x, word):
    """
    Given a string x, returns True if all the letters in x are
    contained in word in the same order as they appear in x.

    >>> x_ian('eric', 'meritocracy')
    True
    >>> x_ian('eric', 'cerium')
    False
    >>> x_ian('john', 'mahjong')
    False
    
    x: a string
    word: a string
    returns: True if word is x_ian, False otherwise
    """
    ###TODO.
    if x == "":
        return False
    
    if word.find(x) == -1:
        return False
    else:
        if x == word:
            return True
        else:
            return x_ian(x, word[word.find(x):word.find(x)+len(x)])
   

# print(x_ian('p', 'wefefew'))
# print("expected: False")            
            
# print(x_ian('e', 'wefefew'))
# print("expected: True")             
            
# print(x_ian('', 'wefefew'))
# print("expected: False")     
     
# print(x_ian('pp', ''))
# print("expected: False")
            
# print(x_ian('simo', 'merisimotocracy'))
# print("expected: True")


#
# Problem 5: Typewriter
#
def insertNewlines(text, lineLength):
    """
    Given text and a desired line length, wrap the text as a typewriter would.
    Insert a newline character ("\n") after each word that reaches or exceeds
    the desired line length.

    text: a string containing the text to wrap.
    line_length: the number of characters to include on a line before wrapping
        the next word.
    returns: a string, with newline characters inserted appropriately. 
    """
    ### TODO.
    if text == "":
        return ""
    # print(text)
    return insertNewlines(text[lineLength:], lineLength) + text[0:lineLength] + "\n"
    
text = "abcdef"
print(insertNewlines(text, 3))
