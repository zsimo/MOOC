"""
page = 'content of some web page'
start_link = page.find('<a href=')
start_quote = page.find('"', start_link)
end_quote = page.find('"', start_quote + 1)
url = page[start_quote + 1 : end_quote]
"""

# 1 procedure abstaction:
# in python
# def <name> (<parameters>):
#    <block>

page = '''
        <html> <body> This is a test page for learning to crawl! 
        <p> It is a good idea to
        <a href="http://www.udacity.com/cs101x/crawling.html">learn to
        crawl</a> before you try to
        <a href="http://www.udacity.com/cs101x/walking.html">walk</a>
        or  <a href="http://www.udacity.com/cs101x/flying.html">fly</a>.
        </p> </body> </html>
        '''

def get_next_target(s):
    start_link = s.find('<a href=')
    #print start_link
    #print page[start_link]
    
    start_quote = s.find('"', start_link)
    #print start_quote
    #print page[start_quote]
    
    end_quote = s.find('"', start_quote + 1)
    url = s[start_quote + 1 : end_quote]
    return url, end_quote



def sum(a,b):
    a = a + b


def find_second(text, target):
    index = text.find(target)
    text = text[index:]
    return text.find(target)


def print_all_links(page):
    while True:
        url, endpos = get_next_target(page)
        if url:
            print(url)
            page = page[endpos:]
        else:
            break

def get_page(page):
    import urllib2
    source = urllib2.urlopen(page)
    return source.read()        

#print(print_all_links(get_page('http://xkcd.com/353')))
print(print_all_links(page))
#get_next_target(page)        
            
