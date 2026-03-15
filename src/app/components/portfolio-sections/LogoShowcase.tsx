'use client';

import React, { useRef } from 'react';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: 'Brand Identity', path: 'assets/images/placeholder-logo-1.svg', alt: 'Logo 1' },
  { name: 'Logo Design', path: 'assets/images/placeholder-logo-2.svg', alt: 'Logo 2' },
  { name: 'Visual Systems', path: 'assets/images/placeholder-logo-3.svg', alt: 'Logo 3' },
  { name: 'Marks & Symbols', path: 'assets/images/placeholder-logo-4.svg', alt: 'Logo 4' },
  { name: 'Creative Tech', path: 'assets/images/placeholder-logo-5.svg', alt: 'Logo 5' },
  { name: 'Studio Mark', path: 'assets/images/placeholder-logo-6.svg', alt: 'Logo 6' }
];

const LogoShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

    if (gridRef.current) {
      const items = gsap.utils.toArray('.logo-grid-item', gridRef.current);
      gsap.fromTo(
        items,
        { scale: 0.95, y: 30, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section className="logo-showcase-section" ref={sectionRef}>
      <div className="portfolio-container">
        
        <div className="section-header" ref={headerRef}>
            <span className={`section-eyebrow ${Satoshi.className}`}>Visual Identity</span>
            <h2 className={`section-title ${ClashDisplay.className}`}>
                Logos and brand marks crafted for clarity and memorability
            </h2>
            <p className={`section-subtitle ${Satoshi.className}`}>
                Beyond interfaces, I also design visual identities that are simple, modern, and built to last.
            </p>
        </div>

        <div className="logo-grid" ref={gridRef}>
          {logos.map((logo, idx) => (
            <div key={idx} className="logo-grid-item">
              <div className="logo-placeholder">
                  {/* [CONTENT PLACEHOLDER] Replace with <img src={logo.path} alt={logo.alt} /> */}
                  <div className="placeholder-shape"></div>
              </div>
              <div className="logo-hover-layer">
                  <span className={`logo-label ${Satoshi.className}`}>{logo.name}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LogoShowcase;
