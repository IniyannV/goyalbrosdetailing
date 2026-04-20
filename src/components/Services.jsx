import useReveal from '../hooks/useReveal';

const packages = [
  {
    name: 'Full Interior',
    price: '$XX',
    description: 'A complete interior refresh for your vehicle cabin.',
    features: [
      'Deep Vacuuming',
      'Seat and Carpet Shampoo',
      'Carpet and Upholstery Cleaning',
      'Surface Conditioning',
    ],
  },
  {
    name: 'Full Exterior',
    price: '$XX',
    description: 'A thorough exterior cleaning with safe wash methods and finish care.',
    features: [
      'Thorough Hand Wash',
      'Two Bucket Method',
      'Foam Cannon Bath',
      'Tire and Wheel Cleaning',
      'Tire Shining',
    ],
  },
  {
    name: 'Full Detail',
    price: '$XX',
    description:
      'Everything in Full Interior + Full Exterior combined at a lower price.',
    features: [
      'Full Interior service included',
      'Full Exterior service included',
      'Combined package savings',
    ],
    featured: true,
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
          <h2>Packages We Offer</h2>
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
              <p className="service-price">{service.price}</p>
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
