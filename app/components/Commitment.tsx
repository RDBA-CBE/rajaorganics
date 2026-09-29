'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const principles = [
  {
    label: 'Healthy Soil',
    number: '01',
    image: '/images/home/healthy-soil.webp',
    alt: 'Healthy Soil',
    description:
      'We care for the soil because it is where every harvest begins. Responsible soil management helps us maintain healthy and productive land for the future.',
  },
  {
    label: 'Responsible Water Use',
    number: '02',
    image: '/images/home/responsible-water-use.webp',
    alt: 'Responsible Water Use',
    description:
      'Water is precious, and we believe it should always be used thoughtfully. We continuously look for responsible ways to manage this valuable resource.',
  },
  {
    label: 'Natural Balance',
    number: '03',
    image: '/images/home/natural-balance.webp',
    alt: 'Natural Balance',
    description:
      'A farm is part of a much larger ecosystem. We respect the plants, living organisms and natural surroundings that contribute to a healthy environment.',
  },
  {
    label: 'Quality Cultivation',
    number: '04',
    image: '/images/home/quality-cultivation.webp',
    alt: 'Quality Cultivation',
    description:
      'From planting to harvesting, we pay attention to every stage of cultivation to ensure our produce is grown and handled with care.',
  },
  {
    label: 'Thinking About Tomorrow',
    number: '05',
    image: '/images/home/thinking-about-tomorrow.webp',
    alt: 'Thinking About Tomorrow',
    description:
      'Every decision we make today has an impact on tomorrow. We believe in farming practices that protect the land and its potential for future generations.',
  },
] as const;

const AUTO_DELAY = 4500;
const LEAVE_DURATION = 420;

export default function Commitment() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const targetIndex = useRef<number | null>(null);

  const beginTransition = (nextIndex: number) => {
    if (nextIndex === activeIndex || isLeaving) return;

    targetIndex.current = nextIndex;
    setIsLeaving(true);

    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      if (targetIndex.current !== null) {
        setActiveIndex(targetIndex.current);
      }
      targetIndex.current = null;
      setIsLeaving(false);
      leaveTimer.current = null;
    }, LEAVE_DURATION);
  };

  useEffect(() => {
    if (paused || isLeaving) return;

    const timer = window.setTimeout(() => {
      beginTransition((activeIndex + 1) % principles.length);
    }, AUTO_DELAY);

    return () => window.clearTimeout(timer);
  }, [activeIndex, paused, isLeaving]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  const selectPrinciple = (index: number) => {
    setPaused(true);

    if (index !== activeIndex) {
      beginTransition(index);
    }

    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), AUTO_DELAY * 1.35);
  };

  const active = principles[activeIndex];

  return (
    <section id="nature" className="commitment-section">
      <div className="site-container commitment-grid">
        <Reveal className="commitment-left reveal-left">
          <div className="bordered-heading commitment-heading">
            <span className="section-kicker light-kicker">OUR COMMITMENT</span>
            <h2>Five principles guide<br />the way we farm.</h2>
          </div>

          <div className="principles-list" role="tablist" aria-label="Our farming principles">
            {principles.map((principle, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="commitment-feature-panel"
                className={`principle${activeIndex === index ? ' active' : ''}${activeIndex === index && isLeaving ? ' is-leaving' : ''}`}
                key={principle.label}
                onClick={() => selectPrinciple(index)}
              >
                <span>{principle.label}</span>
                <strong>{principle.number}</strong>
                <i className="principle-progress" aria-hidden="true" />
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="commitment-feature reveal-right" delay={120}>
          <div
            id="commitment-feature-panel"
            className="commitment-feature-inner"
            role="tabpanel"
            aria-live="polite"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="soil-image-wrap commitment-slider-image image-reveal">
              {principles.map((principle, index) => (
                <Image
                  key={principle.image}
                  src={principle.image}
                  alt={activeIndex === index ? principle.alt : ''}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 760px) 100vw, 45vw"
                  className={`cover-image commitment-slide-image${activeIndex === index ? ' is-active' : ''}${activeIndex === index && isLeaving ? ' is-leaving' : ''}`}
                  aria-hidden={activeIndex !== index}
                />
              ))}
            </div>

            <div
              className={`commitment-copy-slider${isLeaving ? ' is-leaving' : ' is-entering'}`}
              key={active.number}
            >
              <span className="feature-number">{active.number}</span>
              <h3>{active.label}</h3>
              <p>{active.description}</p>
              <Link href="/nature-care" className="btn btn-light feature-btn">
                Explore Nature Care <span>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
