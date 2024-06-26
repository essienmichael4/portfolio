import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";

function App() {

  return (
    <>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/projects/:name" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
