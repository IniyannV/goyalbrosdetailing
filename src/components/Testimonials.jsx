import useReveal from '../hooks/useReveal';

const testimonials = [
  {
    name: 'Jordan M.',
    quote:
      'My car finally feels fresh again. Super convenient, right on time, and the interior looked amazing when they finished.',
  },
  {
    name: 'Ashley T.',
    quote:
      'The booking was easy and they came right to my apartment. The seats and floor mats looked way better than I expected.',
  },
  {
    name: 'Marcus R.',
    quote:
      'Friendly service and a really solid detail for our family SUV. We will definitely book again.',
  },
];

function Testimonials() {
  const { ref, isVisible } = useReveal();
  const stars = String.fromCharCode(9733).repeat(5);

  return (
    <section
      ref={ref}
      className={`section section-accent reveal ${isVisible ? 'revealed' : ''}`}
    >
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">Testimonials</p>
          <h2>What customers are saying</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <div className="testimonial-stars" aria-label="5 star rating">
                {stars}
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
