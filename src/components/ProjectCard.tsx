'use client';

import Link from 'next/link';
import { BASE_PATH } from '@/lib/constants';

interface ProjectCardProps {
    title: string;
    description: string;
    link?: string;
    slug?: string;
    image?: string;
    index: number;
}

export default function ProjectCard({ title, description, link, slug, image, index }: ProjectCardProps) {
    // Handle image path for GitHub Pages
    // If path starts with slash, prepend BASE_PATH
    const displayImage = image ? (image.startsWith('/') ? `${BASE_PATH}${image}` : image) : null;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column', // Mobile first
            gap: '2rem',
        }} className="project-card-desktop">

            {/* Meta/Text Side - Simplified */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                textAlign: 'left',
                minHeight: '200px',
                height: '100%',
            }}>
                <div>
                    <span style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1rem', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Project
                    </span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '2rem' }}>{title}</h3>
                    <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.7, maxWidth: '90%' }}>
                        {description}
                    </p>
                </div>
            </div>

            {/* Image Side - Simplified */}
            <div style={{
                flex: 1,
                width: '100%',
                height: '100%',
                cursor: 'pointer',
                display: 'block',
            }}>
                <Link href={slug ? `/portfolio/${slug}` : (link || '#')} style={{ width: '100%', height: '100%', display: 'block' }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        minHeight: '300px',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {displayImage ? (
                            <img
                                src={displayImage}
                                alt={title}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                                className="project-image"
                            />
                        ) : (
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--colors-subtle)', background: '#f9f9f9' }}>
                                No Image
                            </div>
                        )}
                    </div>
                </Link>
            </div>

            <style jsx>{`
        @media (min-width: 768px) {
            .project-card-desktop {
                flex-direction: row !important;
                gap: 4rem !important;
                text-align: left;
            }
        }
      `}</style>
        </div>
    );
}
