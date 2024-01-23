import Nav from './Components/Nav';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Tracking from './Pages/Tracking';
import ProgressBar from "@badrap/bar-of-progress";
import { useEffect, useState } from 'react';
import Register from './Pages/Register';
import Footer from './Components/Footer';
import Axios from 'axios';
import Account from './Pages/Account';

const progress = new ProgressBar({
  size: 5,
  color: "black",
  className: "z-50",
  delay: 10
});

function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    progress.start();
    setTimeout(() => {
      progress.finish();
    }, 500);
  }, [location]);

  return null;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  //Session
  Axios.defaults.withCredentials = true;


  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/loggedin").then((response) => {
      console.log(response.data.loggedIn)
      setLoggedIn(response.data.loggedIn);
    });
  }, []);
  





  return (
    <Router>
      <RouteChangeTracker />
      <div className="min-h-screen">
        <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={loggedIn ? <Navigate to="/account" /> : <Login setLoggedIn={setLoggedIn} />} />
          <Route path='/tracking' element={<Tracking />}/>
          <Route path='/register' element={loggedIn ? <Navigate to={"/account"}/> : <Register />}/>
          <Route path='/account' element={<Account />}/>
        </Routes>
        </div>
        <div className='sticky top-[100vh]'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
