class Member(object):
    def __init__(self, founder):
        """ 
        founder: string
        Initializes a member. 
        Name is the string of name of this node,
        parent is None, and no children
        """        
        self.name = founder
        self.parent = None         
        self.children = []    

    def __str__(self):
        return self.name    

    def add_parent(self, mother):
        """
        mother: Member
        Sets the parent of this node to the `mother` Member node
        """
        self.parent = mother   

    def get_parent(self):
        """
        Returns the parent Member node of this Member
        """
        return self.parent 

    def is_parent(self, mother):
        """
        mother: Member
        Returns: Boolean, whether or not `mother` is the 
        parent of this Member
        """
        return self.parent == mother  

    def add_child(self, child):
        """
        child: Member
        Adds another child Member node to this Member
        """
        self.children.append(child)   

    def is_child(self, child):
        """
        child: Member
        Returns: Boolean, whether or not `child` is a
        child of this Member
        """
        return child in self.children 


class Family(object):
    def __init__(self, founder):
        """ 
        Initialize with string of name of oldest ancestor

        Keyword arguments:
        founder -- string of name of oldest ancestor
        """

        self.names_to_nodes = {}
        self.root = Member(founder)    
        self.names_to_nodes[founder] = self.root   
        # print(self.names_to_nodes)

    def set_children(self, mother, list_of_children):
        """
        Set all children of the mother. 

        Keyword arguments: 
        mother -- mother's name as a string
        list_of_children -- children names as strings
        """
        # convert name to Member node (should check for validity)        
        mom_node = self.names_to_nodes[mother]   
        # add each child
        for c in list_of_children:           
            # create Member node for a child   
            c_member = Member(c)               
            # remember its name to node mapping
            self.names_to_nodes[c] = c_member    
            # print(self.names_to_nodes[c])
            # set child's parent
            c_member.add_parent(mom_node)        
            # set the parent's child
            mom_node.add_child(c_member)         
    
    def is_parent(self, mother, kid):
        """
        Returns True or False whether mother is parent of kid. 

        Keyword arguments: 
        mother -- string of mother's name
        kid -- string of kid's name
        """
        mom_node = self.names_to_nodes[mother]
        child_node = self.names_to_nodes[kid]
        return child_node.is_parent(mom_node)   

    def is_child(self, kid, mother):
        """
        Returns True or False whether kid is child of mother. 

        Keyword arguments: 
        kid -- string of kid's name
        mother -- string of mother's name
        """        
        mom_node = self.names_to_nodes[mother]   
        child_node = self.names_to_nodes[kid]
        return mom_node.is_child(child_node)

    # def getAncestorList(self, member):
        # ancestorList = []
        
        # counter = 0
        
        # while member.get_parent():
            # member = member.get_parent()
            # ancestorList.append(member)
            # counter += 1
        # return ancestorList
        
    def cousin(self, a, b):
        """
        Returns a tuple of (the cousin type, degree removed) 

        cousin type is an integer that is -1 if a and b
        are the same node or if one is the direct descendent 
        of the other.  Otherwise, cousin type is 0 or greater,
        representing the shorter distance to their common 
        ancestor as described in the exercises above.

        degree removed is the distance to the common ancestor

        Keyword arguments: 
        a -- string that is the name of a
        b -- string that is the name of b
        
        
        
        """
        # def getAncestorList(self, member):
            # ancestorList = []
            
            # counter = 0
            
            # while member.get_parent():
                # member = member.get_parent()
                # ancestorList.append(member)
                # counter += 1
            # return ancestorList
        
        
        
        cousinType = None
        degree = None
        
        memberA = self.names_to_nodes[a]       
        memberB = self.names_to_nodes[b] 
        
        ancestorListA = []
        tempA = memberA
        while tempA.get_parent():
            tempA = tempA.get_parent()
            ancestorListA.append(tempA)
        
        
        ancestorListB = [] 
        tempB = memberB
        while tempB.get_parent():
            tempB = tempB.get_parent()
            ancestorListB.append(tempB)            
                               
        nameAncestorListA = []
        nameAncestorListB = []
        
        for member in ancestorListA:
            nameAncestorListA.append(member.name)
        for member in ancestorListB:
            nameAncestorListB.append(member.name)
        
        if memberA.name == memberB.name:
            cousinType = -1
        if memberA.get_parent().name == memberB.name:
            cousinType = -1
        if memberB.get_parent().name == memberA.name:
            cousinType = -1   
        
        if len(nameAncestorListA) < len(nameAncestorListB):
            cousinType = len(nameAncestorListA) - 1
        else:
            cousinType = len(nameAncestorListB) - 1
        
        degree = abs(len(ancestorListA) - len(ancestorListB)) 

        return cousinType, degree         
        
        

f = Family("a")
f.set_children("a", ["b", "c"])
f.set_children("b", ["d", "e"])
f.set_children("c", ["f", "g"])

f.set_children("d", ["h", "i"])
f.set_children("e", ["j", "k"])
f.set_children("f", ["l", "m"])
f.set_children("g", ["n", "o", "p", "q"])

words = ["zeroth", "first", "second", "third", "fourth", "fifth", "non"]

## These are your test cases. 

t, r = f.cousin("d", "g")
print "'d' is a", words[t],"cousin", r, "removed from 'g'"
print("#'d' is a first cousin 0 removed from 'g'")
print("")

t, r = f.cousin("d", "m")
print "'d' is a", words[t],"cousin", r, "removed from 'm'"
print("#'d' is a first cousin 1 removed from 'm'")
print("")

t, r = f.cousin("b", "l")
print "'b' is a", words[t],"cousin", r, "removed from 'l'"
print("#'b' is a zeroth cousin 2 removed from 'l'")
print("")

# ## The first test case should print out:
# ## 'b' is a zeroth cousin 0 removed from 'c'
t, r = f.cousin("b", "c")
print "'b' is a", words[t],"cousin", r, "removed from 'c'"
print("#'b' is a zeroth cousin 0 removed from 'c'")
print("")


## For the remaining test cases, use the graph to figure out what should 
## be printed, and make sure that your code prints out the appropriate values.

t, r = f.cousin("b", "l")
print "'b' is a", words[t],"cousin", r, "removed from 'l'"
print("correct: 'b' is a zeroth cousin 2 removed from 'l'")

# t, r = f.cousin("d", "f")
# print "'d' is a", words[t],"cousin", r, "removed from 'f'"

# t, r = f.cousin("i", "n")
# print "'i' is a", words[t],"cousin", r, "removed from 'n'"

# t, r = f.cousin("q", "e")
# print "'q' is a", words[t], "cousin", r, "removed from 'e'"

# # t, r = f.cousin("h", "c")
# # print "'h' is a", words[t], "cousin", r, "removed from 'c'"

# # t, r = f.cousin("h", "a")
# # print "'h' is a", words[t], "cousin", r, "removed from 'a'"

t, r = f.cousin("h", "h")
print "'h' is a", words[t], "cousin", r, "removed from 'h'"

# # t, r = f.cousin("a", "a")
# # print "'a' is a", words[t], "cousin", r, "removed from 'a'"
