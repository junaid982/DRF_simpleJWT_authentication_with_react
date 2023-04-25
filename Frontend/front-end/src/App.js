// import logo from './logo.svg';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import Navigations from './Components/Navigations';
import Home from './Components/Home';
import Login from './Components/Login';
import Logout from './Components/Logout';

import { Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigations />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
