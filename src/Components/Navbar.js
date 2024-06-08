import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function Navbar(props) {
    let location = useLocation();
    let history = useHistory();
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        history.push('/login');
        props.showAlert('logout successfully', 'success');

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNoteBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>

                        </form> : <form className="logged-in d-flex" role="search">
                            <a className="btn btn-sm btn-primary logout-btn mx-1 " onClick={handleLogout} role="button">Logout</a>
                            <Link className=" mx-1" to='/profile' role="button">< img src="https://scienceoxford.com/wp-content/uploads/2018/03/avatar-male.jpg" className="img-avtar rounded-circle mb-3 img-thumbnail img-responsive"
                                alt="Avatar" /></Link>

                        </form>}
                    </div>
                </div>
            </nav>
        </>
    )
}
