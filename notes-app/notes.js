function addNote (title, body){
    console.log('Adding note ', title, body);
}

function getAll() {
    console.log('Getting All files');
}

function read(title) {
    console.log('Reading the file', title);
}

function remove(title) {
    console.log('Removing the file with title: ', title);
}

module.exports = {addNote, getAll, read, remove}