import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigations() {

    const [IsAuth , setIsAuth] = useState(false);

    useEffect( ()=>{
        if (localStorage.getItem('access_token') !== null )
            setIsAuth(true);
    })

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">VPnPanel</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {IsAuth ? <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link> : null} 
                            </li>
                            <li className="nav-item">
                                {IsAuth ? <Link className="nav-link" to="/">App</Link> : null}
                            </li>
                            
                        </ul>
                        <form className="d-flex">
                        {IsAuth ? <Link className="nav-link" to="/">LogOut</Link> : <Link className="nav-link" to="/login">Login</Link>}
                        </form>
                    </div>
                </div>
            </nav>

        </>

    )
}
