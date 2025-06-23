import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Portfolio from "./components/Portfolio/Portfolio"
import About from "./components/About/About"
import ContactMe from "./components/contact/ContactMe"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactMe/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
