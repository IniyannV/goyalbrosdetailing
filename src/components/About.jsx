import useReveal from '../hooks/useReveal';
import carSideImage from '../images/car-side.jpg';

function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`section reveal ${isVisible ? 'revealed' : ''}`}
    >
      <div className="section-inner about-grid">
        <div className="section-copy">
          <p className="section-kicker">About us</p>
          <h2>Friendly, convenient detailing that fits your day</h2>
          <p>
            Prismo Detailing is a mobile detailing service built for everyday
            car owners across Coppell, TX who want a cleaner, fresher ride without the
            hassle of driving to a shop. We focus on quality interior cleaning,
            dependable service, and the kind of thoughtful care that makes your
            vehicle feel better every time you open the door.
          </p>
          <div className="about-points">
            <span>Mobile convenience</span>
            <span>Interior specialists</span>
            <span>Coppell, TX service area</span>
          </div>
        </div>

        <div className="image-card">
          <img
            src={carSideImage}
            alt="Side view of a detailed car"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
