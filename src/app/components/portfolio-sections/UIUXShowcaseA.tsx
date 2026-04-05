'use client';

// Variant A — Sticky scroll (same rhythm as SelectedWorkB)

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

const n = projects.length;

const SlideA = ({
  project,
  idx,
  scrollYProgress,
  rangeIn,
  rangeOut,
}: {
  project: typeof projects[0];
  idx: number;
  scrollYProgress: any;
  rangeIn: [number, number];
  rangeOut: [number, number];
}) => {
  const opacity = useTransform(
    scrollYProgress,
    [rangeIn[0], rangeIn[1], rangeOut[0], rangeOut[1]],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [rangeIn[0], rangeIn[1], rangeOut[0], rangeOut[1]],
    [50, 0, 0, -30]
  );
  const pointerEvents = useTransform(opacity, (o: number) => (o > 0.1 ? 'auto' : 'none'));
  const textOpacity = useTransform(scrollYProgress, [rangeIn[0], rangeIn[1]], [0, 1]);
  const imgScale = useTransform(scrollYProgress, [rangeIn[0] + 0.02, rangeIn[1]], [0.94, 1]);

  return (
    <motion.div className="uiux-a-slide" style={{ opacity, y, pointerEvents }}>
      <div className="uiux-a-slide-inner">
        <motion.div className="uiux-a-slider-wrap" style={{ scale: imgScale }}>
          <BeforeAfterSlider before={project.before} after={project.after} />
        </motion.div>
        <motion.div className="uiux-a-info" style={{ opacity: textOpacity }}>
          <span className={`sw-b-num ${Satoshi.className}`}>0{idx + 1} / 0{n}</span>
          <span className={`sw-b-category ${Satoshi.className}`}>{project.category}</span>
          <h3 className={`sw-b-title ${ClashDisplay.className}`}>{project.title}</h3>
          <p className={`sw-b-summary ${Satoshi.className}`}>{project.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const UIUXShowcaseA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.12], [0, -40]);

  return (
    <section className="uiux-a-section" ref={containerRef}>
      <div className="uiux-a-scroll-space">
        <div className="uiux-a-sticky">

          <motion.div className="uiux-a-header" style={{ opacity: headerOpacity, y: headerY }}>
            <span className={`section-eyebrow ${Satoshi.className}`}>UI/UX Design</span>
            <h2 className={`section-title ${ClashDisplay.className}`}>Before & After</h2>
            <p className={`section-subtitle ${Satoshi.className}`}>
              Drag the slider to reveal the transformation.
            </p>
          </motion.div>

          {projects.map((project, idx) => {
            const start = (idx + 1) / (n + 1);
            const end = (idx + 2) / (n + 1);
            return (
              <SlideA
                key={idx}
                project={project}
                idx={idx}
                scrollYProgress={scrollYProgress}
                rangeIn={[start - 0.05, start + 0.05]}
                rangeOut={[end - 0.05, end + 0.02]}
              />
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default UIUXShowcaseA;
