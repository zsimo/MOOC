def generatorsTest():
    print("prima")
    yield "uno"
    print("dopo")
    yield "due"
 


# foo = generatorsTest()
# foo.next()
# foo.next()

# usare yield all'interno di un loop
# for el in generatorsTest():
    # print el

    
def genFib():
    fibn_1 = 1 #fib(n-1)
    fibn_2 = 0 #fib(n-2)
    while True:
        # fib(n) = fib(n-1) + fib(n-2)
        next = fibn_1 + fibn_2
        yield next
        fibn_2 = fibn_1
        fibn_1 = next
        # print fibn_1, fibn_2

# create a generator object
fib = genFib()
print(fib.next())
print(fib.next())
print(fib.next())
print(fib.next())
print(fib.next())

# continue generating infinite fibonacci number
# for el in genFib():
    # print el
    
    
   
def yieldTest():
    array = [1, 2, 3, 4]
    for el in array:
        yield el
        
yieldTest()
        
        
        
        
        
        