'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CardItem {
    id: string;
    icon: string;
    headline: string;
    description: string;
    meta: string;
}

const CARDS: CardItem[] = [
    {
        id: 'code',
        icon: '⚡',
        headline: 'Frontend Engineering',
        description: 'React, Next.js, and TypeScript. Building performant, scalable interfaces.',
        meta: '6+ years production experience'
    },
    {
        id: 'design',
        icon: '🎨',
        headline: 'Design Systems',
        description: 'Component architecture, tokens, and visual consistency at scale.',
        meta: 'WCAG 2.2 & RGAA standards'
    },
    {
        id: 'strategy',
        icon: '🧭',
        headline: 'UX Strategy',
        description: 'Research-driven discovery, user journeys, and information architecture.',
        meta: 'User-centered approach'
    },
    {
        id: 'performance',
        icon: '⚙️',
        headline: 'Performance First',
        description: 'Optimized for speed, accessibility, and inclusive digital experiences.',
        meta: 'Lighthouse 90+, Accessibility'
    },
    {
        id: 'branding',
        icon: '✨',
        headline: 'Brand Identity',
        description: 'Logo systems, visual identities, and complete brand ecosystems.',
        meta: 'Logo Design & Branding'
    },
    {
        id: 'entrepreneurship',
        icon: '🚀',
        headline: 'Building Products',
        description: 'End-to-end product thinking with design, engineering, and strategy.',
        meta: 'Founder of Hentees'
    },
];

const Card = ({ card, boxRef }: { card: CardItem; boxRef?: string }) => {
    return (
        <div className="about-card">
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-headline">{card.headline}</h3>
            <p className="card-description">{card.description}</p>
            <p className="card-meta">{card.meta}</p>
        </div>
    );
};

const AboutMyWork = (props: { boxRef?: string }) => {
    const { boxRef } = props;

    useEffect(() => {
        if (boxRef) {
            const cards = gsap.utils.toArray(`.${boxRef} .about-card`);

            cards.forEach((card: any, i: number) => {
                const anim = gsap.fromTo(
                    card,
                    { autoAlpha: 0, y: 40 },
                    { duration: 0.6, delay: i / 12, autoAlpha: 1, y: 0 }
                );

                ScrollTrigger.create({
                    trigger: card,
                    animation: anim,
                    toggleActions: 'play none none none',
                    once: true,
                });
            });
        }
    }, [boxRef]);

    return (
        <section className={`about-my-work-section ${boxRef}`}>
            <div className="about-my-work-container">
                <div className="section-header">
                    <h2>What I Bring</h2>
                    <p>Frontend engineer, designer, and strategic thinker</p>
                </div>

                <div className="about-grid">
                    {CARDS.map((card) => (
                        <Card key={card.id} card={card} boxRef={boxRef} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMyWork;
