# Dictionaries of Dictionaries (of Dictionaries)

# The next several questions concern the data structure below for keeping
# track of Udacity's courses (where all of the values are strings):

#    { <hexamester>, { <class>: { <property>: <value>, ... },
#                                     ... },
#      ... }

# For example,

courses = {
    'feb2012': { 'cs101': {'name': 'Building a Search Engine',
                           'teacher': 'Dave',
                           'assistant': 'Peter C.'},
                 'cs373': {'name': 'Programming a Robotic Car',
                           'teacher': 'Sebastian',
                           'assistant': 'Andy'}},
    'apr2012': { 'cs101': {'name': 'Building a Search Engine',
                           'teacher': 'Dave',
                           'assistant': 'Sarah'},
                 'cs212': {'name': 'The Design of Computer Programs',
                           'teacher': 'Peter N.',
                           'assistant': 'Andy',
                           'prereq': 'cs101'},
                 'cs253': 
                {'name': 'Web Application Engineering - Building a Blog',
                           'teacher': 'Steve',
                           'prereq': 'cs101'},
                 'cs262': 
                {'name': 'Programming Languages - Building a Web Browser',
                           'teacher': 'Wes',
                           'assistant': 'Peter C.',
                           'prereq': 'cs101'},
                 'cs373': {'name': 'Programming a Robotic Car',
                           'teacher': 'Sebastian'},
                 'cs387': {'name': 'Applied Cryptography',
                           'teacher': 'Dave'}},
    'jan2044': { 'cs001': {'name': 'Building a Quantum Holodeck',
                           'teacher': 'Dorina'},
               'cs003': {'name': 'Programming a Robotic Robotics Teacher',
                           'teacher': 'Jasper'},
                     }
    }


# For the following questions, you will find the
#         for <key> in <dictionary>:
#                    <block>
# construct useful. This loops through the key values in the Dictionary. For
# example, this procedure returns a list of all the courses offered in the given
# hexamester:

def courses_offered(courses, hexamester):
    res = []
    for c in courses[hexamester]:
        res.append(c)
    return res
        
# Define a procedure, involved(courses, person), that takes 
# as input a courses structure and a person and returns a Dictionary that 
# describes all the courses the person is involved in.  A person is involved 
# in a course if they are a value for any property for the course.  The output 
# Dictionary should have hexamesters as its keys, and each value should be a 
# list of courses that are offered that hexamester (the courses in the list 
# can be in any order).

##def involved(courses, person):
##    out = {}
##    for examester in courses:
##        temp = []
##        for course in courses[examester]:                    
##            if courses[examester][course]['teacher'] == person:
##                temp.append(course)
##            if 'assistant' in courses[examester][course]:
##                if courses[examester][course]['assistant'] == person:
##                     temp.append(course)
##
##        if temp:     
##            out[examester] = temp
##
##    return out

def involved(courses, person):
    out = {}
    for examester in courses:
        for course in courses[examester]:                    
            for key in courses[examester][course]:
                if courses[examester][course][key] == person:
                    if examester in out:
                        out[examester].append(course)
                    else:
                        out[examester] = [course]

    return out


# For example:

#print involved(courses, 'Dave')
#>>> {'apr2012': ['cs101', 'cs387'], 'feb2012': ['cs101']}

#print involved(courses, 'Peter C.')
#>>> {'apr2012': ['cs262'], 'feb2012': ['cs101']}

#print involved(courses, 'Dorina')
#>>> {'jan2044': ['cs001']}

#print involved(courses,'Peter')
#>>> {}

#print involved(courses,'Robotic')
#>>> {}

#print involved(courses, '')
#>>> {}






# 6. In video 28. Update, it was suggested that some of the duplicate code in
# lookup and update could be avoided by a better design.  We can do this by
# defining a procedure that finds the entry corresponding to a given key, and
# using that in both lookup and update.

# Here are the original procedures:

def bucket_find(bucket, key):
    for entry in bucket:
        if entry[0] == key:
            return entry

    return None
        
def hashtable_update(htable, key, value):
    bucket = hashtable_get_bucket(htable, key)
    entry = bucket_find(bucket, key)
    if entry:        
        entry[1] = value
    else:
        bucket.append([key, value])

def hashtable_lookup(htable, key):
    entry = bucket_find(hashtable_get_bucket(htable, key), key)
    if entry:
        return entry[1]
    else:
        return None

def make_hashtable(size):
    table = []
    for unused in range(0, size):
        table.append([])
    return table

def hash_string(s, size):
    h = 0
    for c in s:
         h = h + ord(c)
    return h % size

def hashtable_get_bucket(htable, key):
    return htable[hash_string(key, len(htable))]

# Whenever we have duplicate code like the loop that finds the entry in
# hashtable_update and hashtable_lookup, we should think if there is a better way
# to write this that would avoid the duplication. We should be able to rewrite
# these procedures to be shorter by defining a new procedure and rewriting both
# hashtable_update and hashtable_lookup to use that procedure.

# Modify the code for both hashtable_update and hashtable_lookup to have the same
# behavior they have now, but using fewer lines of code in each procedure.  You
# should define a new procedure to help with this. Your new version should have
# approximately the same running time as the original version, but neither
# hashtable_update or hashtable_lookup should include any for or while loop, and
# the block of each procedure should be no more than 6 lines long.

# Your procedures should have the same behavior as the originals.  For example,

table = make_hashtable(10)
hashtable_update(table, 'Python', 'Monty')
hashtable_update(table, 'CLU', 'Barbara Liskov')
hashtable_update(table, 'JavaScript', 'Brendan Eich')
hashtable_update(table, 'Python', 'Guido van Rossum')
#print hashtable_lookup(table, 'Python')
#>>> Guido van Rossum



# Memoization is a way to make code run faster by saving
# previously computed results.  Instead of needing to recompute the value of an
# expression, a memoized computation first looks for the value in a cache of
# pre-computed values.

# Define a procedure, cached_execution(cache, proc, proc_input), that takes in
# three inputs: a cache, which is a Dictionary that maps inputs to proc to
# their previously computed values, a procedure, proc, which can be called by
# just writing proc(proc_input), and proc_input which is the input to proc.
# Your procedure should return the value of the proc with input proc_input,
# but should only evaluate it if it has not been previously called.

def cached_execution(cache, proc, proc_input):
    if proc_input not in cache:
        cache[proc_input] = proc(proc_input)

    return cache[proc_input]    

# Here is an example showing the desired behavior of cached_execution:

def factorial(n):
    print "Running factorial"
    result = 1
    for i in range(2, n + 1):
        result = result * i
    return result

cache = {} # start cache as an empty dictionary
### first execution (should print out Running factorial and the result)
print cached_execution(cache, factorial, 50)

print "Second time:"
### second execution (should only print out the result)
print cached_execution(cache, factorial, 50)

# Here is a more interesting example using cached_execution
# (do not worry if you do not understand this, though,
# it will be clearer after Unit 6):

def cached_fibo(n):
    if n == 1 or n == 0:
        return n
    else:
        return (cached_execution(cache, cached_fibo, n - 1 )
               + cached_execution(cache,  cached_fibo, n - 2 ))
               
cache = {} # new cache for this procedure
# do not try this at home...at least without a cache!
print cached_execution(cache, cached_fibo,100)

