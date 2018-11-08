import pymongo
import sys

connection = pymongo.Connection("mongodb://localhost", safe=True)

db=connection.question7
images = db.images
albums = db.albums

query = {'tags':'kittens'}
print images.find(query).count()



cursor_albums = albums.find()

total_images = []
for doc in cursor_albums:
	total_images += doc['images']

#print total_images

cursor_images = images.find()

counter = 0
for doc in cursor_images:
	if doc['_id'] not in total_images:
	#	images.remove({'_id': doc['_id']})
		print doc['_id']
		counter += 1
		print "*" + str(counter)


print images.find(query).count()