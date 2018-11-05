# applyToEach

# FUNCTION as first class object: -> funtional programming!
# - hanno il proprio tipo
# - possono essere elemento di una struttura dati, come le liste
# - possono apparire nelle espressioni:
#   - come parte di un assegnamento
#   - come un argomento di una funzione

def applyToEach(L, f):
    """assumes L is a list, f a function
       mutates L by replacing each element, e, of L by f(e)"""
    for i in range(len(L)):
        L[i] = f(L[i])


L = [1, -2, 3.4]

def fact(n):
    if n == 1:
        return 1
    else:
        return n*fact(n-1)

def fib(n):
    if n == 0 or n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print("applyToEach(L, abs):")
applyToEach(L, abs)
print(L)

print("applyToEach(L, int):")
applyToEach(L, int)
print(L)

print("applyToEach(L, fact):")
applyToEach(L, fact)
print(L)

print("applyToEach(L, fib):")
applyToEach(L, fib)
print(L)

print("=====================")
print("applyFunctions(list, val):")
list_of_function = [abs, int, fact, fib]
def applyFunctions(list, val):
    '''
    list is a list of function
    apply all the functions in the list to val
    and print it out
    '''
    for function in list:
        print function(val)

applyFunctions(list_of_function, 4)


# map is a built in function in Python
#  ES: map(abs, [1, -3, 4])
# apply abs to each element of the list
# and return l'array trasformato
# oppure posso passere piu paramtri e la funzione passato come primo
# parametro sara chiamata prendendo come parametro gli elementi passati
# successivi parametri
# ES: map(min, [1, 23, 4], [43, 4, 2])
'''
MAP definitiion:
Apply function to every item of iterable and return a list of the results.
If additional iterable arguments are passed, function must take that many
arguments and is applied to the items from all iterables in parallel.
If one iterable is shorter than another it is assumed to be extended with None items.
'''
list1=[2, 3, 4]
list2=[43, -1, 23]
print("=================================")
print("Python map function with 2 params")
print("map(fun, list1)")
print(map(fib, list1))
print("Python map function with 3 params")
print("map(fun, list1, list2)")
print(map(min, list1, list2))
