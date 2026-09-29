import Reveal from './Reveal';

export default function Philosophy() {
  return (
    <section className="philosophy-section">
      <div className="site-container philosophy-grid">
        <div className="philosophy-title bordered-heading gold-border reveal-left">
          <span className="section-kicker">OUR PHILOSOPHY</span>
          <h2 className="script-heading"><i>Growing with Nature.<br />Caring for Tomorrow.</i></h2>
        </div>
        <div className="philosophy-copy reveal-right" style={{borderLeft:"3px solid #c4dda8"}}>
          <h3>Every good harvest begins with healthy soil.</h3>
          <p>From caring for the land to using water responsibly, we make conscious choices at every stage of farming. Our belief is simple. We should take from nature with care and always strive to give back in ways that help it thrive.</p>
        </div>
      </div>
      <div className="site-container philosophy-tabs">
        <span>SOIL</span><span>WATER</span><span>NATURAL BALANCE</span>
      </div>
    </section>
  );
}
