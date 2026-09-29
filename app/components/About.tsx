import Link from 'next/link';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="site-container about-grid">
        <Reveal className="about-image-wrap reveal-left">
         <video
  src="/images/video-t-1.mp4"
  className="cover-image"
  autoPlay
  muted
  loop
  playsInline
  controls
/>
        </Reveal>

        <Reveal
          className="about-copy bordered-heading reveal-right"
          delay={100}
        >
          <span className="section-kicker">RAJA ORGANIC FARMS</span>

          <h2>
            In Harmony with Nature.
            <br />
            Growing for Tomorrow.
          </h2>

          <p>
            At Raja Organic Farms, we believe farming is about much more than
            growing food. It is about caring for the land, understanding nature
            and nurturing the resources that make every harvest possible.
          </p>

          <p>
            Our approach is built on respect for nature, responsible cultivation
            and a genuine commitment to the health of our soil, water and
            surroundings. By working in harmony with nature, we aim to grow
            quality produce while caring for the environment we depend on.
          </p>

          <Link href="/about" className="btn btn-primary about-btn">
            About Raja Organics <span>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}