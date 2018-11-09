import cgi
import webapp2


form="""
<form method="post">
    What is your birthday?
    <br>
    <label>Month
      <input type="text" name="month" value="%(month)s">
    </label>
    <label>Day
      <input type="text" name="day" value="%(day)s">
    </label>
    <label>Year
      <input type="text" name="year" value="%(year)s">
    </label>
    <div style="color:red;">%(error)s</div>
    <br>
    <br>
    <input type="submit">
</form>
"""

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

def valid_day(day):
  if day.isdigit():
    input = int(day)
    if input > 0 and input < 32:
      return input    
  return None

def valid_year(year):
  if year and year.isdigit():
    year = int(year)
    if year > 1900 and year < 2020:
      return year


# questo handler disegna la form
class MainPage(webapp2.RequestHandler):

  #valore default
  def write_form(self, error="", month="", day="", year=""):
    self.response.out.write(form % {'error' : error,
                                    'month' : cgi.escape(month),
                                    'day' : cgi.escape(day),
                                    'year' : cgi.escape(year)})
     
  
  def get(self):
      #self.response.headers['Content-Type'] = 'text/plain'
      #self.response.write('Hello, webapp2 World!')
      #self.response.out.write(form)
    self.write_form()    

  def post(self):
    #self.response.out.write("thnaks te date is valid")
    user_month = self.request.get('month')
    user_day = self.request.get('day')
    user_year = self.request.get('year')

    month = valid_month(user_month)
    day = valid_day(user_day)
    year = valid_year(user_year)

    if not (month and day and year):
      #self.response.out.write(form)
      self.write_form('ERROR: valori inseriti non validi',
                      user_month,
                      user_day,
                      user_year)
    else:
      #self.response.out.write("Thanks, tutto rego!!")
      self.redirect("/thanks")


class ThanksHandler(webapp2.RequestHandler):
  def get(self):
    self.response.out.write("Thanks, tutto rego!!")    



          #mapping area, map the url of the app
app = webapp2.WSGIApplication([('/', MainPage), ('/thanks', ThanksHandler)],
                              debug=True)
