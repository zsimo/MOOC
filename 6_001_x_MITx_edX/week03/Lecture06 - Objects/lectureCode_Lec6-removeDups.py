def removeDups(L1, L2):
    for e1 in L1:
        if e1 in L2:
            L1.remove(e1)


L1 = [1,2,3,4]
L2 = [1,2,5,6]
removeDups(L1, L2)
print(L1)

def removeDupsBetter(L1, L2):
    # crea un clone della lista
    # le 2 liste che ottengono puntano a oggetti in memoria diversi
    # sebbene con lo stesso contenuto
    # != dal usare l'assegnamento =
    # in questo caso le 2 liste punterebbero allo stesso oggeto in memoria
    # se cambio una, cambio anche l'altra
    L1Start = L1[:]
    for e1 in L1Start:
        if e1 in L2:
            L1.remove(e1)

L1 = [1,2,3,4]
L2 = [1,2,5,6]
removeDupsBetter(L1, L2)
print(L1)
