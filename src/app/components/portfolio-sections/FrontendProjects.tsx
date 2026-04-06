'use client';

import React, { useRef } from 'react';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MyCustomButton } from '../common-ui/custom-button';

gsap.registerPlugin(ScrollTrigger);

const frontendProjects = [
  {
    title: 'Admin Dashboard',
    stack: ['React', 'TypeScript', 'Tailwind', 'Charts'],
    summary: 'A responsive admin dashboard with data-rich UI and strong usability.',
    highlights: ['Complex state management', 'Real-time data visualization', 'Accessible table components'],
  },
  {
    title: 'Interactive Product Website',
    stack: ['Next.js', 'Framer Motion', 'Tailwind'],
    summary: 'A modern marketing or product site with polished motion, storytelling, and strong conversion-focused structure.',
    highlights: ['Scroll-linked animations', 'SEO optimized architecture', 'Component-driven design'],
  },
  {
    title: 'Web Application Interface',
    stack: ['Angular', 'TypeScript', 'API Integration'],
    summary: 'A scalable application interface focused on clean state management, reusability, and performance.',
    highlights: ['Modular architecture', 'RxJS streams', 'Robust error handling'],
  },
];

const FrontendProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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

    if (listRef.current) {
      const cards = gsap.utils.toArray('.fe-project-card', listRef.current);
      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    }
  }, { scope: sectionRef });

  return (
    <section className="frontend-projects-section" ref={sectionRef}>
      <div className="portfolio-container">
        
        <div className="section-header" ref={headerRef}>
            <span className={`section-eyebrow ${Satoshi.className}`}>Frontend Engineering</span>
            <h2 className={`section-title ${ClashDisplay.className}`}>
                I don't just design it — I build it too
            </h2>
            <p className={`section-subtitle ${Satoshi.className}`}>
                Beyond design, I bring interfaces to life with clean, scalable, and production-ready frontend code.
            </p>
        </div>

        <div className="fe-projects-list" ref={listRef}>
          {frontendProjects.map((project, idx) => (
            <div key={idx} className="fe-project-card">
                
                <div className="fe-project-content">
                    <h3 className={`fe-title ${ClashDisplay.className}`}>{project.title}</h3>
                    
                    <div className="fe-stack-chips">
                        {project.stack.map((tech, i) => (
                            <span key={i} className={`tech-chip ${Satoshi.className}`}>{tech}</span>
                        ))}
                    </div>

                    <p className={`fe-summary ${Satoshi.className}`}>{project.summary}</p>
                    
                    <ul className={`fe-highlights ${Satoshi.className}`}>
                        {project.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                        ))}
                    </ul>

                    <div className="fe-actions mt-6 flex gap-4">
                        <MyCustomButton btnIcon="assets/icons/arrow-right.svg" btnText="Live Demo" className="fe-btn-primary" />
                        <button className={`fe-btn-secondary ${Satoshi.className}`}>GitHub</button>
                    </div>
                </div>

                <div className="fe-project-visual">
                    {/* [CONTENT PLACEHOLDER] Replace with actual code snippet image or project screenshot */}
                    <div className="code-visual-placeholder">
                        <div className="browser-dots">
                            <span></span><span></span><span></span>
                        </div>
                        <div className={`mock-code-lines`}>
                            <div className="line w-3/4"></div>
                            <div className="line indent w-1/2"></div>
                            <div className="line indent w-5/6"></div>
                            <div className="line w-1/4"></div>
                        </div>
                    </div>
                </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FrontendProjects;
