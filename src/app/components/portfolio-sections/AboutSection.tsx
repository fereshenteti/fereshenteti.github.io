'use client';

import Image from 'next/image';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import BadgeImg from '../../assets/icons/certifications/google-ai-professional-certificate.png';

const facts = [
  { label: 'Location',   value: 'Paris, France' },
  { label: 'Languages',  value: 'Arabic · French · English' },
  { label: 'Available',  value: 'Freelance projects' },
  { label: 'Services',   value: 'UI/UX · Branding · Fullstack · Project Management' },
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-left">
          <span className={`section-eyebrow about-eyebrow ${Satoshi.className}`}>About me</span>
          <h2 className={`about-title ${ClashDisplay.className}`}>
            Designer, developer,<br />and coordinator.
          </h2>

          <div className={`about-body ${Satoshi.className}`}>
            <p>
              I'm a designer and fullstack developer based in Paris, France — fluent in Arabic,
              French, and English. I design and build digital products end to end: brand identities
              that turn heads, interfaces that convert, and production-ready code that ships.
            </p>
            <p>
              I work primarily on the frontend with React, Next.js, and Angular — but I don't stop at
              the Frontend boundary. With NestJS on the backend, I can take a product from a blank canvas
              to a deployed, maintained platform. Think 80% frontend, 20% backend: I'm most at home
              crafting interfaces, but I can own the full stack when needed.
            </p>
            <p>
              I've also led freelance projects as a coordinator between business stakeholders and
              technical teams — whether that's an in-house team, an agency, or a network of
              freelancers. I bring architectural thinking, clear cross-discipline communication, and
              a working knowledge of most modern stacks to every engagement.
            </p>
          </div>
        </div>

        <div className="about-right">
          <div className={`about-facts-card ${Satoshi.className}`}>
            {facts.map(({ label, value }) => (
              <div key={label} className="about-fact-row">
                <span className="about-fact-label">{label}</span>
                <span className="about-fact-value">{value}</span>
              </div>
            ))}
          </div>

          <a
            href="https://www.credly.com/badges/25f8cd56-7cd1-4932-842f-dc1ad648ee46"
            target="_blank"
            rel="noopener noreferrer"
            className={`about-badge ${Satoshi.className}`}
          >
            <Image src={BadgeImg} alt="Google AI Essentials Certificate" className="about-badge-img" />
            <div className="about-badge-info">
              <span className="about-badge-issuer">Google Certified</span>
              <span className="about-badge-name">Google AI Professional</span>
            </div>
            <span className="about-badge-arrow">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
