// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
       return console.log('unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find(
    //     {_id: new ObjectID('5a4f8014c6e4103c84d30e2b')
    //     }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos', err)
    // });

    
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log('Todos');
    //     console.log(`Todos count: ${count}`)
    // },(err)=>{
    //     console.log('Unable to fetch todos', err)
    // });


    db.collection('Users').find({name:'Nate'}).toArray().then((res)=>{
        console.log(JSON.stringify(res,undefined,2));
    }, (err)=>{
        console.log('woops',err);
    })
    

    // db.close();
});