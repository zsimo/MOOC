# Sudoku [http://en.wikipedia.org/wiki/Sudoku]
# is a logic puzzle where a game
# is defined by a partially filled
# 9 x 9 square of digits where each square
# contains one of the digits 1,2,3,4,5,6,7,8,9.
# For this question we will generalize
# and simplify the game.

# Define a procedure, check_sudoku,
# that takes as input a square list
# of lists representing an n x n
# sudoku puzzle solution and returns the boolean
# True if the input is a valid
# sudoku square and returns the boolean False
# otherwise.

# A valid sudoku square satisfies these
# two properties:

#   1. Each column of the square contains
#       each of the whole numbers from 1 to n exactly once.

#   2. Each row of the square contains each
#       of the whole numbers from 1 to n exactly once.

# You may assume the the input is square and contains at
# least one row and column.


test = [[1,1,1],
        [1,1,1],
        [1,1,1]]
test1 = [[1,2,3],
        [1,2,3],
        [1,2,3]]
test2 = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]]

incorrect = [[1,2,3,4],
             [2,3,1,3],
             [3,1,2,3],
             [4,4,4,4]]

incorrect2 = [[1,2,3,4],
             [2,3,1,4],
             [4,1,2,3],
             [3,4,1,2]]

incorrect3 = [[1,2,3,4,5],
              [2,3,1,5,6],
              [4,5,2,1,3],
              [3,4,5,2,1],
              [5,6,4,3,2]]

incorrect4 = [['a','b','c'],
              ['b','c','a'],
              ['c','a','b']]

incorrect5 = [ [1, 1.5],
               [1.5, 1]]
               

correct = [[1,2,3],
           [2,3,1],
           [3,1,2]]

def check_list(list):
    #l = len(list)    
    count = 1
    test = []
    for el in list:        
        if type(el) != int:
            return False
        test.append(count)
        count += 1      
    list.sort()
    if list == test:
        return True
    else:
        return False


def sum_row_col(vector):
    temp_sum = 0
    sums = []
    x_count = 0
    y_count = 0
    for x in vector:
        for y in x:
            if type(vector[x_count][y_count]) != int:
                return False
            temp_sum += vector[x_count][y_count]
            x_count += 1
        y_count += 1
        x_count = 0
        sums.append(temp_sum)
        temp_sum = 0

    return sums    


        
def check_sudoku(input):
    sum_columns = sum_row_col(input)
    condition1 = True

    for el in input:
        if not check_list(el):
            return False

    temp = 0
    counter = 0
    for el in sum_columns:
        temp += el
        if counter < (len(sum_columns)-1) and el !=\
                                              sum_columns[counter+1]:
            return False

            counter += 1
    if temp/len(sum_columns) != sum_columns[0]:
        return False

    return True

 
print check_sudoku(correct)
#>>> True    
    
print check_sudoku(incorrect)
#>>> False

print check_sudoku(incorrect2)
#>>> False

print check_sudoku(incorrect3)
#>>> False

print check_sudoku(incorrect4)
#>>> False

print check_sudoku(incorrect5)
#>>> False



