const mongoose = require('mongoose')
const { Schema } = mongoose;

const notesSchema = new Schema({
    tittle: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        default: "Anonymous"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("notes", notesSchema);