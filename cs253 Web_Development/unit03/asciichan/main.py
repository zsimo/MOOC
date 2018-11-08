#!/usr/bin/env python

# In order to be graded correctly for this homework, there are a few things to keep in mind. 
# We'll be grading your web app by POSTing new blog entries to your form and checking that 
# they appear on your blog's front page. There are a few main issues you need to keep in mind 
# in order for this to work:

# We assume your form to create new blog entries is at a path of '/newpost' from your blog's
# front page. That is, if your blog's front page is at 'www.myblog.com/blog', then the form 
# is at 'www.myblog.com/blog/newpost'. The form method must be POST, not GET. The form input 
# boxes must have the names 'subject' and 'content' in order for the grading script to correctly 
# post to them. You must enter the full url into the supplied textbox above, including the 
# path to your blog's front page. For example, our example app is running at 
# http://cs253-homework-sean.appspot.com/blog, but if we instead only entered 
# http://udacity-cs253.appspot.com/ then the grading script would not work. 
# Don't forget to escape your output!
# If you're interested in the css styling file we use for the example page, the link is here.

# per far partire una spece di phpmyamidn
# dev_appserver.py myapp

import os
import webapp2
import jinja2
import cgi
import logging
import hashlib
import hmac
SECRET = "secret"

logging.getLogger().setLevel(logging.DEBUG)

from google.appengine.ext import db

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader(template_dir),autoescape=True)


def hash_str(s):
    # return hashlib.md5(s).hexdigest()    
    return hmac.new(SECRET, s).hexdigest()

def make_secure_val(s):
    return "%s|%s" % (s, hash_str(s))

def check_secure_val(h):
    index = h.find('|')
    text = h[:index]
    my_hash = h[index+1:]
    
    if hash_str(text) == my_hash:
        return text
    
    return None

def make_salt():
    return ''.join(random.choice(string.letters) for x in xrange(5))

def make_pw_hash(name, pw, salt=None):
    if not salt:
        salt = make_salt()
        # the more secure is bcrypt
        h = hashlib.sha256(name + pw + salt).hexdigest()
        return '%s,%s' % (h, salt)

def valid_pw(name, pw, h):
    salt = h[h.find(',')+1:]
    if make_pw_hash(name, pw, salt) == h:
        return True
    return False


class Handler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.out.write(*a, **kw)

    def render_str(self, template, **params):
        t = jinja_env.get_template(template)
	return t.render(params)

    def render(self, template, **kw):
	   self.write(self.render_str(template, **kw))

    def simple_render(self, text="default_text"):
	   self.write(text)	


class Art(db.Model):
    title = db.StringProperty(required=True)    
    art = db.TextProperty(required=True)
    created = db.DateTimeProperty(auto_now_add=True)
    last_modified = db.DateTimeProperty(auto_now=True)

class Post(db.Model):
    subject = db.StringProperty(required=True)    
    content = db.TextProperty(required=True)
    date = db.DateProperty(auto_now_add=True)
    # auto_now aggiorna il valore
    created = db.DateTimeProperty(auto_now=True)

class User(db.Model):
    username = db.StringProperty(required=True)    
    password = db.StringProperty(required=True) 
    email = db.StringProperty(required=True) 
    # auto_now aggiorna il valore
    created = db.DateTimeProperty(auto_now=True)       


class BlogPage(Handler):
    def render_front(self,subject="",content="",date=""):    	
    	posts = db.GqlQuery("SELECT * from Post ORDER BY created DESC")
    	# oppure anche
    	# posts = Post.all().order('-created');
    	self.render("blog.html", subject=subject,
                                 content=content,
                                 date=date,
                                 posts=posts)
    
    def get(self):
        self.render_front()

# return the value of the blog parent in the datastore        
#def blog_key(name='default'):
 #   return db.Key.from_path('blogs', name)

class Permalink(Handler):
    def simple_render(self, text="default_text"):
	self.write(text)	
    
    def get(self, post_id):
        key = db.Key.from_path('Post', int(post_id))#, parent=blog_key())
        post = db.get(key)
        if not post:
            self.error(404)
            return
        
        self.render('permalink.html', post=post)

class Welcome(Handler):
    def get(self):
        #self.render('permalink.html', post=post)
        visits_cookie_str = self.request.cookies.get('user_id')
        if visits_cookie_str:
            cookie_val = check_secure_val(visits_cookie_str)
            if cookie_val:
                username = cgi.escape(self.request.get("username"))
                self.simple_render("Welcome, " + username + "!")
                logging.info("ok")
            else:
                self.redirect("/blog/signup")
                logging.info("no")

        

class SignUp(Handler):
    def get(self):
        #self.simple_render()
        self.render("signup.html", username="",
                              email="")
        

    def post(self):
        username = self.request.get("username")
        password = self.request.get("password")
        verify = self.request.get("verify")
        email = self.request.get("email")

        if username and password == verify:

            user = 1000
            user_cookie_str = self.request.cookies.get('user_id')
            if user_cookie_str:
                cookie_val = check_secure_val(user_cookie_str)
                if cookie_val:
                    user = int(cookie_val)

            user += 1
            new_cookie_val = make_secure_val(str(user))
            index = new_cookie_val.find('|')
            password = new_cookie_val[index+1:]
            # logging.info(password)
            # self.response.headers['Content-Type'] = 'text/plain'
            self.response.headers.add_header('Set-Cookie', 'user_id=' + new_cookie_val + ';Path=/blog/welcome')        
            

            u = User(username=username, password=password, email=email)
            u.put()
            self.redirect("/blog/welcome?username=%s" % username)

        #else:
         #   logging.info("problem")
            

class NewPost(Handler):
    def render_front(self,subject="",content="",newpost_error=""):    	
    	self.render("newpost.html", subject=subject,
                                    content=content,
                                    newpost_error=newpost_error)
        
    def get(self):
         self.render_front()

    def post(self):
    	subject = self.request.get("subject")
    	content = self.request.get("content")    	

    	if subject and content:
            #p = Post(subject=subject, content=cgi.escape(content))
            #p = Post(parent=blog_key(), subject=subject, content=content)
            p = Post(subject=subject, content=content)
            last_id = p.put()
            logging.info(str(p.key().id()))
            self.redirect("/blog/%s" % str(p.key().id()))
            
    	else:
            error = "some error"
            self.render_front(subject, content, newpost_error)
         
   

class MainPage(Handler):

    def render_front(self,title="",art="",error=""):    	
    	arts = db.GqlQuery("SELECT * from Art ORDER BY created DESC limit 10")
    	self.render("front.html", title=title,
                                  art=art,
                                  error=error,
                                  arts=arts)

    def get(self):
        # self.write('custom text!')
        # self.render("front.html")
        # self.render_front()
        
        visits = 0
        visits_cookie_str = self.request.cookies.get('visits')
        if visits_cookie_str:
            cookie_val = check_secure_val(visits_cookie_str)
            if cookie_val:
                visits = int(cookie_val)
        
        visits += 1

        new_cookie_val = make_secure_val(str(visits))
        
        self.response.headers['Content-Type'] = 'text/plain'
        self.response.headers.add_header('Set-Cookie', 'visits = %s' % new_cookie_val)        
        self.write('sei stato qui %s volte' % visits)


    def post(self):
    	title = self.request.get("title")
    	art = self.request.get("art")    	

    	if title and art:
            #self.write("thanks!")
            a = Art(title=title, art=art)
            a.put()

            self.redirect("/")
            
    	else:
            error = "some error"
            # self.render("front.html", error=error)
            self.render_front(title, art, error)



app = webapp2.WSGIApplication([('/', MainPage),
                               ('/blog', BlogPage),
                               ('/blog/newpost', NewPost),
                               ('/blog/signup', SignUp),
                               ('/blog/welcome', Welcome),
                               ('/blog/([0-9]+)', Permalink)], debug=True)










