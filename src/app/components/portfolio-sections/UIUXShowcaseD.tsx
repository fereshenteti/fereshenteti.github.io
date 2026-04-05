'use client';

// Variant D — Horizontal drag carousel with scroll-snap

import React, { useRef } from 'react';
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

const UIUXShowcaseD = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isDragging = useRef(false);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };

  return (
    <section className="uiux-d-section">

      <motion.div
        className="uiux-d-header"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className={`section-eyebrow ${Satoshi.className}`}>UI/UX Design</span>
        <h2 className={`section-title ${ClashDisplay.className}`}>Before & After</h2>
        <p className={`section-subtitle ${Satoshi.className}`}>
          Scroll or drag to browse. Drag the slider inside each card to reveal the transformation.
        </p>
      </motion.div>

      <div
        ref={trackRef}
        className="uiux-d-track-wrap"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="uiux-d-card"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.12 }}
          >
            <div className="uiux-d-slider-wrap">
              <BeforeAfterSlider before={project.before} after={project.after} />
            </div>
            <div className="uiux-d-info">
              <span className={`uiux-d-num ${Satoshi.className}`}>0{idx + 1} / 0{projects.length}</span>
              <span className={`uiux-d-category ${Satoshi.className}`}>{project.category}</span>
              <h3 className={`uiux-d-title ${ClashDisplay.className}`}>{project.title}</h3>
              <p className={`uiux-d-desc ${Satoshi.className}`}>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="uiux-d-scroll-hint">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className={Satoshi.className}>Drag to scroll</span>
      </div>

    </section>
  );
};

export default UIUXShowcaseD;
