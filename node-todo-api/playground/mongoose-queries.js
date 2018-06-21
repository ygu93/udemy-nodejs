const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } =  require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = "5b2c2e15125b69488384e0f4";

// if(!ObjectID.isValid(id){
//     console.log('ID not valid');
// })
// 
// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log('Todos', todos);
// })
// 
// Todo.findOne({
//     _id: id
// }).then(todo => {
//     console.log('Todo', todo)
// })
// 
// Todo.findById(id).then(todo => {
//     console.log('Todo By Id', todo)
// })

var userID = "5b2a94bf912a18532cd37948";
User.findById(userID).then(user => {
    if(!user){
        console.log('none found')
        return;
    }
    console.log('User By ID', user)
}).catch(e => console.log(e))