import './App.css'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Ship from './pages/Ship'


function App() {
  return (
    <div className="App">
    <Router>
      <nav>
      <div>
        <Link to={"/"}>
        <img src="/sih/logo2.png" width={100} alt="" />
        </Link>
        <div style={{display:"flex", gap:"1rem", marginRight:"1rem", alignItems:"center"}}>
          <p>About Us</p>
          <p>Our Team</p>
          <p>Our Goal</p>
          <p>Contact Us</p>
        </div>
      </div>
    </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ship' element={<Ship />} />
        <Route path='*' element={<h1>Page Not Found!!</h1>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
