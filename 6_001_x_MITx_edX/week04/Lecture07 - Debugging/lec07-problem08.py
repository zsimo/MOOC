def f(n):
   """
   n: integer, n >= 0.
   """
   if n == 0:
      return 1
   else:
      return n * f(n-1)
      
print(f(3))
print("expected: 6")

print(f(1))
print("expected: 1")

print(f(0))
print("expected: 1")