import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom se estiver usando roteamento
import logo from '../../images/logo.png'; // Certifique-se de que o caminho da logo está correto
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(() => {
    // Lê o estado inicial do localStorage
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true'; // Retorna true ou false
  });

  useEffect(() => {
    // Aplica a classe ao body com base no estado do tema
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode); // Salva no localStorage
  };

  return (
    <div className="header">
      <div className="header-left">
        <div className="header-logo">
          <Link to="/"> {/* Usa Link para roteamento interno */}
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
