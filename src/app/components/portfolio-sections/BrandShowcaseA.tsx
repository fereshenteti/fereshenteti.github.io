'use client';

import SectionDotGrid from '../SectionDotGrid';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { MyCustomButton } from '../common-ui/custom-button';
import { useTheme } from '../../context/ThemeContext';

const openExternalLink = (url: string) => window.open(url, '_blank');

const brands = [
  {
    name: 'Hellcap Hustle',
    tagline: 'Modern identity for a premium tech startup',
    logo: '/assets/brands-logos/Hellcap hustle logo - white.svg',
    logoDark: '/assets/brands-logos/Hellcap hustle logo - dark.svg',
    colors: ['#2F2F2F', '#F6CC82', '#003366'],
    typography: { Logo: 'Futura', Heading: 'Outfit bold', Body: 'Outfit light' },
    mockup: '/assets/brandbooks/Hellcap brandbook showcase.png',
    background: '/assets/backgrounds/brand-showcase/Hellcap background.png',
  },
  {
    name: 'MioTocco',
    tagline: 'It meals soo goood!',
    logo: '/assets/brands-logos/MioTocco logo - white.svg',
    logoDark: '/assets/brands-logos/MioTocco logo - dark.svg',
    colors: ['#C51D1D', '#FFC300', '#1F1F1F', '#EFEFEF'],
    typography: { Font: 'Aclonica Regular' },
    mockup: '/assets/brandbooks/MioTocco brandbook showcase.png',
    url: 'https://www.instagram.com/mio_tocco/',
    background: '/assets/backgrounds/brand-showcase/MioTocco background.png',
  },
  {
    name: 'ZenOAin',
    tagline: 'Your next level barbershop',
    logo: '/assets/brands-logos/ZenOAin logo - white.svg',
    logoDark: '/assets/brands-logos/ZenOAin logo - dark.svg',
    colors: ['#0D1B48', '#FFFFFF'],
    typography: { Logo: 'Ahsing', Text: 'Helvetica' },
    mockup: '/assets/brandbooks/ZenOAin brandbook showcase.png',
    background: '/assets/backgrounds/brand-showcase/ZenOAin background.png',
  },
  {
    name: 'XDrivo',
    tagline: 'The ultimate cabbing experience',
    logo: '/assets/brands-logos/XDrivo logo - white.svg',
    logoDark: '/assets/brands-logos/XDrivo logo - dark.svg',
    colors: ['#002B4A', '#00B07A', '#555555', '#E3E3E3'],
    typography: { Logo: 'Audiowide', Text: 'Helvetica' },
    mockup: '/assets/brandbooks/XDrivo brandbook showcase.png',
    url: 'https://xdrivo.com/en-UK',
    background: '/assets/backgrounds/brand-showcase/XDrivo background.png',
  },
];

const ScrollFade = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 95%', 'start 25%'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [48, 0]);
  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
};

const MobileCard = ({ brand, theme }: { brand: typeof brands[0]; theme: string }) => {
  const logoSrc = theme === 'dark' ? brand.logo : (brand.logoDark ?? brand.logo);
  return (
    <div className="brand-a-mobile-card">
      <div className="brand-a-mobile-info">
        <ScrollFade className="logo-placeholder">
          <img src={logoSrc} alt={`${brand.name} logo`} className="brand-logo-img" />
        </ScrollFade>

        <ScrollFade>
          <span className={`brand-a-label ${Satoshi.className}`}>{brand.name}</span>
          <p className={`brand-a-tagline ${Satoshi.className}`}>{brand.tagline}</p>
        </ScrollFade>

        <ScrollFade>
          <div className="brand-a-colors">
            <span className={`brand-a-label ${Satoshi.className}`}>Color Palette</span>
            <div className="color-swatches">
              {brand.colors.map((color, i) => (
                <div key={i}>
                  <div className="color-swatch" style={{ backgroundColor: color }} />
                  <span className="swatch-label">{color}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollFade>

        <ScrollFade>
          <div className="brand-a-typography">
            <span className={`brand-a-label ${Satoshi.className}`}>Typography</span>
            <div className="type-samples">
              {Object.entries(brand.typography).map(([role, font]) => (
                <div key={role} className="type-sample">
                  <span className="type-role">{role}</span>
                  <span className={`type-name ${Satoshi.className}`}>{font}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollFade>

        {brand.url && (
          <ScrollFade>
            <MyCustomButton
              btnIcon="assets/icons/external-link.svg"
              btnText="Visit website"
              className="secondary-cta"
              onClick={() => openExternalLink(brand.url!)}
            />
          </ScrollFade>
        )}
      </div>

      <ScrollFade>
        <img src={brand.mockup} alt={`${brand.name} mockup`} className="brand-a-mobile-image" />
      </ScrollFade>
    </div>
  );
};

const BrandShowcaseA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Must be declared before any conditional return (rules of hooks)
  const headerOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.08], [0, -40]);

  if (isMobile) {
    return (
      <section className="brand-showcase-a">
        <div className="brand-a-mobile-list">
          <motion.div
            className="brand-a-header brand-a-header--mobile"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className={`section-eyebrow ${Satoshi.className}`}>Brand Identity</span>
            <h2 className={`section-title ${ClashDisplay.className}`}>
              Crafting memorable brand identities
            </h2>
            <p className={`section-subtitle ${Satoshi.className}`}>
              From logo to full visual systems — here are some of the brands I've designed from the ground up.
            </p>
          </motion.div>

          {brands.map((brand, idx) => (
            <MobileCard key={idx} brand={brand} theme={theme} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="brand-showcase-a" ref={containerRef} style={{ position: 'relative' }}>
      {/* <SectionDotGrid forceDark /> */}
      <div className="brand-a-scroll-space">
        <div className="brand-a-sticky">
          {/* Cross-fading backgrounds */}
          {brands.map((brand, idx) => {
            const start = (idx + 1) / (brands.length + 1);
            const end = (idx + 2) / (brands.length + 1);
            const mid = (start + end) / 2;
            return (
              <BrandBackground
                key={idx}
                brand={brand}
                scrollYProgress={scrollYProgress}
                rangeIn={[start - 0.05, start + 0.05]}
                rangeOut={[end - 0.05, end + 0.02]}
                rangePeak={[start + 0.05, mid, end - 0.05]}
              />
            );
          })}

          <motion.div
            className="brand-a-header"
            style={{
              opacity: headerOpacity,
              y: headerY,
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
                theme={theme}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const BrandBackground = ({
  brand,
  scrollYProgress,
  rangeIn,
  rangeOut,
  rangePeak,
}: {
  brand: typeof brands[0];
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
  const scale = useTransform(
    scrollYProgress,
    [rangeIn[0], rangeIn[1]],
    [1.06, 1]
  );

  return (
    <motion.div
      style={{ opacity, position: 'absolute', inset: 0, zIndex: 0 }}
    >
      <motion.img
        src={brand.background}
        alt=""
        style={{
          scale,
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.3,
          objectPosition: 'center',
        }}
      />
    </motion.div>
  );
};

const BrandSlideA = ({
  brand,
  index,
  scrollYProgress,
  rangeIn,
  rangeOut,
  rangePeak,
  theme,
}: {
  brand: typeof brands[0];
  index: number;
  scrollYProgress: any;
  rangeIn: [number, number];
  rangeOut: [number, number];
  rangePeak: [number, number, number];
  theme: string;
}) => {
  const logoSrc = theme === 'dark' ? brand.logo : (brand.logoDark ?? brand.logo);
  const opacity = useTransform(
    scrollYProgress,
    [rangeIn[0], rangeIn[1], rangePeak[2], rangeOut[1]],
    [0, 1, 1, 0]
  );
  const pointerEvents = useTransform(opacity, (o) => (o > 0.1 ? 'auto' : 'none'));
  const y = useTransform(
    scrollYProgress,
    [rangeIn[0], rangeIn[1], rangePeak[2], rangeOut[1]],
    [60, 0, 0, -40]
  );

  const logoOpacity = useTransform(scrollYProgress, [rangeIn[0], rangeIn[1]], [0, 1]);
  const colorsOpacity = useTransform(scrollYProgress, [rangeIn[0] + 0.02, rangeIn[1] + 0.02], [0, 1]);
  const colorsX = useTransform(scrollYProgress, [rangeIn[0] + 0.02, rangeIn[1] + 0.02], [30, 0]);
  const typeOpacity = useTransform(scrollYProgress, [rangeIn[0] + 0.04, rangeIn[1] + 0.04], [0, 1]);
  const mockupScale = useTransform(scrollYProgress, [rangeIn[0] + 0.03, rangeIn[1] + 0.05], [0.85, 1]);
  const mockupOpacity = useTransform(scrollYProgress, [rangeIn[0] + 0.03, rangeIn[1] + 0.05], [0, 1]);

  return (
    <motion.div className="brand-a-slide" style={{ opacity, y, pointerEvents }}>
      <div className="brand-a-slide-inner">
        <div className="brand-a-info">
          <motion.div className="brand-a-logo" style={{ opacity: logoOpacity }}>
            <div className="logo-placeholder">
              <img src={logoSrc} alt={`${brand.name} logo`} className="brand-logo-img" />
            </div>
            <span className={`brand-a-label ${Satoshi.className}`}>{brand.name}</span>
            <p className={`brand-a-tagline ${Satoshi.className}`}>{brand.tagline}</p>
          </motion.div>

          <motion.div className="brand-a-colors" style={{ opacity: colorsOpacity, x: colorsX }}>
            <span className={`brand-a-label ${Satoshi.className}`}>Color Palette</span>
            <div className="color-swatches">
              {brand.colors.map((color, i) => (
                <div key={i}>
                  <div className="color-swatch" style={{ backgroundColor: color }} />
                  <span className="swatch-label">{color}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="brand-a-typography" style={{ opacity: typeOpacity }}>
            <span className={`brand-a-label ${Satoshi.className}`}>Typography</span>
            <div className="type-samples">
              {Object.entries(brand.typography).map(([role, font]) => (
                <div key={role} className="type-sample">
                  <span className="type-role">{role}</span>
                  <span className={`type-name ${Satoshi.className}`}>{font}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {brand.url && (
            <motion.div style={{ opacity: typeOpacity }}>
              <MyCustomButton
                btnIcon="assets/icons/external-link.svg"
                btnText="Visit website"
                className="secondary-cta"
                onClick={() => openExternalLink(brand.url!)}
              />
            </motion.div>
          )}
        </div>

        <motion.div className="brand-a-mockup" style={{ scale: mockupScale, opacity: mockupOpacity }}>
          <img src={brand.mockup} alt={`${brand.name} mockup`} className="mockup-image" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BrandShowcaseA;
