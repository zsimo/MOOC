# 6.00x Problem Set 6
#
# Part 1 - HAIL CAESAR!

import string
import random

WORDLIST_FILENAME = "words.txt"

# -----------------------------------
# Helper code
# (you don't need to understand this helper code)
def loadWords():
    """
    Returns a list of valid words. Words are strings of lowercase letters.
    
    Depending on the size of the word list, this function may
    take a while to finish.
    """
    print "Loading word list from file..."
    inFile = open(WORDLIST_FILENAME, 'r')
    wordList = inFile.read().split()
    print "  ", len(wordList), "words loaded."
    return wordList

def isWord(wordList, word):
    """
    Determines if word is a valid word.

    wordList: list of words in the dictionary.
    word: a possible word.
    returns True if word is in wordList.

    Example:
    >>> isWord(wordList, 'bat') returns
    True
    >>> isWord(wordList, 'asdf') returns
    False
    """
    word = word.lower()
    word = word.strip(" !@#$%^&*()-_+={}[]|\\:;'<>?,./\"")
    return word in wordList

def randomWord(wordList):
    """
    Returns a random word.

    wordList: list of words  
    returns: a word from wordList at random
    """
    return random.choice(wordList)

def randomString(wordList, n):
    """
    Returns a string containing n random words from wordList

    wordList: list of words
    returns: a string of random words separated by spaces.
    """
    return " ".join([randomWord(wordList) for _ in range(n)])

def randomScrambled(wordList, n):
    """
    Generates a test string by generating an n-word random string
    and encrypting it with a sequence of random shifts.

    wordList: list of words
    n: number of random words to generate and scamble
    returns: a scrambled string of n random words

    NOTE:
    This function will ONLY work once you have completed your
    implementation of applyShifts!
    """
    s = randomString(wordList, n) + " "
    shifts = [(i, random.randint(0, 25)) for i in range(len(s)) if s[i-1] == ' ']
    return applyShifts(s, shifts)[:-1]

def getStoryString():
    """
    Returns a story in encrypted text.
    """
    return open("story2.txt", "r").read()


# (end of helper code)
# -----------------------------------


def getshiftIndex(grupOfLetters, input, shift):
    '''
    groupOfLetter: string
    es: string.ascii_lowercase
        abcdefghijklmnopqrstuvwxyz
    
    input: the original char
    
    shift: integer, how much do you want to shift
    
    return the index of the input char shifted, based on the groupOfLetter and the shift value
    
    getshiftIndex(string.ascii_lowercase, 3)
        d e f g h i j k l m n o p q r s t u v w x y z a b c
    
    '''
    originalIndex = grupOfLetters.index(input)
    guess = shift + originalIndex
    
    if guess >= len(grupOfLetters):
        return guess - len(grupOfLetters)
    return guess
    
# import string
# print(string.ascii_lowercase[getshiftIndex(string.ascii_lowercase, 'a', 3)])

#
# Problem 1: Encryption
#
def buildCoder(shift):
    """
    Returns a dict that can apply a Caesar cipher to a letter.
    The cipher is defined by the shift value. Ignores non-letter characters
    like punctuation, numbers and spaces.

    shift: 0 <= int < 26
    returns: dict
    """
    ### TODO.
    # import string

    assert shift >= 0 and shift < 26
    
    out = {}
    
    for index in range(len(string.ascii_lowercase)):
        originalChar = string.ascii_lowercase[index]
        shiftedChar = string.ascii_lowercase[getshiftIndex(string.ascii_lowercase, originalChar, shift)]
        out[originalChar] = shiftedChar
        
    for index in range(len(string.ascii_uppercase)):
        originalChar = string.ascii_uppercase[index]
        shiftedChar = string.ascii_uppercase[getshiftIndex(string.ascii_uppercase, originalChar, shift)]
        out[originalChar] = shiftedChar        
    
    
    return out
    
    
# print(buildCoder(3))
expected = {'A': 'D', 'C': 'F', 'B': 'E', 'E': 'H', 'D': 'G', 'G': 'J', 'F': 'I', \
           'I': 'L', 'H': 'K', 'K': 'N', 'J': 'M', 'M': 'P', 'L': 'O', 'O': 'R',\
           'N': 'Q', 'Q': 'T', 'P': 'S', 'S': 'V', 'R': 'U', 'U': 'X', 'T': 'W',\
           'W': 'Z', 'V': 'Y', 'Y': 'B', 'X': 'A', 'Z': 'C', 'a': 'd', 'c': 'f',\
           'b': 'e', 'e': 'h', 'd': 'g', 'g': 'j', 'f': 'i', 'i': 'l', 'h': 'k',\
           'k': 'n', 'j': 'm', 'm': 'p', 'l': 'o', 'o': 'r', 'n': 'q', 'q': 't',\
           'p': 's', 's': 'v', 'r': 'u', 'u': 'x', 't': 'w', 'w': 'z', 'v': 'y',\
           'y': 'b', 'x': 'a', 'z': 'c'}
# print(expected)

def validChar(char):
    '''
    return True if the char is applicable the encryption
    '''

    if char != " " and char not in string.punctuation and char not in string.digits:
        return True
    return False

def applyCoder(text, coder):
    """
    Applies the coder to the text. Returns the encoded text.

    text: string
    coder: dict with mappings of characters to shifted characters
    returns: text after mapping coder chars to original text
    """
    ### TODO.
    out = ""
    
    for char in text:
        if validChar(char):
            out += coder[char]
        else:
            out += char
            
    return out
    
# print(applyCoder("Hello, world!", buildCoder(3)))
# print("expected: Khoor, zruog!")

def applyShift(text, shift):
    """
    Given a text, returns a new text Caesar shifted by the given shift
    offset. Lower case letters should remain lower case, upper case
    letters should remain upper case, and all other punctuation should
    stay as it is.

    text: string to apply the shift to
    shift: amount to shift the text (0 <= int < 26)
    returns: text after being shifted by specified amount.
    """
    ### TODO.
    ### HINT: This is a wrapper function.
    return applyCoder(text, buildCoder(shift))

#
# Problem 2: Decryption
#
def findBestShift(wordList, text):
    """
    Finds a shift key that can decrypt the encoded text.

    text: string
    returns: 0 <= int < 26
    """
    ### TODO
    '''
    PSEUDOCODE:
    - split the text in a list of words
    - encrypt all the words in the list for all the possible Caesar cipher cases (25)
    - count how many words encrypted are in the wordlist
    - return the shift key that generated the greater number of words in the wordlist
    '''
    max = 0
    result = 0
    for shift in range(1, 26):
        pulitoText = ""
        for char in text:
            if char == " ":
                pulitoText += char
            elif validChar(char):
                pulitoText += char        
        textEncrypted = applyShift(pulitoText, shift).split(" ")
        count = 0
        for word in textEncrypted:
            # print(word.lower())
            if word.lower() in wordList:
                # print(word)
                count += 1
        
        if count > max:
            max = count
            result = shift           
    
    return result

def decryptStory():
    """
    Using the methods you created in this problem set,
    decrypt the story given by the function getStoryString().
    Use the functions getStoryString and loadWords to get the
    raw data you need.

    returns: string - story in plain text
    """
    ### TODO.
    
    cryptedStory = getStoryString()
    # cryptedStory = cryptedStory.replace("\n", "")
    shiftKey = findBestShift(loadWords(), cryptedStory)
    
    decrypted = applyShift(cryptedStory, shiftKey)
    
    return decrypted
    
#
# Build data structures used for entire session and run encryption
#

if __name__ == '__main__':
    # To test findBestShift:
    wordList = loadWords()
    s = applyShift('Hello, world!', 8)
    bestShift = findBestShift(wordList, s)
    
    # print(bestShift)
    assert applyShift(s, bestShift) == 'Hello, world!'
    
    # To test decryptStory, comment the above four lines and uncomment this line:
    print(decryptStory())



test = {'A': 'T', 'C': 'V', 'B': 'U', 'E': 'X', 'D': 'W', 'G': 'Z', 'F': 'Y', 'I': 'B', 'H': 'A', 'K': 'D', 'J': 'C', 'M': 'F', 'L': 'E', 'O': 'H', 'N': 'G', 'Q': 'J', 'P': 'I', 'S': 'L', 'R': 'K', 'U': 'N', 'T': 'M', 'W': 'P', 'V': 'O', 'Y': 'R', 'X': 'Q', 'Z': 'S', 'a': 't', 'c': 'v', 'b': 'u', 'e': 'x', 'd': 'w', 'g': 'z', 'f': 'y', 'i': 'b', 'h': 'a', 'k': 'd', 'j': 'c', 'm': 'f', 'l': 'e', 'o': 'h', 'n': 'g', 'q': 'j', 'p': 'i', 's': 'l', 'r': 'k', 'u': 'n', 't': 'm', 'w': 'p', 'v': 'o', 'y': 'r', 'x': 'q', 'z': 's'}
# print(buildCoder(19)==test)
test9 = {'A': 'J', 'C': 'L', 'B': 'K', 'E': 'N', 'D': 'M', 'G': 'P', 'F': 'O', 'I': 'R', 'H': 'Q', 'K': 'T', 'J': 'S', 'M': 'V', 'L': 'U', 'O': 'X', 'N': 'W', 'Q': 'Z', 'P': 'Y', 'S': 'B', 'R': 'A', 'U': 'D', 'T': 'C', 'W': 'F', 'V': 'E', 'Y': 'H', 'X': 'G', 'Z': 'I', 'a': 'j', 'c': 'l', 'b': 'k', 'e': 'n', 'd': 'm', 'g': 'p', 'f': 'o', 'i': 'r', 'h': 'q', 'k': 't', 'j': 's', 'm': 'v', 'l': 'u', 'o': 'x', 'n': 'w', 'q': 'z', 'p': 'y', 's': 'b', 'r': 'a', 'u': 'd', 't': 'c', 'w': 'f', 'v': 'e', 'y': 'h', 'x': 'g', 'z': 'i'}
test24 = {'A': 'Y', 'C': 'A', 'B': 'Z', 'E': 'C', 'D': 'B', 'G': 'E', 'F': 'D', 'I': 'G', 'H': 'F', 'K': 'I', 'J': 'H', 'M': 'K', 'L': 'J', 'O': 'M', 'N': 'L', 'Q': 'O', 'P': 'N', 'S': 'Q', 'R': 'P', 'U': 'S', 'T': 'R', 'W': 'U', 'V': 'T', 'Y': 'W', 'X': 'V', 'Z': 'X', 'a': 'y', 'c': 'a', 'b': 'z', 'e': 'c', 'd': 'b', 'g': 'e', 'f': 'd', 'i': 'g', 'h': 'f', 'k': 'i', 'j': 'h', 'm': 'k', 'l': 'j', 'o': 'm', 'n': 'l', 'q': 'o', 'p': 'n', 's': 'q', 'r': 'p', 'u': 's', 't': 'r', 'w': 'u', 'v': 't', 'y': 'w', 'x': 'v', 'z': 'x'}
mio24 = {'A': 'Y', 'C': 'A', 'B': 'Z', 'E': 'C', 'D': 'B', 'G': 'E', 'F': 'D', 'I': 'G', 'H': 'F', 'K': 'I', 'J': 'H', 'M': 'K', 'L': 'J', 'O': 'M', 'N': 'L', 'Q': 'O', 'P': 'N', 'S': 'Q', 'R': 'P', 'U': 'S', 'T': 'R', 'W': 'U', 'V': 'T', 'Y': 'W', 'X': 'V', 'Z': 'X', 'a': 'y', 'c': 'a', 'b': 'z', 'e': 'c', 'd': 'b', 'g': 'e', 'f': 'd', 'i': 'g', 'h': 'f', 'k': 'i', 'j': 'h', 'm': 'k', 'l': 'j', 'o': 'm', 'n': 'l', 'q': 'o', 'p': 'n', 's': 'q', 'r': 'p', 'u': 's', 't': 'r', 'w': 'u', 'v': 't', 'y': 'w', 'x': 'v', 'z': 'x'}
print(buildCoder(24)==test24)



