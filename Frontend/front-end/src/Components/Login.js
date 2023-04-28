import React from 'react'

import { useState } from 'react';
import axios from 'axios';


export default function Login() {

  // set default username password value 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Show Password Logic CheckBox 

  const ShowPass = () => {
    const pass = document.getElementById('password');
    if (pass.type === 'password') {
      pass.type = 'text'
    }
    else {
      pass.type = 'password'
    }
  }


  // when user submit this method call 

  const submit = async (e) => {

    e.preventDefault()

    // uservalue 
    const user = {
      username: username,
      password: password
    }
    // console.log(user)

    // Create the POST request
    try {
      const resp = await axios.post('http://127.0.0.1:8000/token/', user)
      let tokenObj = resp.data
      console.log(tokenObj)

      // initialize the access and refresh token in localstorage 
      localStorage.clear();
      localStorage.setItem('access_token', tokenObj.access);
      localStorage.setItem('refresh_token', tokenObj.refresh);
      console.log(localStorage)

      axios.defaults.headers.common['Authorization'] = `Bearer ${tokenObj['access']}`;
      window.location.href = '/'
    }
    catch (e) {
      alert(e)

    }



  }


  const MyStyle = {
    borderRadius: '15px',
    boxShadow: '5px 12px 8px gray'
  }
  return (
    <div className='container my-5 '>
      <div style={MyStyle} className='container my-5 p-5 bg-light w-50' >

        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" required onChange={event => setUsername(event.target.value)} />

          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" required onChange={evenet => setPassword(evenet.target.value)} />
          </div>

          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="showpass" onClick={ShowPass} />
            <label className="form-check-label" htmlFor="showpass">Show password</label>
          </div>
          <button type="submit" className="btn btn-primary w-100" >Login</button>
        </form>

      </div >



    </div>
  )
}
