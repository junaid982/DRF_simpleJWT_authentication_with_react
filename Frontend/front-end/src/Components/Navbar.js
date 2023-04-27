import React from 'react';

import { Link } from 'react-router-dom';


export default function Navbar() {
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
              <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
            </li>
  
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
          <Link to="/login" className="nav-link" >Login</Link>   <Link to="/logout" className="nav-link" >LogOut</Link>

            
          </form>
        </div>
      </nav>

    </>
  )
}
