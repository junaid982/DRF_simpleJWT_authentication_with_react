import React from 'react';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Navbar() {

  const [isAuth ,setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null){
      setIsAuth(true);
    }
  },[isAuth])
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="/" className="navbar-brand" ><i className="bi bi-broadcast-pin"></i></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item active">
              { isAuth ? <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link> : null}
            </li>
  
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
          {isAuth ?   <Link to="/logout" className="nav-link" >LogOut</Link> : <Link to="/login" className="nav-link" >Login</Link> }

            
          </form>
        </div>
      </nav>

    </>
  )
}
