import Reveal from './Reveal';

type PageHeroProps = {
  kicker: string;
  title: string;
  intro?: string;
};

export default function PageHero({ kicker, title, intro }: PageHeroProps) {
  return (
    <section className="inner-hero">
      <div className="inner-hero-glow" aria-hidden="true" />
      <div className="site-container inner-hero-inner">
        <Reveal className="inner-hero-copy">
          <span className="section-kicker">{kicker}</span>
          <h1>{title}</h1>
          {intro ? <p>{intro}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}
