import { t } from 'i18next';
import './Card.css';
import academia from '../../images/academia.png';
import moviemetricks from '../../images/moviemetricks.png';
import posterfy from '../../images/posterfy.png';
import { FaGithub, FaPlay } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">{t("projects")}</h1>
      <p className='projects-description'>{t("projects_description")}</p>
      <div className="projects-cards">
        <div className="project-card">
          <img src={academia} alt="Academia" className="project-card-img" />
          <div className="project-card-content">
            <h1>Ultra Academy</h1>
            <h2>{t("info_site_academia")}</h2>
            <div className="action-button">
              <a href="https://davimf29.github.io/Academia/"><FaPlay /> Deploy</a>
              <a href="https://github.com/DaviMF29/Academia"><FaGithub /> GitHub</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={moviemetricks} alt="Movie Metricks" className="project-card-img" />
          <div className="project-card-content">
            <h1>Movie Metricks</h1>
            <h2>{t("info_site_moviemetricks")}</h2>
            <div className="action-button">
              <a href="https://moviemetricks.vercel.app/"><FaPlay /> Deploy</a>
              <a href="https://github.com/avictormorais/moviemetricks"><FaGithub /> GitHub</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={posterfy} alt="Posterfy" className="project-card-img" />
          <div className="project-card-content">
            <h1>Posterfy</h1>
            <h2>{t("info_site_posterfy")}</h2>
            <div className="action-button">
              <a href="https://avictormorais.github.io/posterfy/"><FaPlay /> Deploy</a>
              <a href="https://github.com/avictormorais/posterfy"><FaGithub /> GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
