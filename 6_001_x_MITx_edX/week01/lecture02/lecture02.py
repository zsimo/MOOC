__author__ = 'simo'

''' Scalar Object (cannot be subdivided)
3 type:
- int
- float
- boolean
- None
'''

# 3 data object
print (type(3))
print (type(3.0))
print (type(True))
print (type(None))

''' Expression
object and operators can be combined to form expression
syntax:
<object> <operator> <object>

operators:
+ - *
/ # divisione tra interi restituisce solo l'intero (3/2=1)
% # restituisce il rimanente (5/2=2) (5%2=1)
** (3**2=9) #3 alla seconda da 9

comparison operators:
>
>=
==
!=

operators on bools:
and
or
not
The order of operations is as follows:
1. Parentheses:before operating on anything else,Python must evaluate all parentheticals starting at the innermost level
2. not statements
3. and statements
4. or statements

Type conversion (type casting):
float(3)
int(3.0)
str(3)

'''

print(round(2.6))

''' Assignment
give name to values of expression and reuse those names in place of values
pi = 3.14
'''

''' Non-Scalar objects (compound object)
    oggetti composti
    string (sequence of characters) -> type str
'''

print(type('abc'))
print('a' + 'b')
print(4 * 'a')
print('a' + str(123))
print('len(str): ' + str(len('abc')))

''' Extracting parts of strings
- indexing: 'abc'[0]
- slicing:  str[start:end](stop just before the end)
            s[i:j] gives you a portion of string s from index i to index j-1
            -> 'abc'[1:3]
            s[i:j:k]. This gives a slice of the string s from index i to index j, with step size k
            -> s = 'Python is Fun!'
                s[1:12:2] -> 'yhni u'
                s[::2]    -> 'Pto sFn'
'''

print('the first: ' + str('abc'[0]))
print('the last: ' + str('abc'[-1]))
print('slicing: ' + str('abc'[1:3]))

''' Collection
a 'collection' refers to a string, list, tuple or dictionary

in operator test for collection membership
'''

''' get INPUT from users
    raw_input('give me an input!')

'''

# print (raw_input('give me an input!'))

''' Branching program
- Conditional

'''

temp = 120
if temp > 85:
    print('Hot')
elif temp > 100:
    print('Really hot')