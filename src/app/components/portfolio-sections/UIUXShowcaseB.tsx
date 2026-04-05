'use client';

// Variant B — Side-by-side grid (both projects visible at once)

import React from 'react';
import { motion } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import BeforeAfterSlider from './BeforeAfterSlider';

const projects = [
  {
    title: 'Digicap',
    category: 'UI Redesign',
    description: 'A complete visual overhaul — modernizing the layout and design system while preserving core functionality.',
    before: 'assets/uiux_design/Digicap before.png',
    after: 'assets/uiux_design/Digicap after.png',
  },
  {
    title: 'SISSPL – Essaha Aziza',
    category: 'UI Redesign',
    description: 'Redesigned the patient-facing interface for a healthcare platform, prioritizing clarity and trust.',
    before: 'assets/uiux_design/SISSPL - Essaha Aziza before.png',
    after: 'assets/uiux_design/SISSPL - Essaha Aziza after.png',
  },
];

const UIUXShowcaseB = () => {
  return (
    <section className="uiux-b-section">
      <div className="portfolio-container">

        <motion.div
          className="section-header"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div>
            <span className={`section-eyebrow ${Satoshi.className}`}>UI/UX Design</span>
            <h2 className={`section-title ${ClashDisplay.className}`}>Before & After</h2>
          </div>
          <p className={`section-subtitle ${Satoshi.className}`}>
            Drag the slider to see how each interface was transformed.
          </p>
        </motion.div>

        <div className="uiux-b-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="uiux-b-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: idx * 0.15 }}
            >
              <div className="uiux-b-slider-wrap">
                <BeforeAfterSlider before={project.before} after={project.after} />
              </div>
              <div className="uiux-b-info">
                <span className={`uiux-b-category ${Satoshi.className}`}>{project.category}</span>
                <h3 className={`uiux-b-title ${ClashDisplay.className}`}>{project.title}</h3>
                <p className={`uiux-b-desc ${Satoshi.className}`}>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UIUXShowcaseB;
