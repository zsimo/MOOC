import math

def sq(x):
    return x*x

# class define a new type, a new class
# in questo caso eredita dalla classe root
# in ogni metodo viene passato come primo parametro self,
# che fa da puntatore all'oggetto
class Coordinate(object):
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __str__(self):        
        return "<"+str(self.x)+","+str(self.y)+">"
    def distance(self,other):
        return math.sqrt(sq(self.x - other.x)
                         + sq(self.y - other.y))

    def __eq__(self, other):
        # First make sure `other` is of the same type 
        assert type(other) == type(self)
        # Since `other` is the same type, test if coordinates are equal
        return self.getX() == other.getX() and self.getY() == other.getY()

    def __repr__(self):
        return 'Coordinate(' + str(self.getX()) + ', ' + str(self.getY()) + ')'                         

c = Coordinate(3,4)
Origin = Coordinate(0,0)

print(type(c))
print(isinstance(c, Coordinate))

