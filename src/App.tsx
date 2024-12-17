import "./App.css";
import "./i18n"; 

import Header from "./components/Header";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="container">
      <Header />
      <Bio />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;