'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchSlides, SlideData } from '@/services/slides';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';

const LogoShowcaseK = () => {
  const [slides, setSlides] = useState<SlideData[]>([]);

  useEffect(() => {
    fetchSlides().then(setSlides);
  }, []);

  return (
    <section className="logo-showcase-k">
      <div className="logo-k-container">
        <motion.div
          className="logo-k-header"
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

        <div className="logo-k-grid">
          {slides.map((slide, idx) => (
            <motion.div
              key={idx}
              className="logo-k-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.08 }}
            >
              {slide.link ? (
                <a href={slide.link} target="_blank" rel="noopener noreferrer" className="logo-k-card-link">
                  <div className="logo-k-card-img">
                    <img src={slide.src} alt={slide.label || `Logo ${idx + 1}`} />
                  </div>
                  {slide.label && (
                    <span className={`logo-k-card-name ${Satoshi.className}`}>{slide.label}</span>
                  )}
                </a>
              ) : (
                <>
                  <div className="logo-k-card-img">
                    <img src={slide.src} alt={slide.label || `Logo ${idx + 1}`} />
                  </div>
                  {slide.label && (
                    <span className={`logo-k-card-name ${Satoshi.className}`}>{slide.label}</span>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcaseK;
