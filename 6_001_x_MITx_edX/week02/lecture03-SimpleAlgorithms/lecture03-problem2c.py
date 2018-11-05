__author__ = 'simo'

end = 17
out = 0
counter = 0
while counter <= end:
    out += counter
    print(out)
    counter += 1

print ("result: " + str(out))
print("expected: " + str(153))

end = 17
out = 0
for temp in range(0, end + 1):
    out = out + temp
print ("result: " + str(out))
print("expected: " + str(153))