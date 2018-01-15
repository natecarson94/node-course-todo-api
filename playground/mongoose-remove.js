const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

Todo.findByIdAndRemove('5a5cf2537084d19e00fcd20c').then((todo)=>{
    console.log(todo);
});