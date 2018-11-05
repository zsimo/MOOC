# recursion
# 1. RECURSIVE step: ridurre un problema alla sua versione piu semplice
# 2. BASE case_ continua a ridurre fino a quando raggiungi il caso piu semplice che puo essere ridotto direttamente


def recurMul(a, b):
    '''
        moltiplica a*b, utilizzando l'addizione e la ricorsione
        (senza moltiplicare e senza usare cicli)
    '''

    #BASE case
    # if b==1 -> allora semplicemente a*b=a (perche a*1=a)
    if b == 1:
        print("#base case")
        return a
    else:
        # RECURSIVE step
        # a*b = a+a*(b-1)
        # se devo moltiplicare a*b, allora se inizio con addizionare a+a...
        # mi rimarra da moltiplicare a*(b-1), una volta in meno perche ho gia fatto un addizione (a+a)
        print("*recursive step - b=" + str(b))
        return a + recurMul(a, b-1)

a = 5
b = 5
print("moltiplica "+str(a)+"*"+str(b))
print("result = "+ str(recurMul(a, b)))

# Mathematical Induction
# 0+1+2+...+n == (n(n+1))/2
lhs = 0+1+2+3+4+5
rhs = (5*(5+1))/2
print(lhs==rhs)