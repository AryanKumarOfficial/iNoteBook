import React, { useEffect, useState, useMemo } from 'react'
import noteContext from './NoteContext'

const NoteState = (props) => {
    const authToken = localStorage.getItem('token');
    const host = useMemo(() => process.env.REACT_APP_HOST, []);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (authToken) {
            getNotes();
        }
    }, [authToken]);

    // Get Notes
    const getNotes = async () => {
        try {
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken
                },
            });
            const json = await response.json();
            setNotes(json);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    // Add Note
    const addNote = async (title, description, author) => {
        try {
            const response = await fetch(`${host}/api/notes/addnote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken
                },
                body: JSON.stringify({ title, description, author }),
            });
            const note = await response.json();
            setNotes(prevNotes => [...prevNotes, note]);
        } catch (error) {
            console.error("Error adding note:", error);
        }
    };

    // Delete Note
    const deleteNote = async (id) => {
        try {
            await fetch(`${host}/api/notes/deletenote/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken
                },
            });
            setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    // Update Note
    const editNote = async (id, title, description, author) => {
        try {
            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken
                },
                body: JSON.stringify({ title, description, author }),
            });
            const updatedNote = await response.json();

            setNotes(prevNotes => prevNotes.map(note =>
                note._id === id ? { ...note, title, description, author } : note
            ));
        } catch (error) {
            console.error("Error updating note:", error);
        }
    };

    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    );
};

export default NoteState;
