import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/ProductsHero';
import Reveal from '../components/Reveal';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Explore turmeric, coconut and honey from Raja Organic Farms, cultivated and handled with care from soil to harvest.',
};

const portfolio = [
  {
    index: '01',
    title: 'Turmeric',
    desc: 'Grown in rich soil and harvested with care, our turmeric is available in multiple forms to meet diverse needs.',
    items: ['Raw Turmeric', 'Powdered Turmeric', 'Turmeric Fingers'],
    images: [
      { src: '/images/products/Raw Turmeric.webp', label: 'Raw Turmeric' },
      { src: '/images/products/Powdered Turmeric.webp', label: 'Powdered Turmeric' },
      { src: '/images/products/Turmeric Fingers.webp', label: 'Turmeric Fingers' },
    ],
  },
  {
    index: '02',
    title: 'Coconut',
    desc: 'Naturally grown coconuts processed with care, available in raw and refined forms for global markets.',
    items: ['Raw Coconut', 'Coconut Copera', 'Coconut Oil'],
    images: [
      { src: '/images/products/Raw Coconut.webp', label: 'Raw Coconut' },
      { src: '/images/products/Coconut Oil.webp', label: 'Coconut Oil' },
    ],
  },
  {
    index: '03',
    title: 'Honey',
    desc: 'Pure, naturally sourced honey collected responsibly and handled with care from hive to packaging.',
    items: ['Honey'],
    images: [
      { src: '/images/products/Honey.webp', label: 'Honey' },
    ],
  },
];

const qualitySteps = [
  { num: '01', title: 'The Soil', copy: 'We care for the foundation in which our crops grow.', img: '/images/products/The Soil.webp' },
  { num: '02', title: 'The Seed', copy: 'We select suitable planting material based on the crop and growing conditions.', img: '/images/products/The Seed.webp' },
  { num: '03', title: 'The Cultivation', copy: 'We nurture every crop with attention, patience and responsible farming practices.', img: '/images/products/The Cultivation.webp' },
  { num: '04', title: 'The Harvest', copy: 'We harvest with care and at the appropriate time to maintain freshness and quality.', img: '/images/products/The Harvest.webp' },
  { num: '05', title: 'The Journey', copy: 'We handle our produce responsibly so that the care taken on the farm continues beyond harvest.', img: '/images/products/The Journey.webp' },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsHero />

        {/* Intro */}
        <section className="sub-section">
          <div className="site-container split-section">
            <Reveal className="sub-image about-image-wrap reveal-left image-reveal">
              <Image
                src="/images/products/From Healthy Soil Comes Better Produce..webp"
                alt="Healthy soil — the foundation of quality produce"
                fill
                sizes="(max-width: 800px) 100vw, 48vw"
                className="cover-image"
              />
            </Reveal>
            <Reveal className="sub-copy reveal-right" delay={100}>
              <span className="section-kicker">CULTIVATED WITH CARE</span>
              <div className="bordered-heading gold-border">
                <h2>Cultivated with Care. Selected for Quality.</h2>
              </div>
              <p>Every product we grow begins with the same foundation: healthy soil.</p>
              <p>At Raja Organic Farms, we cultivate agricultural produce with care and attention to the natural environment throughout the farming journey.</p>
              <p>From planting and nurturing crops to harvesting and handling the produce, we focus on maintaining freshness, quality and the natural character of what we grow.</p>
            </Reveal>
          </div>
        </section>

        {/* Product Portfolio */}
        <section id="portfolio" className="sub-section sub-section-soft">
          <div className="site-container">
            <Reveal>
              <span className="section-kicker">OUR PRODUCT PORTFOLIO</span>
              <div className="bordered-heading gold-border">
                <h2>Our Product Portfolio</h2>
              </div>
            </Reveal>

            <div className="pp-grid">
              {portfolio.map((group, gi) => (
                <Reveal className="pp-card" delay={gi * 100} key={group.title}>
                  {/* Images row */}
                  <div className="pp-images">
                    {group.images.map((img) => (
                      <div className="pp-img-wrap" key={img.label}>
                        <Image
                          src={img.src}
                          alt={img.label}
                          fill
                          sizes="(max-width: 680px) 100vw, 33vw"
                          className="cover-image"
                        />
                        <div className="pp-img-label">{img.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Body */}
                  <div className="pp-body">
                    <div className="pp-body-top">
                      <span className="pp-index">{group.index}</span>
                      <h3 className="pp-title">{group.title}</h3>
                      <p className="pp-desc">{group.desc}</p>
                    </div>
                    <ul className="pp-list">
                      {group.items.map((item) => (
                        <li key={item}>
                          <span className="pp-dot" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Journey */}
        <section className="sub-section">
          <div className="site-container">
            <Reveal>
              <span className="section-kicker">QUALITY BEGINS BEFORE HARVEST</span>
              <div className="bordered-heading gold-border" style={{ marginBottom: '12px' }}>
                <h2>Quality Begins Before Harvest</h2>
              </div>
              <p className="pq-subtitle">We believe quality does not begin at the point of sale. It begins much earlier, right in the soil.</p>
            </Reveal>

            <div className="pq-grid">
              {qualitySteps.map((step, index) => (
                <Reveal className="pq-card" delay={index * 80} key={step.title}>
                  <div className="pq-img-wrap">
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      sizes="(max-width: 680px) 100vw, 20vw"
                      className="cover-image"
                    />
                    <div className="pq-num">{step.num}</div>
                  </div>
                  <div className="pq-body">
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Naturally Connected */}
        <section className="pnc-section">
          <div className="pnc-media">
            <Image
              src="/images/products/Naturally Connected.webp"
              alt="Naturally Connected"
              fill
              sizes="100vw"
              className="cover-image"
            />
            <div className="pnc-overlay" aria-hidden="true" />
          </div>
          <div className="site-container pnc-inner">
            <Reveal className="pnc-copy">
              <span className="pnc-kicker">NATURALLY CONNECTED</span>
              <h2 className="pnc-title">Naturally Connected</h2>
              <p>The quality of what we grow is closely connected to the health of the environment around it.</p>
              <p>That is why we look beyond the crop itself. We care about the soil, water, ecosystem and farming practices that make every harvest possible.</p>
              <div className="pnc-actions">
                <Link href="#portfolio" className="btn btn-primary">Explore Our Products <span>→</span></Link>
                <Link href="/contact" className="pnc-link">Enquire With Us <span>→</span></Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
