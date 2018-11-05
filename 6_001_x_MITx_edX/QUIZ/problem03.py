def Square(x):
    return SquareHelper(abs(x), abs(x))

def SquareHelper(n, x):
    if n == 0:
        return 0
    print(n)
    return SquareHelper(n-1, x) + x
    
    
print(Square(4))