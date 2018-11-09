# -*- coding: cp1252 -*-
# Hash Table: in Python si chiama Dictionary
# a set of key/value pairs mutable
# the key can be either string or number
dic = {}
dic1 = {'uno': 1, 'due': 2}
dic2 = {1: 1, 'due': 2}
print dic2[1]


# Hash function: keyword -> number
# takes a keyword and produces a number that gives the position 
# in the hash table where is the buckets in which the keyword appears




import time

#start = time.clock()
#for i in range(100):
    #print i
#print time.clock() - start    

def time_execution(code):
    start = time.clock()
    result = eval(code)
    run_time = time.clock() - start
    return result, run_time

def spin_loop(n):
    i = 0
    while i < n:
        i = i + 1





# Define a function, hash_string,
# that takes as inputs a keyword
# (string) and a number of buckets,
# and returns a number representing
# the bucket for that keyword.

def hash_string(keyword, buckets):
    # signature
    # string, number -> number
    # in input the keyword and the size of the hash table
    # the output is a number compreso tra 0 e b-1 (b è il numero di buckets)

    # in python:
    # ord('one_letter_string') -> the index number of that letter
    # this 2 method are reversible
    # chr(number) -> 'one_letter_string'

    # Modulus operator '%'

    output = 0
    for l in keyword:
        output = (output + ord(l))%buckets
        
    return output


#print hash_string('a',12)
#>>> 1

#print hash_string('b',12)
#>>> 2

#print hash_string('a',13)
#>>> 6

#print hash_string('au',12)
#>>> 10

#print hash_string('udacity',12)
#>>> 11


def hashtable_get_bucket(htable,keyword):
    return htable[hash_string(keyword, len(htable))]   

    

# Creating an Empty Hash Table
# Define a procedure, make_hashtable,
# that takes as input a number, nbuckets,
# and returns an empty hash table with
# nbuckets empty buckets.

def make_hashtable(nbuckets):
    table = []
    for n in range(nbuckets):        
        table.append([])

    return table


table = [[['Francis', 13], ['Ellis', 11]], [], [['Bill', 17],
['Zoe', 14]], [['Coach', 4]], [['Louis', 29], ['Rochelle', 4], ['Nick', 2]]]

#print hashtable_get_bucket(table, "Zoe")
#>>> [['Bill', 17], ['Zoe', 14]]

#print hashtable_get_bucket(table, "Brick")
#>>> []

#print hashtable_get_bucket(table, "Lilith")
#>>> [['Louis', 29], ['Rochelle', 4], ['Nick', 2]]

def hashtable_lookup(htable,key):
    bucket = hashtable_get_bucket(htable,key)    
    
    for el in bucket:
        if el[0] == key:
            return el[1]
    
    return None

def hashtable_add(htable,key,value):
    bucket = hashtable_get_bucket(htable, key)
    bucket.append([key, value])
    return htable

def hashtable_update(htable,key,value):
    bucket = hashtable_get_bucket(htable,key)
    for entry in bucket:
        if entry[0] == key:
            entry[1] = value
            return
    
    bucket.append([key,value])    
    

table = make_hashtable(5)
hashtable_add(table,'Bill', 17)
hashtable_add(table,'Coach', 4)
hashtable_add(table,'Ellis', 11)
hashtable_add(table,'Francis', 13)
hashtable_add(table,'Louis', 29)
hashtable_add(table,'Nick', 2)
hashtable_add(table,'Rochelle', 4)
hashtable_add(table,'Zoe', 14)
print table
#>>> [[['Ellis', 11], ['Francis', 13]], [], [['Bill', 17], ['Zoe', 14]], 
#>>> [['Coach', 4]], [['Louis', 29], ['Nick', 2], ['Rochelle', 4]]]







