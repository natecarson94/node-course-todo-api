const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Nate>:rain543>@ds157057.mlab.com:57057/node-todo-api'||'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};