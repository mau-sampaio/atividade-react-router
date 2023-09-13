import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from './Home'
import Contact from './Contact'
import Beer from './Beer'
import Navbar from "./components/Navbar"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to='/home'>
          <h1>Mais do que bebidas, vamos celebrar o encontro!!</h1>
          <Navbar></Navbar>
        </Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/beer/:id" element={<Beer />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App