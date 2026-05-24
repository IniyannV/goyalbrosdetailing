import useReveal from '../hooks/useReveal';
import frontSeats from '../images/front-seats.HEIC';
import frontSeatsSecond from '../images/front-seats-2.HEIC';
import rearSeats from '../images/rear-seats.HEIC';
import trunk from '../images/trunk.HEIC';
import frontSeatsFallback from '../images/front-seats.jpg';
import frontSeatsSecondFallback from '../images/front-seats-2.jpg';
import rearSeatsFallback from '../images/rear-seats.jpg';
import trunkFallback from '../images/trunk.jpg';

const galleryItems = [
  {
    label: 'Front Seats',
    image: frontSeats,
    fallback: frontSeatsFallback,
    alt: 'Detailed front seats after cleaning',
  },
  {
    label: 'Front Seats',
    image: frontSeatsSecond,
    fallback: frontSeatsSecondFallback,
    alt: 'Detailed front seats from another angle after cleaning',
  },
  {
    label: 'Rear Seats',
    image: rearSeats,
    fallback: rearSeatsFallback,
    alt: 'Detailed rear seats after cleaning',
  },
  {
    label: 'Trunk',
    image: trunk,
    fallback: trunkFallback,
    alt: 'Detailed trunk after cleaning',
  },
];

function Gallery() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="gallery"
      ref={ref}
      className={`section reveal ${isVisible ? 'revealed' : ''}`}
    >
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">Results</p>
          <h2>Our Work</h2>
          <p>
            Take a look at fresh interior details from recent vehicles.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure key={`${item.label}-${item.image}`} className="gallery-card">
              <picture>
                <source srcSet={item.image} type="image/heic" />
                <img src={item.fallback} alt={item.alt} />
              </picture>
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
