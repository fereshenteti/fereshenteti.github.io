'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { MyCustomButton } from '../common-ui/custom-button';

const caseStudies = [
  {
    title: 'eMBS Website',
    category: 'Product Design / UX / Frontend',
    summary: `eMBS (e-Mobility Business Solutions) helps companies transition to electric mobility by combining strategy consulting, battery technology, and green energy solutions. I collaborated with the client to gather insights, built an initial prototype, then delivered the final site in Webflow with smooth transitions and a clean aesthetic.`,
    focusAreas: ['Webflow', 'Clean UX', 'Accessibility', 'UI friendly'],
    image: 'assets/frontend_projects/embs 1.png',
    url: 'https://www.e-mobility-bs.com',
  },
  {
    title: 'Sedeo Marketplace',
    category: 'UI Design / UX / Frontend',
    summary: `Marketplace for event tool rentals. Upgraded the frontend for performance and SEO while contributing to UI/UX improvements and solving User Experience problems.`,
    focusAreas: ['Next.js', 'UI UX', 'Performance', 'Accessibility'],
    image: 'assets/frontend_projects/sedeo.png',
  },
  {
    title: 'Value Digital Services',
    category: 'UI Design / Dashboard / Frontend',
    summary: `Digital services company — designed and built its website and contributed to multiple internal products.`,
    focusAreas: ['Clarity', 'UI smoothness', 'Trust', 'Business UI', 'Mobile UI', 'Security'],
    image: 'assets/frontend_projects/Value website 1.png',
    url: 'https://value.com.tn',
  },
  {
    title: 'Formatic Academy',
    category: 'Landing Page / Pricing / Frontend',
    summary: `Pixel-perfect landing and pricing pages for an online academy, built in Vue.js with full LTR/RTL support for English and Arabic.`,
    focusAreas: ['Vue.js', 'Landing page', 'Pricing page', 'Responsive UI'],
    image: 'assets/frontend_projects/formatik 1.png',
    url: 'https://formaticacademy.com',
  },
];

const n = caseStudies.length;

const SelectedWorkA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

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

  // Desktop: each card = 100vw → total shift = (n-1) * 100vw
  // Mobile: each card = 200vw (content 100vw + image 100vw) → total shift = (n * 200vw - 100vw)
  const xDesktop = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(n - 1) * 100}vw`]);
  const xMobile  = useTransform(scrollYProgress, [0, 1], ['0vw', `-${n * 200 - 100}vw`]);

  const x = isMobile ? xMobile : xDesktop;

  const barWidth   = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <div className="selected-work-a-wrapper">

      <div className="sw-a-section-header">
        <span className={`section-eyebrow ${Satoshi.className}`}>Selected Frontend Engineering Work</span>
        <h2 className={`section-title ${ClashDisplay.className}`}>Real products, real problems, real impact</h2>
        <p className={`section-subtitle ${Satoshi.className}`}>Beyond design, I bring interfaces to life with clean, scalable, and production-ready frontend code.</p>
      </div>

      <section className="selected-work-a-section" ref={containerRef}>
        <div className="sw-a-sticky">

          <motion.div className="sw-a-track" style={{ x }}>
            {caseStudies.map((study, idx) => (
              <div key={idx} className="sw-a-card">
                <div className="sw-a-card-content">
                  <span className={`sw-a-num ${Satoshi.className}`}>0{idx + 1} / 0{n}</span>
                  <span className={`sw-a-category ${Satoshi.className}`}>{study.category}</span>
                  <h3 className={`sw-a-title ${ClashDisplay.className}`}>{study.title}</h3>
                  <p className={`sw-a-summary ${Satoshi.className}`}>{study.summary}</p>
                  <div className="sw-a-tags">
                    {study.focusAreas.map((area, i) => (
                      <span key={i} className={`sw-a-tag ${Satoshi.className}`}>{area}</span>
                    ))}
                  </div>
                  {study.url && (
                    <MyCustomButton btnIcon="assets/icons/external-link.svg" btnText="Visit website" className="secondary-cta" onClick={() => window.open(study.url, '_blank')} />
                  )}
                </div>
                <div className="sw-a-card-visual">
                  <img src={study.image} alt={study.title} />
                </div>
              </div>
            ))}
          </motion.div>

          <div className="sw-a-progress-track">
            <motion.div className="sw-a-progress-fill" style={{ width: barWidth }} />
          </div>

          <motion.div className="sw-a-hint" style={{ opacity: hintOpacity }}>
            <span className={Satoshi.className}>Scroll to explore</span>
            <span className="sw-a-hint-arrow">→</span>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default SelectedWorkA;
