import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../Context/notes/NoteContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'
import { useHistory } from 'react-router-dom'

const Notes = (props) => {
    const { showAlert } = props
    let history = useHistory()
    const context = useContext(noteContext)
    const { notes, getNotes, editNote } = context

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        } else {
            history.push('/login')
        }
    }, [getNotes, history])

    const [note, setNote] = useState({ id: "", etittle: "", edescription: "", eauthor: "" })

    const ref = useRef(null)
    const refClose = useRef(null)

    const updatenote = (currentNote) => {
        setNote({ id: currentNote._id, etittle: currentNote.tittle, edescription: currentNote.description, eauthor: currentNote.author })
        ref.current.click()
    }

    const handleClick = () => {
        editNote(note.id, note.etittle, note.edescription, note.eauthor)
        refClose.current.click()
        showAlert('Note updated successfully', 'success')
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote showAlert={showAlert} />
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
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etittle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etittle" value={note.etittle} onChange={onChange} name="etittle" minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" value={note.edescription} onChange={onChange} name="edescription" minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eauthor" className="form-label">Author</label>
                                    <input type="text" className="form-control" id="eauthor" value={note.eauthor} onChange={onChange} name="eauthor" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Discard Update</button>
                            <button disabled={note.etittle.length < 0 || note.edescription.length < 0} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3'>
                <h1>Your Notes</h1>
                <div className='container'>
                    {notes.length === 0 && "No Notes to Display"}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updatenote={updatenote} showAlert={showAlert} />
                })}
            </div>
        </>
    )
}

export default Notes
