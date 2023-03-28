import React, { useState } from 'react'
import noteContext from './NoteContext'

const noteState = (props) => {
    const host = "http://localhost:5000"
    const authToken = null
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
    // Get Notes

    const getNotes = async () => {
        console.log("note added");

        // API CALL

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxY2NkZTU4Mzg0ZDkwNzBiNzU1NWY0In0sImlhdCI6MTY3OTYwOTMzNn0.tPUn_pPf59TO2t6aqaeCjs0kxyMIItFhkV4iOm2HV4I"
            },
        });
        const json = await response.json();
        console.log(json);
        setNotes(json)
    }

    // Add Note
    const addNote = async (tittle, description, author) => {
        console.log("note added");

        // API CALL

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxY2NkZTU4Mzg0ZDkwNzBiNzU1NWY0In0sImlhdCI6MTY3OTYwOTMzNn0.tPUn_pPf59TO2t6aqaeCjs0kxyMIItFhkV4iOm2HV4I"
            },
            body: JSON.stringify({ tittle, description, author }),
        });
        const json = response.json();

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
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote)
    }

    // update note
    const updateNote = async (id, tittle, description, author) => {
        console.log("Note Updated with id", id);

        // API CALL

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxY2NkZTU4Mzg0ZDkwNzBiNzU1NWY0In0sImlhdCI6MTY3OTYwOTMzNn0.tPUn_pPf59TO2t6aqaeCjs0kxyMIItFhkV4iOm2HV4I"
            },
            body: JSON.stringify({ tittle, description, author }),
        });
        const json = response.json();


        // LOGIC TO UPDATE NOTES
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.tittle = tittle
                element.description = description
                element.author = author
            }
        }
    }

    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, updateNote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default noteState;