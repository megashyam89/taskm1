import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>🏠 Home Page</h2>;
}
 
function About() {
  return <h2>ℹ️ About </h2>;
}

function Contact() {
  return <h2>📞 Contact Me</h2>;
}



const App = () => {
  return (
    
     <Router>

      <nav>
        <Link to="/" >Home</Link>
        <br />
        <Link to="/about" >About</Link>
        <br />
        <Link to="/contact">Contact Me</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />   
      </Routes>

     </Router>
     
  )
   
}

export default App
