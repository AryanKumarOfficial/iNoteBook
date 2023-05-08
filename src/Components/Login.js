import { useState } from "react"
import React from 'react'
import { useHistory } from "react-router-dom";


const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "post",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // save the authToken
            localStorage.setItem('token', json.authToken)
            history.push('/')
        }
        else {
            alert("invalid credentials")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" value={credentials.email} id="email" placeholder="enter your email" name='email' onChange={onChange} />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" value={credentials.password} id="password" placeholder="Password" name='password' onChange={onChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary my-2" >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login
