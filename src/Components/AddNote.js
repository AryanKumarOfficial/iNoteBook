import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/NoteContext'

const AddNote = (props) => {
    const { showAlert } = props
    const context = useContext(noteContext)
    const [note, setNote] = useState({ "tittle": "", "description": "", "author": "anonymous" })
    const { addNote } = context
    const handleClick = async(e) => {
        e.preventDefault()
        addNote(note.tittle, note.description, note.author)
        setNote({ tittle: "", description: "", author: "anonymous" })
        showAlert('Note Added Successfully', 'success')

    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div>

                <div className='container my-3'>
                    <h1 className='App'>Add new Note </h1>
                    <form >
                        <div className="mb-3">
                            <label htmlFor="tittle" className="form-label">Title</label>
                            <input type="text" className="form-control" id="tittle" aria-describedby="emailHelp" onChange={onChange} name="tittle" minLength={5} required value={note.tittle} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" onChange={onChange} name="description" minLength={5} required value={note.description} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Author</label>
                            <input type="text" className="form-control" id="author" onChange={onChange} name="author" value={note.author} />
                        </div>
                        <button disabled={note.tittle.length < 0 || note.description.length < 0} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddNote
