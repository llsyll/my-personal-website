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
        <div className="container" style={{ paddingBottom: 'var(--spacing-24)' }}>
            <header style={{ paddingTop: 'var(--spacing-24)', paddingBottom: 'var(--spacing-16)' }}>
                <h1 style={{ fontWeight: 500 }}>全部文章</h1>
            </header>

            <div className="flex-col" style={{ gap: 'var(--spacing-12)' }}>
                {allPosts.map((post) => (
                    <article key={post.slug} style={{ borderBottom: '1px solid var(--colors-border)', paddingBottom: 'var(--spacing-8)' }}>
                        <Link href={`/blog/${post.slug}`} className="group">
                            <div style={{ marginBottom: 'var(--spacing-2)', color: 'var(--colors-subtle)', fontSize: '0.9rem' }}>
                                <DateFormatter dateString={post.date} />
                            </div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-2)', fontWeight: 500 }}>
                                {post.title}
                            </h2>
                            <p style={{ color: 'var(--colors-subtle)', maxWidth: '600px' }}>{post.description}</p>
                            <div style={{ marginTop: 'var(--spacing-4)', fontSize: '0.9rem', textDecoration: 'underline' }}>阅读全文</div>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
