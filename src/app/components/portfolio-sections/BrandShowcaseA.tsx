'use client';

import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import Image from 'next/image';
import { useTheme } from '../../context/ThemeContext';

const brands = [
  {
    name: 'Hellcap Hustle',
    tagline: 'Modern identity for a premium tech startup',
    description: 'Full brand identity for a premium tech startup — logo, type system, color palette, and brand assets, balancing ambition with a sharp, modern edge.',
    logo: '/assets/brands-logos/Hellcap hustle logo - white.svg',
    logoDark: '/assets/brands-logos/Hellcap hustle logo - dark.svg',
    colors: ['#2F2F2F', '#F6CC82', '#003366'],
    typography: { Logo: 'Futura', Heading: 'Outfit bold', Body: 'Outfit light' },
    mockup: '/assets/brandbooks/Hellcap brandbook showcase.webp',
    background: '/assets/backgrounds/brand-showcase/Hellcap background.webp',
  },
  {
    name: 'MioTocco',
    tagline: 'It meals soo goood!',
    description: 'I built the entire brand from scratch: logo, brandbook, product photography, and all marketing and communication materials.',
    logo: '/assets/brands-logos/MioTocco logo - white.svg',
    logoDark: '/assets/brands-logos/MioTocco logo - dark.svg',
    colors: ['#C51D1D', '#FFC300', '#1F1F1F', '#EFEFEF'],
    typography: { Font: 'Aclonica Regular' },
    mockup: '/assets/brandbooks/MioTocco brandbook showcase.webp',
    url: 'https://www.instagram.com/mio_tocco/',
    background: '/assets/backgrounds/brand-showcase/MioTocco background.webp',
  },
  {
    name: 'ZenOAin',
    tagline: 'Your next level barbershop',
    description: 'Complete identity for a high-end barbershop — a clean, confident system built on navy and white, projecting precision and quiet authority.',
    logo: '/assets/brands-logos/ZenOAin logo - white.svg',
    logoDark: '/assets/brands-logos/ZenOAin logo - dark.svg',
    colors: ['#0D1B48', '#FFFFFF'],
    typography: { Logo: 'Ahsing', Text: 'Helvetica' },
    mockup: '/assets/brandbooks/ZenOAin brandbook showcase.webp',
    background: '/assets/backgrounds/brand-showcase/ZenOAin background.webp',
  },
  {
    name: 'XDrivo',
    tagline: 'The ultimate cabbing experience',
    description: 'Full visual identity for a ride-hailing platform — a tech-forward brand built for clarity and trust, from logo mark to motion-ready assets.',
    logo: '/assets/brands-logos/XDrivo logo - white.svg',
    logoDark: '/assets/brands-logos/XDrivo logo - dark.svg',
    colors: ['#002B4A', '#00B07A', '#555555', '#E3E3E3'],
    typography: { Logo: 'Audiowide', Text: 'Helvetica' },
    mockup: '/assets/brandbooks/XDrivo brandbook showcase.webp',
    url: 'https://xdrivo.com/en-UK',
    background: '/assets/backgrounds/brand-showcase/XDrivo background.webp',
  },
];

type Brand = typeof brands[0];

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const BrandModal = ({ brand, onClose }: { brand: Brand; onClose: () => void }) => {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const dragOrigin = useRef({ mx: 0, my: 0, ox: 0, oy: 0 });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const resetZoom = () => { setScale(1); setOffset({ x: 0, y: 0 }); };

  const handleClick = () => {
    if (scale > 1) { resetZoom(); } else { setScale(2); }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale(s => {
      const next = Math.min(4, Math.max(1, s - e.deltaY * 0.005));
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsPanning(true);
    dragOrigin.current = { mx: e.clientX, my: e.clientY, ox: offset.x, oy: offset.y };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isPanning) return;
    setOffset({
      x: dragOrigin.current.ox + e.clientX - dragOrigin.current.mx,
      y: dragOrigin.current.oy + e.clientY - dragOrigin.current.my,
    });
  };

  const onMouseUp = () => setIsPanning(false);

  const cursor = isPanning ? 'grabbing' : scale > 1 ? 'grab' : 'zoom-in';

  return createPortal(
    <div className="brand-a-backdrop" onClick={onClose}>
      <button className="brand-a-modal-close" onClick={onClose} aria-label="Close">
        <CloseIcon />
      </button>
      <div
        className="brand-a-modal-lightbox"
        onClick={e => e.stopPropagation()}
        onWheel={handleWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{ cursor }}
      >
        <img
          src={brand.mockup}
          alt={`${brand.name} brandbook`}
          className="brand-a-modal-img"
          onClick={handleClick}
          style={{
            transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
            transition: isPanning ? 'none' : 'transform 0.3s ease',
          }}
          draggable={false}
        />
      </div>
    </div>,
    document.body
  );
};

const BrandCard = ({ brand, theme, onClick }: { brand: Brand; theme: string; onClick: () => void }) => {
  const logoSrc = theme === 'dark' ? brand.logo : (brand.logoDark ?? brand.logo);

  return (
    <div className="brand-a-card" onClick={onClick} role="button" tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}>
      <div className="brand-a-card-hero">
        <Image src={brand.background} alt="" width={800} height={500} className="brand-a-card-bg" aria-hidden />
        <Image src={brand.mockup} alt={`${brand.name} brandbook`} width={800} height={500} className="brand-a-card-mockup" />
        <div className="brand-a-card-zoom-hint">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className={`brand-a-card-body ${Satoshi.className}`}>
        <div className="brand-a-card-identity">
          <Image src={logoSrc} alt={`${brand.name} logo`} width={180} height={44} className="brand-a-card-logo" />
          <div>
            <span className="brand-a-card-name">{brand.name}</span>
            <p className="brand-a-card-tagline">{brand.tagline}</p>
            {brand.description && (
              <p className="brand-a-card-description">{brand.description}</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

const ChevronIcon = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    {dir === 'left'
      ? <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      : <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    }
  </svg>
);

const BrandShowcaseA = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [activeBrand, setActiveBrand] = useState<Brand | null>(null);

  const didDrag = useRef(false);
  const snapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scroll = (dir: 'left' | 'right') => {
    trackRef.current?.scrollBy({ left: dir === 'right' ? 432 : -432, behavior: 'smooth' });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    e.preventDefault();

    // Cancel any in-flight snap restoration from a previous drag
    if (snapTimer.current) clearTimeout(snapTimer.current);

    didDrag.current = false;
    const startX = e.clientX;
    const scrollStart = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
    trackRef.current.style.scrollSnapType = 'none';

    const onMove = (ev: MouseEvent) => {
      const walk = ev.clientX - startX;
      if (Math.abs(walk) > 4) didDrag.current = true;
      trackRef.current!.scrollLeft = scrollStart - walk;
    };

    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      if (!trackRef.current) return;
      const track = trackRef.current;
      track.style.cursor = 'grab';

      const cards = Array.from(track.children) as HTMLElement[];
      const firstOffset = cards[0]?.offsetLeft ?? 0;
      const current = track.scrollLeft;
      const maxScroll = track.scrollWidth - track.clientWidth;
      let target = 0;
      let minDist = Infinity;
      for (const card of cards) {
        const snapPos = Math.min(card.offsetLeft - firstOffset, maxScroll);
        const dist = Math.abs(snapPos - current);
        if (dist < minDist) { minDist = dist; target = snapPos; }
      }
      track.scrollTo({ left: target, behavior: 'smooth' });

      snapTimer.current = setTimeout(() => {
        if (trackRef.current) trackRef.current.style.scrollSnapType = '';
        snapTimer.current = null;
      }, 700);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  const handleCardClick = (brand: Brand) => {
    if (!didDrag.current) setActiveBrand(brand);
  };

  return (
    <section className="brand-showcase-a">

      <div className="brand-a-container">
        <motion.div
          className="brand-a-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className={`section-eyebrow ${Satoshi.className}`}>Brand Identity</span>
          <h2 className={`section-title ${ClashDisplay.className}`}>
            Crafting memorable brand identities
          </h2>
          <p className={`section-subtitle ${Satoshi.className}`}>
            From logo to full visual systems — here are some of the brands I've designed from the ground up.
          </p>
        </motion.div>
      </div>

      <div className="brand-a-carousel-outer">

        <div className="brand-a-nav-group">
          <button className="brand-a-nav" onClick={() => scroll('left')} aria-label="Previous brand">
            <ChevronIcon dir="left" />
          </button>
          <button className="brand-a-nav" onClick={() => scroll('right')} aria-label="Next brand">
            <ChevronIcon dir="right" />
          </button>
        </div>

        <div
          className="brand-a-track"
          ref={trackRef}
          onMouseDown={onMouseDown}
        >
          {brands.map((brand, i) => (
            <BrandCard key={i} brand={brand} theme={theme} onClick={() => handleCardClick(brand)} />
          ))}
        </div>

      </div>

      {activeBrand && (
        <BrandModal brand={activeBrand} onClose={() => setActiveBrand(null)} />
      )}

    </section>
  );
};

export default BrandShowcaseA;
