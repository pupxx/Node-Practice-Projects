const fs = require('fs')
const _ = require('lodash');
const yargs = require('yargs')

const titleOptions = {
    describe: 'Title of note.',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note.', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .help()
    .argv;

<<<<<<< HEAD
const argv = yargs.argv;
var command = argv._[0]
=======
const notes = require('./notes.js')
>>>>>>> 4642fdb7df2b594909d3ca158796b933cfb0fc5e

var command = argv._[0];

if (command === 'list') {
    var noteList = notes.listNotes()
    console.log(`Printing ${noteList.length} notes. \n`);
    if (noteList.length > 0) {
        noteList.forEach((el) => {
            console.log('Title: ' + el.title + '\n' + 'Body: ' + el.body + '\n\n');
        })
    } else {
        console.log('There are no notes to list');
    };
} else if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note was created Successfully');
        console.log(`Title: ${note.title}`);
    } else {
        console.log('This title is already taken');
    }
} else if (command === 'read') {
    var note = notes.getNote(argv.title)
    var message = note ? `${note[0].title}\n\n${note[0].body}` : 'Note note found'
    console.log(message);
} else if (command === 'remove') {
    var item = notes.removeNote(argv.title)
    var message = item ? "Item was successuflly removed" : "Title does not exist"
    console.log(message);
} else {
    console.log('Please choose to either List, Add, or Remove a note');
}
