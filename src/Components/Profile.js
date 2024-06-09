import React, {  useEffect, useState } from 'react'

const Profile = () => {
    const localhost = `https://backend-inotebook-ubuu.onrender.com`

    const [data, setData] = useState({})
    const fetchData = () => {
        fetch(`${localhost}/api/auth/getuser`,
            {
                method: "POST",
                headers: {
                    "auth-token": localStorage.getItem('token')
                }
            })
            .then((response) => response.json())
            .then((actualData) => {
                console.log(actualData);
                setData(actualData)
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (


        <>
            <div className="container d-flex flex-column align-items-center">
                < img src="https://scienceoxford.com/wp-content/uploads/2018/03/avatar-male.jpg" className="rounded-circle mb-3 img-thumbnail img-responsive img-profile"
                    alt="Avatar" />
            </div>
            <div className='container d-flex justify-content-center mt-4'>
                <div className="col-lg-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0 px-3">Full Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0 ps-5 ">{data.name}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0 px-3">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0 ps-5">{data.email}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0 px-3">User Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0 ps-5">{data.userName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
