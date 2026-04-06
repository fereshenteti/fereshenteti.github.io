"use client";
import { useState } from "react";
import { MyCustomButton } from "./common-ui/custom-button";

interface CaseStudy {
    id: string;
    title: string;
    subtitle: string;
    thumbnail: string;
    category: string;
    problem: string;
    solution: string;
    results: string[];
    workflow: string[];
    images: string[];
    tags: string[];
    link?: string;
}

const DesignCaseStudies = () => {
    const [expandedCase, setExpandedCase] = useState<string | null>(null);

    const caseStudies: CaseStudy[] = [
        {
            id: "culture-tech",
            title: "Culture Tech",
            subtitle: "Redefining cultural exploration through intuitive design",
            thumbnail: "assets/uiux_design/culture tech.png",
            category: "Mobile App Design",
            problem: "Users struggle to discover and engage with cultural experiences in their area due to fragmented information and uninspiring presentation.",
            solution: "Designed an immersive mobile experience that combines stunning visuals with intuitive navigation, making cultural discovery effortless and exciting.",
            results: [
                "Increased user engagement by 45%",
                "Improved discoverability of cultural events",
                "Received design excellence award"
            ],
            workflow: [
                "User Research & Personas",
                "Competitive Analysis",
                "Wireframing & Prototyping",
                "Visual Design & Branding",
                "Usability Testing & Iteration"
            ],
            images: [
                "assets/uiux_design/culture tech.png",
                "assets/uiux_design/culture tech 2.png",
                "assets/uiux_design/culture tech 3.png"
            ],
            tags: ["Mobile UI", "UX Research", "Visual Design", "Branding"]
        },
        {
            id: "guido",
            title: "Guido",
            subtitle: "Smart navigation redefined",
            thumbnail: "assets/uiux_design/guido 2.png",
            category: "Navigation App",
            problem: "Traditional navigation apps lack personality and fail to provide contextual, real-time information that users actually need.",
            solution: "Created a fresh, user-centered navigation experience with smart features, beautiful UI, and personalized recommendations.",
            results: [
                "Simplified complex navigation flows",
                "Enhanced user satisfaction scores",
                "Modern, accessible interface design"
            ],
            workflow: [
                "User Journey Mapping",
                "Interface Sketching",
                "High-Fidelity Mockups",
                "Motion Design & Micro-interactions",
                "A/B Testing & Analytics"
            ],
            images: [
                "assets/uiux_design/guido 1.png",
                "assets/uiux_design/guido 2.png",
                "assets/uiux_design/guido 3.png"
            ],
            tags: ["Navigation", "Mobile UI", "User Testing", "Interaction Design"]
        }
    ];

    const toggleCase = (id: string) => {
        setExpandedCase(expandedCase === id ? null : id);
    };

    return (
        <div className="design-case-studies">
            <div className="case-studies-header">
                <h2>Featured Case Studies</h2>
                <p>Deep dives into my design process and impact</p>
            </div>

            <div className="case-studies-grid">
                {caseStudies.map((study) => (
                    <div
                        key={study.id}
                        className={`case-study-card ${expandedCase === study.id ? "expanded" : ""}`}
                    >
                        {/* Card Header */}
                        <div className="case-card-header" onClick={() => toggleCase(study.id)}>
                            <div className="case-thumbnail">
                                <img src={study.thumbnail} alt={study.title} />
                                <div className="case-overlay">
                                    <span className="view-case">
                                        {expandedCase === study.id ? "Close Case Study" : "View Case Study"}
                                    </span>
                                </div>
                            </div>
                            <div className="case-header-info">
                                <span className="case-category">{study.category}</span>
                                <h3>{study.title}</h3>
                                <p>{study.subtitle}</p>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedCase === study.id && (
                            <div className="case-expanded-content">
                                {/* Problem */}
                                <div className="case-section">
                                    <div className="section-label">
                                        <span className="label-icon">🎯</span>
                                        <h4>The Challenge</h4>
                                    </div>
                                    <p>{study.problem}</p>
                                </div>

                                {/* Solution */}
                                <div className="case-section">
                                    <div className="section-label">
                                        <span className="label-icon">💡</span>
                                        <h4>The Solution</h4>
                                    </div>
                                    <p>{study.solution}</p>
                                </div>

                                {/* Workflow */}
                                <div className="case-section">
                                    <div className="section-label">
                                        <span className="label-icon">🔄</span>
                                        <h4>Design Process</h4>
                                    </div>
                                    <div className="workflow-steps">
                                        {study.workflow.map((step, index) => (
                                            <div key={index} className="workflow-step">
                                                <span className="step-number">{index + 1}</span>
                                                <span className="step-name">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="case-section">
                                    <div className="section-label">
                                        <span className="label-icon">📈</span>
                                        <h4>Impact & Results</h4>
                                    </div>
                                    <ul className="results-list">
                                        {study.results.map((result, index) => (
                                            <li key={index}>{result}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Image Gallery */}
                                <div className="case-section">
                                    <div className="section-label">
                                        <span className="label-icon">🖼️</span>
                                        <h4>Visual Showcase</h4>
                                    </div>
                                    <div className="case-images-grid">
                                        {study.images.map((img, index) => (
                                            <div key={index} className="case-image">
                                                <img src={img} alt={`${study.title} ${index + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="case-tags">
                                    {study.tags.map((tag, index) => (
                                        <span key={index} className="case-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesignCaseStudies;
