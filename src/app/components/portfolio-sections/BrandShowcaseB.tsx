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

const BrandShowcaseB = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Responsive card width matching CSS
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const cardWidth = isMobile ? window.innerWidth * 0.85 : 700;
  const gap = isMobile ? 20 : 40;

  // Total horizontal distance to scroll
  const totalWidth = brands.length * (cardWidth + gap) - gap;
  const visibleWidth = typeof window !== 'undefined' ? window.innerWidth * (isMobile ? 0.9 : 0.7) : 900;
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    [0, -(totalWidth - visibleWidth)]
  );

  return (
    <section className="brand-showcase-b" ref={containerRef}>
      <div className="brand-b-scroll-space">
        <div className="brand-b-sticky">
          {/* Header — stays on top while gallery scrolls underneath */}
          <div className="brand-b-header-row">
            <div className="brand-b-header">
              <span className={`section-eyebrow ${Satoshi.className}`}>Brand Identity</span>
              <h2 className={`section-title ${ClashDisplay.className}`}>
                Crafting memorable brand identities
              </h2>
            </div>
            <p className={`brand-b-subtitle ${Satoshi.className}`}>
              From logo to full visual systems — here are some of the brands I've designed from the ground up.
            </p>
          </div>

          {/* Horizontal scroll track */}
          <div className="brand-b-track-container">
            <motion.div className="brand-b-track" style={{ x }}>
              {brands.map((brand, idx) => (
                <BrandCardB key={idx} brand={brand} index={idx} scrollYProgress={scrollYProgress} />
              ))}
            </motion.div>
          </div>

          {/* Scroll progress indicator */}
          <div className="brand-b-progress">
            <motion.div
              className="brand-b-progress-bar"
              style={{ scaleX: useTransform(scrollYProgress, [0.1, 0.9], [0, 1]) }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const BrandCardB = ({
  brand,
  index,
  scrollYProgress,
}: {
  brand: typeof brands[0];
  index: number;
  scrollYProgress: any;
}) => {
  // Parallax: mockup moves slower than the card for depth
  const mockupX = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    [index * 30, -index * 30]
  );

  return (
    <div className="brand-b-card">
      {/* Top: mockup with parallax */}
      <motion.div className="brand-b-card-visual" style={{ x: mockupX }}>
        <div className="brand-b-mockup-placeholder">
          <span className={Satoshi.className}>Brand Mockup</span>
        </div>
      </motion.div>

      {/* Bottom: brand details */}
      <div className="brand-b-card-info">
        <div className="brand-b-card-header">
          <div className="brand-b-logo-placeholder">
            <span className={ClashDisplay.className}>{brand.name}</span>
          </div>
          <p className={`brand-b-tagline ${Satoshi.className}`}>{brand.tagline}</p>
        </div>

        <div className="brand-b-details">
          <div className="brand-b-palette">
            <span className={`brand-b-label ${Satoshi.className}`}>Colors</span>
            <div className="brand-b-swatches">
              {brand.colors.map((color, i) => (
                <div
                  key={i}
                  className="brand-b-swatch"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="brand-b-type">
            <span className={`brand-b-label ${Satoshi.className}`}>Typography</span>
            <div className="brand-b-type-list">
              <span className={`${ClashDisplay.className} brand-b-type-heading`}>
                {brand.typography.heading}
              </span>
              <span className={`${Satoshi.className} brand-b-type-body`}>
                {brand.typography.body}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandShowcaseB;
