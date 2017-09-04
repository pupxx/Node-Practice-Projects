
const fs = require('fs')

function listNotes(){
    console.log('Listing All Notes');
}

function addNote(title, body){
    var notes = [];
    var note = {
        title,
        body
    }
    
    try {
        var noteString = fs.readFileSync('data.json')
        notes = JSON.parse(noteString)
    } catch (error) {
        console.log(error);
    }
    
    if(checkForDuplicates(notes, title).length === 0){
        console.log(`Adding note with title: ${title}, and body of: ${body} `);
        notes.push(note);
        fs.writeFileSync('data.json', JSON.stringify(notes))
    }else{
        console.log('That title already exists.  Please try another one');
    }
}

function removeNote(title){
    console.log(`removing note with title: ${title}`);
}

function getNote(title){
    console.log(`Reading note with title: ${title}`);
}

function checkForDuplicates(array, title){
  return array.filter((el)=>{
        return el.title === title
  })
}

module.exports = {addNote, listNotes, removeNote, getNote}
