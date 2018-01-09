const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');


// const id = '5a552acbe4a140b458880e2011';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo) => {
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log("Id not found");
//     }
//     console.log('Todo by Id', todo);
// }).catch((e)=> console.log(e));

const userId = '5a5505202e1906b04bba14e1';

User.findById(userId).then((user) => {
    if (!user){
        console.log('Could not find ID');
    }
    console.log('User', user);
}).catch((e)=> console.log(e));