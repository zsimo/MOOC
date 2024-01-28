import numpy as np

# v_B1 = np.array([2, 1])
# B_2 = np.array([
#     [0.8, -1.3],
#     [1.5, 0.3]
# ])

# v_B2 = np.linalg.inv(B_2) @ v_B1
# print(v_B2)

import numpy as np
import matplotlib.pyplot as plt

V = np.array([[1,1], [-2,2], [4,-7]])
origin = np.array([[0, 0, 0],[0, 0, 0]]) # origin point

plt.quiver(*origin, V[:,0], V[:,1], color=['r','b','g'], scale=21)
plt.show()