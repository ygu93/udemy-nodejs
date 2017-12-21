console.log('Starting app.')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0]
console.log('Command: ', command);
console.log('yargs', argv);

if (command === 'add') {
  if(notes.addNote(argv.title, argv.body)){
    console.log('add successful');
    notes.logNote(notes.addNote(argv.title, argv.body));
  }else{
    console.log('duplicate name');
  };
}else if(command === 'list') {
  notes.getAll();
}else if(command === 'read'){
  if(notes.getNote(argv.title)){
    console.log('note read')
    notes.logNote(notes.getNote(argv.title));
  }else{
    console.log('note not found')
  }
}else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}else{
  console.log('Command not recognized')
}