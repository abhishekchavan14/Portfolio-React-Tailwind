import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Cursor from "./Cursor"

function App() {
  return (
    <>
    <Cursor />
    <Navbar/>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact-me" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
