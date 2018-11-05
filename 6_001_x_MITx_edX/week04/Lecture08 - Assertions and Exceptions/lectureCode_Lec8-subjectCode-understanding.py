def getSubjectStats(subject, weights):
    return [[elt[0], elt[1], avg(elt[1], weights)]
            for elt in subject]

def understanding():
    a = ["simone", "anna"]
    # append to an array all the values retrieve by looping the a array
    # and return it
    # create and return an array without definition       
    return [name for name in a]
    
# This part:
# return [ ...... ]
# Means return an array.

# This part:
# return [ [ ... ] ...... ]
# Means return an array of arrays.

# Then this part:
# for elt in subject
# Means iterate through the variable subject and look at each element using another variable called elt

# Finally, this part:
# [elt[0], elt[1], avg(elt[1], weights)]
# Means the array will hold the values elt[0], elt[1], and the result from the function avg(elt[1], weights)    

def dotProduct(a,b):
    result = 0.0
    for i in range(len(a)):
        result += a[i]*b[i]
    return result

def avg(grades, weights):
    return dotProduct(grades, weights)/len(grades)
# secont version
def avg(grades, weights):
    try:
        return dotProduct(grades, weights)/len(grades)
    except ZeroDivisionError:
        print 'no grades data'
# terza versione
# decido che valore ritornare in caso d'errore
def avg(grades, weights):
    try:
        return dotProduct(grades, weights)/len(grades)
    except ZeroDivisionError:
        print 'no grades data'
        return 0.0
    
            
test = [[['fred', 'flintstone'], [10.0, 5.0, 85.0]],
        [['barney', 'rubble'], [10.0, 8.0, 74.0]],
        [['wilma', 'flintstone'], [8.0, 10.0, 96.0]],
        [['dino'], []]]

weights = [.3, .2, .5]

#print(getSubjectStats(test, weights))
print(understanding())





