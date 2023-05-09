import React, { useState } from 'react'
import noteContext from './NoteContext'

const noteState = (props) => {
    const host = `https://backend-inotebook-ubuu.onrender.com`
    const authToken = localStorage.getItem('token')
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)


    // get user details


    // Get Notes

    const getNotes = async () => {

        // API CALL

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken
            },
        });
        const json = await response.json();
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
                "auth-token": authToken
            },
            body: JSON.stringify({ tittle, description, author }),
        });
        const note = await response.json();
        setNotes(notes.concat(note))
    }
    // Delete Note
    const deleteNote = async (id) => {
        console.log("Note Deleted with id", id);

        // API CALL

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken
            },
        });
        const json = response.json();
        console.log(json);

        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote)
    }

    // update note
    const editNote = async (id, tittle, description, author) => {

        console.log("Note Updated with id", id);

        // API CALL

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken
            },
            body: JSON.stringify({ tittle, description, author }),
        });
        const json = await response.json();
        console.log(json);


        let newNotes = JSON.parse(JSON.stringify(notes))
        // LOGIC TO UPDATE NOTES
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].tittle = tittle
                newNotes[index].description = description
                newNotes[index].author = author
                break;
            }

        }
        setNotes(newNotes);
    }


    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default noteState;