import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/NoteContext'
import toast from 'react-hot-toast'

const AddNote = (props) => {
    const { showAlert } = props
    const context = useContext(noteContext)
    const [note, setNote] = useState({ "title": "", "description": "", "author": "anonymous" })
    const { addNote } = context
    const handleClick = async (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.author)
        setNote({ title: "", description: "", author: "anonymous" })
        toast.success("Note Added", {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },

        })

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
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" aria-describedby="emailHelp" onChange={onChange} name="title" minLength={5} required value={note.title} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" onChange={onChange} name="description" minLength={5} required value={note.description} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Author</label>
                            <input type="text" className="form-control" id="author" onChange={onChange} name="author" value={note.author} />
                        </div>
                        <button disabled={note.title.length < 0 || note.description.length < 0} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddNote
