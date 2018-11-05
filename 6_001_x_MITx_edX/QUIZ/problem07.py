def McNuggets(n):
    """
    n is an int

    Returns True if some integer combination of 6, 9 and 20 equals n
    Otherwise returns False.
    """
    # Your Code Here
    # import random
    comb = [6, 9, 20, 0]
    sanity = 0
    
    if n%6 == 0:
        return True
    if n%9 == 0:
        return True
    if n%20 == 0:
        return True 
    # if n == 6:
        # return True
    # if n == 9:
        # return True
    # if n == 20:
        # return True
    # if n < 6:
        # return False
       
   
 
    for a in range(0, n/3):
        for b in range(0, n/5):
            for c in range(0, n/10):
                #print(str(6*a)+" " + str(9*b) + " " +str(20*c) + " = " + str((6*a)+(9*b)+(20*c)))
                if (6*a) + (9*b) + (20*c) == n:                
                    return True
                if  a > 6:
                    a = 0
                if  b > 9:
                    b = 0
                if  c > 20:
                    c = 0
                    
                

    return False
    

print(McNuggets(5))
print("expected: False")      
print(McNuggets(6+6+6+6+6))
print("expected: True")        
print(McNuggets(6))
print("expected: True")    
print(McNuggets(15))
print("expected: True")
print(McNuggets(16))
print("expected: False")
print(McNuggets(35))
print("expected: True")
print(McNuggets(16))
print("expected: False")
    
