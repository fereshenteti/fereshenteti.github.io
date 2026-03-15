'use client';

import React, { useRef } from 'react';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    desc: 'Understand the business goals, the users, and the problem worth solving.',
  },
  {
    number: '02',
    title: 'Structure',
    desc: 'Define the user flows, information architecture, and experience foundations.',
  },
  {
    number: '03',
    title: 'Design',
    desc: 'Create wireframes, visual systems, and polished interfaces focused on clarity and usability.',
  },
  {
    number: '04',
    title: 'Prototype',
    desc: 'Test interactions, validate ideas, and refine the experience before development.',
  },
  {
    number: '05',
    title: 'Build',
    desc: 'Translate the design into clean, scalable, and accessible frontend code.',
  },
  {
    number: '06',
    title: 'Optimize',
    desc: 'Improve performance, responsiveness, and overall product quality through iteration.',
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animation
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

    // Timeline steps animation
    if (containerRef.current) {
        const steps = gsap.utils.toArray('.process-step', containerRef.current);
        
        steps.forEach((step: any, i) => {
            gsap.fromTo(
                step,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: step,
                        start: 'top 85%',
                    }
                }
            );
            
            // Animate the line connecting steps
            const line = step.querySelector('.step-line');
            if (line) {
                gsap.fromTo(
                    line,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        duration: 0.8,
                        ease: 'power2.inOut',
                        scrollTrigger: {
                            trigger: step,
                            start: 'top 60%',
                        }
                    }
                );
            }
        });
    }

  }, { scope: sectionRef });

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="portfolio-container">
        
        <div className="section-header" ref={headerRef}>
            <div>
                <span className={`section-eyebrow ${Satoshi.className}`}>Process</span>
                <h2 className={`section-title ${ClashDisplay.className}`}>
                    From idea to interface, every step is intentional
                </h2>
            </div>
            <p className={`section-subtitle ${Satoshi.className}`}>
                My workflow combines product thinking, visual design, prototyping, and frontend execution to transform complex ideas into intuitive digital experiences.
            </p>
        </div>

        <div className="process-timeline" ref={containerRef}>
          {processSteps.map((step, idx) => (
            <div key={idx} className="process-step">
              <div className="step-indicator">
                <div className="step-dot"></div>
                {idx !== processSteps.length - 1 && <div className="step-line"></div>}
              </div>
              
              <div className="step-content">
                <div className={`step-number ${ClashDisplay.className}`}>{step.number}</div>
                <h3 className={`step-title ${Satoshi.className}`}>{step.title}</h3>
                <p className={`step-desc ${Satoshi.className}`}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
