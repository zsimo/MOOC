# 6.00.1x Problem Set 7
# RSS Feed Filter

import feedparser
import string
import time
from project_util import translate_html
from Tkinter import *


#-----------------------------------------------------------------------
#
# Problem Set 7

#======================
# Code for retrieving and parsing RSS feeds
# Do not change this code
#======================

def process(url):
    """
    Fetches news items from the rss url and parses them.
    Returns a list of NewsStory-s.
    """
    feed = feedparser.parse(url)
    entries = feed.entries
    ret = []
    for entry in entries:
        guid = entry.guid
        title = translate_html(entry.title)
        link = entry.link
        summary = translate_html(entry.summary)
        try:
            subject = translate_html(entry.tags[0]['term'])
        except AttributeError:
            subject = ""
        newsStory = NewsStory(guid, title, subject, summary, link)
        ret.append(newsStory)
    return ret
#======================

#======================
# Part 1
# Data structure design
#======================

# Problem 1

# TODO: NewsStory
class NewsStory(object):
    
    def __init__(self, guid, title, subject, summary, link):
        self.guid = guid
        self.title = title
        self.subject = subject
        self.summary = summary
        self.link = link
        
    def getGuid(self):
        return self.guid
        
    def getTitle(self):
        return self.title

    def getSubject(self):
        return self.subject

    def getSummary(self):
        return self.summary

    def getLink(self):
        return self.link        

#======================
# Part 2
# Triggers
#======================

class Trigger(object):
    def evaluate(self, story):
        """
        Returns True if an alert should be generated
        for the given news item, or False otherwise.
        """
        raise NotImplementedError

# Whole Word Triggers
# Problems 2-5

# TODO: WordTrigger
class WordTrigger(Trigger):
    
    def __init__(self, word):
        self.word = word
    
    def isWordIn(self, text):
        import string
        parsedText = ""
        text = text.lower()
        for char in text:            
            if char in string.punctuation:
                # print(char)
                parsedText  += " " 
            else:
                parsedText  += char
        words = parsedText.split(" ")
        # print words
        if self.word in words:
            return True
        return False

# test = NewsStory('foo', 'myTitle', 'mySubject', 'some long summary', 'www.example.com')
# trigger = WordTrigger('prova')
# print(type(trigger))
# text = "simone prova'j deffkefj"
# print(trigger.isWordIn(text))
        
# TODO: TitleTrigger
class TitleTrigger(WordTrigger):
    
    def evaluate(self, story):
        """
        Returns True if an alert should be generated
        for the given news item, or False otherwise.
        """
        # out = WordTrigger(self.word).isWordIn(story.getTitle())
        # print("***")
        # print(self.word)
        # print(story.getTitle())
        return WordTrigger(self.word.lower()).isWordIn(story.getTitle())

# story=NewsStory('', 'Koala bears are soft and cuddly', '', '', '')
# t1 = TitleTrigger('soft')
# print(t1.evaluate(story))  


# TODO: SubjectTrigger
class SubjectTrigger(WordTrigger):

    def evaluate(self, story):
        """
        Returns True if an alert should be generated
        for the given news item, or False otherwise.
        """
        return WordTrigger(self.word.lower()).isWordIn(story.getSubject())
    
# story=NewsStory('unique Guid', 'catchy Title', 'catchy random Subject', 'amazing Summary', 'Link to nowhere')
# t1=SubjectTrigger('catchy')
# print(t1.evaluate(story))   
    
# TODO: SummaryTrigger
class SummaryTrigger(WordTrigger):

    def evaluate(self, story):
        """
        Returns True if an alert should be generated
        for the given news item, or False otherwise.
        """
        return WordTrigger(self.word.lower()).isWordIn(story.getSummary())

    
    
# Composite Triggers
# Problems 6-8

# TODO: NotTrigger
class NotTrigger(Trigger):
    def __init__(self, Trigger):
        self.trigger = Trigger
        
    def evaluate(self, story):
        """
        Returns True if an alert should be generated
        for the given news item, or False otherwise.
        """
        return not self.trigger.evaluate(story)


# TODO: AndTrigger
class AndTrigger(Trigger):
    def __init__(self, Trigger1, Trigger2):
        self.trigger1 = Trigger1
        self.trigger2 = Trigger2
        
    def evaluate(self, story):
        """
        Returns True if an alert should be generated
        for the given news item, or False otherwise.
        """
        return self.trigger1.evaluate(story) and self.trigger2.evaluate(story)


# TODO: OrTrigger
class OrTrigger(Trigger):
    def __init__(self, Trigger1, Trigger2):
        self.trigger1 = Trigger1
        self.trigger2 = Trigger2
        
    def evaluate(self, story):
        """
        Returns True if an alert should be generated
        for the given news item, or False otherwise.
        """
        return self.trigger1.evaluate(story) or self.trigger2.evaluate(story)


# Phrase Trigger
# Question 9

# TODO: PhraseTrigger
class PhraseTrigger(Trigger):
    
    def __init__(self, phrase):
        self.phrase = phrase
        
    def evaluate(self, story):
        """
        Returns True if an alert should be generated
        for the given news item, or False otherwise.
        """
        return self.phrase in story.getSummary() or self.phrase in story.getTitle() or self.phrase in story.getSubject() 


#======================
# Part 3
# Filtering
#======================

def filterStories(stories, triggerlist):
    """
    Takes in a list of NewsStory instances.

    Returns: a list of only the stories for which a trigger in triggerlist fires.
    """
    # TODO: Problem 10
    # This is a placeholder (we're just returning all the stories, with no filtering) 
    out = []    
    for story in stories:        
        for trigger in triggerlist:
            # print(trigger.evaluate(story))
            # print("ok")
            # try:
            # print(trigger)
            if trigger.evaluate(story) and story not in out:                
                out.append(story)
                # break
            # except ValueError:
                # print "Oops!  That was no valid number.  Try again..."
                
    return out

#======================
# Part 4
# User-Specified Triggers
#======================

def makeTrigger(triggerMap, triggerType, params, name):
    """
    Takes in a map of names to trigger instance, the type of trigger to make,
    and the list of parameters to the constructor, and adds a new trigger
    to the trigger map dictionary.

    triggerMap: dictionary with names as keys (strings) and triggers as values
    triggerType: string indicating the type of trigger to make (ex: "TITLE")
    params: list of strings with the inputs to the trigger constructor (ex: ["world"])
    name: a string representing the name of the new trigger (ex: "t1")

    Modifies triggerMap, adding a new key-value pair for this trigger.

    Returns a new instance of a trigger (ex: TitleTrigger, AndTrigger).
    """
    # TODO: Problem 11
    #print(triggerMap)
    # print("type: " +triggerType)
    # print("params: " + params)
    # print("name: " + name)
    # print("*******")
    
    if triggerType == "SUBJECT":
        triggerMap[name] = SubjectTrigger(params[0])
    elif triggerType == "TITLE":
        triggerMap[name] = TitleTrigger(params[0])
    elif triggerType == "SUMMARY":
        triggerMap[name] = SummaryTrigger(params[0])
    elif triggerType == "NOT":
        triggerMap[name] = NotTrigger(triggerMap[params[0]])
    elif triggerType == "AND":
        triggerMap[name] = AndTrigger(triggerMap[params[0]], triggerMap[params[1]])
    elif triggerType == "OR":
        triggerMap[name] = OrTrigger(triggerMap[params[0]], triggerMap[params[1]])
    elif triggerType == "PHRASE":
        phrase = ""
        for word in params:
            phrase += word + " "
        phrase = phrase[:-1]
        triggerMap[name] = PhraseTrigger(phrase)
        # print(phrase)
    # print(type(triggerMap[name]))
    
    # print(name)
    return triggerMap[name] 

def readTriggerConfig(filename):
    """
    Returns a list of trigger objects
    that correspond to the rules set
    in the file filename
    """

    # Here's some code that we give you
    # to read in the file and eliminate
    # blank lines and comments
    triggerfile = open(filename, "r")
    all = [ line.rstrip() for line in triggerfile.readlines() ]
    lines = []
    for line in all:
        if len(line) == 0 or line[0] == '#':
            continue
        lines.append(line)

    triggers = []
    triggerMap = {}

    # Be sure you understand this code - we've written it for you,
    # but it's code you should be able to write yourself
    for line in lines:
        
        linesplit = line.split(" ")
        # print(linesplit)    
            
        # Making a new trigger
        if linesplit[0] != "ADD":
            # print(triggerMap)
            
            trigger = makeTrigger(triggerMap, linesplit[1],
                                  linesplit[2:], linesplit[0])
            # print(trigger)
        # Add the triggers to the list
        else:
            for name in linesplit[1:]:
                print(name)
                triggers.append(triggerMap[name])
    # print(triggerMap)
    return triggers
    
    
import thread

SLEEPTIME = 60 #seconds -- how often we poll


def main_thread(master):
    # A sample trigger list - you'll replace
    # this with something more configurable in Problem 11
    try:
        # These will probably generate a few hits...
        t1 = TitleTrigger("Obama")
        t2 = SubjectTrigger("Romney")
        t3 = PhraseTrigger("Obama")
        t4 = OrTrigger(t2, t3)
        # triggerlist = [t1, t4]
        triggerlist = [t4]
        # print(triggerlist[0])
        
        # TODO: Problem 11
        # After implementing makeTrigger, uncomment the line below:
        # triggerlist = readTriggerConfig("triggers.txt")
        print(triggerlist)
      

        # **** from here down is about drawing ****
        frame = Frame(master)
        frame.pack(side=BOTTOM)
        scrollbar = Scrollbar(master)
        scrollbar.pack(side=RIGHT,fill=Y)
        
        t = "Google & Yahoo Top News"
        title = StringVar()
        title.set(t)
        ttl = Label(master, textvariable=title, font=("Helvetica", 18))
        ttl.pack(side=TOP)
        cont = Text(master, font=("Helvetica",14), yscrollcommand=scrollbar.set)
        cont.pack(side=BOTTOM)
        cont.tag_config("title", justify='center')
        button = Button(frame, text="Exit", command=root.destroy)
        button.pack(side=BOTTOM)

        # Gather stories
        guidShown = []
        def get_cont(newstory):
            if newstory.getGuid() not in guidShown:
                cont.insert(END, newstory.getTitle()+"\n", "title")
                cont.insert(END, "\n---------------------------------------------------------------\n", "title")
                cont.insert(END, newstory.getSummary())
                cont.insert(END, "\n*********************************************************************\n", "title")
                guidShown.append(newstory.getGuid())

        while True:

            print "Polling . . .",
            # Get stories from Google's Top Stories RSS news feed
            stories = process("http://news.google.com/?output=rss")

            # Get stories from Yahoo's Top Stories RSS news feed
            stories.extend(process("http://rss.news.yahoo.com/rss/topstories"))

            # Process the stories            
            stories = filterStories(stories, triggerlist)           

            map(get_cont, stories)
            scrollbar.config(command=cont.yview)


            print "Sleeping..."
            time.sleep(SLEEPTIME)

    except Exception as e:
        print e


if __name__ == '__main__':
    root = Tk()
    root.title("Some RSS parser")
    thread.start_new_thread(main_thread, (root,))
    root.mainloop()

