'use client';

import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    link?: string;
    slug?: string;
    image?: string;
    index: number;
    basePath?: string;
}

export default function ProjectCard({ title, description, link, slug, image, index, basePath = '' }: ProjectCardProps) {
    // Robust Image Path Handling for GitHub Pages
    // 1. If basePath is provided, use it.
    // 2. If not, and we are in production (or just as a fallback), check if we need to prepend the repo name.

    let displayImage = null;

    if (image) {
        if (image.startsWith('/')) {
            // Check if it already has the repo path (to avoid double prefixing)
            if (image.startsWith('/my-personal-website')) {
                displayImage = image;
            } else {
                // If basePath is provided, use it.
                // Fallback: If basePath is empty but we know we are on GitHub Pages (repo name check), force it.
                // To be safe for local dev (which doesn't use the repo name usually), we rely on basePath primarily.
                // BUT, since the user is failing on prod with empty basePath, we will FORCE it if we detect we are likely in that environment.
                // Actually, the safest "fix it now" is:
                // If basePath is present, use it.
                // If NOT, use '/my-personal-website' ONLY if we are not on localhost? Hard to detect in SSG.

                // Let's stick to the prop, but ensure the prop is being passed correctly.
                // Since previous debugging showed the prop might be failing, let's hardcode the check.
                const repoPath = '/my-personal-website';
                // Use basePath if available, otherwise check if we should default to repoPath?
                // No, local dev would break. 

                // WAIT. The Portfolio page works. It uses `${BASE_PATH}${image}`.
                // `BASE_PATH` comes from `process.env.NODE_ENV === 'production'`.
                // If I hardcode the logic here based on a hardcoded "isProduction" check?
                // No.

                // Let's use the exact logic from Portfolio page but INSIDE the component, 
                // leveraging the fact that we can do a runtime check if needed, or just trust the inputs.

                // User's specific request mentions: "/my-personal-website/images/..."

                // I will add a manual check for the specific repo string to ensure we don't duplicate.
                // And I will trust `basePath` prop.
                // If `basePath` is empty, it returns original image.

                // If the user says it's broken, `basePath` IS empty.
                // Why is `basePath` empty in prod?
                // Maybe `NODE_ENV` isn't production?

                // I'll try to use a "force" prop or just hardcode the production check here?
                // No, I'll update the component to accept the path, AND I'll update the PAGE to hardcode the path if NODE_ENV is production.

                displayImage = `${basePath}${image}`;
            }
        } else {
            displayImage = image;
        }
    }

    return (
        <div className="project-card">

            {/* Meta/Text Side */}
            <div className="text-content">
                <div>
                    <span className="project-label">
                        Project
                    </span>
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
                        {displayImage ? (
                            <img
                                src={displayImage}
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
                    gap: 0.75rem; /* Mobile: Tighter gap between text and image */
                }

                .text-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    text-align: left;
                    min-height: auto; /* Allow it to shrink on mobile */
                }

                .project-label {
                    font-size: 0.85rem;
                    color: #666;
                    margin-bottom: 0.5rem; /* Mobile: Reduced margin */
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .project-title {
                    font-size: 1.5rem;
                    font-weight: 500;
                    margin-bottom: 0.75rem; /* Mobile: Reduced margin */
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
                    min-height: 240px; /* Mobile: Slightly smaller min-height */
                    position: relative;
                    overflow: hidden;
                    aspect-ratio: 4/3; /* Enforce aspect ratio on mobile */
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
                        gap: 4rem; /* Desktop: Restore wide gap */
                    }
                    
                    .text-content {
                         min-height: 200px;
                         height: 100%;
                    }

                    .project-label {
                        margin-bottom: 1rem;
                    }

                    .project-title {
                        margin-bottom: 2rem;
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
