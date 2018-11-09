# -----------
# User Instructions
# 
# Modify the valid_month() function to verify 
# whether the data a user enters is a valid 
# month. If the passed in parameter 'month' 
# is not a valid month, return None. 
# If 'month' is a valid month, then return 
# the name of the month with the first letter 
# capitalized.
#

months = ['January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December']

def valid_month(month):
        
    short_input = month.lower()[:3]
    
    for m in months:
        
        if short_input == m.lower()[:3]:
            return m
        
    return None
#print valid_month("febrUary")

#single substitution
text = "frase %s etc etc"
s = 'running'
#print text %s

#multiple substitution
given_string2 = "I'm %(nickname)s. My real name is %(name)s, but my friends call me %(nickname)s."
def sub_m(name, nickname):
    return given_string2 % {'nickname': nickname, 'name':name}
    

#print sub_m("Mike", "Goose")

alfabeto = "abcdefghijlmnopqrstuvwxyz"
def swap(letter):
  index = alfabeto.find(letter)
  l = len(alfabeto)
  index = index + 13
  if index > l:
    index = l - index
  print l      
  #return alfabeto[index]

def cripta(text):
  output = ""
  for t in text:
    output = output + swap(t)        
  return output

print cripta("simone")
