import React, { useContext } from 'react'
import noteContext from '../Context/notes/NoteContext'


export default function NoteItem(props) {
    const { note } = props
    const context = useContext(noteContext)
    const { notes, setnotes } = context
    return (

        <>
            <div className="col-md-3" >
                <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title">{note.tittle}</h5>
                        <p className="card-text">{note.description} </p>
                        <i className=" fa-solid fa-trash" ></i>
                        <i className="mx-3 fa-regular fa-pen-to-square"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
