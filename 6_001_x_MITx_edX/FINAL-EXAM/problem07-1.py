# doubly linked list

class Frob(object):
    def __init__(self, name):
        self.name = name
        self.before = None
        self.after = None
    def setBefore(self, before):
        self.before = before
    def setAfter(self, after):
        self.after = after
    def getBefore(self):
        return self.before
    def getAfter(self):
        return self.after
    def myName(self):
        return self.name
        
    def __str__(self):
    #  + " and before " +str(self.getAfter())
        return self.myName() + " is after: " +self.getBefore().myName()+" and is before: "+self.getAfter().myName()
        
# def insertBetween(before, new, after):
    # before.setAfter(new)
    # new.setBefore(before)
    # new.setAfter(after)
    
 
        
def insert(atMe, newFrob):
    """
    atMe: a Frob that is part of a doubly linked list
    newFrob:  a Frob with no links 
    This procedure appropriately inserts newFrob into the linked list that atMe is a part of.    
    """        
    # import string    
    # string.ascii_lowercase 
    
    beforeNewFrob = None
    afterNewFrob  = None
    
    if not atMe.getBefore() and newFrob.myName() < atMe.myName():
        atMe.setBefore(newFrob)
        newFrob.setAfter(atMe)
    
    elif not atMe.getAfter() and newFrob.myName() > atMe.myName():
        atMe.setAfter(newFrob)
        newFrob.setBefore(atMe)
    else:
        # nuovo va prima
        if newFrob.myName() < atMe.myName():
            beforeNewFrob = atMe.getBefore()
            afterNewFrob = atMe
            
            while beforeNewFrob.getBefore() and beforeNewFrob.getBefore().myName() < newFrob.myName():
                beforeNewFrob.setAfter(newFrob)
                newFrob.setBefore(beforeNewFrob)
                
                newFrob.setAfter(afterNewFrob)
                afterNewFrob.setBefore(newFrob)
                
                beforeNewFrob = atMe.getBefore()
                afterNewFrob = beforeNewFrob.getAfter()

        # nuovo va dopo
        if newFrob.myName() > atMe.myName():
            afterNewFrob  = atMe.getAfter()
            beforeNewFrob = atMe
            

            while afterNewFrob.getAfter() and afterNewFrob.getAfter().myName() > newFrob.myName():
                newFrob.setBefore(beforeNewFrob)
                beforeNewFrob.setAfter(newFrob)
                
                newFrob.setAfter(afterNewFrob)
                afterNewFrob.setBefore(newFrob)            
            
                afterNewFrob  = atMe.getAfter()
                beforeNewFrob = afterNewFrob.getBefore()
            if not afterNewFrob.getAfter():
                newFrob.setBefore(atMe)
                newFrob.setAfter(atMe.getAfter)
                atMe.getAfter().setBefore(newFrob)
                atMe.setAfter(newFrob)
             
        if newFrob.myName() == atMe.myName():
            newFrob.setBefore(atMe.getAfter())
            atMe.getAfter().setBefore(newFrob)
            
            atMe.setAfter(newFrob)
            newFrob.setBefore(atMe)

def explainMe(aFrob):
    temp = aFrob
    print(temp.myName())
    while temp.getAfter():
        temp = temp.getAfter()
        # print(temp.myName())
        
def findFront(start):
    """
    start: a Frob that is part of a doubly linked list
    returns: the Frob at the beginning of the linked list 
    """
    # Your Code Here
    if start.getBefore():
        print(start.getBefore().myName())
        return findFront(start.getBefore())
    else:
        return start        
        
eric = Frob('eric')
andrew = Frob('andrew')
ruth = Frob('ruth')
fred = Frob('fred')
martha = Frob('martha')          

insert(eric, andrew)
insert(eric, ruth)
# explainMe(andrew)
insert(eric, fred)
# explainMe(eric)

insert(ruth, martha)
# insert(eric, Frob('martha'))

# print(martha)
# explainMe(andrew)
findFront(ruth)
