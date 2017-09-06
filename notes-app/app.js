const fs = require('fs')
const _ = require('lodash');
const yargs = require('yargs').argv

const notes = require('./notes.js')

// fs.appendFile('hello.txt', 'Good Evening Cheryln', (err)=>{
//   if(err) throw err;
//   console.log('Data has been appended');
// })

var command = yargs._[0]

if(command === 'list'){
   var noteList = notes.listNotes() 
   if(noteList.length > 0){
       noteList.forEach((el) => {
           console.log(el.title + '\n' + el.body + '\n\n');
       })
   }  
   console.log('There are no notes to list'); 
}else if(command === 'add'){
    var note = notes.addNote(yargs.title, yargs.body);
    if (note) {
        console.log('Note was created Successfully');
        console.log(`Title: ${note.title}`);
    }else {
        console.log('This title is already taken');
    }
}else if(command === 'read'){
    var note = notes.getNote(yargs.title)
    var message = note ? `${note[0].title}\n\n${note[0].body}` : 'Note note found'
    console.log(message);
}else if(command === 'remove'){
    var item = notes.removeNote(yargs.title)
    var message = item ? "Item was successuflly removed" : "Title does not exist"
    console.log(message);
}else {
    console.log('Please choose to either List, Add, or Remove a note');    
}
