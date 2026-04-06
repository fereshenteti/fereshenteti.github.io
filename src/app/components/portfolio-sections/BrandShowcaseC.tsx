'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';

const brands = [
  {
    name: 'Brand One',
    tagline: 'Modern identity for a tech startup',
    colors: ['#FF791B', '#1A1A2E', '#E8E8E8', '#F5C542'],
    typography: { heading: 'Clash Display', body: 'Satoshi' },
    coverGradient: 'linear-gradient(135deg, #FF791B 0%, #F5C542 100%)',
  },
  {
    name: 'Brand Two',
    tagline: 'Elegant branding for a luxury service',
    colors: ['#2D2D2D', '#C9A96E', '#F7F3ED', '#8B7355'],
    typography: { heading: 'General Sans', body: 'Inter' },
    coverGradient: 'linear-gradient(135deg, #2D2D2D 0%, #C9A96E 100%)',
  },
  {
    name: 'Brand Three',
    tagline: 'Bold visual system for a creative agency',
    colors: ['#6C3CE1', '#FF6B6B', '#FAFAFA', '#1E1E2F'],
    typography: { heading: 'Montserrat', body: 'DM Sans' },
    coverGradient: 'linear-gradient(135deg, #6C3CE1 0%, #FF6B6B 100%)',
  },
];

const BrandShowcaseC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="brand-showcase-c" ref={containerRef}>
      <div className="brand-c-scroll-space">
        <div className="brand-c-sticky">
          {/* Section header */}
          <motion.div
            className="brand-c-header"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.06], [1, 0]),
              y: useTransform(scrollYProgress, [0, 0.06], [0, -30]),
            }}
          >
            <span className={`section-eyebrow ${Satoshi.className}`}>Brand Identity</span>
            <h2 className={`section-title ${ClashDisplay.className}`}>
              Crafting memorable brand identities
            </h2>
            <p className={`section-subtitle ${Satoshi.className}`}>
              From logo to full visual systems — here are some of the brands I've designed from the ground up.
            </p>
          </motion.div>

          {/* 3D Stack area */}
          <div className="brand-c-stage">
            {brands.map((brand, idx) => (
              <BrandBookCard
                key={idx}
                brand={brand}
                index={idx}
                total={brands.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BrandBookCard = ({
  brand,
  index,
  total,
  scrollYProgress,
}: {
  brand: typeof brands[0];
  index: number;
  total: number;
  scrollYProgress: any;
}) => {
  // Each card has its own scroll segment
  // Phase 1 (0.08–0.35): cards fan out from stack
  // Phase 2 (per card): the active card scales up and reveals details
  const segmentSize = 0.6 / total;
  const cardStart = 0.1 + index * segmentSize;
  const cardPeak = cardStart + segmentSize * 0.4;
  const cardEnd = cardStart + segmentSize;

  // --- Stack → Fan out ---
  // Initial stacked position (all cards overlap with slight offset)
  const stackOffset = index * 12;
  const stackRotate = (index - 1) * -4;

  // Fan-out: responsive spread distance
  const winW = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const fanSpread = winW <= 480 ? 120 : winW <= 768 ? 160 : 320;
  const fanX = (index - 1) * fanSpread;
  const fanRotate = (index - 1) * (winW <= 768 ? 5 : 8);

  const x = useTransform(
    scrollYProgress,
    [0.06, 0.15],
    [0, fanX]
  );
  const rotateZ = useTransform(
    scrollYProgress,
    [0.06, 0.15],
    [stackRotate, fanRotate]
  );
  const translateY = useTransform(
    scrollYProgress,
    [0.06, 0.15],
    [-stackOffset, 0]
  );

  // --- Fan → Focus: active card scales up, others fade ---
  const scale = useTransform(
    scrollYProgress,
    [cardStart, cardPeak, cardEnd - 0.02, cardEnd],
    [1, 1.15, 1.15, 1]
  );
  const zIndex = useTransform(
    scrollYProgress,
    [cardStart - 0.01, cardStart, cardEnd, cardEnd + 0.01],
    [total - index, 20, 20, total - index]
  );
  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.92, 1],
    [0, 1, 1, 0]
  );

  // --- Detail reveal (inside card) ---
  const detailOpacity = useTransform(
    scrollYProgress,
    [cardStart + 0.02, cardPeak],
    [0, 1]
  );
  const detailY = useTransform(
    scrollYProgress,
    [cardStart + 0.02, cardPeak],
    [20, 0]
  );

  // Shadow intensifies when focused
  const shadow = useTransform(
    scrollYProgress,
    [cardStart, cardPeak, cardEnd],
    [
      '0 8px 30px rgba(0,0,0,0.3)',
      '0 20px 60px rgba(0,0,0,0.5)',
      '0 8px 30px rgba(0,0,0,0.3)',
    ]
  );

  return (
    <motion.div
      className="brand-c-book"
      style={{
        x,
        y: translateY,
        rotateZ,
        scale,
        zIndex,
        opacity: cardOpacity,
        boxShadow: shadow,
      }}
    >
      {/* Book cover */}
      <div
        className="brand-c-cover"
        style={{ background: brand.coverGradient }}
      >
        <span className={`brand-c-cover-title ${ClashDisplay.className}`}>
          {brand.name}
        </span>
        <span className={`brand-c-cover-sub ${Satoshi.className}`}>Brand Book</span>
      </div>

      {/* Brand details overlay — revealed when card is focused */}
      <motion.div
        className="brand-c-details"
        style={{ opacity: detailOpacity, y: detailY }}
      >
        <p className={`brand-c-tagline ${Satoshi.className}`}>{brand.tagline}</p>

        <div className="brand-c-palette">
          <span className={`brand-c-label ${Satoshi.className}`}>Color Palette</span>
          <div className="brand-c-swatches">
            {brand.colors.map((color, i) => (
              <div
                key={i}
                className="brand-c-swatch"
                style={{ backgroundColor: color }}
              >
                <span className="brand-c-swatch-label">{color}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="brand-c-type">
          <span className={`brand-c-label ${Satoshi.className}`}>Typography</span>
          <div className="brand-c-type-samples">
            <div className="brand-c-type-sample">
              <span className="brand-c-type-role">Heading</span>
              <span className={`brand-c-type-name ${ClashDisplay.className}`}>
                {brand.typography.heading}
              </span>
            </div>
            <div className="brand-c-type-sample">
              <span className="brand-c-type-role">Body</span>
              <span className={`brand-c-type-name ${Satoshi.className}`}>
                {brand.typography.body}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BrandShowcaseC;
