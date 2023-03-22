import React, { useState } from 'react'
import noteContext from './NoteContext'

const noteState = (props) => {

    return (
        <noteContext.Provider value={{}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default noteState;