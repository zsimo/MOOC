# -*- coding: cp1252 -*-
#Backus-Naur Form:
#Expression -> Expression Operator Expression
#Expression -> Number
#Operator -> +
#Operator -> *
#Numnber -> 0,1,2,...
#Expression -> (Expression)


#print 2+2

#Assignment Statement:
#Name = Expression
#dopo l'assegnazione, la variabile riferisce al valore dell'espressione

speed_of_light = 299792458
#print speed_of_light

minutes = 60
minutes = minutes + 1
seconds = minutes * 60
#print seconds

name = "simone"
#è possibile moltiplicare una stringa con un numero
#invece, non è valido "simone" + 2 #error
#print name * 4

#selecting sub-sequence of a string
#<string>[<expression>:<expression>]
#<string>[start:stop]
word = 'assume'
#print word[0:3]
#print word[:3]

#find string in a string
#print "simone".find("y")#return the position of the first occurence

#find the first link in the page
page = '<div data-role="content" data-theme="c"><a href="#SUE_ADO1"data-role'

page = '<html xmlns="http://www.w3.org/1999/xhtml"><br/> <head><br/><title>Udacity</title> <br/></head><br/><br/><body> <br/><h1>Udacity</h1><br/><br/> <p><b>Udacity</b> is a private institution of <a href="http://www.wikipedia.org/wiki/Higher_education"> higher education founded by</a> <a href="http://www.wikipedia.org/wiki/Sebastian_Thrun">Sebastian Thrun</a>, David Stavens, and Mike Sokolsky with the goal to provide university-level education that is "both high quality and low cost".<br/>It is the outgrowth of a free computer science class offered in 2011 through Stanford University. Currently, Udacity is working on its second course on building a search engine. Udacity was announced at the 2012 <a href="http://www.wikipedia.org/wiki/Digital_Life_Design">Digital Life Design</a> conference.</p><br/></body><br/></html>'

start_link = page.find('<a href=')
start_quote = page.find('"', start_link)
end_quote = page.find('"', start_quote + 1)
url = page[start_quote + 1 : end_quote]
 
print url


start_link2 = page.find('http://www.wikipedia.org/wiki/Higher_education')
start_link3 = page.find('<a href=',start_link2)
start_quote2 = page.find('"', start_link3)
end_quote2 = page.find('"', start_quote2 + 1)
url2 = page[start_quote2 + 1 : end_quote2]
#print url2

#s = 'CidatyUcityda'
#print s[6]+s[2]+s[3]+s[7:11]

 



