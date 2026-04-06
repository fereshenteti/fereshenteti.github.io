'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';

const FigmaCursor = ({ x, y }: { x: number; y: number }) => (
  <div className="figma-cursor" style={{ left: x, top: y }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 2L20 10.5L12 13L8.5 21L4 2Z" fill="#FF791B"/>
    </svg>
    <span className={`figma-cursor-label ${Satoshi.className}`}>Guest</span>
  </div>
);

const FigmaShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(frameRef, { once: false, amount: 0.3 });

  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  const onCanvasMouseMove = useCallback((e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    const { left, top } = canvasRef.current.getBoundingClientRect();
    setCursor({ x: e.clientX - left, y: e.clientY - top });
  }, []);

  const onCanvasMouseLeave = useCallback(() => setCursor(null), []);

  const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

  const panelVariant = (direction: 'left' | 'right') => ({
    hidden: { x: direction === 'left' ? -60 : 60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease, delay: 0.2 } },
  });

  const topVariant = {
    hidden: { y: -40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease, delay: 0.1 } },
  };

  const centerVariant = {
    hidden: { scale: 0.97, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease, delay: 0.35 } },
  };

  const bottomVariant = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease, delay: 0.45 } },
  };

  return (
    <section className="figma-showcase-section" ref={sectionRef}>
      <div className="portfolio-container">

        <motion.div
          className="figma-showcase-header"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className={`section-eyebrow ${Satoshi.className}`}>UI/UX Design</span>
          <h2 className={`section-title ${ClashDisplay.className}`}>Designed in Figma</h2>
          <p className={`section-subtitle ${Satoshi.className}`}>
            A peek into the workspace — here's how my designs look inside Figma.
          </p>
        </motion.div>

        {/* Figma editor frame */}
        <div className="figma-frame" ref={frameRef}>
          {/* Top toolbar */}
          <motion.div
            className="figma-top"
            variants={topVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <img src="assets/uiux_design/figma/top toolbar.png" alt="Figma top toolbar" draggable={false} />
          </motion.div>

          {/* Middle row: left panel + canvas + right panel */}
          <div className="figma-middle">

            <motion.div
              className="figma-left-panel"
              variants={panelVariant('left')}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <img src="assets/uiux_design/figma/left panel.png" alt="Figma layers panel" draggable={false} />
            </motion.div>

            <motion.div
              ref={canvasRef}
              className="figma-canvas"
              variants={centerVariant}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              onMouseMove={onCanvasMouseMove}
              onMouseLeave={onCanvasMouseLeave}
            >
              <img src="assets/uiux_design/figma/figma preview.png" alt="Figma canvas" draggable={false} />

              {/* Bottom toolbar — overlaid on the canvas */}
              <motion.div
                className="figma-bottom"
                variants={bottomVariant}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <img src="assets/uiux_design/figma/bottom toolbar.png" alt="Figma bottom toolbar" draggable={false} />
              </motion.div>

              {/* Custom cursor — scoped to canvas */}
              {cursor && <FigmaCursor x={cursor.x} y={cursor.y} />}
            </motion.div>

            <motion.div
              className="figma-right-panel"
              variants={panelVariant('right')}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <img src="assets/uiux_design/figma/right panel.png" alt="Figma properties panel" draggable={false} />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FigmaShowcase;
