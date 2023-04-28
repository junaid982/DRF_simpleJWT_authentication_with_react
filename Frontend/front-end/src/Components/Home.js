import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  // localStorage.clear()
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      window.location.href = '/login'
    } else {

      (async () => {

        try {
          const { data } = await axios.get('http://localhost:8000/home/', {headers: {
                                                                              Authorization :'Bearer '+localStorage.getItem('access_token'),
                                                                              'Content-Type': 'application/json',
                                                                              'Accept':'application/json'
                                                                            }
                                                                          }
                                            );
          
        setMessage(data.message);

        } catch (e) {
          console.log('not auth')
          alert('Authentication Fail.')
        }
      })()}


  }, [])



  return (
    <div>
      <h3>{message}</h3>
    </div>
  )
}
