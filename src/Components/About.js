import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/notes/NoteContext'
const About = () => {
    const userData = useContext(noteContext)
    useEffect(() => {
        userData.update();
    }
    )

    return (
        <>
            <div className='container my-3'>
                <h1 className='App'>This is About {userData.State.name}<br />and his email is {userData.State.email}</h1>
            </div>
        </>
    )
}
export default About
