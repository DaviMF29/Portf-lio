import { t } from 'i18next';
import './Bio.css';

const Bio = () => {
  return (
    <section className="bio-container">
      <div className="bio-content">
        <h1 className="bio-title">DV</h1>
        <p className="bio-description">{t("about_us")}</p>
      </div>
    </section>
  );
};

export default Bio;
