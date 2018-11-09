import cgi
import webapp2


form="""
<h3>Enter some text to ROT13:</h3>
<form method="post">
  <textarea name="text" style="width: 400px; height: 200px;">%(my_text)s</textarea>
    <br>
    <br>
    <input type="submit">
</form>
"""

alfabeto = "abcdefghijklmnopqrstuvwxyz"

def swap(letter):
  capital_letter = letter.isupper()  
  index = alfabeto.find(letter.lower())

  if index == -1:
    return letter
  else:
    l = len(alfabeto)
    index = index + 13  
    if index >= l:
      index = abs(l - index)

    if capital_letter:
        return alfabeto[index].upper()
    else:
        return alfabeto[index]
    
def cripta(text):
  output = ""
  for t in text:
    output = output + swap(t)        
  return output 

# questo handler disegna la form
class MainPage(webapp2.RequestHandler):

  #valore default
  def write_form(self, text=""):
    self.response.out.write(form%{'my_text' : text})


    
  def get(self):
      #self.response.headers['Content-Type'] = 'text/plain'
      #self.response.write('Hello, webapp2 World!')
      #self.response.out.write(form)
    self.write_form()    

  def post(self):
    #self.write_form()
    text = cripta(self.request.get('text'))
    self.write_form(cgi.escape(text))
    #self.response.out.write(form%{'my_text' : text}) 


          #mapping area, map the url of the app
app = webapp2.WSGIApplication([('/', MainPage)],
                              debug=True)
