'use client';

import SectionDotGrid from '../SectionDotGrid';
import React, { useRef, useState, useEffect } from 'react';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import IconFigma from '../../assets/icons/tools/figma.svg';
import IconIllustrator from '../../assets/icons/tools/illustrator.svg';
import IconProcreate from '../../assets/icons/tools/procreate.png';
import IconCanva from '../../assets/icons/tools/canva.svg';

import IconHtml5 from '../../assets/icons/tools/html-5.svg';
import IconCss3 from '../../assets/icons/tools/css-3.svg';
import IconTs from '../../assets/icons/tools/typescript.svg';
import IconJs from '../../assets/icons/tools/javascript.svg';
import IconReact from '../../assets/icons/tools/react.svg';
import IconVue from '../../assets/icons/tools/vue.svg';
import IconNextjs from '../../assets/icons/tools/nextjs.svg';
import IconAngular from '../../assets/icons/tools/angular.svg';
import IconTailwind from '../../assets/icons/tools/tailwind.svg';
import IconFramer from '../../assets/icons/tools/framer.svg';
import IconWebflow from '../../assets/icons/tools/webflow.svg';

import IconNodejs from '../../assets/icons/tools/nodejs.svg';
import IconNestjs from '../../assets/icons/tools/nestjs.svg';
import IconPostman from '../../assets/icons/tools/postman.svg';
import IconDocker from '../../assets/icons/tools/docker.svg';

import IconGithub from '../../assets/icons/tools/github.svg';
import IconGitlab from '../../assets/icons/tools/gitlab.svg';
import IconBitbucket from '../../assets/icons/tools/bitbucket.svg';
import IconStorybook from '../../assets/icons/tools/storybook.svg';
import IconVercel from '../../assets/icons/tools/vercel.svg';
import IconClaude from '../../assets/icons/tools/claude.svg';
import IconChatGPT from '../../assets/icons/tools/chatGPT.svg';
import IconNotion from '../../assets/icons/tools/notion.svg';
import IconAmplitude from '../../assets/icons/tools/amplitude.svg';
import IconJira from '../../assets/icons/tools/jira.svg';
import IconLinear from '../../assets/icons/tools/linear.svg';
import IconSentry from '../../assets/icons/tools/sentry.svg';

gsap.registerPlugin(ScrollTrigger);

const CYCLE_MS = 3800;

type ToolItem = { name: string; icon: React.ReactNode; invertDark?: boolean };
type Category  = { label: string; tools: ToolItem[] };

// Consistent slight rotations give the grid an organic feel (same as the Apple reference)
const ROTATIONS = [-12, 8, -5, 14, -10, 6, -16, 11, -4, 13, -7, 5];

// 2 columns for small categories (4 logos → 2×2), 4 for larger ones
const getCols = (n: number) => (n <= 4 ? 2 : 4);

const categories: Category[] = [
  {
    label: 'Design',
    tools: [
      { name: 'Figma',             icon: <IconFigma /> },
      { name: 'Adobe Illustrator', icon: <IconIllustrator /> },
      { name: 'Procreate',         icon: <Image src={IconProcreate} alt="Procreate" width={64} height={64} style={{ objectFit: 'contain' }} /> },
      { name: 'Canva',             icon: <IconCanva /> },
    ],
  },
  {
    label: 'Frontend',
    tools: [
      { name: 'HTML5',         icon: <IconHtml5 /> },
      { name: 'CSS3 / SCSS',   icon: <IconCss3 /> },
      { name: 'JavaScript',    icon: <IconJs /> },
      { name: 'TypeScript',    icon: <IconTs /> },
      { name: 'React',         icon: <IconReact /> },
      { name: 'Vue',           icon: <IconVue /> },
      { name: 'Next.js',       icon: <IconNextjs />, invertDark: true },
      { name: 'Angular',       icon: <IconAngular /> },
      { name: 'Tailwind CSS',  icon: <IconTailwind /> },
      { name: 'Framer Motion', icon: <IconFramer /> },
      { name: 'Webflow',       icon: <IconWebflow /> },
    ],
  },
  {
    label: 'Backend',
    tools: [
      { name: 'Node.js', icon: <IconNodejs /> },
      { name: 'NestJS',  icon: <IconNestjs /> },
      { name: 'Postman', icon: <IconPostman /> },
      { name: 'Docker',  icon: <IconDocker /> },
    ],
  },
  {
    label: 'Workflow & Delivery',
    tools: [
      { name: 'Git / GitHub',    icon: <IconGithub />,  invertDark: true },
      { name: 'Git / Gitlab',    icon: <IconGitlab /> },
      { name: 'Git / Bitbucket', icon: <IconBitbucket /> },
      { name: 'Storybook',       icon: <IconStorybook /> },
      { name: 'Vercel',          icon: <IconVercel />,  invertDark: true },
      { name: 'Amplitude',       icon: <IconAmplitude /> },
      { name: 'Sentry',          icon: <IconSentry /> },
      { name: 'Jira',            icon: <IconJira /> },
      { name: 'Linear',          icon: <IconLinear />,  invertDark: true },
      { name: 'Claude AI',       icon: <IconClaude /> },
      { name: 'ChatGPT',         icon: <IconChatGPT />, invertDark: true },
      { name: 'Notion',          icon: <IconNotion />,  invertDark: true },
    ],
  },
];

const ToolsCloud = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef   = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLParagraphElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);

  const [activeIdx, setActiveIdx] = useState(0);
  const [resetKey,  setResetKey]  = useState(0); // restarted interval + dot fill animation

  // Auto-cycle; recreated when resetKey changes (manual dot click resets the timer)
  useEffect(() => {
    const id = setInterval(() => setActiveIdx(i => (i + 1) % categories.length), CYCLE_MS);
    return () => clearInterval(id);
  }, [resetKey]);

  const goTo = (i: number) => { setActiveIdx(i); setResetKey(k => k + 1); };

  useGSAP(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.4,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      );
    }
  }, { scope: sectionRef });

  const active = categories[activeIdx];

  return (
    <section className="tools-cloud-section" ref={sectionRef} style={{ position: 'relative' }}>
      <SectionDotGrid />
      <div className="portfolio-container">
        <div className="section-header">
          <div ref={titleRef}>
            <span className={`section-eyebrow ${Satoshi.className}`}>Tools & Craft</span>
            <h2 className={`section-title ${ClashDisplay.className}`}>
              The toolkit behind every project
            </h2>
          </div>
          <p ref={textRef} className={`section-subtitle ${Satoshi.className}`}>
            Every project you just saw was built with a carefully chosen set of design and development tools — here's what powers my workflow.
          </p>
        </div>

        <div ref={cardRef} className="tools-showcase-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              className="tools-card-scene"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{ opacity: 0, transition: { duration: 0.22 } }}
            >
              {/* Category header */}
              <div className="tools-card-header">
                <span className={`tools-card-eyebrow ${Satoshi.className}`}>
                  {activeIdx + 1} / {categories.length}
                </span>
                <motion.h3
                  className={`tools-card-title ${ClashDisplay.className}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.05, duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] } }}
                >
                  {active.label}
                </motion.h3>
              </div>

              {/* Grid cluster — equal spacing, slight per-logo rotation */}
              <div
                className="scatter-logo-cluster"
                style={{ '--logo-cols': getCols(active.tools.length) } as React.CSSProperties}
              >
                {active.tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    className="scatter-logo"
                    style={{ rotate: ROTATIONS[i % ROTATIONS.length] }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{
                      opacity: 1, scale: 1,
                      transition: { delay: 0.08 + i * 0.05, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] },
                    }}
                  >
                    <span className={`scatter-logo-icon${tool.invertDark ? ' tool-icon--invert-dark' : ''}`}>
                      {tool.icon}
                    </span>
                    <span className={`scatter-logo-tooltip ${Satoshi.className}`}>{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators — active dot fills left→right over CYCLE_MS */}
          <div className="tools-category-dots">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                className={`category-dot${i === activeIdx ? ' category-dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Show ${cat.label} tools`}
              >
                {i === activeIdx && (
                  <span key={`${activeIdx}-${resetKey}`} className="category-dot-fill" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsCloud;
