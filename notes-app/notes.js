function addNote (title, body){
    console.log('Adding note ', title, body);
}

const fs = require('fs')

function listNotes() {
    var notes = fetchNotes();
    return notes
}

function addNote(title, body) {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    if (checkForTitle(notes, title).length === 0) {
        notes.push(note);
        sendNote(notes);
        return note
    }
}

function removeNote(title) {
    var notes = fetchNotes()
    var index = [];

    var newArray = notes.filter((el) => el.title !== title)
    sendNote(newArray)
    if (newArray.length === notes.length) {
        return false
    }
    return true
}

function getNote(title) {
    var notes = fetchNotes();
    var note = checkForTitle(notes, title);
    return note
}

// ****************  HELPER FUNCTIONS *********************

function fetchNotes() {
    try {
        var noteString = fs.readFileSync('data.json')
        return JSON.parse(noteString)
    } catch (error) {
        return []
    }
}

function checkForTitle(array, title) {
    return array.filter((el) => {
        return el.title === title
    })
}

function sendNote(array) {
    fs.writeFileSync('data.json', JSON.stringify(array))
}

function error() {
    console.log('There was an error, Please try again');
}
module.exports = { addNote, listNotes, removeNote, getNote, error, checkForTitle }
