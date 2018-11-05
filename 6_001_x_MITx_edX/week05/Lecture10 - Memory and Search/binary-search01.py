def search(L, e):
    def bSearch(L, e, low, high):
        if high == low:
            return L[low] == e
        mid = low + int((high - low)/2)
        # my_mid = (high+low)/2        
        if L[mid] == e:
            return True
        print(str(low) + " " + str(mid) + " " + str(high))
        if L[mid] > e:
            return bSearch(L, e, low, mid - 1)
        else:
            return bSearch(L, e, mid + 1, high)
    if len(L) == 0:
        return False
    else:
        return bSearch(L, e, 0, len(L) - 1)
        
        
# altri esempi piu' lenti
# linear search ricorsive pythonic way
def rSearch(list,element):
    if element == list[0]:
        return True
    if len(list) == 1:
        return False
    print(len(list))
    return rSearch(list[1:],element)        
        
# usando la sintassi tipica di python
# binary search ricorsive pythonic way
def rBinarySearch(list,element):
    if len(list) == 1:
        return element == list[0]
    mid = len(list)/2
    print("lunghezza lista: " + str(len(list)))
    if list[mid] > element:
        return rBinarySearch( list[ : mid] , element )
    if list[mid] < object:
        return rBinarySearch( list[mid : ] , element)
    return True        
        
        
L = range(5000000)
#L=[1]
print(rBinarySearch(L, 10))






