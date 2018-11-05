
class Queue():
    
    def __init__(self):
        self.vals = []
        
        
    def insert(self, new):
        self.vals.append(new)
    
    # pops remove the oldest element
    def remove(self):
        
        try:
            return self.vals.pop(0)
        except:
            raise ValueError()
        

q1 = Queue()
q2 = Queue()
q1.insert(17)
q2.insert(20)
q1.remove()
q2.remove()        
        

# queue = Queue()
# queue.insert(5)
# queue.insert(6)
# queue.remove()
# queue.insert(7)
# queue.remove()
# queue.remove()
# queue.remove()
# Traceback (most recent call last):
  # File "<stdin>", line 26, in <module>
  # File "queue.py", line 15, in remove
    # raise ValueError()
# ValueError