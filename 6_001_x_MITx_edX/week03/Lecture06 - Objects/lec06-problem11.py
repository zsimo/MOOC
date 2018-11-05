def biggest(aDict):
    '''
    aDict: A dictionary, where all the values are lists.

    returns: The key with the largest number of values associated with it
    '''
    # Your Code Here
    max = 0
    temp = 0
    
    if aDict == {}:
        out = None
    else:
        out = aDict.keys()[0]
    for el in aDict:
        temp = len(aDict[el])
        if temp > max:
            max = temp 
            out = el
    return out
    
    
    
animals = { 'a': ['aardvark'], 'b': ['baboon'], 'c': ['coati']}

animals['d'] = ['donkey']
animals['d'].append('dog')
animals['d'].append('dingo')

print("expected: d")
print(biggest(animals))
print("expected: None")
print(biggest({}))
print("expected: P")
print(biggest({'P': []}))
