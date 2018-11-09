import webapp2

#<form action="http://www.google.com/search">
form="""
<form action="/testform">
    <input name="q">
    <input type="submit">
</form>
"""

class MainPage(webapp2.RequestHandler):
  def get(self):
      #in app engine the default content type is 'text/html'
      #self.response.headers['Content-Type'] = 'text/plain'
      #self.response.write("Hello, Udacity!")
      self.response.write(form)

class TestHandler(webapp2.RequestHandler):
  def get(self):
    #q = self.request.get("q")
    #self.response.out.write(q)

    self.response.headers['Content-Type'] = 'text/plain'
    self.response.out.write(self.request)

app = webapp2.WSGIApplication([('/', MainPage),
                               ('/testform', TestHandler)],
                              debug=True)




