'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    useEffect(() => {
        const cards = gsap.utils.toArray('.bento-card');

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

        // Counter animations for stat cards
        const setupCounterAnimation = (cardId: string, endValue: number) => {
            const card = document.getElementById(cardId);
            if (card) {
                const titleElement = card.querySelector('.bento-title');
                if (titleElement) {
                    ScrollTrigger.create({
                        trigger: card,
                        onEnter: () => {
                            gsap.to(
                                { value: 0 },
                                {
                                    value: endValue,
                                    duration: 2,
                                    ease: 'power2.out',
                                    onUpdate: function() {
                                        titleElement.textContent = Math.ceil(this.targets()[0].value) + '+';
                                    },
                                }
                            );
                        },
                        once: true,
                    });
                }
            }
        };

        setupCounterAnimation('years-of-experience-card', 7);
        setupCounterAnimation('happy-clients-card', 10);
        setupCounterAnimation('projects-delivered-card', 16);
    }, []);

    return (
        <section className="bento-section">
            <div className="bento-container">
                <div className="bento-grid">
                    
                    <div id="my-name-card" className="bento-card col-span-2">
                        <div className="bento-card-inner">
                            <p className="bento-description">Hi 👋 I'm</p>
                            <h3 className="bento-title">Fares Hentati</h3>
                        </div>
                    </div>

                    <div className="bento-card col-span-2 row-span-2">
                        <div className="bento-card-inner">
                            {/* <div className="bento-icon">🎨</div>
                            <h3 className="bento-title">Design Systems</h3>
                            <p className="bento-description">Scalable & Accessible</p> */}
                            <img src="/assets/images/my_avatar.png" alt="Design Systems" className="bento-image" />
                        </div>
                    </div>

                    <div className="bento-card row-span-2">
                        <div className="bento-card-inner">
                            <div className="bento-icon">🧭</div>
                            <h3 className="bento-title">User Experience</h3>
                            <p className="bento-description">Research-driven design</p>
                        </div>
                    </div>

                    <div id="ui-ux-card" className="bento-card">
                        <div className="bento-card-inner">
                            <div className="bento-icon">✨</div>
                            <h3 className="bento-title">UI / UX Designer</h3>
                            {/* <p className="bento-description">Logo & Visual Systems</p> */}
                        </div>
                    </div>

                    <div id="frontend-card" className="bento-card">
                        <div className="bento-card-inner">
                            <div className="bento-icon">🧑🏼‍💻</div>
                            <h3 className="bento-title">Frontend expert</h3>
                            {/* <p className="bento-description">Founder of Hentees</p> */}
                        </div>
                    </div>

                    <div id="years-of-experience-card" className="bento-card col-span-2">
                        <div className="bento-card-inner">
                            <div className="left-side">
                                {/* <div className="bento-icon">🚀</div> */}
                                <h3 className="bento-title">7+</h3>
                                <p className="bento-description">Years of experience</p>
                            </div>
                            <div className="right-side">
                                <div className="chart-container">
                                    <ExperienceChart />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="happy-clients-card" className="bento-card">
                        <div className="bento-card-inner">
                            {/* <div className="bento-icon">🤝</div> */}
                            <h3 className="bento-title">10+</h3>
                            <p className="bento-description">Happy clients</p>
                        </div>
                    </div>

                    <div id="projects-delivered-card" className="bento-card">
                        <div className="bento-card-inner">
                            {/* <div className="bento-icon">🚀</div> */}
                            <h3 className="bento-title">16+</h3>
                            <p className="bento-description">Projects delivered</p>
                        </div>
                    </div>

                    <div className="bento-card">
                        <div className="bento-card-inner">
                            <div className="bento-icon">⚙️</div>
                            <h3 className="bento-title">Performance First</h3>
                            <p className="bento-description">Optimized for speed</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BentoBox;
