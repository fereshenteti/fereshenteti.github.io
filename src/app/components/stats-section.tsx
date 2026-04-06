"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
    number: number;
    suffix: string;
    label: string;
    icon: string;
}

const StatsSection = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement[]>([]);

    const stats: StatItem[] = [
        { number: 10, suffix: "+", label: "Happy Clients", icon: "🤝" },
        { number: 15, suffix: "+", label: "Projects Delivered", icon: "🚀" },
        { number: 5, suffix: "+", label: "Mentored Students", icon: "🎓" },
    ];

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounters = () => {
        statsRef.current.forEach((stat, index) => {
            if (!stat) return;

            const numberElement = stat.querySelector(".stat-number") as HTMLElement;
            const statItem = stats[index];

            const counter = { value: 0 };
            gsap.to(counter, {
                value: statItem.number,
                duration: 2,
                ease: "power2.out",
                delay: index * 0.2,
                onUpdate: () => {
                    numberElement.textContent = Math.floor(counter.value).toString();
                },
            });

            // Animate the card entrance
            gsap.fromTo(
                stat,
                { y: 50, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "back.out(1.7)",
                }
            );
        });
    };

    return (
        <section className="stats-section" ref={sectionRef}>
            <div className="stats-container">
                <div className="stats-header">
                    <h2 className="stats-title">
                        <span className="gradient-text">My Impact</span> in Numbers
                    </h2>
                    <p className="stats-subtitle">
                        Building relationships, delivering excellence, and sharing knowledge
                    </p>
                </div>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-card"
                            ref={(el) => {
                                if (el) statsRef.current[index] = el;
                            }}
                        >
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-content">
                                <div className="stat-number-wrapper">
                                    <span className="stat-number">0</span>
                                    <span className="stat-suffix">{stat.suffix}</span>
                                </div>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                            <div className="stat-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
