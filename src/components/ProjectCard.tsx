'use client';

import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    link?: string;
    slug?: string;
    image?: string;
    index: number;
}

export default function ProjectCard({ title, description, link, slug, image, index }: ProjectCardProps) {
    return (
        <div className="project-card">

            {/* Meta/Text Side */}
            <div className="text-content">
                <div>
                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">
                        {description}
                    </p>
                </div>
            </div>

            {/* Image Side */}
            <div className="image-content">
                <Link href={slug ? `/portfolio/${slug}` : (link || '#')} style={{ width: '100%', height: '100%', display: 'block' }}>
                    <div className="image-wrapper">
                        {image ? (
                            <img
                                src={image}
                                alt={title}
                                className="project-image"
                            />
                        ) : (
                            <div className="no-image-placeholder">
                                No Image
                            </div>
                        )}
                    </div>
                </Link>
            </div>

            <style jsx>{`
                .project-card {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem; /* Mobile: Ultra-tight gap */
                }

                .text-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    text-align: left;
                    min-height: auto;
                }

                .project-title {
                    font-size: 1.5rem;
                    font-weight: 400;
                    margin-top: 0rem;
                    margin-bottom: 0rem;
                }

                .project-description {
                    font-size: 1rem;
                    color: #555;
                    line-height: 1.6;
                    max-width: 100%;
                }

                .image-content {
                    flex: 1;
                    width: 100%;
                    cursor: pointer;
                    display: block;
                }

                .image-wrapper {
                    width: 100%;
                    min-height: 240px;
                    position: relative;
                    overflow: hidden;
                    aspect-ratio: 4/3;
                }

                .project-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .no-image-placeholder {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--colors-subtle);
                    background: #f9f9f9;
                }

                @media (min-width: 768px) {
                    .project-card {
                        flex-direction: row;
                        gap: 4rem; /* Desktop: Wide gap */
                    }
                    
                    .text-content {
                         min-height: 200px;
                         height: 100%;
                    }

                    .project-label {
                        margin-bottom: 1rem;
                    }

                    .project-title {
                        margin-top: 0rem;
                        margin-bottom: 0rem;
                    }

                    .project-description {
                        max-width: 90%;
                    }
                    
                    .image-wrapper {
                        min-height: 300px;
                        aspect-ratio: auto;
                        height: 100%;
                    }
                }
            `}</style>
        </div>
    );
}
