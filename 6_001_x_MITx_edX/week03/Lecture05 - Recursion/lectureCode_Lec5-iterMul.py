def iterMul(a, b):
    '''
        moltiplica a*b, utilizzando l'addizione
        a*b = a+a...+a (b volte)
    '''
    # result and b are 2 variabili di stato
    # che vengono aggiornate ad ogni ciclo
    result = 0
    while b > 0:
        result += a
        b -= 1
    return result


print(iterMul(3, 10))


def iterPower(base, exp):
    '''
    base: int or float.
    exp: int >= 0
 
    returns: int or float, base^exp
    '''
    if isinstance(base, float):
        result = 1.0
    else:
        result = 1

    while exp > 0:
        result *= base
        exp -= 1

    return round(result, 4)



#print("result: " + str(iterPower(2, 4)))
#print("expected: 16")
#print("result: " + str(iterPower(-5.93, 0)))
#print("expected: 1.000")
#print(iterPower(-3.16, 8))
#print("expected: 9942.5243")
