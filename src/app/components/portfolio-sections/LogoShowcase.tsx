'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animate } from 'animejs';
import LogoWordSvg from '../../assets/icons/logo-word.svg';
import { fetchSlides, SlideData } from '@/services/slides';

gsap.registerPlugin(ScrollTrigger);

const LogoShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const logoWordRef = useRef<HTMLDivElement>(null);
  const [slides, setSlides] = useState<SlideData[]>([]);

  useEffect(() => {
    fetchSlides().then(setSlides);
  }, []);

  // Anime.js v4 left-to-right reveal via SVG clipPath
  useEffect(() => {
    if (!logoWordRef.current) return;

    const svgEl = logoWordRef.current.querySelector('svg') as SVGSVGElement | null;
    if (!svgEl) return;

    const { width: vbWidth, height: vbHeight } = svgEl.viewBox.baseVal;
    const NS = 'http://www.w3.org/2000/svg';
    const uid = `logo-reveal-${Math.random().toString(36).slice(2)}`;

    const clipRect = document.createElementNS(NS, 'rect');
    clipRect.setAttribute('x', '0');
    clipRect.setAttribute('y', '0');
    clipRect.setAttribute('width', '0');
    clipRect.setAttribute('height', String(vbHeight));

    const clipPathEl = document.createElementNS(NS, 'clipPath');
    clipPathEl.setAttribute('id', uid);
    clipPathEl.appendChild(clipRect);

    const g = document.createElementNS(NS, 'g');
    g.setAttribute('clip-path', `url(#${uid})`);
    Array.from(svgEl.querySelectorAll('path')).forEach((p) => g.appendChild(p));

    svgEl.appendChild(clipPathEl);
    svgEl.appendChild(g);

    let triggered = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          triggered = true;
          observer.disconnect();

          animate(clipRect, {
            width: vbWidth,
            ease: 'inOutQuart',
            duration: 900,
          });
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(logoWordRef.current);

    return () => observer.disconnect();
  }, []);

  // GSAP for the rest of the section (header fade + grid entrance)
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

        <div className="section-header" ref={headerRef}>
          <div className="section-info">
            <h1 className={ClashDisplay.className + ' xs:flex-row flex-col'}>
              <div ref={logoWordRef} className="logo-word-wrapper">
                <LogoWordSvg className="logo-word-svg" />
              </div>
              <span>creations</span>
            </h1>
          </div>
          <p className={`section-subtitle ${Satoshi.className}`}>
            A selection of logos and brand marks I've designed — crafted for clarity, simplicity, and lasting visual impact.
          </p>
        </div>

        <div className="logo-grid" ref={gridRef}>
          {slides.map((slide, idx) => {
            const content = (
              <>
                <div className="logo-placeholder">
                  <img src={slide.src} alt={slide.label ?? `Logo ${idx + 1}`} />
                </div>
                {slide.label && (
                  <div className="logo-hover-label">
                    <span className={Satoshi.className}>{slide.label}</span>
                  </div>
                )}
              </>
            );

            return (
              <div key={idx} className="logo-grid-item">
                {slide.link ? (
                  <a href={slide.link} target="_blank" rel="noopener noreferrer" className="logo-grid-link">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>

      
    </section>
  );
};

export default LogoShowcase;
