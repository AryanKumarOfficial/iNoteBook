import React, { useState } from 'react'
import noteContext from './NoteContext'

const noteState = (props) => {
    const notesInitial = [
        {
            "_id": "641af13acd35584c516cfc36",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:50.498Z",
            "__v": 0
        },
        {
            "_id": "641af13bcd35584c516cfc38",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:51.789Z",
            "__v": 0
        },
        {
            "_id": "641af13ccd35584c516cfc3a",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:52.559Z",
            "__v": 0
        },
        {
            "_id": "641af13ccd35584c516cfc3c",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:52.977Z",
            "__v": 0
        },
        {
            "_id": "641af13dcd35584c516cfc3e",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:53.309Z",
            "__v": 0
        },
        {
            "_id": "641af13dcd35584c516cfc40",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:53.671Z",
            "__v": 0
        },
        {
            "_id": "641af13ecd35584c516cfc42",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:54.013Z",
            "__v": 0
        },
        {
            "_id": "641af13ecd35584c516cfc44",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:54.409Z",
            "__v": 0
        },
        {
            "_id": "641af13ecd35584c516cfc46",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:54.837Z",
            "__v": 0
        },
        {
            "_id": "641af13fcd35584c516cfc48",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:55.263Z",
            "__v": 0
        },
        {
            "_id": "641af13fcd35584c516cfc4a",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:55.615Z",
            "__v": 0
        },
        {
            "_id": "641af140cd35584c516cfc4c",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:56.058Z",
            "__v": 0
        },
        {
            "_id": "641af140cd35584c516cfc4e",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:56.457Z",
            "__v": 0
        },
        {
            "_id": "641af140cd35584c516cfc50",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:56.785Z",
            "__v": 0
        },
        {
            "_id": "641af141cd35584c516cfc52",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:57.136Z",
            "__v": 0
        },
        {
            "_id": "641af141cd35584c516cfc54",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:57.473Z",
            "__v": 0
        },
        {
            "_id": "641af141cd35584c516cfc56",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:57.856Z",
            "__v": 0
        },
        {
            "_id": "641af142cd35584c516cfc58",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:58.249Z",
            "__v": 0
        },
        {
            "_id": "641af142cd35584c516cfc5a",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:58.592Z",
            "__v": 0
        },
        {
            "_id": "641af143cd35584c516cfc5c",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:59.012Z",
            "__v": 0
        },
        {
            "_id": "641af143cd35584c516cfc5e",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:59.454Z",
            "__v": 0
        },
        {
            "_id": "641af143cd35584c516cfc60",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:14:59.828Z",
            "__v": 0
        },
        {
            "_id": "641af144cd35584c516cfc62",
            "user": "64155f2f311e72da79e1432d",
            "tittle": "Alert",
            "description": "okeyisneverokey",
            "author": "Anonymous",
            "date": "2023-03-22T12:15:00.275Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    // Add Note
    const addNote = (tittle, description, author) => {
        // TODo:API Call
        console.log("note added");
        const note = {
            "_id": "641af13acd35584c516cfc36",
            "user": "64155f2f311e72da79e1432d",
            "tittle": tittle,
            "description": description,
            "author": author,
            "date": "2023-03-22T12:14:50.498Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }
    // Delete Note
    const deleteNote = (id) => {
        console.log("Note Deleted with id", id);
        const newNote = notes.filter((note) => {return note._id !== id })
        setNotes(newNote)
    }

    // update note
    const updateNote = (_id) => {
        console.log("Note Updated with id", _id);
    }

    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, updateNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default noteState;