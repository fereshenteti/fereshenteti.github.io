'use client';

import { useState, useEffect, useRef } from 'react';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { motion } from 'framer-motion';

type UXProject = {
  title: string;
  category: string;
  summary: string;
  focusAreas: string[];
  images: string[];
  layout: 'eventizer' | 'guido';
};

const uiuxProjects: UXProject[] = [
  {
    title: 'Eventizer',
    category: 'Mobile App / UX / UI Design',
    summary: `A mobile event discovery platform designed from scratch — covering event feeds, detail pages, and conference schedules with a warm, vibrant interface that makes navigation feel effortless. Built for both casual event-goers and conference professionals.`,
    focusAreas: ['Figma', 'Mobile UX', 'iOS Design', 'Event Platform', 'Responsive'],
    images: [
      'assets/uiux_design/eventizer/Eventizer 1.png',
      'assets/uiux_design/eventizer/Eventizer 2.png',
      'assets/uiux_design/eventizer/Eventizer 3.png',
    ],
    layout: 'eventizer',
  },
  {
    title: 'Guido',
    category: 'Mobile App / Apple Watch / Tourism',
    summary: `A cultural heritage discovery app guiding tourists through landmarks in Tunis and beyond, with an Apple Watch companion for proximity alerts, audio guidance, and on-wrist navigation. Fully designed in Figma — from user flows to final pixel-perfect screens.`,
    focusAreas: ['Figma', 'Mobile UX', 'Apple Watch', 'Maps', 'Tourism App'],
    images: [
      'assets/uiux_design/guido/guido 1.png',
      'assets/uiux_design/guido/guido 2.png',
      'assets/uiux_design/guido/guido 3.png',
      'assets/uiux_design/guido/guido 4.png',
      'assets/uiux_design/guido/guido 5.png',
    ],
    layout: 'guido',
  },
];

const EventizerShowcase = ({ images, alt }: { images: string[]; alt: string }) => (
  <div className="uiux-p-layered">
    <img src={images[0]} alt={`${alt} – home`}     className="uiux-p-eventizer-layer uiux-p-eventizer-layer--1" />
    <img src={images[1]} alt={`${alt} – detail`}   className="uiux-p-eventizer-layer uiux-p-eventizer-layer--2" />
    <img src={images[2]} alt={`${alt} – schedule`} className="uiux-p-eventizer-layer uiux-p-eventizer-layer--3" />
  </div>
);

const GuidoShowcase = ({ images, alt }: { images: string[]; alt: string }) => (
  <div className="uiux-p-layered">
    <img src={images[0]} alt={`${alt} – watch left`}   className="uiux-p-guido-layer uiux-p-guido-layer--1" />
    <img src={images[1]} alt={`${alt} – phone left`}   className="uiux-p-guido-layer uiux-p-guido-layer--2" />
    <img src={images[2]} alt={`${alt} – phone center`} className="uiux-p-guido-layer uiux-p-guido-layer--3" />
    <img src={images[3]} alt={`${alt} – phone right`}  className="uiux-p-guido-layer uiux-p-guido-layer--4" />
    <img src={images[4]} alt={`${alt} – watch right`}  className="uiux-p-guido-layer uiux-p-guido-layer--5" />
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

const UXProjectsShowcase = () => {
  const [selected, setSelected] = useState<UXProject | null>(null);
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
    trackRef.current?.scrollBy({ left: dir === 'right' ? 500 : -500, behavior: 'smooth' });
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

  const handleCardClick = (project: UXProject) => {
    if (!didDrag.current) setSelected(project);
  };

  const renderShowcase = (project: UXProject) =>
    project.layout === 'eventizer'
      ? <EventizerShowcase images={project.images} alt={project.title} />
      : <GuidoShowcase images={project.images} alt={project.title} />;

  return (
    <section className="uiux-p-section">

      <div className="uiux-p-container">
        <motion.div
          className="uiux-p-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className={`section-eyebrow ${Satoshi.className}`}>UI/UX Design</span>
          <h2 className={`section-title ${ClashDisplay.className}`}>
            Interfaces that just feel right
          </h2>
          <p className={`section-subtitle ${Satoshi.className}`}>
            Full product design across mobile apps and multi-device experiences — from user flows to pixel-perfect screens.
          </p>
        </motion.div>
      </div>

      <div className="uiux-p-carousel-outer">

        <div className="uiux-p-nav-group">
          <button className="uiux-p-nav" onClick={() => scroll('left')} aria-label="Previous project">
            <ChevronIcon dir="left" />
          </button>
          <button className="uiux-p-nav" onClick={() => scroll('right')} aria-label="Next project">
            <ChevronIcon dir="right" />
          </button>
        </div>

        <div
          className="uiux-p-track"
          ref={trackRef}
          onMouseDown={onMouseDown}
        >
          {uiuxProjects.map((project, i) => (
            <div
              key={i}
              className="uiux-p-card"
              onClick={() => handleCardClick(project)}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(project); }}
            >
              <div className={`uiux-p-card-media uiux-p-card-media--${project.layout}`}>
                {renderShowcase(project)}
              </div>
              <div className="uiux-p-card-info">
                <span className={`uiux-p-category ${Satoshi.className}`}>{project.category}</span>
                <h3 className={`uiux-p-title ${ClashDisplay.className}`}>{project.title}</h3>
                <div className="uiux-p-tags">
                  {project.focusAreas.slice(0, 3).map((area, j) => (
                    <span key={j} className={`uiux-p-tag ${Satoshi.className}`}>{area}</span>
                  ))}
                  {project.focusAreas.length > 3 && (
                    <span className={`uiux-p-tag ${Satoshi.className}`}>+{project.focusAreas.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {selected && (
        <div className="uiux-p-backdrop" onClick={() => setSelected(null)}>
          <div className="uiux-p-modal" onClick={e => e.stopPropagation()}>

            <button className="uiux-p-modal-close" onClick={() => setSelected(null)} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div className={`uiux-p-modal-gallery uiux-p-modal-gallery--${selected.layout}`}>
              {selected.images.map((img, i) => (
                <img key={i} src={img} alt={`${selected.title} – screen ${i + 1}`} className="uiux-p-modal-gallery-img" />
              ))}
            </div>

            <div className="uiux-p-modal-body">
              <span className={`uiux-p-category ${Satoshi.className}`}>{selected.category}</span>
              <h3 className={`uiux-p-modal-title ${ClashDisplay.className}`}>{selected.title}</h3>
              <p className={`uiux-p-summary ${Satoshi.className}`}>{selected.summary}</p>
              <div className="uiux-p-tags">
                {selected.focusAreas.map((area, i) => (
                  <span key={i} className={`uiux-p-tag ${Satoshi.className}`}>{area}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default UXProjectsShowcase;
