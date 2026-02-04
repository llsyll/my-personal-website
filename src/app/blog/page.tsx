import { getAllPosts } from '@/lib/api';
import DateFormatter from '@/components/DateFormatter';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '文章 | 文章列表',
};

export default function BlogIndex() {
    const allPosts = getAllPosts(['title', 'date', 'slug', 'description', 'tags']);

    return (
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: 'var(--spacing-24)' }}>
            <header className="page-header-container">
                <h1 className="page-title">Blog</h1>
            </header>

            <div className="flex-col" style={{ gap: 'var(--spacing-12)' }}>
                {allPosts.map((post) => (
                    <article key={post.slug} style={{ borderBottom: '1px solid var(--colors-border)', paddingBottom: 'var(--spacing-8)' }}>
                        <Link href={`/blog/${post.slug}`} className="group">
                            <div style={{ marginBottom: 'var(--spacing-2)', color: 'var(--colors-subtle)', fontSize: '0.9rem' }}>
                                <DateFormatter dateString={post.date} />
                            </div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-2)', fontWeight: 400 }}>
                                {post.title}
                            </h2>
                            <p className="text-body-lg" style={{ color: 'var(--colors-subtle)', maxWidth: '600px' }}>{post.description}</p>
                            {/* Removed "Read Full" link for cleaner look, title/card is clickable */}
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
