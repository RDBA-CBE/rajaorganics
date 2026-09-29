import Image from 'next/image';
import Reveal from './Reveal';

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-media">
        <Image
          src="/images/about/Our Story.webp"
          alt="Raja Organic Farms — rooted in the earth"
          fill
          priority
          sizes="100vw"
          className="about-hero-img"
        />
        <div className="about-hero-overlay" aria-hidden="true" />
      </div>

      <div className="site-container about-hero-inner">
        <Reveal className="about-hero-copy">
          <span className="about-hero-kicker">ABOUT US</span>
          <h1 className="about-hero-title">
            Rooted in the Earth.<br />Guided by Purpose.
          </h1>
          <p className="about-hero-intro">
            Raja Organic Farms was born from a deep respect for farming and the natural world around us.
          </p>
        </Reveal>

        <Reveal className="about-hero-stats" delay={150}>
          <div className="about-hero-stat">
            <span className="about-hero-stat-num">100%</span>
            <span className="about-hero-stat-label">Responsible Farming</span>
          </div>
          <div className="about-hero-divider" aria-hidden="true" />
          <div className="about-hero-stat">
            <span className="about-hero-stat-num">Nature</span>
            <span className="about-hero-stat-label">First Philosophy</span>
          </div>
          <div className="about-hero-divider" aria-hidden="true" />
          <div className="about-hero-stat">
            <span className="about-hero-stat-num">Future</span>
            <span className="about-hero-stat-label">Focused Vision</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
