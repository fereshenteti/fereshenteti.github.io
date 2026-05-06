'use client';

import { useEffect, useState } from 'react';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';

type Recommendation = {
  id: string;
  fullName: string;
  company: string;
  text: string;
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

const TestimonialsSection = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://feedspot-feres.vercel.app/api/recommendations')
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setRecommendations(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const hasData = !loading && recommendations.length > 0;

  return (
    <section className="testimonials-section">
      <div className="portfolio-container testimonials-container">

        <div className="testimonials-header">
          <span className={`section-eyebrow ${Satoshi.className}`}>Testimonials</span>
          <h2 className={`section-title ${ClashDisplay.className}`}>Kind words</h2>
          <p className={`section-subtitle ${Satoshi.className}`}>
            {hasData
              ? "Here's what people say about working with Fares."
              : 'Gathering kind words from happy clients — check back soon.'}
          </p>
        </div>

        <div className="testimonials-grid">
          {hasData
            ? recommendations.map((r) => (
                <div key={r.id} className="testimonial-card">
                  <div className="testimonial-inner" style={{ filter: 'none', userSelect: 'auto', pointerEvents: 'auto' }}>
                    <div className="testimonial-stars">★★★★★</div>
                    <p className={`testimonial-quote ${Satoshi.className}`}>&ldquo;{r.text}&rdquo;</p>
                    <div className="testimonial-author">
                      <div className={`testimonial-avatar ${Satoshi.className}`}>{getInitials(r.fullName)}</div>
                      <div className="testimonial-info">
                        <span className={`testimonial-name ${Satoshi.className}`}>{r.fullName}</span>
                        <span className={`testimonial-role ${Satoshi.className}`}>{r.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : placeholders.map((t, i) => (
                <div key={i} className="testimonial-card">
                  <div className="testimonial-inner">
                    <div className="testimonial-stars">★★★★★</div>
                    <p className={`testimonial-quote ${Satoshi.className}`}>&ldquo;{t.quote}&rdquo;</p>
                    <div className="testimonial-author">
                      <div className={`testimonial-avatar ${Satoshi.className}`}>{t.initials}</div>
                      <div className="testimonial-info">
                        <span className={`testimonial-name ${Satoshi.className}`}>{t.name}</span>
                        <span className={`testimonial-role ${Satoshi.className}`}>{t.role}</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-overlay">
                    <span className={`coming-soon-badge ${Satoshi.className}`}>
                      {loading ? 'Loading…' : 'Coming soon'}
                    </span>
                  </div>
                </div>
              ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
