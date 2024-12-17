import { t } from "i18next";
import academia from "../images/academia.png";
import moviemetricks from "../images/moviemetricks.png";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="projects">
            <div className="title">
                <h1>{t("projects")}</h1>
                <div className="card">
                    <div className="card-infos">
                        <img src={academia} alt="Academia" />
                        <h1>Ultra Academy</h1>
                        <h2>{t("info_site_academia")}</h2>
                    </div>
                    <div className="card-item">
                        <div className="card-infos">
                            <img src={moviemetricks} alt="Movie Metricks" />
                            <h1>Movie Metricks</h1>
                            <h2>{t("info_site_moviemetricks")}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
