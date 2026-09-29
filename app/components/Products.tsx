'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PointerEvent, UIEvent, useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const products = [
  { title: 'Raw Turmeric', image: '/images/home/raw-turmeric.webp' },
   { title: 'Turmeric Fingers', image: '/images/home/turmeric-finger.webp' },
  { title: 'Powdered Turmeric', image: '/images/home/powdered-turmeric.webp' }, 
  { title: 'Raw Coconut', image: '/images/home/raw-coconut.webp' },
 // { title: 'Coconut Copera', image: '/images/home/raw-coconut.webp' },
  { title: 'Coconut Oil', image: '/images/home/coconut-oil.webp' },
  { title: 'Honey', image: '/images/home/honey.webp' },
];

export default function Products() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || dragging || paused) return;

    const timer = window.setInterval(() => {
      const firstCard = rail.querySelector<HTMLElement>('.product-card');
      if (!firstCard) return;

      const styles = window.getComputedStyle(rail);
      const gap = parseFloat(styles.columnGap || styles.gap || '0');
      const step = firstCard.getBoundingClientRect().width + gap;
      const maxScroll = rail.scrollWidth - rail.clientWidth;
      const next = rail.scrollLeft + step;

      rail.scrollTo({
        left: next >= maxScroll - 4 ? 0 : next,
        behavior: 'smooth',
      });
    }, 4200);

    return () => window.clearInterval(timer);
  }, [dragging, paused]);


  const getStep = () => {
    const rail = railRef.current;
    if (!rail) return 0;
    const firstCard = rail.querySelector<HTMLElement>('.product-card');
    if (!firstCard) return 0;
    const styles = window.getComputedStyle(rail);
    const gap = parseFloat(styles.columnGap || styles.gap || '0');
    return firstCard.getBoundingClientRect().width + gap;
  };

  const goToProduct = (index: number) => {
    const rail = railRef.current;
    const step = getStep();
    if (!rail || !step) return;
    const safeIndex = (index + products.length) % products.length;
    rail.scrollTo({ left: step * safeIndex, behavior: 'smooth' });
    setActiveIndex(safeIndex);
  };

  const syncActiveIndex = (event: UIEvent<HTMLDivElement>) => {
    const step = getStep();
    if (!step) return;
    const nextIndex = Math.max(0, Math.min(products.length - 1, Math.round(event.currentTarget.scrollLeft / step)));
    setActiveIndex(nextIndex);
  };

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    if (!rail || event.pointerType === 'touch') return;

    setDragging(true);
    dragStartX.current = event.clientX;
    dragStartScroll.current = rail.scrollLeft;
    rail.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    if (!rail || !dragging) return;
    rail.scrollLeft = dragStartScroll.current - (event.clientX - dragStartX.current);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    setDragging(false);
    if (rail?.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section id="products" className="products-section">
      <div className="products-intro">
        <Reveal className="products-title bordered-heading gold-border reveal-left">
          <span className="section-kicker">OUR PRODUCTS</span>
          <div className="product-title-line">
            <h2>Pure. Natural<br />Export Ready</h2>
            <Image
              src="/images/home/product-leaf.png"
              width={70}
              height={70}
              alt=""
              aria-hidden="true"
              className="product-leaf leaf-float"
            />
          </div>
        </Reveal>

        <Reveal className="products-copy reveal-right" delay={100}>
          <h3>Cultivated with Care. Selected for Quality.</h3>
          <p>Carefully sourced and processed products from India, prepared to meet the needs of global B2B buyers.</p>
          <Link href="/products" className="btn btn-primary products-cta">
            Explore Our Products <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>

      <div className="products-rail-wrap">
        <div
          ref={railRef}
          className={`products-rail${dragging ? ' is-dragging' : ''}`}
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          aria-label="Product gallery"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onScroll={syncActiveIndex}
        >
          {products.map((product, index) => (
            <Reveal className="product-card" delay={index * 90} key={product.title}>
              <div className="product-image-wrap">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 680px) 82vw, (max-width: 1500px) 38.3vw, 552px"
                  className="cover-image"
                  draggable={false}
                />
              </div>
              <div className="product-card-footer">
                <span>{product.title}</span>
                <span className="product-arrow" aria-hidden="true">→</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="products-slider-nav" aria-label="Product slider navigation">
        <button
          type="button"
          className="products-drag-hint"
          onClick={() => goToProduct(activeIndex + 1)}
          aria-label="Show next product"
          title="Drag or click to view more products"
        >
          <svg className="drag-hand" viewBox="0 0 42 48" aria-hidden="true">
            <path d="M13 22V8.5a4 4 0 0 1 8 0V20h1.7v-5.1a3.7 3.7 0 0 1 7.4 0v6h1.6v-3.6a3.5 3.5 0 0 1 7 0v10.4c0 8.5-5.8 15.3-14.2 15.3h-4.6c-5.5 0-9.6-2.9-12.4-7.4L3.2 29a3.8 3.8 0 0 1 6.2-4.4L13 28.8V22Z" />
          </svg>
          <span className="drag-arrows" aria-hidden="true">↔</span>
        </button>
      </div>

    </section>
  );
}
