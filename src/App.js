import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Skills from "./screens/Skills";
import NavBar from "./screens/NavBar";
import Projects from "./screens/Projects";
import Contact from './screens/Contact'
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? null : <NavBar />}
      <>
        <Routes>
          <Route path="/" element={<Home />} />,
          <Route path="/about" element={<About />} />,
          <Route path="/skills" element={<Skills />} />,
          <Route path="/projects" element={<Projects />} />,
          <Route path="/contact" element={<Contact />} />,
        </Routes>
      </>
    </>
  );
}

export default App;
