import { getAllProjects } from '@/lib/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '作品集 | 项目展示',
};

export default function Portfolio() {
    const projects = getAllProjects(['title', 'description', 'slug', 'link', 'image']);

    return (
        <div className="container" style={{ paddingBottom: 'var(--spacing-24)' }}>
            <header style={{ paddingTop: 'var(--spacing-24)', paddingBottom: 'var(--spacing-16)' }}>
                <h1 style={{ fontWeight: 500 }}>精选作品</h1>
                <p style={{ color: 'var(--colors-subtle)', fontSize: '1.2rem', maxWidth: '600px' }}>
                    一些我引以为傲的个人项目和实验性作品。
                </p>
            </header>

            <div className="grid">
                {projects.map((project) => (
                    <div key={project.slug} style={{ background: 'var(--colors-accent)', padding: 'var(--spacing-8)', borderRadius: 'var(--radius)' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-4)' }}>{project.title}</h2>
                        <p style={{ marginBottom: 'var(--spacing-6)', color: 'var(--colors-subtle)', lineHeight: 1.6 }}>{project.description}</p>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                访问项目
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
