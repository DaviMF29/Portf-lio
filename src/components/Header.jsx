import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="header">
      <div className="header-infos">
        <a href="#projects" className="active">{t('projects')}</a>
        <a href="#about">{t('about')}</a>
      </div>
      <div className="header-icons">
        <div className="icon">
          <FaGithub size={30} />
        </div>
        <div className="icon" onClick={toggleDarkMode}>
          {darkMode ? <MdOutlineDarkMode size={30} /> : <MdOutlineLightMode size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Header;