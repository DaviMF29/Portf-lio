import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './Experience.css';
import { t } from 'i18next';

const Experience = () => {
  return (
    <div className="experience">
      <h1>Experiências</h1>
      <div className="experience-item">
        <div className="lateralbar"></div>
        <div className="content">
          <h2> Davi</h2>
          <p><FaGraduationCap className="icon" />{t("graduating_davi")}</p>
          <p><FaBriefcase className="icon" />{t("internship_davi")}</p>
        </div>
      </div>
      <div className="experience-item">
        <div className="lateralbar"></div>
        <div className="content">
          <h2>Antonio Victor</h2>
          <p><FaGraduationCap className="icon" />{t("graduanting_victor")}</p>
          <p><FaBriefcase className="icon" />{t("internship_victor")}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;