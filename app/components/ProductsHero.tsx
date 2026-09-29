import Image from 'next/image';
import Reveal from './Reveal';

export default function ProductsHero() {
  return (
    <section className="products-hero">
      <div className="products-hero-media">
        <Image
          src="/images/products/From Healthy Soil Comes Better Produce..webp"
          alt="From Healthy Soil Comes Better Produce"
          fill
          priority
          sizes="100vw"
          className="products-hero-img"
        />
        <div className="products-hero-overlay" aria-hidden="true" />
      </div>
      <div className="site-container products-hero-inner">
        <Reveal className="products-hero-copy">
          <span className="products-hero-kicker">OUR PRODUCTS</span>
          <h1 className="products-hero-title">
            From Healthy Soil<br />Comes Better Produce.
          </h1>
          <p className="products-hero-intro">
            Cultivated with Care. Selected for Quality.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
