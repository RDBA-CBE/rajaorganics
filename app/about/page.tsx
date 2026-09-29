import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import Reveal from '../components/Reveal';

const values = [
  {
    title: 'Respect for Nature',
    copy: 'The land is much more than a resource. It is the foundation of everything we grow and everything we hope to leave behind.',
    img: '/images/about/Respect for Nature.webp',
  },
  {
    title: 'Responsible Agriculture',
    copy: 'We believe farming should create a balance between producing quality food and caring for the environment.',
    img: '/images/about/Responsible Agriculture.webp',
  },
  {
    title: 'Quality and Integrity',
    copy: 'We believe quality comes from doing things right at every stage, from cultivation to harvest.',
    img: '/images/about/Quality and Integrity.webp',
  },
  {
    title: 'Long Term Sustainability',
    copy: "We think beyond today's harvest and make choices with the future of the land in mind.",
    img: '/images/about/Long Term Sustainability.webp',
  },
  {
    title: 'Continuous Improvement',
    copy: 'There is always a better way to care for the land. We remain open to learning, improving our practices and adopting responsible technologies.',
    img: '/images/about/Continuous Improvement.webp',
  },
];

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Raja Organic Farms, our story, philosophy, vision, mission and commitment to responsible agriculture.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />

        {/* Our Story */}
        <section className="sub-section">
          <div className="site-container split-section">
            <Reveal className="sub-image reveal-left image-reveal">
              <Image
                src="/images/about/Our Story.webp"
                alt="Our Story — Raja Organic Farms"
                fill
                sizes="(max-width: 800px) 100vw, 48vw"
                className="cover-image"
              />
            </Reveal>
            <Reveal className="sub-copy reveal-right" delay={100}>
              <span className="section-kicker">OUR STORY</span>
              <h2>Our Story</h2>
              <p>Raja Organic Farms was born from a deep respect for farming and the natural world around us.</p>
              <p>We believe the future of agriculture depends on how thoughtfully we care for the resources that support it. The soil we cultivate, the water we use and the natural environment around us all play an important role in what we grow.</p>
              <p>Our journey is guided by a long term vision to farm responsibly, care for the land and create meaningful value through agriculture.</p>
            </Reveal>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="sub-section sub-section-soft">
          <div className="site-container split-section split-section-top">
            <Reveal className="sub-copy bordered-heading gold-border reveal-left">
              <span className="section-kicker">OUR PHILOSOPHY</span>
              <h2>For us, farming starts with understanding nature.</h2>
            </Reveal>
            <Reveal className="sub-copy reveal-right" delay={100}>
              <p>Every season is different. Every piece of land has its own character. Every crop has its own needs.</p>
              <p>We believe good farming comes from paying attention to these natural relationships and making thoughtful decisions along the way. It is not only about how much we grow, but also about how responsibly we grow it.</p>
            </Reveal>
          </div>
          <div className="site-container about-phil-images">
            <Reveal className="about-phil-primary sub-image image-reveal reveal-left">
              <Image
                src="/images/about/Our Philosophy.webp"
                alt="Farming in harmony with nature"
                fill
                sizes="(max-width: 800px) 100vw, 55vw"
                className="cover-image"
              />
            </Reveal>
            <Reveal className="about-phil-secondary sub-image image-reveal reveal-right" delay={100}>
              <Image
                src="/images/about/Our Philosophy-1.webp"
                alt="Thoughtful cultivation"
                fill
                sizes="(max-width: 800px) 100vw, 35vw"
                className="cover-image"
              />
            </Reveal>
          </div>
        </section>

        {/* Vision + Mission */}
        <section className="sub-section">
          <div className="site-container two-card-grid">
            <Reveal className="statement-card reveal-left">
              <span className="section-kicker">OUR VISION</span>
              <h2>Our Vision</h2>
              <p>To build a responsible agricultural ecosystem that cares for nature, produces quality food and leaves a healthier legacy for generations to come.</p>
            </Reveal>
            <Reveal className="statement-card reveal-right" delay={100}>
              <span className="section-kicker">OUR MISSION</span>
              <h2>Our Mission</h2>
              <p>To practise responsible agriculture through thoughtful cultivation, careful use of natural resources and continuous improvement, while delivering quality produce and creating a positive impact on the environment and the communities around us.</p>
            </Reveal>
          </div>
        </section>

        {/* What We Stand For */}
        <section className="sub-section sub-section-green">
          <div className="site-container">
            <Reveal className="section-heading light-heading">
              <span className="section-kicker light-kicker">WHAT WE STAND FOR</span>
              <h2>What We Stand For</h2>
            </Reveal>
            <div className="about-values-grid">
              {values.map(({ title, copy, img }, index) => (
                <Reveal className="about-value-card" delay={index * 70} key={title}>
                  <div className="about-value-img">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 20vw"
                      className="cover-image"
                    />
                  </div>
                  <div className="about-value-body">
                    <span className="value-index">0{index + 1}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Our Perspective */}
        <section className="sub-section perspective-section">
          <div className="site-container perspective-inner">
            <Reveal className="section-heading bordered-heading gold-border">
              <span className="section-kicker">OUR PERSPECTIVE</span>
              <h2>We do not see sustainability as a trend.<br />We see it as a responsibility.</h2>
              <p>A responsibility to the land we cultivate, the resources we depend on, the people we serve and the generations who will come after us.</p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
