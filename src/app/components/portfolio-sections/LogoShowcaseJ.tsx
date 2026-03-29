'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchSlides, SlideData } from '@/services/slides';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';

const LogoShowcaseJ = () => {
  const [slides, setSlides] = useState<SlideData[]>([]);

  useEffect(() => {
    fetchSlides().then(setSlides);
  }, []);

  return (
    <section className="logo-showcase-j">
      <motion.div
        className="logo-j-header"
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

      <div className="logo-j-list">
        {slides.map((slide, idx) => (
          <motion.div
            key={idx}
            className="logo-j-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 * idx }}
          >
            {slide.link ? (
              <a href={slide.link} target="_blank" rel="noopener noreferrer" className="logo-j-link">
                <div className="logo-j-logo">
                  <img src={slide.src} alt={slide.label || `Logo ${idx + 1}`} />
                </div>
                {slide.label && (
                  <span className={`logo-j-name ${Satoshi.className}`}>{slide.label}</span>
                )}
              </a>
            ) : (
              <>
                <div className="logo-j-logo">
                  <img src={slide.src} alt={slide.label || `Logo ${idx + 1}`} />
                </div>
                {slide.label && (
                  <span className={`logo-j-name ${Satoshi.className}`}>{slide.label}</span>
                )}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LogoShowcaseJ;
