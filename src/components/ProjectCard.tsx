'use client';

import Image from 'next/image';
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
    // Removed alternating order to enforce "Left Text / Right Image" layout as requested.

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column', // Mobile first
            gap: '2rem',
            // marginBottom: '6rem', // Removed to reduce spacing (controlled by parent)
        }} className="project-card-desktop">

            {/* Meta/Text Side - Simplified */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start', // Top alignment often cleaner without box
                textAlign: 'left',
                // backgroundColor removed
                // padding removed
                minHeight: '200px', // Reduced min-height
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

                {/* View Project Link Removed */}
            </div>

            {/* Image Side - Simplified */}
            <div style={{
                flex: 1,
                width: '100%',
                height: '100%',
                cursor: 'pointer',
                // backgroundColor removed
                // padding removed
                display: 'block', // Default
            }}>
                <Link href={slug ? `/portfolio/${slug}` : (link || '#')} style={{ width: '100%', height: '100%', display: 'block' }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        minHeight: '300px', // Ensure visibility
                        position: 'relative',
                        overflow: 'hidden',
                        // No border radius requested, maybe sharp is better for "exquisite"
                    }}>
                        {/* Image Placeholder or Actual Image */}
                        {image ? (
                            <Image
                                src={image}
                                alt={title}
                                fill
                                style={{ objectFit: 'cover' }} // Transition removed
                                className="project-image"
                                sizes="(max-width: 768px) 100vw, 50vw"
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
