const MongoClient = require('mongodb').MongoClient;
const io = require('socket.io')(3000, { transport : ['websocket'] });
// change based on your mongodb connection instance
//MongoClient.connect("mongodb://localhost:27017")
//    .then(client => {
//        const db = client.db("notification");
//        const collection = db.collection("notification");
//        const changeStream = collection.watch([{ $project: { fullDocument: 1, operationType: 1 } }]);
//        changeStream.on("change", function(change) {
//            io.emit('new-notification', change);
//        });
//    });

//let count = 0;
// setInterval(function(){ console.log("my log");
//     count++;
//     io.emit('new-notification', {
//     title : "New Worker Compensation Regulation" + count,
//     message: "new regulation"});
// }, 3000);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('new-regulation', (msg) => {
    io.emit('new-notification', msg);
  });
});
