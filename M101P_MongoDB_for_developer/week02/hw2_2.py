
import pymongo
import sys

# establish a connection to the database
connection = pymongo.Connection("mongodb://localhost", safe=True)

# get a handle to the school database
db=connection.students
scores = db.grades


def find():

    print "find, reporting for duty"

    query = {'type': 'homework'}
    sort_query1 = {'student_id': 1}
    sort_query2 = {'score': 1} 	

    try:

        cursor = scores.find(query)
        cursor = cursor.sort(sort_query1)
        cursor = cursor.sort(sort_query2)
			        
	#cursor = scores.find(query).skip(4)
        #cursor = cursor.limit(1)

        #cursor = cursor.sort('student_id', pymongo.ASCENDING).skip(4).limit(1)
        
        #cursor = cursor.sort([('student_id',pymongo.ASCENDING),('score',pymongo.DESCENDING)])



    except:
        print "Unexpected error:", sys.exc_info()[0]
	
    temp_id = None
    for doc in cursor:
	#if doc['student_id']	
        print doc['score']
        #print doc['student_id']
        if temp_id and doc['student_id'] != temp_id:
            print 'diverso'
            print doc['score']
            scores.remove(doc)

        #if doc['student_id']:
        temp_id = doc['student_id']



find()
