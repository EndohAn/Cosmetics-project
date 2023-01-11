import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";


function App() {
  return (
  
  <Router>
    <nav>
      <Link to ="/" className="link">Home</Link>
      <Link to ="/about" className="link">About</Link>
      <Link to ="/contact" className="link">Contact</Link>
    
    </nav>
  <Routes>

  <Route path ="/about" element ={<About/>}/>
  <Route path ="/" element ={<Home/>}/>
  <Route path ="/contact" element ={<Contact/>}/>

 </Routes>
 </Router> 

 

  )

}

export default App;
