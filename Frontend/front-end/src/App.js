
import './App.css';

import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Logout from './Components/Logout';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="Logout" element={<Logout />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
