import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Accommodation from "./pages/Accommodation/Accommodation"
import Error from './pages/Error/Error'
import './style/index.css'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/accommodation/:id" element={<Accommodation/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>

  )
}

export default App
