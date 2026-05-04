'use client';

import { ClashDisplay, Satoshi } from '../../../fonts/fonts';

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

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="portfolio-container testimonials-container">

        <div className="testimonials-header">
          <span className={`section-eyebrow ${Satoshi.className}`}>Testimonials</span>
          <h2 className={`section-title ${ClashDisplay.className}`}>Kind words</h2>
          <p className={`section-subtitle ${Satoshi.className}`}>
            Gathering kind words from happy clients — check back soon.
          </p>
        </div>

        <div className="testimonials-grid">
          {placeholders.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-inner">
                <div className="testimonial-stars">★★★★★</div>
                <p className={`testimonial-quote ${Satoshi.className}`}>"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className={`testimonial-avatar ${Satoshi.className}`}>{t.initials}</div>
                  <div className="testimonial-info">
                    <span className={`testimonial-name ${Satoshi.className}`}>{t.name}</span>
                    <span className={`testimonial-role ${Satoshi.className}`}>{t.role}</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-overlay">
                <span className={`coming-soon-badge ${Satoshi.className}`}>Coming soon</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
