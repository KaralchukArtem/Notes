const mongoose = require('mongoose');

const Public_NotesSchema = new mongoose.Schema({
    id: String,
    text: String,
    flag: Boolean
})

const Private_NotesSchema = new mongoose.Schema({
    id: String,
    text: String,
    flag: Boolean
})

const NotesSchema = new mongoose.Schema({
    public_notes: Public_NotesSchema,
    private_notes: Private_NotesSchema
})

exports.NotesSchema = NotesSchema;