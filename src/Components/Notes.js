import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../Context/notes/NoteContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

export default function Notes() {

    const context = useContext(noteContext)
    const { notes, getNotes, editNote } = context
    useEffect(() => {
        getNotes()
    }
        // eslint-disable-next-line
        , [])
    const [note, setNote] = useState({ "etittle": "", "edescription": "", "eauthor": "" })

    const updatenote = (currentNote) => {
        ref.current.click()
        setNote({ etittle: currentNote.tittle, edescription: currentNote.description, eauthor: currentNote.author })
    }
    const ref = useRef(null)
    const handleClick = (e) => {
        console.log("updating the note ", note
        );
        e.preventDefault()
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddNote />
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="etittle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etittle" aria-describedby="emailHelp" value={note.etittle} onChange={onChange} name="etittle" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" value={note.edescription} onChange={onChange} name="edescription" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eauthor" className="form-label">Author</label>
                                    <input type="text" className="form-control" id="eauthor" value={note.eauthor} onChange={onChange} name="eauthor" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Discard Update</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3'>
                <h1 >Your Notes</h1>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updatenote={updatenote} />
                })}
            </div>
        </>
    )
}
