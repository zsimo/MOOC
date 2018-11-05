# TUPLE: come una stringa ma non solo sequenza fissa di caratteri
# sequenza fissa di qualsiasi cosa

my_tuple = (1, 'due', (3, 'quattro'))
my_tuple2 = ('cinque', 6)
print(my_tuple)
print("tuple concatenation, simile alle stringhe:")
print(my_tuple+my_tuple2)
print("indexing:")
print(my_tuple2[0])
print("slicing:")
print(my_tuple[:1])
print("singleton, tuple formata da un singolo elemento:")
print(("singleton",))
print("empty tuple:")
empty_tuple = ()
print(empty_tuple)

# ITERATION over TUPLE
def findDivisors(n1, n2):
    """assumes that n1 and n2 are positive ints
       returns a tuple containing the common divisors of n1 and n2"""
    divisors = () # the empty tuple
    for i in range(1, min(n1, n2) + 1):
        if n1%i == 0 and n2%i == 0:
            divisors = divisors + (i,)
    return divisors


divisors = findDivisors(20, 100)
print(divisors)


total = 0
# ITERATION over TUPLE
for d in divisors:
    total += d
print(total)
