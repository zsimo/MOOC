__author__ = 'simo'


def odd(x):
    '''
    x: int or float.

    returns: True if x is odd, False otherwise
    '''
    # Your code here
    return not abs(int(x)) % 2 == 0

    # official solution
    # return (x % 2 == 1)


    a = 's'
    a.lower()


print(odd(82))
print(odd(2.0))