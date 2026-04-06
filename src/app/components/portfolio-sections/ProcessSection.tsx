'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';

// Abstract SVG illustrations for each step

// 01 — Discovery & Brief: speech bubble + target
const DiscoveryIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    {/* Speech bubble */}
    <rect className="illust-bubble" x="12" y="18" width="62" height="44" rx="10" stroke="#FF791B" strokeWidth="2" fill="#FF791B" fillOpacity="0.06" />
    <line x1="28" y1="35" x2="58" y2="35" stroke="#FF791B" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <line x1="28" y1="45" x2="50" y2="45" stroke="#FF791B" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    <path d="M24 62 L20 74 L34 66" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
    {/* Target / brief icon */}
    <circle className="illust-ring" cx="88" cy="82" r="22" stroke="#FF791B" strokeWidth="1.5" opacity="0.2" />
    <circle cx="88" cy="82" r="13" stroke="#FF791B" strokeWidth="1.5" opacity="0.4" />
    <circle cx="88" cy="82" r="5" fill="#FF791B" opacity="0.7" />
    <line x1="88" y1="55" x2="88" y2="60" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    <line x1="88" y1="104" x2="88" y2="109" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    <line x1="61" y1="82" x2="66" y2="82" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    <line x1="110" y1="82" x2="115" y2="82" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
  </svg>
);

// 02 — Research & Moodboard: images grid + magnifier
const ResearchIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    {/* Moodboard grid */}
    <rect className="illust-block-1" x="10" y="10" width="38" height="28" rx="4" fill="#FF791B" opacity="0.15" stroke="#FF791B" strokeWidth="1" />
    <rect className="illust-block-2" x="54" y="10" width="56" height="28" rx="4" fill="#FF791B" opacity="0.25" stroke="#FF791B" strokeWidth="1" />
    <rect className="illust-block-3" x="10" y="44" width="56" height="28" rx="4" fill="#FF791B" opacity="0.2" stroke="#FF791B" strokeWidth="1" />
    <rect className="illust-block-4" x="72" y="44" width="38" height="28" rx="4" fill="#FF791B" opacity="0.1" stroke="#FF791B" strokeWidth="1" />
    {/* Magnifier */}
    <circle className="illust-ring" cx="42" cy="88" r="18" stroke="#FF791B" strokeWidth="2.5" fill="none" />
    <line x1="54" y1="100" x2="68" y2="114" stroke="#FF791B" strokeWidth="3" strokeLinecap="round" />
    <line x1="36" y1="82" x2="48" y2="94" stroke="#FF791B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
  </svg>
);

// 03 — Concept & Direction: three style cards fanning out
const ConceptIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    {/* Card left (tilted) */}
    <g className="illust-card-l" transform="rotate(-12 40 70)">
      <rect x="12" y="28" width="56" height="72" rx="6" fill="#FF791B" fillOpacity="0.08" stroke="#FF791B" strokeWidth="1.5" />
      <rect x="20" y="38" width="40" height="6" rx="2" fill="#FF791B" opacity="0.2" />
      <rect x="20" y="50" width="28" height="4" rx="2" fill="#FF791B" opacity="0.15" />
    </g>
    {/* Card right (tilted) */}
    <g className="illust-card-r" transform="rotate(12 80 70)">
      <rect x="52" y="28" width="56" height="72" rx="6" fill="#FF791B" fillOpacity="0.08" stroke="#FF791B" strokeWidth="1.5" />
      <rect x="60" y="38" width="40" height="6" rx="2" fill="#FF791B" opacity="0.2" />
      <rect x="60" y="50" width="28" height="4" rx="2" fill="#FF791B" opacity="0.15" />
    </g>
    {/* Center card (chosen) */}
    <rect className="illust-frame" x="28" y="18" width="64" height="84" rx="8" fill="#FF791B" fillOpacity="0.12" stroke="#FF791B" strokeWidth="2" />
    <rect x="36" y="28" width="48" height="8" rx="3" fill="#FF791B" opacity="0.4" />
    <rect x="36" y="42" width="32" height="5" rx="2" fill="#FF791B" opacity="0.25" />
    <rect x="36" y="52" width="40" height="5" rx="2" fill="#FF791B" opacity="0.2" />
    {/* Checkmark */}
    <circle cx="60" cy="86" r="10" fill="#FF791B" opacity="0.15" stroke="#FF791B" strokeWidth="1.5" />
    <path d="M54 86 L58 90 L66 82" stroke="#FF791B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 04 — Design & Execution: pencil + layered screens
const DesignIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    {/* Back screen */}
    <rect className="illust-block-2" x="20" y="30" width="70" height="52" rx="6" fill="#FF791B" fillOpacity="0.08" stroke="#FF791B" strokeWidth="1.2" opacity="0.5" />
    {/* Front screen */}
    <rect className="illust-frame" x="10" y="20" width="70" height="52" rx="6" fill="#FF791B" fillOpacity="0.1" stroke="#FF791B" strokeWidth="2" />
    <rect x="18" y="28" width="54" height="8" rx="3" fill="#FF791B" opacity="0.25" />
    <rect x="18" y="42" width="30" height="5" rx="2" fill="#FF791B" opacity="0.2" />
    <rect x="18" y="52" width="42" height="5" rx="2" fill="#FF791B" opacity="0.15" />
    {/* Pencil */}
    <g className="illust-pencil" transform="rotate(-35 90 80)">
      <rect x="82" y="55" width="10" height="38" rx="2" fill="#FF791B" opacity="0.5" />
      <polygon points="82,93 87,106 92,93" fill="#FF791B" opacity="0.7" />
      <rect x="82" y="55" width="10" height="7" rx="1" fill="#FF791B" opacity="0.3" />
    </g>
  </svg>
);

// 05 — Delivery & Handoff: folder with arrow out + checkmarks
const DeliveryIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    {/* Folder */}
    <path className="illust-frame" d="M10 42 C10 38 13 35 17 35 L44 35 L50 28 L103 28 C107 28 110 31 110 35 L110 88 C110 92 107 95 103 95 L17 95 C13 95 10 92 10 88 Z" fill="#FF791B" fillOpacity="0.1" stroke="#FF791B" strokeWidth="2" />
    {/* Arrow up-right (export) */}
    <line className="illust-line" x1="60" y1="75" x2="60" y2="50" stroke="#FF791B" strokeWidth="2.5" strokeLinecap="round" />
    <polyline points="50,60 60,50 70,60" stroke="#FF791B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Checklist lines */}
    <circle cx="28" cy="58" r="4" stroke="#FF791B" strokeWidth="1.5" fill="#FF791B" fillOpacity="0.2" />
    <path d="M26 58 L28 60 L31 56" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="36" y1="58" x2="52" y2="58" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    <circle cx="28" cy="72" r="4" stroke="#FF791B" strokeWidth="1.5" fill="#FF791B" fillOpacity="0.2" />
    <path d="M26 72 L28 74 L31 70" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="36" y1="72" x2="48" y2="72" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
  </svg>
);

// Bonus — Logo Animation + Voice Over: spinning circles with centered play, mic + waves
const BonusIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration bonus-illustration">
    {/* Outer dashed ring — spins via CSS .illust-ring (origin set in SCSS) */}
    <circle className="illust-ring" cx="58" cy="42" r="30" stroke="#FF791B" strokeWidth="2" strokeDasharray="5 3" opacity="0.35" />
    {/* Inner ring — counter-spins via .illust-pulse */}
    <circle className="illust-pulse" cx="58" cy="42" r="19" fill="#FF791B" fillOpacity="0.08" stroke="#FF791B" strokeWidth="1.5" opacity="0.6" />
    {/* Play button — centered at 58, 42 */}
    <polygon className="illust-play" points="51,32 51,52 69,42" fill="#FF791B" opacity="0.75" />

    {/* Mic — pill body + arc stand + vertical stem */}
    <rect x="18" y="78" width="12" height="22" rx="6" stroke="#FF791B" strokeWidth="1.8" fill="#FF791B" fillOpacity="0.12" />
    <path d="M12 92 Q12 106 24 106 Q36 106 36 92" stroke="#FF791B" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6" />
    <line x1="24" y1="106" x2="24" y2="114" stroke="#FF791B" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
    <line x1="18" y1="114" x2="30" y2="114" stroke="#FF791B" strokeWidth="1.8" strokeLinecap="round" opacity="0.3" />

    {/* Sound waves — to the RIGHT of the mic, separated */}
    <path className="illust-wave-1" d="M42 84 Q48 89 42 94" stroke="#FF791B" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.55" />
    <path className="illust-wave-2" d="M48 80 Q58 89 48 98" stroke="#FF791B" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.35" />
    <path d="M54 76 Q68 89 54 102" stroke="#FF791B" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.18" />

    {/* Bonus star badge */}
    <circle cx="100" cy="20" r="13" fill="#FF791B" opacity="0.15" stroke="#FF791B" strokeWidth="1.5" />
    <text x="100" y="25" textAnchor="middle" fontSize="12" fill="#FF791B" fontWeight="bold" opacity="0.8">★</text>
  </svg>
);

const illustrations = [
  <DiscoveryIllustration key="discovery" />,
  <ResearchIllustration key="research" />,
  <ConceptIllustration key="concept" />,
  <DesignIllustration key="design" />,
  <DeliveryIllustration key="delivery" />,
  <BonusIllustration key="bonus" />,
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Brief',
    desc: 'Understand the project scope, client goals, target audience, and key constraints. Whether it\'s a logo, a brandbook, or a full product — this is where I define what success looks like.',
  },
  {
    number: '02',
    title: 'Research & Moodboard',
    desc: 'Competitor analysis, visual references, and trend exploration. I build a moodboard to align on visual direction before touching any design tool.',
  },
  {
    number: '03',
    title: 'Concept & Direction',
    desc: 'I present one or more creative directions — a style, a system, a layout approach. The client chooses and we lock in the direction before going deeper.',
  },
  {
    number: '04',
    title: 'Design & Execution',
    desc: 'The main creative phase. Depending on the project: logo exploration, brand system, UI screens, wireframes, mockups, or coded components — iterative with feedback rounds.',
  },
  {
    number: '05',
    title: 'Delivery & Handoff',
    desc: 'Final files delivered in the right formats — brand guidelines, Figma handoff, exported assets, or deployed code. Everything organized and ready to use.',
  },
  {
    number: '✦',
    title: 'Bonus — Logo Animation & Voice Over',
    desc: 'For bigger projects, I offer an animated logo reveal paired with a custom tagline voice over. A cinematic touch that brings the brand to life and makes a lasting first impression.',
  },
];

const ProcessStepItem = ({ step, idx, illustration }: {
  step: typeof processSteps[0];
  idx: number;
  illustration: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'hidden' | 'active' | 'passed'>('hidden');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      const { top, bottom } = el.getBoundingClientRect();
      const vh = window.innerHeight;

      if (top > vh * 0.75) {
        // Below the 75% mark — not yet in view
        setState('hidden');
      } else if (top > vh * 0.2 && bottom > 0) {
        // Within the active zone
        setState('active');
      } else {
        // Top is less than 20% above viewport — scrolled past
        setState('passed');
      }
    };

    window.addEventListener('scroll', check, { passive: true });
    check();
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`process-step${state === 'active' ? ' is-active' : state === 'passed' ? ' is-passed' : ''}`}
      initial={{ opacity: 0.35 }}
      animate={{ opacity: state === 'active' ? 1 : 0.35 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="step-indicator">
        <div className="step-dot"></div>
        {idx !== processSteps.length - 1 && (
          <motion.div
            className="step-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: state !== 'hidden' ? 1 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        )}
      </div>
      <div className="step-content">
        <div className={`step-number ${ClashDisplay.className}`}>{step.number}</div>
        <h3 className={`step-title ${Satoshi.className}`}>{step.title}</h3>
        <p className={`step-desc ${Satoshi.className}`}>{step.desc}</p>
      </div>
      <div className="step-illustration-wrapper">
        {illustration}
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {

  return (
    <section className="process-section" style={{ position: 'relative' }}>
      {/* <SectionDotGrid /> */}
      <div className="portfolio-container">

        <motion.div
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div>
            <span className={`section-eyebrow ${Satoshi.className}`}>The Process</span>
            <h2 className={`section-title ${ClashDisplay.className}`}>
              How I go from idea to finished product
            </h2>
          </div>
          <p className={`section-subtitle ${Satoshi.className}`}>
            Behind every project is a structured, intentional design process — here's how I approach each one from start to finish.
          </p>
        </motion.div>

        <div className="process-timeline">
          {processSteps.map((step, idx) => (
            <ProcessStepItem
              key={idx}
              step={step}
              idx={idx}
              illustration={illustrations[idx]}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
