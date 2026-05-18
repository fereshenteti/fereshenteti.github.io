'use client';

import { useRef } from 'react';
import { ClashDisplay, Satoshi, Handwritten } from '../../../fonts/fonts';
import ArrowHandwritten from '../../assets/arrow-handwritten.svg';
import { motion } from 'framer-motion';

const ChevronIcon = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    {dir === 'left'
      ? <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      : <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    }
  </svg>
);

type Recommendation = {
  id: string;
  fullName: string;
  company: string;
  text: string;
  rating: number;
  createdAt: string;
};

const placeholders = [
  {
    quote: "Working with Fares transformed our brand completely. The attention to detail and creative vision brought our identity to life in ways we hadn't imagined.",
    name: "Alex Martin",
    role: "CEO, TechStart",
    initials: "AM",
  },
  {
    quote: "The redesign was exceptional — performance, UX, and conversion all improved significantly. Couldn't have asked for a better collaboration.",
    name: "Sarah Johnson",
    role: "Product Lead, Sedeo",
    initials: "SJ",
  },
  {
    quote: "Rare to find someone who truly masters both design and code. Fares delivered a complete brand system that we're proud to show the world.",
    name: "Marco Rossi",
    role: "Founder, MioTocco",
    initials: "MR",
  },
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function TestimonialsCarousel({ recommendations }: { recommendations: Recommendation[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const didDrag = useRef(false);
  const snapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasData = recommendations.length > 0;

  const scroll = (dir: 'left' | 'right') => {
    trackRef.current?.scrollBy({ left: dir === 'right' ? 420 : -420, behavior: 'smooth' });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    e.preventDefault();
    if (snapTimer.current) clearTimeout(snapTimer.current);

    didDrag.current = false;
    const startX = e.clientX;
    const scrollStart = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
    trackRef.current.style.scrollSnapType = 'none';

    const onMove = (ev: MouseEvent) => {
      const walk = ev.clientX - startX;
      if (Math.abs(walk) > 4) didDrag.current = true;
      trackRef.current!.scrollLeft = scrollStart - walk;
    };

    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      if (!trackRef.current) return;
      const track = trackRef.current;
      track.style.cursor = 'grab';

      const cards = Array.from(track.children) as HTMLElement[];
      const firstOffset = cards[0]?.offsetLeft ?? 0;
      const current = track.scrollLeft;
      const maxScroll = track.scrollWidth - track.clientWidth;
      let target = 0;
      let minDist = Infinity;
      for (const card of cards) {
        const snapPos = Math.min(card.offsetLeft - firstOffset, maxScroll);
        const dist = Math.abs(snapPos - current);
        if (dist < minDist) { minDist = dist; target = snapPos; }
      }
      track.scrollTo({ left: target, behavior: 'smooth' });

      snapTimer.current = setTimeout(() => {
        if (trackRef.current) trackRef.current.style.scrollSnapType = '';
        snapTimer.current = null;
      }, 700);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  const cards = hasData ? recommendations : placeholders;

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className={`section-eyebrow ${Satoshi.className}`}>Testimonials</span>
          <h2 className={`section-title ${ClashDisplay.className}`}>Kind words</h2>
          <p className={`section-subtitle ${Satoshi.className}`}>
            {hasData
              ? "Here's what people say about working with me."
              : 'Gathering kind words from happy clients — check back soon.'}
          </p>
        </motion.div>
      </div>

      <div className="testimonials-carousel-outer">
        <div className="testimonials-nav-group">
          <button className="testimonials-nav" onClick={() => scroll('left')} aria-label="Previous">
            <ChevronIcon dir="left" />
          </button>
          <button className="testimonials-nav" onClick={() => scroll('right')} aria-label="Next">
            <ChevronIcon dir="right" />
          </button>
        </div>

        <div className="testimonials-track" ref={trackRef} onMouseDown={onMouseDown}>
          <div className="testimonial-submit-cta-wrapper">
            <p className={`testimonials-submit-cta-text ${Handwritten.className}`}>
              These testimonials were gathered via Kindwo. Worked with me and have something to say?{' '}
              <a
                href="https://kindwo.vercel.app/submit/fares"
                target="_blank"
                rel="noopener noreferrer"
                className="testimonials-submit-cta-link"
              >
                You can do it here
              </a>
            </p>
            <div className="testimonials-submit-cta-arrow-wrapper">
              <ArrowHandwritten className="testimonials-submit-cta-arrow" aria-hidden="true" />
            </div>
          </div>

          {cards.map((item, i) => {
            const isReal = hasData;
            const r = isReal ? item as Recommendation : null;
            const p = !isReal ? item as typeof placeholders[0] : null;
            const stars = isReal ? r!.rating : 5;

            return (
              <div key={isReal ? (item as Recommendation).id : i} className="testimonial-card">
                <div
                  className="testimonial-inner"
                  style={isReal ? { filter: 'none', userSelect: 'auto', pointerEvents: 'auto' } : undefined}
                >
                  <div className="testimonial-stars">
                    {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
                  </div>
                  <p className={`testimonial-quote ${Satoshi.className}`}>
                    &ldquo;{isReal ? r!.text : p!.quote}&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <div className={`testimonial-avatar ${Satoshi.className}`}>
                      {isReal ? getInitials(r!.fullName) : p!.initials}
                    </div>
                    <div className="testimonial-info">
                      <div className="testimonial-name-row">
                        <span className={`testimonial-name ${Satoshi.className}`}>
                          {isReal ? r!.fullName : p!.name}
                        </span>
                        <span> • </span>
                        {isReal && (
                          <span className={`testimonial-date ${Satoshi.className}`}>
                            {new Date(r!.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                          </span>
                        )}
                      </div>
                      <span className={`testimonial-role ${Satoshi.className}`}>
                        {isReal ? r!.company : p!.role}
                      </span>
                    </div>
                  </div>
                </div>
                {!isReal && (
                  <div className="testimonial-overlay">
                    <span className={`coming-soon-badge ${Satoshi.className}`}>Coming soon</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
