use enron;

//db.messages.findOne()

var query = {'headers.Message-ID': '<8147308.1075851042335.JavaMail.evans@thyme>'};

// db.messages.find({'headers.Message-ID': '<8147308.1075851042335.JavaMail.evans@thyme>'}).pretty()

// db.messages.update(query,{$push: { "headers.To": "mrpotatohead@10gen.com" }})

db.messages.update(query,{$push: { "headers.To": "mrpotatohead@mongodb.com" }})
