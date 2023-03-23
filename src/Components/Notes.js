import React, { useContext } from 'react'
import noteContext from '../Context/notes/NoteContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

export default function Notes() {

    const context = useContext(noteContext)
    const { notes } = context
    return (
        <>
            <AddNote />
            <div className='row my-3'>
                <h1 >Your Notes</h1>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </>
    )
}
