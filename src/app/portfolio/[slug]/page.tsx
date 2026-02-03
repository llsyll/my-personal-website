import { getProjectBySlug, getAllProjects, markdownToHtml } from '@/lib/api';
import Link from 'next/link';
import { Metadata } from 'next';
import { BASE_PATH } from '@/lib/constants';

type Params = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug, ['title', 'description']);
    return {
        title: `${project.title} | 作品`,
        description: project.description,
    };
}

export async function generateStaticParams() {
    const projects = getAllProjects(['slug']);
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function Project({ params }: Params) {
    const { slug } = await params;
    const project = getProjectBySlug(slug, ['title', 'description', 'content', 'link', 'coverImage', 'images']);
    const content = await markdownToHtml(project.content || '');

    return (
        <div className="container" style={{ paddingBottom: 'var(--spacing-24)' }}>
            <div style={{ paddingTop: 'var(--spacing-12)', marginBottom: 'var(--spacing-8)' }}>
                <Link href="/portfolio" style={{ color: 'var(--colors-subtle)', fontSize: '0.9rem' }}>← 返回作品列表</Link>
            </div>

            <article>
                <header style={{ marginBottom: 'var(--spacing-12)', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 400, marginBottom: 'var(--spacing-4)' }}>{project.title}</h1>
                    <p style={{ color: 'var(--colors-subtle)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>{project.description}</p>

                    {project.link && (
                        <div style={{ marginTop: 'var(--spacing-8)' }}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderRadius: '50px' }}>
                                访问项目链接 ↗
                            </a>
                        </div>
                    )}
                </header>


                {/* Cover Image - if not in gallery */}
                {project.coverImage && (
                    <div style={{ marginBottom: 'var(--spacing-16)' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={project.coverImage.startsWith('/') ? `${BASE_PATH}${project.coverImage}` : project.coverImage}
                            alt={project.title}
                            style={{ width: '100%', borderRadius: 'var(--radius)' }}
                        />
                    </div>
                )}


                {/* Markdown Content */}
                <div
                    className="markdown-body"
                    style={{ maxWidth: '800px', margin: '0 auto', marginBottom: 'var(--spacing-16)' }}
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                {/* Gallery Grid */}
                {project.images && project.images.length > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-8)' }}>
                        {project.images.map((img: string, index: number) => (
                            <div key={index} style={{ backgroundColor: '#f5f5f5' }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={img.startsWith('/') ? `${BASE_PATH}${img}` : img}
                                    alt={`${project.title} gallery ${index + 1}`}
                                    style={{ width: '100%', display: 'block' }}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </article>
        </div>
    );
}
