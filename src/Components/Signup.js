import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", userName: "", email: "", password: "", cpassword: "" })
    let history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, userName, email, password } = credentials
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "post",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ name, userName, email, password })
        })
        const json = await response.json()
        console.log(json);
        // if (json.success) {
        //     // save the authToken
        localStorage.setItem('token', json.authToken)
        history.push('/')
        // }
        // else {
        //     alert("invalid credentials")
        // }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container'>

                <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" value={credentials.name} id="name" placeholder="enter your name" name='name' onChange={onChange} required min={3} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required minLength={5} type="name" className="form-control" value={credentials.userName} id="userName" placeholder="enter your userName" name='userName' onChange={onChange} />

                            <label htmlFor="userName">User Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required type="email" className="form-control" value={credentials.email} id="email" placeholder="enter your email" name='email' onChange={onChange} />
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" value={credentials.password} id="password" placeholder="Password" name='password' onChange={onChange} required minLength={8} maxLength={16} />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" value={credentials.cpassword} id="cpassword" placeholder=" confirm Password" name='cpassword' onChange={onChange} required minLength={8} maxLength={16} />
                            <label htmlFor="cpassword">Confirm Password</label>
                        </div>
                        <button type="submit" className="btn btn-primary my-2" >Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
