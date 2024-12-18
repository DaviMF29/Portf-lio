import "./App.css";
import "./i18n";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";


import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>



  );
}

export default App;
