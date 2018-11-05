'''
Write a Python function, clip(lo, x, hi) that returns lo if x is less than lo;
hi if x is greater than hi; and x otherwise.
For this problem, you can assume that lo < hi.

Don't use any conditional statements for this problem.
Instead, use the built in Python functions min and max.
You may wish to read the documentation on min and the documentation on max,
and play around with these functions a bit in your interpreter, before beginning this problem.

This function takes in three numbers and returns a single number.

'''

# print(min(2, 23))

def clip(lo, x, hi):
    '''
    Takes in three numbers and returns a value based on the value of x.
    Returns:
     - lo, when x < lo
     - hi, when x > hi
     - x, otherwise
    '''
    return max(min(x, lo), min(x, hi), min(hi, lo))
    # official solution
    # return min(max(x, lo), hi)


print("result: " + str(clip(6.43, -9.66, 7.24)))
print("expected: 6.43")

print("result: " + str(clip(5.49, 2.09, 9.7)))
print("expected: 5.49")

print("result: " + str(clip(-2.39, 8.57, 0.41)))
print("expected: 0.41")

print("result: " + str(clip(-7.38, 0.35, -3.31)))
print("expected: -3.31")

print("result: " + str(clip(-1.92, -0.86, 4.71)))
print("expected: -0.86")
