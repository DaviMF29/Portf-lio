import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <h1>Experiências</h1>
      <div className="experience-item">
        <div className="lateralbar"></div>
        <div className="content">
          <h2> Davi</h2>
          <p><FaGraduationCap className="icon" />Formado em Ciência da Computação</p>
          <p><FaBriefcase className="icon" />Atualmente em um estágio em desenvolvimento de software</p>
        </div>
      </div>
      <div className="experience-item">
        <div className="lateralbar"></div>
        <div className="content">
          <h2>Antonio Victor</h2>
          <p><FaGraduationCap className="icon" />Estudante de Ciência da Computação (P8)</p>
          <p><FaBriefcase className="icon" />Atualmente em um estágio na Compass UOL</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;