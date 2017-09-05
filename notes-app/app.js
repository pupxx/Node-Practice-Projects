const fs = require('fs')
const _ = require('lodash');
const yargs = require('yargs').argv

const notes = require('./notes.js')

const argv = yargs.argv;
var command = argv._[0]

var command = yargs._[0]

if(command === 'list'){
    notes.listNotes()
}else if(command === 'add'){
    notes.addNote(yargs.title, yargs.body)  
}else if(command === 'read'){
    notes.getNote(yargs.title)
}else if(command === 'remove'){
    notes.removeNote(yargs.title)
}else {
    console.log('Please choose to either List, Add, or Remove a note');    
}
