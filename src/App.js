
import Nav from './Components/Nav';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Tracking from './Pages/Tracking';
import ProgressBar from "@badrap/bar-of-progress";
import { useEffect } from 'react';
import Register from './Pages/Register';
import Footer from './Components/Footer';

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
  return (
    <Router>
      <RouteChangeTracker />
      <div className="min-h-screen">
        <Nav />
        <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/tracking' element={<Tracking/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
        </div>
        <div className='sticky top-[100vh]'>
          <Footer/>

        </div>
        
      </div>
    </Router>
  );
}


export default App;


