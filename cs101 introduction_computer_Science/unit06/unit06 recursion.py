# -*- coding: cp1252 -*-
# Recursive Definition
# 1. Base case: the starting point (not defined in terms if itelf)
#   es.: smallest imput already know
# 2. Recursive case (defined in terms of smallest version of itelf)
# "does the recursive case modify my arguments in such a way that each
# recursion brings it one step closer to the base case?"
# 1. What is/are the base case(s)?
# 2. What is/are the recursive case(s)?
# 3. Have I included any other necessary termination condition(s)?
# 4. Do the statements in the function lead to the base case?
# 5. Does the recursion build on the base case until the desired
#    result is returned by the function?



# Define a procedure, factorial, that takes a natural number as its input, and
# returns the number of ways to arrange the input number of itmes.

def factorial(n):

    # base case
    # factorial(0) = 1
    if n == 0:
        return 1
    else:
        # factorial case
        # factorial(n) = n * factorial(n - 1)
        return n * factorial(n-1)





#print factorial(0)
#>>> 1
#print factorial(5)
#>>> 120
#print factorial(10)
#>>> 3628800



# Define a procedure is_palindrome, that takes as input a string, and returns a
# Boolean indicating if the input string is a palindrome.

# Base Case: '' => True
# Recursive Case: if first and last characters don't match => False
# if they do match, is the middle a palindrome?

def is_palindrome(s):
    if s == "":
        return True
    else:
        if s[0] != s[-1]:
            return False
        else:
            s = s[1:-1]
            return is_palindrome(s)
 
 
 
#print is_palindrome('')
#>>> True
#print is_palindrome('abab')
#>>> False
#print is_palindrome('abba')
#>>> True



# Define a procedure, fibonacci, that takes a natural number as its input, and
# returns the value of that fibonacci number.

# Two Base Cases:
#    fibonacci(0) => 0
#    fibonacci(1) => 1

# Recursive Case:
#    n > 1 : fibonacci(n) => fibonacci(n-1) + fibonacci(n-2)

def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)



#print fibonacci(3)
#print fibonacci(0)
#>>> 0
#print fibonacci(1)
#>>> 1
#print fibonacci(15)
#>>> 610
#print fibonacci(24)
import time
start = time.clock()
#print fibonacci(36)
#print "time: " + str(time.clock() - start)


#Define a faster fibonacci procedure that will enable us to computer
#fibonacci(36).

def faster_fibonacci(n):
    counter = 0
    n1 = 0
    n2 = 1
    temp = 0
    while counter < n:

        out = n1 + n2

        temp = n2
        n2 = n1 + n2
        n1 = temp

        # more elegant implementation
        # n1, n2 = n2, n1+n2
        # and at the end, return n1
        
        counter += 1
        
    return temp


##print faster_fibonacci(0)
##print faster_fibonacci(1)
##print faster_fibonacci(2)
##print faster_fibonacci(36)
#>>> 14930352


# Relaxation Algorithm
# 1. start with a guess
# 2. while not done:
# 3. make the guess better
 
def rank(time, page):
    # time:
    # quante volte vogliamo ripetere il calcolo
    # per perfezionare la stima della popolarità
    # base case:
    # if the time is 0, the popularity is 1
    if time == 0:
        return 1
    else:
        # recursive case
        # the update rule 
        score = 0
        for url in pages(page):
            # the popularity of this friend at the previous step
            score = score + popularity(time - 1, url)
            return score

# the grapg is a dictionary in which every entry is a page
# and for every page have a list of pages che hanno un link
# alla suddetta pagina
def compute_ranks(graph):
    # damping factor
    d = 0.8
    
    numloops = 10
    ranks = {}
    npages = len(graph)

    for page in grapsh:
        ranks[page] = 1.0 / npage

    for i in range(0, numloops):
        newranks = {}
        for page in graph:
            newrank = (1 - d) / npage
            #
            for node in range graph: 
                #newrank += rank(count, page[count])
                newrank += newranks[page[count]]
                
            newrank = newrank / len(page)
            
            newranks[page] = newrank

        ranks = newranks
    
    return ranks
    





    
    
