const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "Here is your note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: 'Note title to remove',
      demandOption: true,
      type: 'string'
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Reading your note",
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

yargs.parse();
