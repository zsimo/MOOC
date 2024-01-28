import numpy as np
# A = np.array([[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]])
# B = A[[0, 2], 1:]
# print(B)
a = [1,2,3,4]
b = a[:2]
x = np.random.rand(100)
x[x > 1][:3]
# print(x)

# import matplotlib.pyplot as plt

# x = np.arange(0, 5, step=0.05)
# y = np.sin(x**2)
# plt.plot(x,y)
# plt.show()


x = np.array([[1, 2, 3], [2, 3, 4]])
x *= 5
x -= 1
x[x > 10] = 0
x = x.T
print(x)

import pdb; pdb.set_trace()
x = np.arange(5)
y = -np.arange(5)
x[y < -2] = 0
import pdb; pdb.set_trace()
x *= 9
print(x)