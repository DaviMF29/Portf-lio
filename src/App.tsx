import "./App.css";
import "./i18n";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/home/Header";


import Home from "./pages/Home"; 
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="Portfolio/" element={<Home />} />
          <Route path="/Portfolio/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
