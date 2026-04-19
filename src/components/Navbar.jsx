import { useEffect, useState } from 'react';

function Navbar({ links, onNavigate }) {
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
            <span className="nav-logo-fallback" aria-hidden="true">
              GB
            </span>
            <img
              src="/logo.png"
              alt="Goyal Bros. Detailing"
              className="nav-logo"
              onError={(event) => {
                event.currentTarget.style.opacity = '0';
              }}
            />
          </span>
          <span className="nav-brand-copy">
            <span className="nav-brand-name">Goyal Bros.</span>
            <span className="nav-brand-subtitle">Mobile Detailing</span>
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
      </nav>
    </header>
  );
}

export default Navbar;
