config = { _id: "myReplica", members:[
          { _id : 0, host : "localhost:27001"},
          { _id : 1, host : "localhost:27002"},
          { _id : 2, host : "localhost:27003"} ]
};

rs.initiate(config);
rs.status();

// mongod --replSet myReplica --dbpath C:/data/1 --port 27001 --smallfiles --oplogSize 50
// mongod --replSet myReplica --dbpath C:/data/2 --port 27002 --smallfiles --oplogSize 50
// mongod --replSet myReplica --dbpath C:/data/3 --port 27003 --smallfiles --oplogSize 50

// terminate a mongod replica instance
// rs.stepDown(300)
// rs.status()
// rs.config()

// hw 4.4
// temp = rs.config()
// temp.members.shift()
// rs.reconfig(temp)
// homework.d()

// hw 4.5
// go to the secondary
// use local
// db.oplog.rs.find()
// Note: as the local database doesn’t replicate, it will let you query it without entering “rs.slaveOk()” first
// db.oplog.rs.stats()
// db.oplog.rs.find().sort({$natural:1}).limit(1).next().o.msg[0]