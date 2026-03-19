'use client';

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
    <section className="final-cta-section" ref={sectionRef}>
      <div className="portfolio-container">
        
        <div className="cta-content" ref={contentRef}>
            <span className={`section-eyebrow ${Satoshi.className}`}>Let's Work Together</span>
            
            <h2 className={`cta-title ${ClashDisplay.className}`}>
                Have a project in mind? Let's make it happen
            </h2>
            
            <p className={`cta-subtitle ${Satoshi.className}`}>
                I'm always open to new opportunities — whether it's a full product design, a frontend build, or a creative collaboration.
            </p>

            <div className="cta-actions">
                <MyCustomButton btnIcon="assets/icons/send.svg" btnText="Let's get in touch" className="primary-cta" />
                <button className={`secondary-cta-link ${Satoshi.className}`}>
                    View Resume
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
