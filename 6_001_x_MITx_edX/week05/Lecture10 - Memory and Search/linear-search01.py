# complexity O(len(L)) # linear
def search(L, e):
    for i in range(len(L)):
        if L[i] == e:
            return True
    
    return False
    

a = [1, 2, 3, 4, 0]
b = [3, 0, 2, 4, 1]
c = [3, 2, 4, 1, 5]    
    
def foo(L):
    val = L[0]
    while (True):
        val = L[val]
 
foo(c)