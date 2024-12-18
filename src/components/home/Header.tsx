import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom se estiver usando roteamento
import logo from '../../images/logo.png'; // Certifique-se de que o caminho da logo está correto
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
      <div className="header-left">
        <div className="header-logo">
          <Link to="Portfolio/"> {/* Usa Link para roteamento interno */}
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="header-infos">
          <a href="#projects" className="active">{t('projects')}</a>
          <a href="#about">{t('about')}</a>
        </div>
      </div>
      <div className="header-icons">
        <div className="icon" onClick={toggleDarkMode}>
          {darkMode ? <MdOutlineDarkMode size={30} /> : <MdOutlineLightMode size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Header;