'use client';

import SectionDotGrid from '../SectionDotGrid';
import React, { useRef } from 'react';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Fares combines product thinking, visual quality, and frontend precision in a way that makes collaboration extremely effective.",
    name: "Placeholder Name 1",
    role: "Product Manager",
    company: "Tech StartUp",
  },
  {
    quote: "His ability to move from UX reasoning to polished implementation is a rare strength. Highly recommend.",
    name: "Placeholder Name 2",
    role: "Engineering Lead",
    company: "SaaS Company",
  },
  {
    quote: "The final result felt both thoughtful and production-ready. Our users immediately noticed the improvement in clarity and speed.",
    name: "Placeholder Name 3",
    role: "CEO & Founder",
    company: "Digital Agency",
  }
];

const TestimonialsSection = () => {
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
      const cards = gsap.utils.toArray('.testimonial-card', gridRef.current);
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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
    <section className="testimonials-section" ref={sectionRef} style={{ position: 'relative' }}>
      <SectionDotGrid />
      <div className="portfolio-container">
        
        <div className="section-header" ref={headerRef}>
            <span className={`section-eyebrow ${Satoshi.className}`}>What They Say</span>
            <h2 className={`section-title ${ClashDisplay.className}`}>
                Don't just take my word for it
            </h2>
            <p className={`section-subtitle ${Satoshi.className}`}>
                Here's what colleagues and clients have said about working with me.
            </p>
        </div>

        <div className="testimonials-grid" ref={gridRef}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="quote-icon">“</div>
              <p className={`testimonial-quote ${Satoshi.className}`}>"{testimonial.quote}"</p>
              
              <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                      <h4 className={`author-name ${Satoshi.className}`}>{testimonial.name}</h4>
                      <p className={`author-role ${Satoshi.className}`}>{testimonial.role}, {testimonial.company}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
