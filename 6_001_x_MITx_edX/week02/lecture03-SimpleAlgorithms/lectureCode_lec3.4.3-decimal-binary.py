# lecture 3.4, slide 3

# convert from decimal to binary

num = 30200

if num < 0:
    isNeg = True
    num = abs(num)
else:
    isNeg = False
result = ''
if num == 0:
    result = '0'
while num > 0:
    result = str(num % 2) + result
    num = num / 2
if isNeg:
    result = '-' + result

print(result)