import { Button, Container, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Movie from './Components/Movie';
import Select from './Components/Select';
import Success from './Components/Success';

import LogoImg from './assets/logo1.png';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setUser(userEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUser(null);
    navigate('/login');
  };

  return (
    <div>
      <Navbar style={{ padding: '10px' }}>
        <Navbar.Brand href="/" style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'purple' }}>
          <img src={LogoImg} alt="Logo" width="55" height="33" /> MOVIE TICKET BOX!
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button onClick={() => navigate('/login')}>Login</Button>
          )}
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/select" element={<Select />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
