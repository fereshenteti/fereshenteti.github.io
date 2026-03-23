'use client';

import React, { useRef } from 'react';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MyCustomButton } from '../common-ui/custom-button';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    title: 'eMBS Website',
    category: 'Product Design / UX / Frontend',
    summary: `eMBS (e-Mobility Business Solutions) helps companies and projects transition to electric mobility by combining strategy consulting, battery technology, and green energy solutions.
    I collaborated closely with the client to understand their needs, gather insights, and clarify objectives through targeted questions. Based on the specifications and brainstorming sessions, I developed an initial prototype. After iterative refinements and approval, I built the website using Webflow, ensuring smooth transitions and a clean, polished aesthetic.
    `,
    focusAreas: ['User flows', 'Clean UX', 'Accessibility', 'UI friendly'],
    imagePlaceholder: 'assets/frontend_projects/embs 1.png',
    url: 'https://www.e-mobility-bs.com/',
    layout: 'center-focus',
  },
  {
    title: 'Solar Energy Dashboard',
    category: 'SaaS Dashboard / UI Design / Admin Experience',
    summary: 'A clean, insight-driven dashboard for monitoring solar panels and batteries, with a focus on clarity, control, and data visualization.',
    focusAreas: ['Information hierarchy', 'Admin UX', 'Data visualization', 'System control'],
    imagePlaceholder: 'assets/images/placeholder-solar.jpg', // Placeholder comment: Replace with actual Solar Dashboard UI screenshot
    layout: 'image-left',
  },
  {
    title: 'Finance / Fintech Experience',
    category: 'Product Design / Dashboard / UX Strategy',
    summary: 'A financial product experience designed to simplify complex information into clear, intuitive user actions.',
    focusAreas: ['Clarity', 'Data readability', 'Trust', 'Decision support'],
    imagePlaceholder: 'assets/images/placeholder-fintech.jpg', // Placeholder comment: Replace with actual Finance UI screenshot
    layout: 'image-right',
  },
];

const SelectedWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header Reveal
    gsap.fromTo(
      headerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
      }
    );

    // Cards Reveal
    if (containerRef.current) {
      const cards = gsap.utils.toArray('.case-study-card', containerRef.current);
      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
          }
        );
      });
    }
  }, { scope: sectionRef });

  return (
    <section className="selected-work-section" ref={sectionRef}>
      <div className="portfolio-container">
        
        <div className="section-header" ref={headerRef}>
            <span className={`section-eyebrow ${Satoshi.className}`}>Selected Frontend Work</span>
            <h2 className={`section-title ${ClashDisplay.className}`}>
                Real products, real problems, real impact
            </h2>
            <p className={`section-subtitle ${Satoshi.className}`}>
                Here's a closer look at some of the products I've designed — from early concepts to polished, production-ready interfaces.
            </p>
        </div>

        <div className="case-studies-container" ref={containerRef}>
          {caseStudies.map((study, idx) => (
            <div key={idx} className={`case-study-card layout-${study.layout}`}>
              
              <div className="case-content">
                <span className={`case-category ${Satoshi.className}`}>{study.category}</span>
                <h3 className={`case-title ${ClashDisplay.className}`}>{study.title}</h3>
                <p className={`case-summary ${Satoshi.className}`}>{study.summary}</p>
                
                <div className="case-focus">
                    <span className={`focus-label ${Satoshi.className}`}>Focus:</span>
                    <ul className={Satoshi.className}>
                        {study.focusAreas.map((area, i) => (
                            <li key={i}>{area}</li>
                        ))}
                    </ul>
                </div>

                <div className="case-cta mt-8">
                     <MyCustomButton btnIcon="assets/icons/arrow-right.svg" btnText="View Case Study" className="secondary-cta" />
                </div>
              </div>

              <div className="case-visual">
                <img src={study.imagePlaceholder} alt={study.title}/>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelectedWork;
