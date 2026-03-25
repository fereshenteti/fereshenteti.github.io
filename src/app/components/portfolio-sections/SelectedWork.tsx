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
    focusAreas: ['Webflow', 'Clean UX', 'Accessibility', 'UI friendly'],
    imagePlaceholder: 'assets/frontend_projects/embs 1.png',
    url: 'https://www.e-mobility-bs.com',
    layout: 'center-focus',
  },
  {
    title: 'Sedeo',
    category: 'UI Design / UX expertise / Frontend',
    summary: `Sedeo is a marketplace for tools renting for events organization. I upgraded the frontend marketplace, and focused on its per formance and SEO: I ensured that the loading and handling of the pages is really fast and smooth, while maintaining the best practices for the SEO. I also helped with the UI & UX where I contributed on design enhancements and solved User Experience problems`,
    focusAreas: ['Next.js', 'UI UX', 'Performance', 'Accessibility'],
    imagePlaceholder: 'assets/frontend_projects/sedeo.png',
    layout: 'image-left',
  },
  {
    title: 'Value Digital Services',
    category: 'UI Design / Admin Dashboard / Frontend',
    summary: 'Value Digital Services is a company that offers digital services for businesses, with which I worked on many projects, and designed and built its own website among other products.',
    focusAreas: ['Clarity', 'UI smoothness', 'Trust', 'Business UI'],
    imagePlaceholder: 'assets/frontend_projects/Value website 1.png',
    url: 'https://value.com.tn',
    layout: 'image-right',
  },
  {
    title: 'Formatic Academy',
    category: 'Landing Page / Pricing Page / Frontend',
    summary: `A landing page implementation for Formatic Academy, an online academy for learning various subjects.
    The client wanted to implement his design in pixel perfect, smooth and responsive, in both English and Arabic languages (ltr and rtl).
    I created it from scratch using Vue.js, and exceeded the client's expectations 🙌
    `,
    focusAreas: ['Vue.js', 'Landing page', 'Pricing page', 'Responsive UI'],
    imagePlaceholder: 'assets/frontend_projects/formatik 1.png',
    url: 'https://formaticacademy.com',
    layout: 'image-left',
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

  const openExternalLink = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <section className="selected-work-section" ref={sectionRef}>
      <div className="portfolio-container">
        
        <div className="section-header" ref={headerRef}>
            <span className={`section-eyebrow ${Satoshi.className}`}>Selected Frontend Engineering Work</span>
            <h2 className={`section-title ${ClashDisplay.className}`}>
              Real products, real problems, real impact
            </h2>
            <p className={`section-subtitle ${Satoshi.className}`}>
              Beyond design, I bring interfaces to life with clean, scalable, and production-ready frontend code.
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

                {study.url && <div className="case-cta mt-8">
                  <MyCustomButton btnIcon="assets/icons/external-link.svg" btnText="Visit website" className="secondary-cta" onClick={() => openExternalLink(study.url)}/>
                </div>}
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
