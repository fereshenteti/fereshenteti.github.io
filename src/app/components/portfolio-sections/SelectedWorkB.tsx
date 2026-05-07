'use client';

import { useState, useEffect, useRef } from 'react';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { MyCustomButton } from '../common-ui/custom-button';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Study = {
  title: string;
  category: string;
  summary: string;
  focusAreas: string[];
  video?: string;
  image?: string;
  images?: string[];
  url?: string;
};

const caseStudies: Study[] = [
  {
    title: 'eMBS Website',
    category: 'Product Design / UX / Frontend',
    summary: `eMBS (e-Mobility Business Solutions) helps companies transition to electric mobility by combining strategy consulting, battery technology, and green energy solutions. I collaborated with the client to gather insights, built an initial prototype, then delivered the final site in Webflow with smooth transitions and a clean aesthetic.`,
    focusAreas: ['Webflow', 'Clean UX', 'Accessibility', 'UI friendly'],
    video: 'assets/frontend_projects/videos/embs website.mp4',
    url: 'https://www.e-mobility-bs.com',
  },
  {
    title: 'Sedeo Marketplace',
    category: 'UI Design / UX / Frontend',
    summary: `Sedeo is a marketplace for event equipment rentals. As the near-solo frontend engineer, I owned the full frontend — from design to production. I used Amplitude to trace real user behavior, identified the friction points blocking conversion, and redesigned those flows. Result: load time dropped from 1.9s to 0.56s, zero layout shifts, and a 17% lift in conversion rate.`,
    focusAreas: ['Next.js', 'UI UX', 'Performance', 'Amplitude', 'Accessibility', 'Conversion'],
    image: 'assets/frontend_projects/sedeo.webp',
  },
  {
    title: 'InstaClear',
    category: 'Financial Platform / React / Blockchain',
    summary: `InstaClear is an international real-time banking transaction platform built for the Central Bank of Tunisia, powered by MNBC — Monnaie Numérique de la Banque Centrale — a sovereign digital currency built on Blockchain. I contributed to the frontend of the platform that processed the first-ever MNBC transaction between Tunisia and France.`,
    focusAreas: ['React', 'Financial UI', 'SWIFT', 'Blockchain', 'Real-time', 'Enterprise'],
    images: [
      'assets/frontend_projects/instaclear 1.webp',
      'assets/frontend_projects/instaclear 2.webp',
      'assets/frontend_projects/instaclear 3.webp',
    ],
  },
  {
    title: 'Value Digital Services',
    category: 'UI Design / Dashboard / Frontend',
    summary: `Digital services company — designed and built its website and contributed to multiple internal products.`,
    focusAreas: ['Clarity', 'UI smoothness', 'Trust', 'Business UI', 'Mobile UI', 'Security'],
    image: 'assets/frontend_projects/Value website 1.webp',
    url: 'https://value.com.tn',
  },
  {
    title: 'Formatic Academy',
    category: 'Landing Page / Pricing / Frontend',
    summary: `Pixel-perfect landing and pricing pages for an online academy, built in Vue.js with full LTR/RTL support for English and Arabic.`,
    focusAreas: ['Vue.js', 'Landing page', 'Pricing page', 'Responsive UI'],
    video: 'assets/frontend_projects/videos/formatic academy website.mp4',
    url: 'https://formaticacademy.com',
  },
];

// All 3 images shown simultaneously in a layered composition.
// Each layer rises from below at a different Y offset (parallax depth) and loops every 4 s.
const LayeredShowcase = ({ images, alt }: { images: string[]; alt: string }) => (
  <div className="sw-b-layered">
    <Image src={images[0]} alt={`${alt} – overview`}     width={800} height={600} className="sw-b-layer sw-b-layer--1" />
    <Image src={images[1]} alt={`${alt} – detail`}       width={800} height={600} className="sw-b-layer sw-b-layer--2" />
    <Image src={images[2]} alt={`${alt} – transactions`} width={800} height={600} className="sw-b-layer sw-b-layer--3" />
  </div>
);

const ChevronIcon = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    {dir === 'left'
      ? <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      : <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    }
  </svg>
);

const SelectedWorkB = () => {
  const [selected, setSelected] = useState<Study | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const didDrag = useRef(false);
  const snapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selected]);

  const scroll = (dir: 'left' | 'right') => {
    trackRef.current?.scrollBy({ left: dir === 'right' ? 480 : -480, behavior: 'smooth' });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    e.preventDefault();
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

  const handleCardClick = (study: Study) => {
    if (!didDrag.current) setSelected(study);
  };

  return (
    <section className="selected-work-b-section">

      <div className="sw-b-container">
        <motion.div
          className="sw-b-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className={`section-eyebrow ${Satoshi.className}`}>Selected Frontend Engineering Work</span>
          <h2 className={`section-title ${ClashDisplay.className}`}>
            Real products, real problems, real impact
          </h2>
          <p className={`section-subtitle ${Satoshi.className}`}>
            Beyond design, I bring interfaces to life with clean, scalable, and production-ready frontend code.
          </p>
        </motion.div>
      </div>

      <div className="sw-b-carousel-outer">

        <div className="sw-b-nav-group">
          <button className="sw-b-nav" onClick={() => scroll('left')} aria-label="Previous project">
            <ChevronIcon dir="left" />
          </button>
          <button className="sw-b-nav" onClick={() => scroll('right')} aria-label="Next project">
            <ChevronIcon dir="right" />
          </button>
        </div>

        <div
          className="sw-b-track"
          ref={trackRef}
          onMouseDown={onMouseDown}
        >
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="sw-b-card"
              onClick={() => handleCardClick(study)}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(study); }}
            >
              <div className={`sw-b-card-media${study.images ? ' sw-b-card-media--layered' : ''}`}>
                {study.video
                  ? <video src={study.video} muted loop playsInline autoPlay />
                  : study.images
                    ? <LayeredShowcase images={study.images} alt={study.title} />
                    : <Image src={study.image!} alt={study.title} width={800} height={600} />
                }
              </div>
              <div className="sw-b-card-info">
                <span className={`sw-b-category ${Satoshi.className}`}>{study.category}</span>
                <h3 className={`sw-b-title ${ClashDisplay.className}`}>{study.title}</h3>
                <div className="sw-b-tags">
                  {study.focusAreas.slice(0, 3).map((area, j) => (
                    <span key={j} className={`sw-b-tag ${Satoshi.className}`}>{area}</span>
                  ))}
                  {study.focusAreas.length > 3 && (
                    <span className={`sw-b-tag ${Satoshi.className}`}>+{study.focusAreas.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {selected && (
        <div className="sw-b-backdrop" onClick={() => setSelected(null)}>
          <div className="sw-b-modal" onClick={e => e.stopPropagation()}>

            <button className="sw-b-modal-close" onClick={() => setSelected(null)} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <div className={`sw-b-modal-media${selected.images ? ' sw-b-modal-media--layered' : ''}`}>
              {selected.video
                ? <video src={selected.video} muted loop playsInline autoPlay />
                : selected.images
                  ? <LayeredShowcase images={selected.images} alt={selected.title} />
                  : <Image src={selected.image!} alt={selected.title} width={800} height={600} />
              }
            </div>

            <div className="sw-b-modal-body">
              <span className={`sw-b-category ${Satoshi.className}`}>{selected.category}</span>
              <h3 className={`sw-b-modal-title ${ClashDisplay.className}`}>{selected.title}</h3>
              <p className={`sw-b-summary ${Satoshi.className}`}>{selected.summary}</p>
              <div className="sw-b-tags sw-b-modal-tags">
                {selected.focusAreas.map((area, i) => (
                  <span key={i} className={`sw-b-tag ${Satoshi.className}`}>{area}</span>
                ))}
              </div>
              {selected.url && (
                <MyCustomButton
                  btnIcon="assets/icons/external-link.svg"
                  btnText="Visit website"
                  className="secondary-cta"
                  onClick={() => window.open(selected.url, '_blank')}
                />
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default SelectedWorkB;
