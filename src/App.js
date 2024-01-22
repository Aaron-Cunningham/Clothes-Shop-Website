
import Nav from './Components/Nav';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Tracking from './Components/Tracking';
import ProgressBar from "@badrap/bar-of-progress";
import { useEffect } from 'react';

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
      <div className="App">
        <Nav />
        <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/tracking' element={<Tracking/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;


