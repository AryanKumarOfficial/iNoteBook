import React, { useState } from 'react'
import noteContext from './NoteContext'

const noteState = (props) => {
    const userInfo = {
        "name": "Aryan",
        "email": "aryanak9163@gmail.com"
    }
    const [State, setState] = useState(userInfo)
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Kush",
                "email": "aryan.official.cse@gmail.com"
            })
        }, 5000);
    }
    return (
        <noteContext.Provider value={{ State, update }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default noteState;