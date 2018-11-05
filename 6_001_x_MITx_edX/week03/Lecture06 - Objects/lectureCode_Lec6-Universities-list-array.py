## universities

# LIST (array)
# list.append   # inserisce alla fine
# list.remove() # rimuove l'elemento passato come parametro

# flat
# list + list (list concatenationion -> flatening)

# operatore <is>
# list1 is list2

# list1 is list2
# list.sort()

# insert a element in a given position
# list.insert(index, element)

# remove an element at the given position
# or the last element if the index isn't provided
# list.pop(index)

# return the number of time x appear in the list
# list.count(x)

# list.remove(x)

# aggiunge alle fine di list la lista L passata come parametro
# list.extend(L)


Techs = ['MIT', 'Cal Tech']
Ivys = ['Harvard', 'Yale', 'Brown']

Univs = [Techs, Ivys]
Univs1 = [['MIT', 'Cal Tech'], ['Harvard', 'Yale', 'Brown']]

Techs.append('RPI')

print('Univs = ')
print(Univs)
print('')
print('Univs1 =')
print(Univs1)



#for e in Univs:
#    print('Univs contains ')
#    print(e)
#    print('   which contains')
#    for u in e:
#        print('      ' + u)


