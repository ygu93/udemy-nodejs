console.log('Starting app.')

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true))
// console.log(_.isString('test'))
var filteredArray = _.uniq(['Andrew', 1, 'Andrew', 1,2,3,4]);
console.log(filteredArray);
// var res = notes.add(10, 11);
// console.log(res)

// var user = os.userInfo();
// 
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);