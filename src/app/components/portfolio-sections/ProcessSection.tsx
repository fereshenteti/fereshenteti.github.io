'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';

// 01 — Discovery & Brief: brief notes frame + spinning target rings
const DiscoveryIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    {/* Brief notes */}
    <rect className="illust-frame" x="8" y="16" width="54" height="44" rx="7" stroke="#FF791B" strokeWidth="2" fill="#FF791B" fillOpacity="0.07" />
    <rect className="illust-block-1" x="16" y="26" width="38" height="5" rx="2.5" fill="#FF791B" opacity="0.5" />
    <rect className="illust-block-2" x="16" y="36" width="28" height="5" rx="2.5" fill="#FF791B" opacity="0.35" />
    <rect className="illust-block-3" x="16" y="46" width="34" height="5" rx="2.5" fill="#FF791B" opacity="0.25" />
    {/* Target / goal — rings */}
    <circle className="illust-ring" cx="88" cy="74" r="26" stroke="#FF791B" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.3" />
    <circle cx="88" cy="74" r="16" stroke="#FF791B" strokeWidth="1.5" opacity="0.22" fill="none" />
    <circle className="illust-accent" cx="88" cy="74" r="7" fill="#FF791B" opacity="0.75" />
    {/* Crosshairs */}
    <line x1="88" y1="44" x2="88" y2="52" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
    <line x1="88" y1="96" x2="88" y2="104" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
    <line x1="58" y1="74" x2="66" y2="74" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
    <line x1="110" y1="74" x2="118" y2="74" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
  </svg>
);

// 02 — Research & Strategy: bar chart growing from baseline + trend line + magnifier
const ResearchIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    {/* Baseline */}
    <line x1="8" y1="82" x2="78" y2="82" stroke="#FF791B" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
    {/* Bars — grow from own bottom with transform-box: fill-box */}
    <rect className="illust-bar-1" x="10" y="64" width="12" height="18" rx="3" fill="#FF791B" opacity="0.3" />
    <rect className="illust-bar-2" x="26" y="48" width="12" height="34" rx="3" fill="#FF791B" opacity="0.4" />
    <rect className="illust-bar-3" x="42" y="56" width="12" height="26" rx="3" fill="#FF791B" opacity="0.35" />
    <rect className="illust-bar-4" x="58" y="36" width="12" height="46" rx="3" fill="#FF791B" opacity="0.5" />
    {/* Trend line */}
    <path className="illust-trend" d="M10 76 C22 68 38 60 52 62 Q62 54 72 38" stroke="#FF791B" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Magnifier */}
    <circle className="illust-frame" cx="94" cy="82" r="20" stroke="#FF791B" strokeWidth="2.5" fill="#FF791B" fillOpacity="0.06" />
    <line x1="108" y1="96" x2="118" y2="106" stroke="#FF791B" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
  </svg>
);

// 03 — Wireframe & Prototype: browser frame + content skeleton + flow arrow
const WireframeIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    {/* Main browser frame */}
    <rect className="illust-frame" x="6" y="16" width="68" height="54" rx="5" stroke="#FF791B" strokeWidth="2" fill="#FF791B" fillOpacity="0.06" />
    {/* Browser top bar */}
    <line x1="6" y1="27" x2="74" y2="27" stroke="#FF791B" strokeWidth="1.5" opacity="0.25" />
    <circle cx="14" cy="22" r="2" fill="#FF791B" opacity="0.3" />
    <circle cx="21" cy="22" r="2" fill="#FF791B" opacity="0.3" />
    <circle cx="28" cy="22" r="2" fill="#FF791B" opacity="0.3" />
    {/* Header block */}
    <rect className="illust-block-1" x="12" y="32" width="50" height="8" rx="2" fill="#FF791B" opacity="0.22" />
    {/* Content skeleton */}
    <rect className="illust-block-2" x="12" y="45" width="22" height="16" rx="2" stroke="#FF791B" strokeWidth="1" opacity="0.3" fill="none" />
    <rect className="illust-block-3" x="38" y="45" width="24" height="5" rx="1" fill="#FF791B" opacity="0.15" />
    <rect className="illust-block-4" x="38" y="53" width="16" height="4" rx="1" fill="#FF791B" opacity="0.1" />
    {/* Flow arrow */}
    <path d="M78 43 L90 43" stroke="#FF791B" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" opacity="0.55" />
    <polyline points="87,39 91,43 87,47" stroke="#FF791B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.55" />
    {/* Second smaller frame */}
    <rect x="94" y="22" width="22" height="38" rx="4" stroke="#FF791B" strokeWidth="1.5" fill="#FF791B" fillOpacity="0.04" />
    <rect className="illust-block-5" x="98" y="29" width="14" height="4" rx="1" fill="#FF791B" opacity="0.2" />
    <rect x="98" y="37" width="10" height="3" rx="1" fill="#FF791B" opacity="0.12" />
    <rect x="98" y="44" width="12" height="3" rx="1" fill="#FF791B" opacity="0.08" />
  </svg>
);

// 04 — Design & Iteration: layered frames + color swatches + pencil
const DesignIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    {/* Back frame — static depth layer */}
    <rect x="20" y="28" width="72" height="54" rx="7" fill="#FF791B" fillOpacity="0.04" stroke="#FF791B" strokeWidth="1" opacity="0.25" />
    {/* Front frame — draws in */}
    <rect className="illust-frame" x="10" y="18" width="72" height="54" rx="7" fill="#FF791B" fillOpacity="0.08" stroke="#FF791B" strokeWidth="2" />
    {/* Color swatches — stagger in */}
    <rect className="illust-block-1" x="18" y="28" width="11" height="11" rx="3" fill="#FF791B" opacity="0.75" />
    <rect className="illust-block-2" x="33" y="28" width="11" height="11" rx="3" fill="#FF791B" opacity="0.42" />
    <rect className="illust-block-3" x="48" y="28" width="11" height="11" rx="3" fill="#FF791B" opacity="0.2" />
    {/* Content lines */}
    <rect className="illust-block-4" x="18" y="48" width="54" height="5" rx="2.5" fill="#FF791B" opacity="0.2" />
    <rect className="illust-block-5" x="18" y="58" width="38" height="5" rx="2.5" fill="#FF791B" opacity="0.13" />
    {/* Pencil */}
    <g transform="rotate(-35 104 88)">
      <rect x="98" y="72" width="9" height="28" rx="2" fill="#FF791B" opacity="0.45" />
      <polygon points="98,100 102.5,110 107,100" fill="#FF791B" opacity="0.62" />
      <rect x="98" y="72" width="9" height="6" rx="1" fill="#FF791B" opacity="0.22" />
    </g>
  </svg>
);

// 05 — Build & Develop: terminal window + code lines + cursor blink + deploy arrow
const BuildIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    {/* Terminal window */}
    <rect className="illust-frame" x="6" y="18" width="88" height="66" rx="6" fill="#FF791B" fillOpacity="0.06" stroke="#FF791B" strokeWidth="2" />
    {/* Title bar */}
    <rect className="illust-block-1" x="6" y="18" width="88" height="14" rx="6" fill="#FF791B" fillOpacity="0.12" />
    <circle cx="17" cy="25" r="2.5" fill="#FF791B" opacity="0.45" />
    <circle cx="26" cy="25" r="2.5" fill="#FF791B" opacity="0.3" />
    <circle cx="35" cy="25" r="2.5" fill="#FF791B" opacity="0.18" />
    {/* Code brackets */}
    <path d="M18 44 L12 51 L18 58" stroke="#FF791B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.75" />
    <path d="M32 44 L38 51 L32 58" stroke="#FF791B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.75" />
    {/* Code lines — fade in staggered */}
    <line className="illust-block-2" x1="44" y1="44" x2="72" y2="44" stroke="#FF791B" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
    <line className="illust-block-3" x1="44" y1="52" x2="62" y2="52" stroke="#FF791B" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
    <line className="illust-block-4" x1="44" y1="60" x2="76" y2="60" stroke="#FF791B" strokeWidth="2" strokeLinecap="round" opacity="0.18" />
    {/* Cursor — blinks via illust-accent */}
    <rect className="illust-accent" x="16" y="67" width="9" height="3" rx="1.5" fill="#FF791B" opacity="0.6" />
    {/* Deploy circle + upload arrow */}
    <circle cx="100" cy="92" r="16" stroke="#FF791B" strokeWidth="1.5" opacity="0.22" />
    <line x1="100" y1="100" x2="100" y2="85" stroke="#FF791B" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
    <polyline points="94,91 100,85 106,91" stroke="#FF791B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.65" />
  </svg>
);

// 06 — Delivery & Handoff: folder + upload arrow + checklist
const DeliveryIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    {/* Folder shape */}
    <path className="illust-frame" d="M8 42 C8 38 11 35 15 35 L42 35 L48 28 L105 28 C109 28 112 31 112 35 L112 90 C112 94 109 97 105 97 L15 97 C11 97 8 94 8 90 Z" fill="#FF791B" fillOpacity="0.07" stroke="#FF791B" strokeWidth="2" />
    {/* Upload arrow */}
    <line x1="84" y1="78" x2="84" y2="54" stroke="#FF791B" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    <polyline points="74,64 84,54 94,64" stroke="#FF791B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
    {/* Checklist — items fade in */}
    <circle cx="20" cy="54" r="4" stroke="#FF791B" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M18 54 L20 56 L23 51.5" stroke="#FF791B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    <rect className="illust-block-1" x="30" y="51" width="28" height="4" rx="2" fill="#FF791B" opacity="0.32" />

    <circle cx="20" cy="68" r="4" stroke="#FF791B" strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M18 68 L20 70 L23 65.5" stroke="#FF791B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    <rect className="illust-block-2" x="30" y="65" width="22" height="4" rx="2" fill="#FF791B" opacity="0.25" />

    <circle cx="20" cy="82" r="4" stroke="#FF791B" strokeWidth="1.5" fill="none" opacity="0.3" />
    <rect className="illust-block-3" x="30" y="79" width="26" height="4" rx="2" fill="#FF791B" opacity="0.18" />
    {/* Pulsing accent on last item — still in progress */}
    <circle className="illust-accent" cx="20" cy="82" r="4" stroke="#FF791B" strokeWidth="1.5" fill="none" opacity="0.5" />
  </svg>
);

const illustrations = [
  <DiscoveryIllustration key="discovery" />,
  <ResearchIllustration key="research" />,
  <WireframeIllustration key="wireframe" />,
  <DesignIllustration key="design" />,
  <BuildIllustration key="build" />,
  <DeliveryIllustration key="delivery" />,
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Brief',
    desc: 'I start by understanding your goals, scope, target users, and constraints. Whether it\'s a brand, a product interface, or a full build — this is where I define what success looks like.',
  },
  {
    number: '02',
    title: 'Research & Strategy',
    desc: 'User research, competitor analysis, and market context. I map out the landscape before making any creative decisions, grounding every choice in real insight rather than assumptions.',
  },
  {
    number: '03',
    title: 'Wireframe & Prototype',
    desc: 'Structure before aesthetics. I define information architecture, user flows, and key interactions as wireframes or clickable prototypes — aligning on the experience before going into visual design.',
  },
  {
    number: '04',
    title: 'Design & Iteration',
    desc: 'The main creative phase — UI screens, brand systems, components, or visual assets. Iterative with feedback rounds to make sure every detail is intentional and every decision is justified.',
  },
  {
    number: '05',
    title: 'Build & Develop',
    desc: 'I bring designs to life with clean, production-ready code. React, Next.js, Vue, or whatever the stack requires — pixel-perfect, performant, and accessible from day one.',
  },
  {
    number: '06',
    title: 'Delivery & Handoff',
    desc: 'Final files in the right formats — Figma handoff, brand guidelines, deployed code, or exported assets. Everything organized, documented, and ready to use immediately.',
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
        setState('hidden');
      } else if (top > vh * 0.2 && bottom > 0) {
        setState('active');
      } else {
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
            Behind every project is a structured, intentional process — here's how I approach each one from first conversation to final delivery.
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
