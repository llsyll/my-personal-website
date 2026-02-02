import { getAllProjects } from '@/lib/api';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '作品集 | 设计与开发',
};

export default function Portfolio() {
    const projects = getAllProjects(['title', 'description', 'slug', 'link', 'coverImage']);

    return (
        <div className="container" style={{ paddingBottom: 'var(--spacing-24)', maxWidth: '1200px' }}>
            <header style={{ paddingTop: 'var(--spacing-24)', paddingBottom: 'var(--spacing-24)', textAlign: 'center' }}>
                <h1 style={{ fontWeight: 400, fontSize: '3rem', letterSpacing: '-0.02em', marginBottom: 'var(--spacing-4)' }}>Selected Works</h1>
                <p style={{ color: 'var(--colors-subtle)', fontSize: '1.1rem' }}>
                    精选设计与开发项目
                </p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                {projects.map((project, index) => (
                    <div key={project.slug} className="portfolio-item">
                        {/* Image Container - Full Width or Large */}
                        <div style={{
                            backgroundColor: '#f5f5f5',
                            aspectRatio: '16/9',
                            width: '100%',
                            marginBottom: 'var(--spacing-8)',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            {project.coverImage ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={project.coverImage}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="hover-scale"
                                />
                            ) : (
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: `linear-gradient(45deg, #eee 25%, #f9f9f9 25%, #f9f9f9 50%, #eee 50%, #eee 75%, #f9f9f9 75%, #f9f9f9 100%)`,
                                    backgroundSize: '40px 40px',
                                    color: '#ccc',
                                    fontSize: '2rem',
                                    fontWeight: 600
                                }}>
                                    {project.title.toUpperCase()}
                                </div>
                            )}
                        </div>

                        {/* Content info - Minimal */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--spacing-4)' }}>
                            <div style={{ maxWidth: '600px' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: 500, marginBottom: 'var(--spacing-2)', marginTop: 0 }}>{project.title}</h2>
                                <p style={{ color: 'var(--colors-subtle)', fontSize: '1.1rem', lineHeight: 1.6 }}>{project.description}</p>
                            </div>

                            <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderRadius: '50px', padding: '0.8rem 2rem' }}>
                                        访问网站 ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
