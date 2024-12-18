import { t } from 'i18next';
import './Card.css';
import academia from '../../images/academia.png';
import moviemetricks from '../../images/moviemetricks.png';
import posterfy from '../../images/posterfy.png';
import academia_logo from '../../images/academia_logo.gif';
import moviemetricks_logo from '../../images/movie_logo.png';
import posterfy_logo from '../../images/posterfy_logo.png';
import { FaGithub, FaPlay } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">{t("projects")}</h1>
      <p className="projects-description">{t("projects_description")}</p>
      <div className="projects-cards">
        
        {/* Ultra Academy */}
        <div className="project-card">
          <img src={academia} alt="Academia" className="project-card-img" />
          <div className="project-card-content">
            <div className="project-title-with-logo">
              <img src={academia_logo} alt="Academia Logo" className="project-logo" />
              <h1>Ultra Academy</h1>
            </div>
            <h2>{t("info_site_academia")}</h2>
            <div className="action-button">
              <a href="https://davimf29.github.io/Academia/" target="_blank" rel="noopener noreferrer">
                <FaPlay /> Deploy
              </a>
              <a href="https://github.com/DaviMF29/Academia" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Movie Metricks */}
        <div className="project-card">
          <img src={moviemetricks} alt="Movie Metricks" className="project-card-img" />
          <div className="project-card-content">
            <div className="project-title-with-logo">
              <img src={moviemetricks_logo} alt="Movie Metricks Logo" className="project-logo" />
              <h1>Movie Metricks</h1>
            </div>
            <h2>{t("info_site_moviemetricks")}</h2>
            <div className="action-button">
              <a href="https://moviemetricks.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaPlay /> Deploy
              </a>
              <a href="https://github.com/avictormorais/moviemetricks" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Posterfy */}
        <div className="project-card">
          <img src={posterfy} alt="Posterfy" className="project-card-img" />
          <div className="project-card-content">
            <div className="project-title-with-logo">
              <img src={posterfy_logo} alt="Posterfy Logo" className="project-logo" />
              <h1>Posterfy</h1>
            </div>
            <h2>{t("info_site_posterfy")}</h2>
            <div className="action-button">
              <a href="https://avictormorais.github.io/posterfy/" target="_blank" rel="noopener noreferrer">
                <FaPlay /> Deploy
              </a>
              <a href="https://github.com/avictormorais/posterfy" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
