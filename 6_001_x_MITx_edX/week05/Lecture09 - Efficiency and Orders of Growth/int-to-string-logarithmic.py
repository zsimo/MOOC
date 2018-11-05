    
def intToStr(i):
    digits = '0123456789'
    if i == 0:
        return '0'
    result = ''
    while i > 0:
        print(result)
        result = digits[i%10] + result
        i = i/10
    return result
    
print(intToStr(26584382923850839))