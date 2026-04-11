'use client';

// Variant C — Vertical scroll, one per screen, alternating layout

import React from 'react';
import { motion } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import BeforeAfterSlider from './BeforeAfterSlider';

const projects = [
  {
    title: 'Digicap',
    category: 'UI Redesign',
    description: 'A complete visual overhaul of Digicap\'s interface — modernizing the layout and design system while preserving the product\'s core functionality and information architecture.',
    before: 'assets/uiux_design/Digicap before.png',
    after: 'assets/uiux_design/Digicap after.png',
  },
  {
    title: 'SISSPL – Essaha Aziza',
    category: 'UI Redesign',
    description: 'Redesigned the patient-facing interface for a healthcare platform, prioritizing clarity, accessibility, and a calmer visual tone that builds trust with users.',
    before: 'assets/uiux_design/SISSPL - Essaha Aziza before.png',
    after: 'assets/uiux_design/SISSPL - Essaha Aziza after.png',
  },
];

const UIUXShowcaseC = () => {
  return (
    <section className="uiux-c-section">

      {/* Section header as its own full-height intro */}
      <motion.div
        className="uiux-c-intro"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className={`section-eyebrow ${Satoshi.className}`}>UI/UX Design</span>
        <h2 className={`section-title ${ClashDisplay.className}`}>Before & After</h2>
        <p className={`section-subtitle ${Satoshi.className}`}>
          Drag the slider to reveal the transformation behind each project.
        </p>
      </motion.div>

      {projects.map((project, idx) => (
        <div key={idx} className={`uiux-c-slide ${idx % 2 !== 0 ? 'is-reversed' : ''}`}>
          <div className="uiux-c-slide-inner">

            <motion.div
              className="uiux-c-slider-wrap"
              initial={{ x: idx % 2 === 0 ? -60 : 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <BeforeAfterSlider before={project.before} after={project.after} />
            </motion.div>

            <motion.div
              className="uiux-c-info"
              initial={{ x: idx % 2 === 0 ? 60 : -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
              <span className={`uiux-c-num ${Satoshi.className}`}>0{idx + 1} / 0{projects.length}</span>
              <span className={`uiux-c-category ${Satoshi.className}`}>{project.category}</span>
              <h3 className={`uiux-c-title ${ClashDisplay.className}`}>{project.title}</h3>
              <p className={`uiux-c-desc ${Satoshi.className}`}>{project.description}</p>
            </motion.div>

          </div>
        </div>
      ))}

    </section>
  );
};

export default UIUXShowcaseC;
