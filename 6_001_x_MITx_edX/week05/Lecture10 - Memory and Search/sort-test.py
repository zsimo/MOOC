import time
import random


### SELECTION SORT ###
# O(n**2) # di complessita' quadratica
# find the min element of the list and swap it
# with the first elemente, then find the min element
# and swap it with the second element
def selSort(L):
    for i in range(len(L) - 1):
        minIndx = i
        minVal= L[i]
        j = i + 1
        # ciclo sulla parte destra della lista
        # che diventa sempre piu' piccola
        while j < len(L):
            # find the smallest value nella parte dx della lista
            if minVal > L[j]:
                minIndx = j
                minVal= L[j]
            j += 1
        # temp = L[i]
        # L[i] = L[minIndx]
        # L[minIndx] = temp
        my_swap(L, i, minIndx)



# def newSort(L):
    # for i in range(len(L) - 1):
        # j=i+1
        # while j < len(L):
            # if L[i] > L[j]:
                # temp = L[i]
                # L[i] = L[j]
                # L[j] = temp
            # j += 1
# def sortIt(L):
    # def insert(S, e):
        # i = 0
        # #find where to insert element in list that's already sorted
        # while i < len(S) and e >= S[i]: 
            # i += 1
        # S.insert(i, e)
    # S = []
    # for e in L:
        # insert(S, e)
    # return S     


## my helper functions ##
def my_swap(list, index_a, index_b):
    assert index_a < len(list) and index_b < len(list)
    temp = list[index_a]
    list[index_a] = list[index_b]
    list[index_b] = temp
def my_min(list):
    assert len(list) > 0
    out = list[0]
    for el in list:
        # if out == None:
            # out = el
        if el < out:
            out = el
    return out

### MY SORT ###    
def mySort(list):
    out = []
    tmp_min = 0
    while len(list) > 0:
        # min e' piu' veloce del mio my_min
        tmp_min = min(list)
        out.append(tmp_min)
        list.remove(tmp_min)
    
    return out   


# student sort
def anotherSort(L):
    sorted_list = []

    def getIndexFor(L, e, low, high):
        if low == high:
            return low

        middle = low + (high - low)/2

        if (middle == high) or (middle == low):
            return middle

        if L[middle] > e:
            return getIndexFor(L, e, low, middle - 1)
        elif L[middle] < e:
            return getIndexFor(L, e, middle + 1, high)
        else:
            return middle

    for e1 in L:
        if not sorted_list:
            i = 0
        else:
            i = getIndexFor(sorted_list, e1, 0 , len(sorted_list))
        sorted_list.insert(i, e1)
    return sorted_list 


### MERGE SORT ###
def merge(left, right, compare):
    result = []
    i,j = 0, 0
    while i < len(left) and j < len(right):
        if compare(left[i], right[j]):
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    while (i < len(left)):
        result.append(left[i])
        i += 1
    while (j < len(right)):
        result.append(right[j])
        j += 1    
    return result

import operator

# 0(n*log*n) # complessita' log linear
def mergeSort(L, compare = operator.lt):
    if len(L) < 2:
        return L[:]
    else:
        middle = int(len(L)/2)        
        left = mergeSort(L[:middle], compare)
        right = mergeSort(L[middle:], compare)
        return merge(left, right, compare)
  


### TEST ###
list_dimension = 5000
list = [3, 2, 7, 100, 1, 1000, 2, 23, 54, 6, 0, 30,20, 70]
list = range(list_dimension)
random.shuffle(list)
print("mySort: ")
print("first element: "+ str(list[0]))
start = time.clock()
# print(my_min(list))
# print("")
result = mySort(list)
print("time: "+ str(time.clock()-start))
print("first element: "+ str(result[0]))

print("--------------------")
list = range(list_dimension)
random.shuffle(list)
print("selSort: ")
print("first element: "+ str(list[0]))
start = time.clock()
selSort(list)
print("time: "+ str(time.clock()-start))
print("first element: "+ str(list[0]))

print("--------------------")
list = range(list_dimension)
random.shuffle(list)
print("mergeSort: ")
print("first element: "+ str(list[0]))
start = time.clock()
result = mergeSort(list)
print("time: "+ str(time.clock()-start))
print("first element: "+ str(result[0]))

