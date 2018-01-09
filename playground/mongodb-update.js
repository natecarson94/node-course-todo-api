// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
       return console.log('unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5a54d7dc1496eb139771afdb')
// },{
//     $set: {
//         completed: true
//     }
// },{
//     returnOriginal: false
// }).then((result)=>{
//     console.log(result);
// })

db.collection('Users').findOneAndUpdate({name: 'Mike'},{
    $set:{
        name: 'Nate'
    },
    $inc:{
        age: 1
    }
}, {
    returnOriginal: false
});

    // db.close();
});