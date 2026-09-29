import Reveal from './Reveal';

const items = [
  ['/images/home/icon-1.png', 'Responsible Farming'],
  ['/images/home/icon-2.png', 'Natural Sourcing'],
  ['/images/home/icon-3.png', 'Quality Produce'],
  ['/images/home/icon-4.png', 'B2B Export Ready'],
];

export default function TrustStrip() {
  return (
    <section
      className="trust-strip"
      aria-label="Raja Organic Farms strengths"
    >
      <div className="site-container trust-grid">
        {items.map(([icon, label], index) => (
          <Reveal
            className="trust-item"
            delay={index * 80}
            key={label}
          >
            <img
              src={icon}
              alt=""
              className="trust-icon"
              aria-hidden="true"
            />

            <span>{label}</span>

            {index !== items.length - 1 && (
              <i aria-hidden="true" />
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}