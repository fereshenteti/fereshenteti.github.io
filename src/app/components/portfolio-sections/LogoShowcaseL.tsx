'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchSlides, SlideData } from '@/services/slides';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';

const LogoShowcaseL = () => {
  const [slides, setSlides] = useState<SlideData[]>([]);

  useEffect(() => {
    fetchSlides().then(setSlides);
  }, []);

  // Duplicate 3 times for seamless infinite scroll
  const track = [...slides, ...slides, ...slides];

  return (
    <section className="logo-showcase-l">
      <motion.div
        className="logo-l-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className={ClashDisplay.className}>Logo Creations</h2>
        <p className={Satoshi.className}>
          A selection of logos and brand marks I've designed — crafted for clarity, simplicity, and lasting visual impact.
        </p>
      </motion.div>

      {slides.length > 0 && (
        <div className="logo-l-rows">
          {/* Row 1 — scrolls left */}
          <div className="logo-l-marquee">
            <div className="logo-l-track scroll-left">
              {track.map((slide, i) => (
                <LogoCard key={`l1-${i}`} slide={slide} />
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="logo-l-marquee">
            <div className="logo-l-track scroll-right">
              {track.map((slide, i) => (
                <LogoCard key={`l2-${i}`} slide={slide} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const LogoCard = ({ slide }: { slide: SlideData }) => {
  const inner = (
    <>
      <img src={slide.src} alt={slide.label || 'Logo'} />
      {slide.label && <span className="logo-l-card-name">{slide.label}</span>}
    </>
  );

  if (slide.link) {
    return (
      <a href={slide.link} target="_blank" rel="noopener noreferrer" className="logo-l-card logo-l-card-link">
        {inner}
      </a>
    );
  }
  return <div className="logo-l-card">{inner}</div>;
};

export default LogoShowcaseL;
