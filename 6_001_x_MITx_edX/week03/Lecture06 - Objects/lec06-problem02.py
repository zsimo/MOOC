def oddTuples(aTup):
    '''
    aTup: a tuple
    
    returns: tuple, every other element of aTup. 
    '''
    # Your Code Here
    
    out=()
    count=0
    for word in aTup:
        if count%2==0: #dispari
            out += (word,)
        count +=1
        
    return out
    
test = ('I', 'am', 'a', 'test', 'tuple')
print(oddTuples(test))
print("expected: ('I', 'a', 'tuple')")    