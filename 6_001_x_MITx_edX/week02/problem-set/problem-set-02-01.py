### problem 01

# s = "dddsdffglgklwgl3kptoi43kgopwer"

#test = 'aeiou'
#count = 0
#
#for char in s:
#    if char in test:
#        count += 1
#
#print("Number of vowels: " + str(count))


### problem 02

s = 'boobbobboobbobboboooboboxbobbobobobobobobobzsa'
count = 0
start = 0
end = 3
test = 'bob'

for char in s:
    if end <= len(s):
        c = s[start:end]
        # print(c)
        if c == test:
            count += 1
        start += 1
        end += 1

print("Number of times bob occurs is: " + str(count))
print("expected: 12")


### problem 03


def areAlphaOrder(char1, char2):
    '''
		takes 2 char and return True if they are in alphabetical order
		if char2 is after char1 in alphabetical order or is the same char
	'''
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    index1 = alpha.index(char1)
    index2 = alpha.index(char2)
    if index2 >= index1:
        return True
    else:
        return False


s = 'azcbobobegghakl'
s = 'hfjgfhlcafboekvucpi'
s = 'abcdefghijklmnopqrstuvwxyz'
#s = 'unyqptkxnty'

out = ""
out = ""
out_array = []
char2 = ""
char2_start = 1
char2_end = 2
for char1 in s:
    if char2_end <= len(s):
        # print(s[char2_start:char2_end])
        if out == "":
            out = char1
        char2 = s[char2_start:char2_end]
        if areAlphaOrder(char1, char2):
            out += char2
            print out
            print('***')
            # print(char1)
            # print(char2)
        else:
            out_array.append(out)
            out = ""

        char2_start += 1
        char2_end += 1

# if len(out_array) == 0:
out_array.append(out)

print(out_array)
out = ""
for word in out_array:
    if out == "":
        out = word
    if len(word) > len(out):
        out = word

print("Longest substring in alphabetical order is: " + out)
# print("Longest substring in alphabetical order is: beggh")
# print("Longest substring in alphabetical order is: fhl")
# print("Longest substring in alphabetical order is: abcdefghijklmnopqrstuvwxyz")
print("Longest substring in alphabetical order is: nty")

