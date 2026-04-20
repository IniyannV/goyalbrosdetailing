import useReveal from '../hooks/useReveal';

function Hero({ onBookClick }) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="home"
      ref={ref}
      className={`hero section reveal ${isVisible ? 'revealed' : ''}`}
    >
      <div className="section-inner hero-content">
        <div className="hero-copy">
          <p className="section-kicker">Mobile interior detailing across Coppell, TX</p>
          <h1>Premium Interior Detailing in Coppell, TX</h1>
          <p className="hero-subheading">
            We come to you - wherever you are in Coppell, TX.
          </p>
          <div className="hero-actions">
            <button type="button" className="button-primary" onClick={onBookClick}>
              Book an Appointment
            </button>
          </div>
        </div>

        <div className="hero-highlight-card">
          <p className="highlight-label">Why drivers choose us</p>
          <ul className="highlight-list">
            <li>Mobile service at your home, office, or apartment</li>
            <li>Interior-focused packages for real everyday vehicles</li>
            <li>Friendly care with attention to the little details</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
