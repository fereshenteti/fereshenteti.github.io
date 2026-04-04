'use client';

import SectionDotGrid from '../SectionDotGrid';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';

// Abstract SVG illustrations for each step
const DiscoveryIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    <circle className="illust-ring" cx="52" cy="52" r="32" stroke="#FF791B" strokeWidth="2.5" strokeDasharray="6 4" />
    <circle className="illust-dot" cx="52" cy="52" r="6" fill="#FF791B" opacity="0.3" />
    <line className="illust-line" x1="76" y1="76" x2="100" y2="100" stroke="#FF791B" strokeWidth="3" strokeLinecap="round" />
    <circle className="illust-pulse" cx="52" cy="52" r="20" stroke="#FF791B" strokeWidth="1" opacity="0.15" />
    <circle className="illust-pulse-2" cx="52" cy="52" r="44" stroke="#FF791B" strokeWidth="0.5" opacity="0.1" />
  </svg>
);

const ResearchIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    <rect className="illust-bar-1" x="16" y="70" width="14" height="30" rx="3" fill="#FF791B" opacity="0.2" />
    <rect className="illust-bar-2" x="36" y="50" width="14" height="50" rx="3" fill="#FF791B" opacity="0.35" />
    <rect className="illust-bar-3" x="56" y="35" width="14" height="65" rx="3" fill="#FF791B" opacity="0.5" />
    <rect className="illust-bar-4" x="76" y="55" width="14" height="45" rx="3" fill="#FF791B" opacity="0.4" />
    <rect className="illust-bar-5" x="96" y="25" width="14" height="75" rx="3" fill="#FF791B" opacity="0.6" />
    <path className="illust-trend" d="M23 65 L43 45 L63 30 L83 50 L103 20" stroke="#FF791B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const FlowIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    <circle className="illust-node-1" cx="30" cy="30" r="10" stroke="#FF791B" strokeWidth="2" fill="none" />
    <circle className="illust-node-2" cx="90" cy="30" r="10" stroke="#FF791B" strokeWidth="2" fill="none" />
    <circle className="illust-node-3" cx="60" cy="65" r="12" stroke="#FF791B" strokeWidth="2.5" fill="#FF791B" fillOpacity="0.15" />
    <circle className="illust-node-4" cx="30" cy="100" r="8" stroke="#FF791B" strokeWidth="1.5" fill="none" />
    <circle className="illust-node-5" cx="90" cy="100" r="8" stroke="#FF791B" strokeWidth="1.5" fill="none" />
    <line className="illust-conn-1" x1="37" y1="37" x2="53" y2="58" stroke="#FF791B" strokeWidth="1.5" opacity="0.4" />
    <line className="illust-conn-2" x1="83" y1="37" x2="67" y2="58" stroke="#FF791B" strokeWidth="1.5" opacity="0.4" />
    <line className="illust-conn-3" x1="53" y1="72" x2="37" y2="93" stroke="#FF791B" strokeWidth="1.5" opacity="0.4" />
    <line className="illust-conn-4" x1="67" y1="72" x2="83" y2="93" stroke="#FF791B" strokeWidth="1.5" opacity="0.4" />
  </svg>
);

const WireframeIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    <rect className="illust-frame" x="15" y="15" width="90" height="90" rx="8" stroke="#FF791B" strokeWidth="2" fill="none" />
    <rect className="illust-block-1" x="22" y="22" width="76" height="14" rx="3" fill="#FF791B" opacity="0.15" />
    <rect className="illust-block-2" x="22" y="42" width="34" height="28" rx="3" fill="#FF791B" opacity="0.25" />
    <rect className="illust-block-3" x="62" y="42" width="36" height="12" rx="3" fill="#FF791B" opacity="0.2" />
    <rect className="illust-block-4" x="62" y="58" width="36" height="12" rx="3" fill="#FF791B" opacity="0.15" />
    <rect className="illust-block-5" x="22" y="78" width="76" height="20" rx="3" fill="#FF791B" opacity="0.1" />
    <circle className="illust-accent" cx="98" cy="22" r="4" fill="#FF791B" opacity="0.6" />
  </svg>
);

const PrototypeIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-illustration">
    <rect className="illust-device" x="25" y="10" width="50" height="80" rx="8" stroke="#FF791B" strokeWidth="2" fill="none" />
    <polygon className="illust-play" points="43,40 43,60 58,50" fill="#FF791B" opacity="0.5" />
    <line className="illust-arrow-1" x1="80" y1="35" x2="105" y2="35" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <line className="illust-arrow-2" x1="80" y1="50" x2="110" y2="50" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    <line className="illust-arrow-3" x1="80" y1="65" x2="100" y2="65" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
    <polygon className="illust-arrowhead-1" points="105,31 105,39 112,35" fill="#FF791B" opacity="0.4" />
    <polygon className="illust-arrowhead-2" points="110,46 110,54 117,50" fill="#FF791B" opacity="0.3" />
    <circle className="illust-check" cx="50" cy="100" r="6" stroke="#FF791B" strokeWidth="1.5" fill="#FF791B" fillOpacity="0.2" />
    <path className="illust-checkmark" d="M46 100 L49 103 L54 97" stroke="#FF791B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const illustrations = [
  <DiscoveryIllustration key="discovery" />,
  <ResearchIllustration key="research" />,
  <FlowIllustration key="flow" />,
  <WireframeIllustration key="wireframe" />,
  <PrototypeIllustration key="prototype" />,
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'I start with a short discovery phase where I discuss the project with the client. I try to understand the product goals, the target users, and the main problem the product should solve. This helps me clarify the scope and direction of the design.',
  },
  {
    number: '02',
    title: 'Research',
    desc: 'I briefly analyze competitors and similar products to understand common UX patterns and user expectations. This step helps me gather ideas and identify opportunities to improve the experience.',
  },
  {
    number: '03',
    title: 'User Flow & Structure',
    desc: 'I define the main user flows and organize the structure of the product. This allows me to map how users move between screens and complete key tasks before designing the interface.',
  },
  {
    number: '04',
    title: 'Wireframing & UI Design',
    desc: 'I start with wireframes to define layouts and content hierarchy. Then I design the final UI by applying visual design elements such as colors, typography, and reusable components.',
  },
  {
    number: '05',
    title: 'Prototyping & Handoff',
    desc: 'I create a clickable prototype to simulate the product experience and collect feedback. After validation, I organize the design files and prepare everything for the developer handoff.',
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
      <SectionDotGrid />
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
