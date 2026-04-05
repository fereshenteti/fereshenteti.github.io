'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue, useMotionValueEvent } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { MyCustomButton } from '../common-ui/custom-button';

const VideoPlayer = ({ src, opacity }: { src: string; opacity: MotionValue<number> }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useMotionValueEvent(opacity, 'change', (v) => {
    const video = videoRef.current;
    if (!video) return;
    if (v > 0.5) {
      if (video.paused) {
        video.currentTime = 0;
        video.play();
      }
    } else {
      if (!video.paused) {
        video.pause();
        video.currentTime = 0;
      }
    }
  });

  return <video ref={videoRef} src={src} muted loop playsInline />;
};

const caseStudies = [
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
    video: 'assets/frontend_projects/videos/formatic academy website.mp4',
    url: 'https://formaticacademy.com',
  },
];

const n = caseStudies.length;

const WorkSlide = ({
  study,
  index,
  scrollYProgress,
  rangeIn,
  rangeOut,
  rangePeak,
}: {
  study: typeof caseStudies[0];
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
  const pointerEvents = useTransform(opacity, (o: number) => (o > 0.1 ? 'auto' : 'none'));
  const y = useTransform(
    scrollYProgress,
    [rangeIn[0], rangeIn[1], rangePeak[2], rangeOut[1]],
    [60, 0, 0, -40]
  );

  const imgScale  = useTransform(scrollYProgress, [rangeIn[0] + 0.03, rangeIn[1] + 0.05], [0.92, 1]);
  const imgOpacity = useTransform(scrollYProgress, [rangeIn[0] + 0.03, rangeIn[1] + 0.05], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [rangeIn[0], rangeIn[1]], [0, 1]);
  const tagsOpacity = useTransform(scrollYProgress, [rangeIn[0] + 0.02, rangeIn[1] + 0.02], [0, 1]);
  const tagsX = useTransform(scrollYProgress, [rangeIn[0] + 0.02, rangeIn[1] + 0.02], [20, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [rangeIn[0] + 0.04, rangeIn[1] + 0.04], [0, 1]);

  return (
    <motion.div className="sw-b-slide" style={{ opacity, y, pointerEvents }}>
      <div className="sw-b-slide-inner">

        {/* Left: image or video */}
        <motion.div className="sw-b-image" style={{ scale: imgScale, opacity: imgOpacity }}>
          {study.video ? (
            <VideoPlayer src={study.video} opacity={opacity} />
          ) : (
            <img src={study.image} alt={study.title} />
          )}
        </motion.div>

        {/* Right: text */}
        <div className="sw-b-info">
          <motion.div style={{ opacity: textOpacity }}>
            <span className={`sw-b-num ${Satoshi.className}`}>0{index + 1} / 0{n}</span>
            <span className={`sw-b-category ${Satoshi.className}`}>{study.category}</span>
            <h3 className={`sw-b-title ${ClashDisplay.className}`}>{study.title}</h3>
            <p className={`sw-b-summary ${Satoshi.className}`}>{study.summary}</p>
          </motion.div>

          <motion.div className="sw-b-tags" style={{ opacity: tagsOpacity, x: tagsX }}>
            {study.focusAreas.map((area, i) => (
              <span key={i} className={`sw-b-tag ${Satoshi.className}`}>{area}</span>
            ))}
          </motion.div>

          {study.url && (
            <motion.div style={{ opacity: ctaOpacity }}>
              <MyCustomButton
                btnIcon="assets/icons/external-link.svg"
                btnText="Visit website"
                className="secondary-cta"
                onClick={() => window.open(study.url, '_blank')}
              />
            </motion.div>
          )}
        </div>

      </div>
    </motion.div>
  );
};

const SelectedWorkB = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.08], [0, -40]);

  return (
    <section className="selected-work-b-section" ref={containerRef}>
      <div className="sw-b-scroll-space">
        <div className="sw-b-sticky">

          {/* Section header */}
          <motion.div className="sw-b-header" style={{ opacity: headerOpacity, y: headerY }}>
            <span className={`section-eyebrow ${Satoshi.className}`}>Selected Frontend Engineering Work</span>
            <h2 className={`section-title ${ClashDisplay.className}`}>
              Real products, real problems, real impact
            </h2>
            <p className={`section-subtitle ${Satoshi.className}`}>
              Beyond design, I bring interfaces to life with clean, scalable, and production-ready frontend code.
            </p>
          </motion.div>

          {/* Slides */}
          {caseStudies.map((study, idx) => {
            const start = (idx + 1) / (n + 1);
            const end   = (idx + 2) / (n + 1);
            const mid   = (start + end) / 2;
            return (
              <WorkSlide
                key={idx}
                study={study}
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

export default SelectedWorkB;
