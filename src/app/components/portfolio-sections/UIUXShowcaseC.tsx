'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import BeforeAfterSlider from './BeforeAfterSlider';

const projects = [
  {
    title: 'Digicap',
    category: 'UI Redesign',
    description: 'A complete visual overhaul of Digicap\'s interface — modernizing the layout and design system while preserving the product\'s core functionality and information architecture.',
    before: 'assets/uiux_design/Digicap before.webp',
    after: 'assets/uiux_design/Digicap after.webp',
  },
  {
    title: 'SISSPL – Essaha Aziza',
    category: 'UI Redesign',
    description: 'Redesigned the patient-facing interface for a healthcare platform, prioritizing clarity, accessibility, and a calmer visual tone that builds trust with users.',
    before: 'assets/uiux_design/SISSPL - Essaha Aziza before.webp',
    after: 'assets/uiux_design/SISSPL - Essaha Aziza after.webp',
  },
];

const UIUXShowcaseC = () => {
  const firstWrapRef  = useRef<HTMLDivElement>(null);
  const secondWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sync = () => {
      if (!firstWrapRef.current || !secondWrapRef.current) return;
      const h = firstWrapRef.current.getBoundingClientRect().height;
      secondWrapRef.current.style.height = `${h}px`;
    };
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, []);

  return (
    <section className="uiux-c-section">
      <div className="uiux-c-container">

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

        <div className="uiux-c-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="uiux-c-card"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: idx * 0.12 }}
            >
              <div
                ref={idx === 0 ? firstWrapRef : secondWrapRef}
                className={`uiux-c-slider-wrap${idx === 1 ? ' uiux-c-slider-wrap-cropped' : ''}`}
              >
                <BeforeAfterSlider before={project.before} after={project.after} />
              </div>
              <div className="uiux-c-info">
                <span className={`uiux-c-category ${Satoshi.className}`}>{project.category}</span>
                <h3 className={`uiux-c-title ${ClashDisplay.className}`}>{project.title}</h3>
                <p className={`uiux-c-desc ${Satoshi.className}`}>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UIUXShowcaseC;
