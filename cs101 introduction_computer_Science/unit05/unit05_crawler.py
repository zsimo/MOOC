def get_page(page):
    try:
        import urllib2
        return urllib2.urlopen(page).read()
    except:
        return ""


def add_to_index(index, keyword, url):
    # 3 inputs:
    # - the index is a list, and each element is
    #   a list of 2 elements:
    #   - the first is a keyworn
    #   - the second is a list of url (in which the keyword appears)
    # - the new keyword is a string
    # - the new url is a string

    # if the keyword is already in the index, add the url
    # else, if the keyword is not in the index, add a new entry to the
    # index [keyword, [url, ...]]
    
    KEYWORD = 0
    URLS = 1

    if keyword in index:
        index[keyword].append(url)
    else:
        index[keyword] = [url]

            
def lookup(index, keyword):
    # list, string -> list
    
    # return a list with all the urls related to the keyword
    # or a empty list if the url is not in the index
    
    if keyword in index:        
        return index[keyword]
    else:
        return None


def add_page_to_index(index, url, content):
    # add to the index the url and all the words (as keyword) in that url
    words = content.split()

    for el in words:
        add_to_index(index, el, url)


def get_all_links(page):
    links = []
    while True:
        url,endpos = get_next_target(page)
        if url:
            links.append(url)
            page = page[endpos:]
        else:
            break
    return links


def union(p,q):
    for e in q:
        if e not in p:
            p.append(e)


def crawl_web(seed):
    tocrawl = [seed]
    crawled = []
    index = {}
    while tocrawl:
        page = tocrawl.pop()
        if page not in crawled:
            content = get_page(page)
            add_page_to_index(index, page, content)
            union(tocrawl, get_all_links(content))
            crawled.append(page)
            
    return index
    



        
        
