import useReveal from '../hooks/useReveal';

const galleryPairs = [
  {
    title: 'Daily driver refresh',
    before: 'https://placehold.co/600x400/ffffff/0a296a?text=Before+1',
    after: 'https://placehold.co/600x400/46bafc/0a296a?text=After+1',
  },
  {
    title: 'Family SUV detail',
    before: 'https://placehold.co/600x400/ffffff/0a296a?text=Before+2',
    after: 'https://placehold.co/600x400/46bafc/0a296a?text=After+2',
  },
  {
    title: 'Work truck cleanup',
    before: 'https://placehold.co/600x400/ffffff/0a296a?text=Before+3',
    after: 'https://placehold.co/600x400/46bafc/0a296a?text=After+3',
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
          <p className="section-kicker">Before &amp; after</p>
          <h2>Cleaner interiors you can actually see</h2>
          <p>
            A few sample transformations that show the difference a focused
            interior detail can make.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryPairs.map((pair) => (
            <article key={pair.title} className="gallery-card">
              <h3>{pair.title}</h3>
              <div className="gallery-pair">
                <figure className="gallery-image">
                  <span>Before</span>
                  <img src={pair.before} alt={`${pair.title} before detailing`} />
                </figure>
                <figure className="gallery-image">
                  <span>After</span>
                  <img src={pair.after} alt={`${pair.title} after detailing`} />
                </figure>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
