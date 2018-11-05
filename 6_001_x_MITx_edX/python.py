# pyCharm line comment: ctrl+NumPad /7
# pyCharm block comment: ctrl+maiusc+NumPad /

help( < nome - funzione >)
dir( < nome - oggetto >)

# eseguire un file dalla shell
execfile('nome_file')

# tuple sono tipo gli array ma sono immutabili e si fanno con le # parentesi

< string >.find( < substring >) - >
return the index of the substrin or -1

# round(floating point number, <how many numbers after virgola>)

# check type
isinstance(base, float)
# oppure piu semplicemente
a="name"
type(a) == str  # senza virgolette
type(b) == float
type(b) == list

assert type(x) == list

# +++
# copia di un array (il clone)
temp = x[:]


## TIME
import time
now = time.clock()

# global variabile (usando il decoratore 'global' le variabili - anche se dichiarate all'interno
# di una funzione hanno visibilità globale)
global mia_var = "me"

# comparison between float number
def areFloatEqual(x, y, epsilon=0.00001):
    return abs(x-y) < epsilon
    
# when you have to put something for running the code    
pass

# print on the same line
a="test"
for c in a:
    print c
    
# you can make two or more print statements print to the same line if you separate them with a comma
print('Hello '),
print('world'),
print('!')  


### WEEK 5: Lecture09 - Efficiency and Orders of Growth ###
# count the number of basic steps
# Random Access Machine (RAM) as a model of computation
# - steps are excecited in sequentially
# - step is an operation that take constant time
#   - assignment
#   - comparison
#   - arithmetic operation
#   - accessing object in memory 




# Asynptotic growth:0
# Big O notation O(): upper limit to the growth of a function as the input gets large (caso peggiore)

# Iterative Exponentiation
n*steps

## n rappresenta le dimensioni dell'input
  
O(1)       # constant time (la complessita' e' indipendente dalle dimensioni dell'input)

O(log n)   # logarithmic -> es: binary search -> es: ridurre il problema della meta'

O(n)       # linear (search) rispetto alla dimensione dell'input
           # maggiore e' l'input, maggiore saranno gli steps per completare l'algoritmo 
           
O(n log n) # log linear (es: merge sort)
 
O(n**2)    # polynomial (in questo caso: quadratic) -> scritto anche O(n^2) oppure O(n*n) (nel caso sia ^2) 
           # -> es: doppio for loop
# piu' generico
o(n^c)     # polynomial -> n elevato ad una costante c -> es: n**3 (equivale a n*n*n)

O(2**n)    # exponential -> scritto anche O(2^n) -> es: (Hanoi Tower), ridurre il problema in sottoproblemi
           # ogni problema richiede un sottoproblema
# piu' generico
o(c^n)      # exponential, una costante c elevata a una potenza n che varia col variare
            # delle dimensioni dell'input


            
## INDIRECTION
# accessing something by first accessing something else that contains a reference to that

### CLASS ###
# quando chiami un metodo di un oggetto (di una classe) Python passa sempre l'oggetto stesso    (self)
# come primo argomento (per convenzione si usa self)

# return True if obj is an instance of the aClass
isinstance(obj, aClass)

### generator - yield ###
yield
xrange()
# lo usi come range ma puo' gestire liste piu' lunghe perche' 
# costruisce la lista man mano che serve (non la restituisce tutta 
# di botto subito), non spreca memoria
'''
The xrange function, while not really a generator, has the same benefits of using a generator. 
You can substitue xrange any place in your code that uses range. 
It behaves the same way, but stores much less information in memory so 
can cause your code to execute somewhat faster.
'''

###
# Parsing is the process of turning a data stream into a structured format that is more convenient to work with.