import { t } from "i18next";
import academia from "../../images/academia.png";
import moviemetricks from "../../images/moviemetricks.png";
import "./Projects.css";

import academia_logo from "../../images/academia_logo.gif";
import movie_logo from "../../images/movie_logo.png";

const Projects = () => {
    return (
        <div className="projects">
            <div className="title">
                <h1>{t("projects")}</h1>
                <div className="card">
                    <div className="card-infos">
                        <img src={academia} alt="Academia" />
                        <div className="project-infos">
                            <div className="project-title">
                                <img src={academia_logo} alt="" id="academia_logo"/>
                                <h1>Ultra Academy</h1>
                            </div>
                            <h2>{t("info_site_academia")}</h2>
                        </div>
                    </div>
                        <div className="card-infos">
                            <img src={moviemetricks} alt="Movie Metricks" />
                            <div className="project-infos">
                                <div className="project-title">
                                    <img src={movie_logo} alt="" id="movie_logo"/>
                                    <h1>Movie Metricks</h1>
                                </div>
                                <h2>{t("info_site_moviemetricks")}</h2>
                            </div>
                        </div>
                </div>
            </div>
            <div className="viewall">
                <a href="/projects">{t("view_all")}</a>
            </div>
        </div>
    );
};

export default Projects;
