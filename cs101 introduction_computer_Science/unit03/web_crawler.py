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

def get_next_target(page):
    start_link = page.find('<a href=')
    if start_link == -1:
        return None, 0
    start_quote = page.find('"', start_link)
    end_quote = page.find('"', start_quote + 1)
    url = page[start_quote + 1 : end_quote]
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

def get_all_links(page):
    links = []
    while True:
        url, endpos = get_next_target(page)
        if url:
            #print(url)
            links.append(url)
            page = page[endpos:]
        else:
            break
    return links

def get_page(page):
    import urllib2
    source = urllib2.urlopen(page)
    return source.read()

def union(p,q):
    for e in q:
        if e not in p:
            p.append(e)

link = 'http://www.udacity.com/cs101x/index.html'

# toCrawl -> list of pages to crawl
# crawled -> list of pages crawled

#print(get_all_links(get_page('http://xkcd.com/353'))[0])
#print(get_all_links(get_page(link)))


def crawl_web(seed):
    tocrawl = [seed]
    crawled = []
    while tocrawl:
        page = tocrawl.pop()
        if page not in crawled:
            new_links = get_all_links(get_page(page))
            tocrawl = tocrawl + new_links
            crawled.append(page)
    return crawled   
    

print crawl_web(get_all_links(get_page(link)))
        
            
