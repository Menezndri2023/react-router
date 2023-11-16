import { BrowserRouter, Link, Routes,Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <nav>
      <div className="Englobe">
        <Link to="/">Home</Link>

        <Link to="/About">About</Link>

        <Link to="/Contact">Contact</Link>
      
      </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </main>
      </BrowserRouter>
  )
}

export default App
