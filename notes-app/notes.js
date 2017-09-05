function addNote (title, body){
    console.log('Adding note ', title, body);
}

const fs = require('fs')

function listNotes(){
    var notes = fetchNotes();
    notes.forEach((el)=>{
        console.log(el.title + '\n' + el.body + '\n\n');
    })
}

function addNote(title, body){
    var notes = fetchNotes();
    var note = {
        title,
        body
    }    
    if(checkForTitle(notes, title).length === 0){
        notes.push(note);
        sendNote(notes)
    }else{
        console.log('That title already exists.  Please try another one');
    }
}

function removeNote(title){
    var notes = fetchNotes()
    var index;
    notes.forEach(function(el, i) {
      if(el.title === title){
          console.log(i);
          index = i
      }  
    });
    notes.splice(index, 1)
    sendNote(notes)
}

function getNote(title){
    var notes = fetchNotes();
    var note = checkForTitle(notes, title);
    console.log(note[0].body);
}

// ****************  HELPER FUNCTIONS *********************

function fetchNotes(){
    try {
        var noteString = fs.readFileSync('data.json')
        return JSON.parse(noteString)
    } catch (error) {
        return []
    }
}

function checkForTitle(array, title){
  return array.filter((el)=>{
    return el.title === title
  })
}

function sendNote(array){
    fs.writeFileSync('data.json', JSON.stringify(array))
}

module.exports = {addNote, listNotes, removeNote, getNote}
