'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';

const brands = [
  {
    name: 'Brand One',
    tagline: 'Modern identity for a tech startup',
    logo: '/assets/images/placeholder-logo.svg',
    colors: ['#FF791B', '#1A1A2E', '#E8E8E8', '#F5C542'],
    typography: { heading: 'Clash Display', body: 'Satoshi' },
    mockup: '/assets/images/placeholder-mockup.png',
  },
  {
    name: 'Brand Two',
    tagline: 'Elegant branding for a luxury service',
    logo: '/assets/images/placeholder-logo.svg',
    colors: ['#2D2D2D', '#C9A96E', '#F7F3ED', '#8B7355'],
    typography: { heading: 'General Sans', body: 'Inter' },
    mockup: '/assets/images/placeholder-mockup.png',
  },
  {
    name: 'Brand Three',
    tagline: 'Bold visual system for a creative agency',
    logo: '/assets/images/placeholder-logo.svg',
    colors: ['#6C3CE1', '#FF6B6B', '#FAFAFA', '#1E1E2F'],
    typography: { heading: 'Montserrat', body: 'DM Sans' },
    mockup: '/assets/images/placeholder-mockup.png',
  },
];

const BrandShowcaseA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="brand-showcase-a" ref={containerRef}>
      {/* Scroll height: one viewport per brand + intro */}
      <div className="brand-a-scroll-space">

        {/* Sticky viewport */}
        <div className="brand-a-sticky">

          {/* Section header — fades out as first brand comes in */}
          <motion.div
            className="brand-a-header"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
              y: useTransform(scrollYProgress, [0, 0.08], [0, -40]),
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

          {/* Brand slides */}
          {brands.map((brand, idx) => {
            const start = (idx + 1) / (brands.length + 1);
            const end = (idx + 2) / (brands.length + 1);
            const mid = (start + end) / 2;

            return (
              <BrandSlideA
                key={idx}
                brand={brand}
                index={idx}
                scrollYProgress={scrollYProgress}
                rangeIn={[start - 0.05, start + 0.05]}
                rangeOut={[end - 0.05, end + 0.02]}
                rangePeak={[start + 0.05, mid, end - 0.05]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const BrandSlideA = ({
  brand,
  index,
  scrollYProgress,
  rangeIn,
  rangeOut,
  rangePeak,
}: {
  brand: typeof brands[0];
  index: number;
  scrollYProgress: any;
  rangeIn: [number, number];
  rangeOut: [number, number];
  rangePeak: [number, number, number];
}) => {
  const opacity = useTransform(
    scrollYProgress,
    [rangeIn[0], rangeIn[1], rangePeak[2], rangeOut[1]],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [rangeIn[0], rangeIn[1], rangePeak[2], rangeOut[1]],
    [60, 0, 0, -40]
  );

  // Stagger children within the slide
  const logoOpacity = useTransform(
    scrollYProgress,
    [rangeIn[0], rangeIn[1]],
    [0, 1]
  );
  const colorsOpacity = useTransform(
    scrollYProgress,
    [rangeIn[0] + 0.02, rangeIn[1] + 0.02],
    [0, 1]
  );
  const colorsX = useTransform(
    scrollYProgress,
    [rangeIn[0] + 0.02, rangeIn[1] + 0.02],
    [30, 0]
  );
  const typeOpacity = useTransform(
    scrollYProgress,
    [rangeIn[0] + 0.04, rangeIn[1] + 0.04],
    [0, 1]
  );
  const mockupScale = useTransform(
    scrollYProgress,
    [rangeIn[0] + 0.03, rangeIn[1] + 0.05],
    [0.85, 1]
  );
  const mockupOpacity = useTransform(
    scrollYProgress,
    [rangeIn[0] + 0.03, rangeIn[1] + 0.05],
    [0, 1]
  );

  return (
    <motion.div className="brand-a-slide" style={{ opacity, y }}>
      <div className="brand-a-slide-inner">
        {/* Left: brand identity elements */}
        <div className="brand-a-info">
          <motion.div className="brand-a-logo" style={{ opacity: logoOpacity }}>
            <div className="logo-placeholder">
              <span className={ClashDisplay.className}>{brand.name}</span>
            </div>
            <p className={`brand-a-tagline ${Satoshi.className}`}>{brand.tagline}</p>
          </motion.div>

          <motion.div
            className="brand-a-colors"
            style={{ opacity: colorsOpacity, x: colorsX }}
          >
            <span className={`brand-a-label ${Satoshi.className}`}>Color Palette</span>
            <div className="color-swatches">
              {brand.colors.map((color, i) => (
                <div
                  key={i}
                  className="color-swatch"
                  style={{ backgroundColor: color }}
                >
                  <span className="swatch-label">{color}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="brand-a-typography" style={{ opacity: typeOpacity }}>
            <span className={`brand-a-label ${Satoshi.className}`}>Typography</span>
            <div className="type-samples">
              <div className="type-sample">
                <span className="type-role">Heading</span>
                <span className={`type-name ${ClashDisplay.className}`}>{brand.typography.heading}</span>
              </div>
              <div className="type-sample">
                <span className="type-role">Body</span>
                <span className={`type-name ${Satoshi.className}`}>{brand.typography.body}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: mockup */}
        <motion.div
          className="brand-a-mockup"
          style={{ scale: mockupScale, opacity: mockupOpacity }}
        >
          <div className="mockup-placeholder">
            <span className={Satoshi.className}>Brand Mockup</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BrandShowcaseA;
