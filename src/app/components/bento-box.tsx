'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { ClashDisplay, Satoshi } from '../../fonts/fonts';
import CountUp from '../animations/CountUp/CountUp';
import GradientText from '../animations/GradientText/GradientText';
import Magnet from '../animations/Magnet/Magnet';
import { MyCustomButton } from './common-ui/custom-button';
import CustomBentoCard from './custom-bento-card';
import StarBorder from '../animations/StarBorder/StarBorder';

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

    const test = () => {
        console.log('Button clicked!');
    }

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
    }, []);

    return (
        <section className="bento-section">
            <div className="bento-container">
                <div className={"bento-grid " + ClashDisplay.className}>
                    
                    <CustomBentoCard id="my-name-card" colSpan={2}>
                        <p className="bento-description">Hi 👋 I'm</p>
                        <h3 className={'bento-title '}>
                            Fares Hentati
                        </h3>
                    </CustomBentoCard>

                    <CustomBentoCard id="my-avatar-card" colSpan={2} rowSpan={2}>
                        <img src="/assets/images/my_avatar.png" alt="Design Systems" className="bento-image" />
                    </CustomBentoCard>

                    <CustomBentoCard id="my-experience-card" rowSpan={2}>
                        <p className={"bento-description " + Satoshi.className}>I design modern, intuitive, and user-centered interfaces, combining technical excellence  with high aesthetic standards.</p>
                        <br/>
                        <p className={"bento-description " + Satoshi.className}><strong>My goal</strong>: to transform complex business needs into seamless, high-performing, and accessible digital experiences.</p>
                    </CustomBentoCard>

                    <CustomBentoCard id="ui-ux-card">
                        <div className="bento-icon">✨</div>
                        <h3 className="bento-title">UI / UX Design Expert</h3>
                    </CustomBentoCard>

                    <CustomBentoCard id="frontend-card">
                        <div className="bento-icon">🧑🏼‍💻</div>
                        <h3 className="bento-title">Frontend Engineer</h3>
                    </CustomBentoCard>

                    <CustomBentoCard id="years-of-experience-card" colSpan={2}>
                        <div className="left-side">
                        {/* colors={["#5227FF","#FF9FFC","#B19EEF"]} */}
                        <GradientText
                        animationSpeed={0}
                        showBorder={false}
                        >
                            <CountUp
                                from={0}
                                to={7}
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                            +
                        </GradientText>
                            <p className="bento-description">Years of experience</p>
                        </div>
                        <div className="right-side">
                            <div className="chart-container">
                                <ExperienceChart />
                            </div>
                        </div>
                    </CustomBentoCard>

                    <CustomBentoCard id="happy-clients-card">
                        <GradientText
                            animationSpeed={0}
                            showBorder={false}
                            >
                                <CountUp
                                    from={0}
                                    to={12}
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />
                                +
                        </GradientText>
                        <p className="bento-description">Happy clients</p>
                    </CustomBentoCard>

                    <CustomBentoCard id="projects-delivered-card">
                        <GradientText
                            animationSpeed={0}
                            showBorder={false}
                            >
                                <CountUp
                                    from={0}
                                    to={17}
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />
                                +
                        </GradientText>
                        <p className="bento-description">Projects delivered</p>
                    </CustomBentoCard>

                    <CustomBentoCard id="contact-cta-bento-card">
                        <Magnet padding={50} disabled={false} magnetStrength={5}>
                            {/* <StarBorder
                                as="button"
                                className="custom-class"
                                color="magenta"
                                speed="5s"
                                >
                                    Let's get in touch!
                            </StarBorder> */}
                            <MyCustomButton btnIcon="assets/icons/send.svg" btnText="Let's get in touch!" className="contact-button-card"
                            onClick={() => test()} />
                        </Magnet>
                    </CustomBentoCard>

                </div>
            </div>
        </section>
    );
};

export default BentoBox;
