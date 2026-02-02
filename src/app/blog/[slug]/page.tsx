import { getPostBySlug, getAllPosts, markdownToHtml } from '@/lib/api';
import DateFormatter from '@/components/DateFormatter';
import Comments from '@/components/Comments';
import { Metadata } from 'next';
import Link from 'next/link';

type Params = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug, ['title', 'description']);
    return {
        title: `${post.title} | 文章`,
        description: post.description,
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts(['slug']);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Post({ params }: Params) {
    const { slug } = await params;
    const post = getPostBySlug(slug, ['title', 'date', 'slug', 'content']);
    const content = await markdownToHtml(post.content || '');

    return (
        <div className="container" style={{ paddingBottom: 'var(--spacing-24)' }}>
            <div style={{ paddingTop: 'var(--spacing-12)', marginBottom: 'var(--spacing-8)' }}>
                <Link href="/blog" style={{ color: 'var(--colors-subtle)', fontSize: '0.9rem' }}>← 返回列表</Link>
            </div>

            <article>
                <header style={{ marginBottom: 'var(--spacing-16)' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 500, marginBottom: 'var(--spacing-4)' }}>{post.title}</h1>
                    <div style={{ color: 'var(--colors-subtle)', fontSize: '1rem' }}>
                        <DateFormatter dateString={post.date} />
                    </div>
                </header>

                <div
                    className="markdown-body"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </article>

            <Comments />
        </div>
    );
}
