var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });
// 
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// })

// var newTodo = new Todo({
//     text: 'Do laundry',
//     completed: true,
//     completedAt: 1529516275
// });
// 
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// })

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

var newUser = new User({
    email: 'hunter2@gmail.com'
})

newUser.save().then(doc => console.log(doc))