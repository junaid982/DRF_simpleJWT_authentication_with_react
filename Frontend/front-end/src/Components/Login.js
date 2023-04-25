import React, { useState } from 'react'
import axios from 'axios';



export default function Login() {

  
  // login Logic

  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');

  // get username and password
 

  // create a submit method 
  const submit = (e) => {

    e.preventDefault();

    const user = {
      username :username , 
      password :password,
    }

    // alert(user['username'] +'\t' +user['password'] )
    // Create the POST requuest

    axios.post('http://192.168.0.111:8000/token/' , user)
    .then((resp) => {
      // console.log(resp.data)
      // Initialize the access & refresh token in localstorage.  
      localStorage.clear()

      localStorage.setItem('access_token' , resp.data.access);
      localStorage.setItem('refresh_token' , resp.data.refresh);

      
    }).catch((err) => {
      alert(err)
    })
    
    // console.log(localStorage)
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage['access_token']}`;
    window.location.href = '/';

  }




  const ShowPass = () => {
    let pass = document.getElementById('password');
    if (pass.type === 'password'){
      pass.type = 'text';
    }
    else{
      
      pass.type = 'password';
      
    }
  }


  // custom style 
  const MyStyle = {
    borderRadius : '15px',
    boxShadow :"10px 8px 8px gray"
  }

  return (
    <>
      <div className="container my-5 pt-5 ">
        <div className="container my-5 p-5 w-50 bg-light" style={MyStyle}>
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Email address</label>
              <input type="text" className="form-control" id="username" required onChange={event => setUsername(event.target.value)} />
              
                
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" required onChange={event => setPassword(event.target.value)}/>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="showpass" onClick={ShowPass} />
                <label className="form-check-label" htmlFor="showpass">Show Password</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
