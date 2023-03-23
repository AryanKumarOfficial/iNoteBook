import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/NoteContext'

const AddNote = () => {
    const context = useContext(noteContext)
    const [note, setNote] = useState({ "tittle": "", "description": "", "author": "" })
    const { addNote } = context
    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.tittle, note.description, note.author)
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
                            <input type="text" className="form-control" id="tittle" aria-describedby="emailHelp" onChange={onChange} name="tittle" />
                            <div id="emailHelp" className="form-text">We'll never share your notes with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" onChange={onChange} name="description" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Author</label>
                            <input type="text" className="form-control" id="author" onChange={onChange} name="author" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddNote
