import re



USER_RE = re.compile(r"^[a-zA-Z0-9_-]{3,20}$")

def valid_username(username):
  return USER_RE.match(username)

name = valid_username("simone rrr")

#if name:
  #print("valido")
#else:
  #print(name)


##n = 100
##i = 1
##while True:
##  i = i * 2
##  n = n + 1
##  #print(n)
##  if i > n:
##    break


##n = 100
##while n != 1:
##  if n % 2 == 0: #n is even
##    n = n/2
##  else:
##    n = 3 * n + 1
##  print(n)


##n = 100
##i = 0
##while i <= n:
##  i = i + 1
##  print(i)

text = 'aaaa'
target = 'a'
def find_last(text, target):
    index = 0
    t= 0
    
    while t < len(text):
      #print(index)
      #text = text[t:]
      output = index 
      index = text.find(target, t)
      t +=1      
      #text = text[index+1:]
    return index
##print(text.find(target))
##text = text[0:]
##print(text)
#print (find_last(text, target))

print(find_last(text, target))
def find_last(text, target):
    index = 0
    t= 0
    while index != -1:
      #text = text[t:]
      index = text.find(target, t)
      t += 1
           
    return index    




#print(find_last('aaaa', 'a'))



index = []

def add_to_index(index,keyword,url):
               
  if index:
    for elem in index:
      if elem[0] == keyword:
        elem[1].append(url)
        print(keyword)
        break
      else:
        input = [keyword, [url]]
        index.append(input)
        print (keyword)
        break

 
  else:
    input = [keyword, [url]]
    index.append(input)
    print (keyword)





add_to_index(index,'udacity','http://udacity.com')
add_to_index(index,'computing','http://acm.org')
add_to_index(index,'udacity','http://npr.org')
print index  
