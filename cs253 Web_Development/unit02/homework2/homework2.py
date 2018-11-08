import cgi
import webapp2
import re


form="""
<h3>Signup</h3>
<br>

<form method="post">    
    <label>Username
      <input type="text" name="username" value="%(username)s">
    </label>
    <span style="color:red;">%(error1)s</span>
    <br>
    <label>Password
      <input type="password" name="password" value="%(password)s">
    </label>
    <span style="color:red;">%(error2)s</span>
    <br>
    <label>Verify Password
      <input type="password" name="verify" value="%(re_password)s">
    </label>
    <span style="color:red;">%(error3)s</span>
    <br>
    <label>Email (optional)
      <input type="mail" name="email" value="%(mail)s">
    <span style="color:red;">%(error4)s</span>
    
    <br>
    <br>
    <input type="submit">
</form>

"""

USER_RE = re.compile(r"^[a-zA-Z0-9_-]{3,20}$")
PASS_RE = re.compile(r"^.{3,20}$")
MAIL_RE = re.compile(r"^[\S]+@[\S]+\.[\S]+$")

def valid_username(username):
  return USER_RE.match(username)

def valid_password(password):
  return PASS_RE.match(password)

def valid_mail(mail):
  if mail == '':
    return true
  else:
    return MAIL_RE.match(mail)

# questo handler disegna la form
class MainPage(webapp2.RequestHandler):


  #valore default
  def write_form(self, error1="", error2="", error3="", error4="", username="", password="",\
                 re_password="", mail=""):
    self.response.out.write(form % {'error1' : error1,
                                    'error2' : error2,
                                    'error3' : error3,
                                    'error4' : error4,
                                    'username' : username,
                                    'password' : password,
                                    're_password' : re_password,
                                    'mail' : mail})
  
    
  def get(self):
      #self.response.headers['Content-Type'] = 'text/plain'
      #self.response.write('Hello, webapp2 World!')
      #self.response.out.write(form)
    self.write_form()
    #self.render(page.html)

  def post(self):
    username = self.request.get('username')
    v_username = valid_username(self.request.get('username'))
    password = self.request.get('password')
    v_password = valid_password(self.request.get('password'))
    re_password = self.request.get('verify')
    v_re_password = valid_password(self.request.get('verify'))
    mail = self.request.get('email')
    v_mail = valid_mail(self.request.get('email'))

    if v_username and v_password and v_re_password and password==re_password and v_mail:
      self.redirect("/login?username="+username)         
    else:
      if v_username == None:
        error1 = "That's not a valid username."
      else:
        error1 = ""

      if password != "" and v_password == None:
        error2 = "That wasn't a valid password."
      else:
        error2 = ""

      if password != re_password:
        error3 = "Your passwords didn't match."
        error2 = ""
      else:
        error3 = ""

      if mail != "" and v_mail == None:
        error4 = "That wasn't a valid email."
      else:
        error4 = ""

      if password == "":        
        error2 = "That wasn't a valid password."

      if username == "":        
        error1 = "That's not a valid username."


      self.write_form(error1, error2, error3, error4, \
                            username, password, re_password, mail) 

  
class LoginHandler(webapp2.RequestHandler):
  def get(self):
    username = self.request.get('username')
    self.response.out.write("Welcome, "+username+"!")       


          #mapping area, map the url of the app
app = webapp2.WSGIApplication([('/', MainPage), ('/login', LoginHandler)],
                              debug=True)
