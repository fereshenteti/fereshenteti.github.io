'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ClashDisplay, Satoshi } from '../../fonts/fonts';
import CountUp from '../animations/CountUp/CountUp';
import { MyCustomButton } from './common-ui/custom-button';
import CustomBentoCard from './custom-bento-card';

const ExperienceChart = () => {
    const polylineRef = useRef<SVGPolylineElement>(null);
    const polygonRef = useRef<SVGPolygonElement>(null);

    useEffect(() => {
        if (polylineRef.current) {
            // Use a fixed large dash value to ensure the line is fully visible initially
            const dashValue = 1000; // Large enough to cover any path
            polylineRef.current.style.strokeDasharray = `${dashValue}`;
            polylineRef.current.style.strokeDashoffset = `${dashValue}`;

            // Animate both line and fill together
            gsap.to([polylineRef.current, polygonRef.current], {
                strokeDashoffset: 0,
                duration: 2.5,
                ease: 'power2.inOut',
            });

            // Also fade in the polygon
            if (polygonRef.current) {
                gsap.to(polygonRef.current, {
                    opacity: 1,
                    duration: 2.5,
                    ease: 'power2.inOut',
                });
            }
        }
    }, []);

    // Data points: year 2018-2026 with ascending values
    const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
    const values = [10, 25, 40, 55, 65, 75, 85, 90, 100]; // Ascending pace

    // Normalize for SVG coordinates (width: 100, height: 60)
    const width = 140;
    const height = 80;
    const padding = 15;
    const graphWidth = width - padding * 2;
    const graphHeight = height - padding * 2 - 12; // Space for X-axis labels

    // Calculate points
    const points = values.map((val, i) => {
        const x = padding + (i / (values.length - 1)) * graphWidth;
        const y = padding + graphHeight - (val / 100) * graphHeight;
        return `${x},${y}`;
    }).join(' ');

    // Get first and last point coordinates for year labels
    const firstX = padding;
    const lastX = padding + graphWidth;
    const axisY = padding + graphHeight;

    return (
        <svg className="experience-chart" viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
            {/* Y-axis - hidden */}
            <line
                x1={padding}
                y1={padding}
                x2={padding}
                y2={height - padding - 10}
                stroke="transparent"
                strokeWidth="1.2"
            />

            {/* X-axis - hidden */}
            <line
                x1={padding}
                y1={axisY}
                x2={width - padding}
                y2={axisY}
                stroke="transparent"
                strokeWidth="1.2"
            />            {/* Year labels on X-axis */}
            <text
                x={firstX}
                y={height - 2}
                fontSize="8"
                fontWeight="600"
                fill="#999"
                textAnchor="middle"
            >
                2018
            </text>
            <text
                x={lastX}
                y={height - 2}
                fontSize="8"
                fontWeight="600"
                fill="#999"
                textAnchor="middle"
            >
                2026
            </text>

            {/* Line chart */}
            <polyline
                ref={polylineRef}
                points={points}
                fill="none"
                stroke="url(#chartGradient)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="chart-line"
            />

            {/* Area under line with gradient fade */}
            <polygon
                ref={polygonRef}
                points={`${padding},${axisY} ${points} ${width - padding},${axisY}`}
                fill="url(#chartFill)"
                opacity="0"
            />

            {/* Gradient definitions */}
            <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
                <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#667eea" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const BentoBox = () => {
    const bentoSectionRef = useRef<HTMLElement>(null);
    const avatarRevealRef = useRef<HTMLDivElement>(null);
    const floatingBtnRef = useRef<HTMLButtonElement | null>(null);

    const handleAvatarMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = avatarRevealRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--cursor-x', `${e.clientX - rect.left}px`);
        el.style.setProperty('--cursor-y', `${e.clientY - rect.top}px`);
    };

    const handleAvatarMouseLeave = () => {
        avatarRevealRef.current?.style.setProperty('--cursor-x', '-200px');
        avatarRevealRef.current?.style.setProperty('--cursor-y', '-200px');
    };

    // Morph button from pill-in-card to fixed circle at bottom-right
    useEffect(() => {
        const section = bentoSectionRef.current;
        const btn = floatingBtnRef.current;
        const card = document.getElementById('contact-cta-bento-card');
        if (!section || !btn || !card) return;

        const textSpan = btn.querySelector('.custom-button-text') as HTMLElement;
        const iconEl   = btn.querySelector('.custom-button-icon') as HTMLElement;

        // Cache natural pill size (stable; CSS keeps it constant while in pill state)
        const initRect = btn.getBoundingClientRect();
        const pillW = initRect.width;
        const pillH = initRect.height;

        const CIRCLE = 56;
        const OFFSET = 48;

        let state: 'pill' | 'circle' = 'pill';
        let tl: gsap.core.Timeline | null = null;

        // The button's CSS uses translate(-50%,-50%) so top/left represent its CENTER.
        // We always work in center coordinates to avoid fighting the CSS transform.
        const getCardCenter = () => {
            const c = card.getBoundingClientRect();
            return { cx: c.left + c.width / 2, cy: c.top + c.height / 2 };
        };

        const morphToCircle = () => {
            state = 'circle';
            tl?.kill();

            // Snapshot button center in viewport coords
            const r = btn.getBoundingClientRect();
            const cx = r.left + r.width  / 2;
            const cy = r.top  + r.height / 2;

            // Lift to fixed — keep translate(-50%,-50%) active, so top/left = center
            btn.style.position  = 'fixed';
            btn.style.top       = `${cy}px`;
            btn.style.left      = `${cx}px`;
            btn.style.width     = `${pillW}px`;
            btn.style.height    = `${pillH}px`;
            btn.style.margin    = '0';

            // Target: circle centered at bottom-right corner
            const targetCx = window.innerWidth  - OFFSET - CIRCLE / 2;
            const targetCy = window.innerHeight - OFFSET - CIRCLE / 2;

            tl = gsap.timeline({
                onComplete: () => { tl = null; },
            });
            tl.to(textSpan, { opacity: 0, duration: 0.15 }, 0);
            tl.to(iconEl,   { filter: 'brightness(0) invert(1)', duration: 0.2 }, 0.05);
            tl.to(btn, {
                top: targetCy, left: targetCx,
                width: CIRCLE, height: CIRCLE,
                borderRadius: '50%',
                backgroundColor: '#FF791B',
                borderColor: '#FF791B',
                boxShadow: 'none',
                duration: 0.55, ease: 'power3.inOut',
            }, 0);
        };

        const morphToPill = () => {
            state = 'pill';
            tl?.kill();

            // Snapshot current center (GSAP may have animated top/left)
            const r   = btn.getBoundingClientRect();
            const cx  = r.left + r.width  / 2;
            const cy  = r.top  + r.height / 2;

            // Ensure fixed + top/left in center coords
            btn.style.position = 'fixed';
            gsap.set(btn, { top: cy, left: cx, width: r.width, height: r.height });

            const { cx: targetCx, cy: targetCy } = getCardCenter();

            tl = gsap.timeline({
                onComplete: () => {
                    // Clear all inline overrides → CSS restores absolute + translate(-50%,-50%)
                    btn.style.cssText = '';
                    tl = null;
                },
            });
            tl.to(iconEl,   { filter: 'none', duration: 0.2 }, 0);
            tl.to(textSpan, { opacity: 1,     duration: 0.2 }, 0.1);
            tl.to(btn, {
                top: targetCy, left: targetCx,
                width: pillW,  height: pillH,
                borderRadius: '60px',
                backgroundColor: 'white',
                borderColor: '#FF791B',
                boxShadow: '7px 10px 0 0 #FF791B',
                duration: 0.5, ease: 'power3.inOut',
            }, 0);
        };

        const onTick = () => {
            const s = section.getBoundingClientRect();
            const halfOut = s.top + s.height / 2 < 0;
            if (halfOut  && state === 'pill')   morphToCircle();
            if (!halfOut && state === 'circle') morphToPill();
        };

        gsap.ticker.add(onTick);
        return () => { gsap.ticker.remove(onTick); tl?.kill(); };
    }, []);

    const openContact = () => {
        window.dispatchEvent(new CustomEvent('openContactMenu'));
    }

    return (
        <section className="bento-section" ref={bentoSectionRef}>
            <div className="bento-container">
                <div className={"bento-grid " + ClashDisplay.className}>

                    <CustomBentoCard id="my-name-card" customClasses='xs:order-[1] md:col-span-2 xs:col-span-3 col-span-2'>
                        <p className="bento-description">Hi 👋 I'm</p>
                        <h3 className={'bento-title '}>
                            Fares Hentati
                        </h3>
                    </CustomBentoCard>

                    <CustomBentoCard id="my-avatar-card" customClasses="md:order-[2] col-span-2 row-span-2 xs:order-[6]">
                        <div
                            className="avatar-reveal-container"
                            ref={avatarRevealRef}
                            onMouseMove={handleAvatarMouseMove}
                            onMouseLeave={handleAvatarMouseLeave}
                        >
                            <img src="/assets/images/my_avatar_sketch.png" alt="My Avatar Sketch" className="bento-image avatar-back" />
                            <img src="/assets/images/my_Apple_avatar.png" alt="My Avatar" className="bento-image avatar-front" />
                        </div>
                    </CustomBentoCard>

                    <CustomBentoCard id="my-experience-card" customClasses="lg:order-[3] md:order-[5] order-[5] row-span-2 xs:col-span-3 lg:col-span-1 md:col-span-2 col-span-2">
                        <p className={"bento-description " + Satoshi.className}>I design modern, intuitive, and user-centered interfaces, combining technical excellence  with high aesthetic standards.</p>
                        <br />
                        <p className={"bento-description " + Satoshi.className}><strong>My goal</strong>: to transform complex business needs into seamless, high-performing, and accessible digital experiences.</p>
                    </CustomBentoCard>

                    <CustomBentoCard id="ui-ux-card" customClasses="lg:order-[4] xs:order-[2] order-[3]">
                        <div className="bento-icon">✨</div>
                        <h3 className="bento-title">UI / UX Design Expert</h3>
                    </CustomBentoCard>

                    <CustomBentoCard id="frontend-card" customClasses="lg:order-[5] xs:order-[3] order-[4]">
                        <div className="bento-icon">🧑🏼‍💻</div>
                        <h3 className="bento-title">Frontend Engineer</h3>
                    </CustomBentoCard>

                    <CustomBentoCard id="years-of-experience-card" customClasses="md:order-[6] lg:col-span-2 md:col-span-1 xs:order-[4] order-[6]">
                        <div className="left-side">
                            <span className='count-up-number'>
                                <CountUp
                                    from={0}
                                    to={7}
                                    direction="up"
                                    duration={0.5}
                                    className="count-up-text"
                                />
                                +
                            </span>
                            <p className="bento-description">Years of experience</p>
                        </div>
                        <div className="!hidden lg:!block  right-side">
                            <div className="chart-container">
                                <ExperienceChart />
                            </div>
                        </div>
                    </CustomBentoCard>

                    <CustomBentoCard id="happy-clients-card" customClasses="order-[7]">
                        <span className='count-up-number'>
                            <CountUp
                                from={0}
                                to={12}
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                            +
                        </span>
                        <p className="bento-description">Happy clients</p>
                    </CustomBentoCard>

                    <CustomBentoCard id="projects-delivered-card" customClasses="order-[8]">
                        <span className='count-up-number'>
                            <CountUp
                                from={0}
                                to={17}
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                            +
                        </span>
                        <p className="bento-description">Projects delivered</p>
                    </CustomBentoCard>

                    <CustomBentoCard id="contact-cta-bento-card" customClasses="order-[9] xs:col-span-3 md:col-span-1">
                        <MyCustomButton
                            id="floating-contact-btn"
                            ref={floatingBtnRef}
                            btnIcon="assets/icons/send.svg"
                            btnText="Let's get in touch!"
                            className="contact-button-card"
                            onClick={openContact}
                        />
                    </CustomBentoCard>

                </div>
            </div>
        </section>
    );
};

export default BentoBox;
