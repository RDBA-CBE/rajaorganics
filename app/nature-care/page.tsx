import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import NatureCareForm from '../components/NatureCareForm';

const approaches = [
  {
    number: '01',
    title: 'Nurturing the Soil',
    copy: 'Healthy soil is at the heart of healthy farming. We focus on responsible cultivation practices that help maintain the health and productivity of the land over the long term.',
    image: '/images/naturecare/nurturing-soil.webp',
  },
  {
    number: '02',
    title: 'Conserving Water',
    copy: 'Water gives life to every farm. We recognise its importance and believe in using it carefully and responsibly.',
    image: '/images/naturecare/conserving-water.webp',
  },
  {
    number: '03',
    title: 'Respecting Biodiversity',
    copy: 'A healthy farm is more than the crops we grow. We value the plants, organisms and natural surroundings that contribute to the balance of the ecosystem.',
    image: '/images/naturecare/respecting-biodiversity.webp',
  },
  {
    number: '04',
    title: 'Responsible Cultivation',
    copy: 'We aim to work with nature rather than against it. Our cultivation decisions take into consideration the natural conditions, seasons and needs of the crops.',
    image: '/images/naturecare/responsible-cultivation.webp',
  },
  {
    number: '05',
    title: 'Reducing Waste',
    copy: 'We believe resources should be valued at every stage. We continuously look for ways to use resources more thoughtfully and reduce unnecessary waste.',
    image: '/images/naturecare/reducing-waste.webp',
  },
  {
    number: '06',
    title: 'Planning for the Future',
    copy: 'Sustainable farming requires patience and a long term perspective. We continue to explore better practices and technologies that can help us farm efficiently while taking care of the resources we depend on.',
    image: '/images/naturecare/planning-future.webp',
  },
];

export const metadata: Metadata = {
  title: 'Nature Care',
  description: 'Discover how Raja Organic Farms cares for soil, water, biodiversity and natural resources through responsible farming.',
};

export default function NatureCarePage() {
  return (
    <>
      <Header />
      <main className="nature-page">

        {/* ── Hero ── */}
        <section className="nc-hero">
          <div className="nc-hero-media">
            <Image
              src="/images/naturecare/farming-harmony.webp"
              alt="Raja Organic Farms working in harmony with nature"
              fill priority sizes="100vw"
              className="nc-hero-img"
            />
            <div className="nc-hero-overlay" aria-hidden="true" />
          </div>
          <div className="site-container nc-hero-inner">
            <Reveal className="nc-hero-copy">
              <span className="nc-hero-kicker">NATURE CARE</span>
              <h1 className="nc-hero-title">Protecting What<br />Helps Us Grow.</h1>
              <p className="nc-hero-intro">Farming in harmony with nature — because the land we care for today determines the harvests of tomorrow.</p>
            </Reveal>
          </div>
        </section>

        {/* ── Intro split ── */}
        <section className="nature-intro-section">
          <div className="site-container nature-intro-grid">
            <Reveal className="nature-intro-media reveal-left">
              <Image
                src="/images/naturecare/farming-harmony.webp"
                alt="Farm ecosystem at Raja Organic Farms"
                fill sizes="(max-width: 900px) 100vw, 50vw"
                className="cover-image"
              />
            </Reveal>
            <Reveal className="nature-intro-copy reveal-right" delay={100}>
              <span className="nature-kicker">FARMING IN HARMONY WITH NATURE</span>
              <h2>Everything on a farm is connected.</h2>
              <p>A farm is part of a much larger ecosystem. The soil supports the crops. Water sustains the land. Plants and other forms of life contribute to the natural balance.</p>
              <p>At Raja Organic Farms, we try to understand these connections and make thoughtful choices that respect the environment while supporting responsible agriculture.</p>
            </Reveal>
          </div>
        </section>

        {/* ── Six Approaches — alternating rows ── */}
        <section className="nature-approach-section">
          <div className="site-container">
            <Reveal className="nature-section-head">
              <span className="nature-kicker">OUR APPROACH TO CARING FOR NATURE</span>
              <h2>Thoughtful farming starts<br />with thoughtful choices.</h2>
              <p>Six areas guide how we care for the land, water and natural systems that make farming possible.</p>
            </Reveal>
            <div className="na-grid">
              {approaches.map((item, i) => (
                <Reveal className={`na-row${i % 2 === 1 ? ' na-row-reverse' : ''}`} delay={80} key={item.title}>
                  <div className="na-image-wrap">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 680px) 100vw, 50vw"
                      className="cover-image"
                    />
                    <span className="na-number">{item.number}</span>
                  </div>
                  <div className="na-body">
                    <span className="na-index">{item.number}</span>
                    <h3 className="na-title">{item.title}</h3>
                    <p className="na-copy">{item.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Philosophy banner ── */}
        <section className="nature-philosophy-section">
          <div className="nature-philosophy-bg">
            <Image
              src="/images/naturecare/sustainability-philosophy.webp"
              alt="Sustainability philosophy at Raja Organic Farms"
              fill sizes="100vw"
              className="nature-philosophy-image"
            />
            <div className="nature-philosophy-overlay" aria-hidden="true" />
          </div>

          <div className="site-container nature-philosophy-inner">

            {/* Centered statement */}
            <Reveal className="nature-philosophy-statement">
              <span className="nature-kicker">OUR SUSTAINABILITY PHILOSOPHY</span>
              <h2 className="nature-philosophy-headline">
                We do not just grow crops —
                <br />
                <em>we care for the world that grows them.</em>
              </h2>
              <div className="nature-philosophy-rule" aria-hidden="true">
                <span /><i>🌿</i><span />
              </div>
            </Reveal>

            {/* Split — quote left, pillars right */}
            <div className="nature-philosophy-split">
              <Reveal className="nature-philosophy-quote-block reveal-left">
                <blockquote className="nature-philosophy-blockquote">
                  &ldquo;Productive agriculture and care for nature are not opposites — they are partners.&rdquo;
                </blockquote>
                <p className="nature-philosophy-quote-sub">
                  Our goal is to build a farming ecosystem where the land stays healthy,
                  the environment is respected and every harvest reflects that care.
                </p>
                <Link href="/contact" className="nature-philosophy-cta">
                  Talk to Us About Our Practices <span aria-hidden="true">→</span>
                </Link>
              </Reveal>

              <Reveal className="nature-philosophy-pillars reveal-right" delay={100}>
                {[
                  { icon: '🌱', title: 'Soil Health',        desc: 'Nurturing the foundation every crop depends on.' },
                  { icon: '💧', title: 'Water Stewardship',  desc: 'Using water carefully and only as much as needed.' },
                  { icon: '🌿', title: 'Biodiversity',       desc: 'Protecting the natural balance around every farm.' },
                  { icon: '🔄', title: 'Long-Term Thinking', desc: 'Every decision made with future generations in mind.' },
                ].map(({ icon, title, desc }) => (
                  <div className="nature-philosophy-pillar" key={title}>
                    <span className="nature-philosophy-pillar-icon">{icon}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>

          </div>
        </section>

        {/* ── Responsibility split ── */}
        <section className="nature-responsibility-section">
          <div className="site-container nature-responsibility-grid">
            <Reveal className="nature-responsibility-copy reveal-left">
              <span className="nature-kicker">OUR RESPONSIBILITY GOES BEYOND THE FARM</span>
              <h2>Caring for nature shapes every decision we make.</h2>
              <p>Caring for nature is not limited to what happens in the field. It influences how we use resources, how we approach our work and how we think about the future.</p>
              <p>For us, responsible farming means creating value today while making sure the land continues to have the strength to support tomorrow.</p>
              <h3>Growing Today. Preserving Tomorrow.</h3>
              <div className="nature-responsibility-actions">
                <Link href="#" className="btn btn-primary">Our Farming Practices <span>→</span></Link>
                <Link href="/contact" className="nature-text-link">Connect With Us <span>→</span></Link>
              </div>
            </Reveal>
            <Reveal className="nature-responsibility-media reveal-right" delay={100}>
              <Image
                src="/images/naturecare/responsibility-beyond-farm.webp"
                alt="Responsibility beyond the farm"
                fill sizes="(max-width: 900px) 100vw, 50vw"
                className="cover-image"
              />
            </Reveal>
          </div>
        </section>

        {/* ── Nature care enquiry ── */}
        <section className="nature-contact-cta" id="nature-enquiry">
          <div className="site-container nature-contact-grid">
            <Reveal className="nature-contact-copy reveal-left">
              <span className="nature-contact-kicker">GROWING TODAY. PRESERVING TOMORROW.</span>
              <h2>Care for nature begins with a conversation.</h2>
              <p>Curious about our farming practices, interested in working together, or simply want to know more? We would love to hear from you.</p>
              <div className="nature-contact-details">
                <a href="mailto:rajaorganics@gmail.com">
                  <span className="nature-contact-detail-label">WRITE TO US</span>
                  <span>rajaorganics@gmail.com <span aria-hidden="true">↗</span></span>
                </a>
                <a href="tel:+919876533578">
                  <span className="nature-contact-detail-label">GIVE US A CALL</span>
                  <span>+91 98765 33578 <span aria-hidden="true">↗</span></span>
                </a>
              </div>
              <p className="nature-contact-footnote">Thoughtful questions and new ideas are always welcome.</p>
            </Reveal>

            <Reveal className="nature-contact-card reveal-right" delay={120}>
              <div className="nature-contact-card-head">
                <span>LET&apos;S CONNECT</span>
                <h3>What would you like to know?</h3>
                <p>Share a few details and our team will be in touch.</p>
              </div>
              <NatureCareForm />
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
