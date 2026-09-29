import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';

export default function Exports() {
  return (
    <section className="exports-section">
      <div className="exports-grid">
        <Reveal className="exports-copy reveal-left">
          <div className="exports-heading-block">
            <span className="section-kicker">GLOBAL B2B EXPORTS</span>
            <h2>From Our Origins.<br />To Global Markets.</h2>
          </div>
          <p>
            Raja Organic Farms supplies Turmeric, Coconut and Honey to businesses across international markets. From responsible sourcing and careful processing to bulk packaging and export-ready supply, we ensure consistent quality for importers, distributors, wholesalers and food businesses around the world.
          </p>
          <Link href="/contact" className="btn btn-primary exports-cta">
            <span>Enquire for Bulk Orders</span>
            <Image src="/images/home/bulk-order-w.png" alt="" width={32} height={29} className="bulk-order-image" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal className="exports-image-wrap reveal-right image-reveal" delay={120}>
          <Image
            src="/images/home/exports.webp"
            alt="Raja Organic Farms export products prepared for global markets"
            fill
            sizes="(max-width: 760px) 100vw, 55vw"
            className="cover-image exports-image"
          />
        </Reveal>
      </div>
    </section>
  );
}
