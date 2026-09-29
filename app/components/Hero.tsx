'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type HeroSlide = {
  eyebrow: string;
  title: string;
  body: string;
  emphasis?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  designSlide?: boolean;
};

const slides: HeroSlide[] = [
  {
    eyebrow: 'NATURE & PURPOSE',
    title: 'Growing with Nature.\nGrowing with Purpose.',
    body: 'Cultivating with care today to preserve a healthier, more sustainable tomorrow.',
    image: '/images/home/banner-01.webp',
    imageAlt: 'Healthy green crops growing naturally',
    imagePosition: 'center 48%',
    primaryLabel: 'Discover Our Approach',
    primaryHref: '/nature-care',
    secondaryLabel: 'Enquire for Bulk Orders',
    secondaryHref: '/contact',
    designSlide: true,
  },
  {
    eyebrow: 'SOIL & SUSTAINABILITY',
    title: 'Healthy Soil.\nResponsible Farming.\nBetter Tomorrow.',
    body: 'Nurturing the land, respecting natural resources and growing in harmony with the ecosystem.',
    image: '/images/home/banner-02.webp',
    imageAlt: 'Healthy soil being prepared for responsible cultivation',
    imagePosition: 'center',
    primaryLabel: 'Our Farming Practices',
    primaryHref: '/nature-care',
    secondaryLabel: 'Enquire for Bulk Orders',
    secondaryHref: '/contact',
  },
  {
    eyebrow: 'FARM TO FUTURE',
    title: 'From Our Land,\nWith Respect for Nature.',
    body: 'Every harvest reflects our commitment to responsible agriculture, quality produce and care for the environment.',
    image: '/images/home/banner-03.webp',
    imageAlt: 'Fresh turmeric harvested with care',
    imagePosition: 'center',
    primaryLabel: 'Explore Our Products',
    primaryHref: '/products',
    secondaryLabel: 'Enquire for Bulk Orders',
    secondaryHref: '/contact',
  },
  {
    eyebrow: 'LEGACY & FUTURE',
    title: 'Rooted in the Earth.\nGrowing for Generations.',
    body: 'Building a future where agriculture thrives while the land remains healthy for those who come after us.',
    image: '/images/home/banner-04.webp',
    imageAlt: 'Raja Organic Farms produce prepared for global markets',
    imagePosition: 'center',
    primaryLabel: 'About Raja Organic Farms',
    primaryHref: '/about',
    secondaryLabel: 'Enquire for Bulk Orders',
    secondaryHref: '/contact',
  },
];

function Leaf() {
  return (
    <svg className="leaf-svg" viewBox="0 0 64 42" aria-hidden="true">
      <path d="M4 34C17 9 40 3 59 4c-4 20-19 34-42 35C12 39 8 37 4 34Z" fill="currentColor" />
      <path d="M8 34C25 24 37 16 53 8" fill="none" stroke="rgba(255,255,255,.65)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const activeSlide = slides[active];

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener?.('change', sync);
    return () => media.removeEventListener?.('change', sync);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const goTo = (index: number) => {
    setActive((index + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="hero-section hero-slider"
      aria-roledescription="carousel"
      aria-label="Raja Organic Farms highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
        const delta = endX - touchStartX.current;
        if (Math.abs(delta) > 46) goTo(active + (delta < 0 ? 1 : -1));
        touchStartX.current = null;
      }}
    >
      <div className="hero-slides" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            className={`hero-slide-media${index === active ? ' is-active' : ''}${slide.designSlide ? ' is-design-slide' : ''}`}
            key={slide.title}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="hero-slide-image"
              style={{ objectPosition: slide.imagePosition || 'center' }}
            />
          </div>
        ))}
      </div>

      <div className="site-container hero-grid">
        <div className={`hero-copy${activeSlide.title.split('\n').length > 2 ? ' is-three-line' : ''}${active > 0 ? ' is-white-text' : ''}`} key={active} aria-live="polite">
          <div className="eyebrow-row"><span>{activeSlide.eyebrow}</span><i /></div>
          <div className="hero-title-wrap">
            <h1>{activeSlide.title.split('\n').map((line, index, parts) => <span key={`${line}-${index}`}>{line}{index < parts.length - 1 && <br />}</span>)}</h1>
            <span className="leaf-mark leaf-float"><Leaf /></span>
          </div>
          <p>
            {activeSlide.body}
            {activeSlide.emphasis ? <> <strong>{activeSlide.emphasis}</strong></> : null}
          </p>
          <div className="hero-actions">
            <Link href={activeSlide.primaryHref} className="btn btn-primary">{activeSlide.primaryLabel} <span>→</span></Link>
            {activeSlide.secondaryLabel && activeSlide.secondaryHref ? (
              <Link href={activeSlide.secondaryHref} className="btn btn-light">
                {activeSlide.secondaryLabel}
                {activeSlide.secondaryLabel.toLowerCase().includes('bulk') ? (
                  <Image src="/images/home/bulk-order.png" alt="" width={32} height={29} className="bulk-order-image" aria-hidden="true" />
                ) : <span>→</span>}
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <div className="hero-slider-controls" aria-label="Choose banner slide">
        <button type="button" className="hero-arrow hero-arrow-prev" aria-label="Previous banner" onClick={() => goTo(active - 1)}>‹</button>
        <div className="hero-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show banner ${index + 1}`}
              aria-current={index === active ? 'true' : undefined}
              className={index === active ? 'is-active' : ''}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button type="button" className="hero-arrow hero-arrow-next" aria-label="Next banner" onClick={() => goTo(active + 1)}>›</button>
      </div>
    </section>
  );
}
