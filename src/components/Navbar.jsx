import { useEffect, useState } from 'react';
import logo from '../logo.PNG';

function Navbar({ links, onNavigate, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar-shell">
      <nav className="navbar">
        <button
          className="nav-brand"
          type="button"
          onClick={() => handleNavigate('home')}
          aria-label="Go to home section"
        >
          <span className="nav-logo-frame">
            <img
              src={logo}
              alt="Prismo Detailing"
              style={{ height: '50px', objectFit: 'contain' }}
            />
          </span>
          <span className="nav-brand-copy">
            <span className="nav-brand-name">Prismo Detailing</span>
          </span>
        </button>

        <button
          type="button"
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              className="nav-link"
              onClick={() => handleNavigate(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="theme-toggle"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-pressed={theme === 'light'}
          onClick={onToggleTheme}
        >
          <span className="theme-toggle-track" aria-hidden="true">
            <span className="theme-toggle-thumb" />
          </span>
          <span className="theme-toggle-label">
            {theme === 'dark' ? 'Dark' : 'Light'}
          </span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
