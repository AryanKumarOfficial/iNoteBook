import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/notes/NoteContext'
import toast from 'react-hot-toast'


export default function NoteItem(props) {
    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note, updateNote, key } = props
    useEffect(() => {
        console.log(props);
    }, [])
    return (

        <>
            <div key={key} className="col-md-3" >
                <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description} </p>
                        <i className=" fa-solid text-danger fa-trash" onClick={() => {
                            deleteNote(note._id)
                            toast.success("Note Deleted")
                        }}
                            style={{ cursor: 'pointer' }}
                        ></i>
                        <i className="mx-3 fa-regular fa-pen-to-square text-success" onClick={() => {
                            updateNote(note)
                            toast.success("Note Updated", {
                                style: {
                                    borderRadius: '10px',
                                    background: '#333',
                                    color: '#fff',
                                },
                            })
                        }}
                            style={{ cursor: 'pointer' }}
                        ></i>
                    </div>
                    {/* <footer className="blockquote-footer ms-5">{note.author} </footer> */}

                </div>
            </div>
        </>
    )
}
