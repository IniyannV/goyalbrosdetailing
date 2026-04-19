import useReveal from '../hooks/useReveal';

const packages = [
  {
    name: 'Sedan Package',
    description: 'Ideal for standard sedans and compact cars.',
    features: [
      'Full interior vacuuming',
      'Dashboard and console wipe-down',
      'Interior window cleaning',
      'Light odor treatment',
      'Seat spot cleaning',
    ],
  },
  {
    name: 'SUV / Truck Package',
    description: 'For larger vehicles, family SUVs, and work trucks.',
    features: [
      'Deep interior vacuuming',
      'Dashboard, doors, and trim wipe-down',
      'Streak-free window cleaning',
      'Odor refresh treatment',
      'Seat shampooing and floor mat care',
    ],
    featured: true,
  },
  {
    name: 'Van / XL Package',
    description: 'For minivans, full-size vans, and oversized vehicles.',
    features: [
      'Third-row and cargo area vacuuming',
      'Complete interior surface wipe-down',
      'Window and mirror cleaning',
      'Odor treatment for high-traffic interiors',
      'Seat and upholstery shampooing',
    ],
  },
];

function Services({ onBookClick }) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="services"
      ref={ref}
      className={`section reveal ${isVisible ? 'revealed' : ''}`}
    >
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">Services</p>
          <h2>Interior packages built around your vehicle</h2>
          <p>
            Pick the package that fits your car size and let us bring the clean
            right to you.
          </p>
        </div>

        <div className="services-grid">
          {packages.map((service) => (
            <article
              key={service.name}
              className={`service-card ${service.featured ? 'featured' : ''}`}
            >
              {service.featured ? (
                <span className="service-badge">Most Popular</span>
              ) : null}
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-list">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button type="button" className="button-secondary" onClick={onBookClick}>
                Book Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
