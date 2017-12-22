const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}
const body = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'add a new note', {
    title,
    body
  })
  .command('list', 'list all notes')
  .command('read', 'read a note', {
    title
  })
  .command('remove', 'remove a note', {
    title
  })
  .help()
  .argv;
var command = argv._[0]

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body)
  if(note){
    console.log('add successful');
    notes.logNote(note);
  }else{
    console.log('duplicate name');
  };
}else if(command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`)
  allNotes.forEach(note => console.log(notes.logNote(note)));
}else if(command === 'read'){
  let note = notes.getNote(argv.title)
  if(note){
    console.log('note read')
    notes.logNote(note);
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