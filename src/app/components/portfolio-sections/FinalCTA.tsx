'use client';

import SectionDotGrid from '../SectionDotGrid';
import React, { useRef } from 'react';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MyCustomButton } from '../common-ui/custom-button';

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (contentRef.current) {
        gsap.fromTo(
        contentRef.current.children,
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            },
        }
        );
    }
  }, { scope: sectionRef });

  return (
    <section className="final-cta-section" ref={sectionRef} style={{ position: 'relative' }}>
      <SectionDotGrid />
      <div className="portfolio-container">
        
        <div className="cta-content" ref={contentRef}>
            <span className={`section-eyebrow ${Satoshi.className}`}>Let's Work Together</span>
            
            <h2 className={`cta-title ${ClashDisplay.className}`}>
                Have a project in mind? Let's make it happen
            </h2>
            
            <p className={`cta-subtitle ${Satoshi.className}`}>
                I take on a small number of freelance projects alongside my full-time work — startups, agencies, and brands who need sharp design, clean code, or both. If that sounds like your project, let's talk.
            </p>

            <div className="cta-actions">
                <MyCustomButton btnIcon="assets/icons/calendar.svg" btnText="Let's schedule a call" className="primary-cta" onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/fereshenteti/30min' })} />
                <MyCustomButton btnIcon="assets/icons/external-link.svg" btnText="View Resume" className="secondary-cta" onClick={() => window.open('/assets/my-cv/Fares Hentati Resume 2026 EN.pdf', '_blank')} />
            </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
