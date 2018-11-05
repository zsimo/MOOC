def isPal(x):
    assert type(x) == list
    # +++
    # copy the array (clone)
    # pointing to a different place in the memory
    temp = x[:]
    temp.reverse()
    # debug03
    #print(temp, x)

    if temp == x:
        return True
    else:
        return False

def silly(n):
    result = []
    for i in range(n):        
        elem = raw_input('Enter element: ')
        result.append(elem)
        # debug02
        # print(result)

    # debug01
    # print(result)

    if isPal(result):
        print('Yes')
    else:
        print('No')

silly(2)
