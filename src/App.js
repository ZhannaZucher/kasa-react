import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Accommodation from "./pages/Accommodation/Accommodation"
import Error from "./pages/Error/Error"

let baseURL = ""
if (process.env.NODE_ENV === "production") {
  baseURL = "Kasa/"
} else {
  baseURL = "/"
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path={baseURL + ""} element={<Home />} />
        <Route path={baseURL + "about"} element={<About />} />
        <Route
          path={baseURL + "accommodation/:id"}
          element={<Accommodation />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
