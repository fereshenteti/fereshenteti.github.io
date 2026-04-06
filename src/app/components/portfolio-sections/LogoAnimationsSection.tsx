'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';

const LogoAnimationsSection = () => {
  return (
    <section className="logo-animations-section">
      <div className="portfolio-container">

        <motion.div
          className="logo-animations-header"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className={`section-title ${ClashDisplay.className}`}>Logo <span>Animations</span></h1>
          {/* this is just for animating the word "animations" */}
          <svg className="animation-filter" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                  <filter id="squiggly-0">
                      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
                      <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
                  </filter>
                  <filter id="squiggly-1">
                      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                  </filter>

                  <filter id="squiggly-2">
                      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                  </filter>
                  <filter id="squiggly-3">
                      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                  </filter>

                  <filter id="squiggly-4">
                      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                  </filter>
              </defs>
          </svg>
          <p className={`section-subtitle ${Satoshi.className}`}>
            Bringing brand identities to life through motion.
          </p>
        </motion.div>

        <motion.div
          className="logo-animations-video-wrap"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <video autoPlay playsInline loop muted>
            <source src="assets/animations/my logo animations.mp4" type="video/mp4" />
          </video>
        </motion.div>

      </div>
    </section>
  );
};

export default LogoAnimationsSection;
