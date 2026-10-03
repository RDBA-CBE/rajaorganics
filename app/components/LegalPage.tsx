import Image from 'next/image';
import Header from './Header';
import Footer from './Footer';
import Reveal from './Reveal';

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalPageProps = {
  title: string;
  kicker?: string;
  heroImage: string;
  intro: string[];
  sections: LegalSection[];
  closingTitle?: string;
  closing?: string[];
};

export default function LegalPage({ title, kicker = 'RAJA ORGANIC FARMS', heroImage, intro, sections, closingTitle, closing }: LegalPageProps) {
  return (
    <>
      <Header />
      <main>
        <section className="legal-hero">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="legal-hero-image"
          />
          <div className="legal-hero-overlay" aria-hidden="true" />
          <div className="site-container legal-hero-inner">
            <Reveal className="legal-hero-copy">
              <span className="legal-hero-kicker">{kicker}</span>
              <h1>{title}</h1>
            </Reveal>
          </div>
        </section>

        <section className="legal-section">
          <div className="site-container legal-layout">
            {sections.map((section, index) => (
              <Reveal className="legal-block" delay={(index % 3) * 40} key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? (
                  <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                ) : null}
              </Reveal>
            ))}

            {closingTitle && closing ? (
              <Reveal className="legal-closing">
                <span className="section-kicker">OUR COMMITMENT</span>
                <h2>{closingTitle}</h2>
                {closing.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </Reveal>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
