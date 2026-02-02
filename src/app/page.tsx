import { getAllPosts, getAllProjects } from '@/lib/api';
import DateFormatter from '@/components/DateFormatter';
import Link from 'next/link';

export default function Home() {
  const recentPosts = getAllPosts(['title', 'date', 'slug', 'description']).slice(0, 4);
  const recentProjects = getAllProjects(['title', 'description', 'slug', 'link']).slice(0, 2);

  return (
    <div className="container">
      {/* Hero Section */}
      <section style={{
        paddingTop: 'var(--spacing-24)',
        paddingBottom: 'var(--spacing-24)'
      }}>
        <h1 style={{ maxWidth: '700px', fontWeight: 500 }}>
          我是徐可。
          <br /><span style={{ color: 'var(--colors-subtle)' }}>我构建数字产品，并探索设计的边界。</span>
        </h1>
        <div className="flex" style={{ marginTop: 'var(--spacing-8)' }}>
          <Link href="/about" style={{ borderBottom: '1px solid var(--colors-foreground)', paddingBottom: '2px' }}>
            更多关于我 →
          </Link>
        </div>
      </section>

      {/* Recent Posts - Minimal List */}
      <section style={{ paddingBottom: 'var(--spacing-24)' }}>
        <div className="flex justify-between items-end" style={{ marginBottom: 'var(--spacing-8)', borderBottom: '1px solid var(--colors-border)', paddingBottom: 'var(--spacing-4)' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>最新文章</h2>
          <Link href="/blog" style={{ fontSize: '0.9rem', color: 'var(--colors-subtle)' }}>查看全部</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-item-hover">
              <article style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 500 }}>{post.title}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--colors-subtle)', fontSize: '0.9rem' }}>
                  <span>{post.description}</span>
                  <DateFormatter dateString={post.date} />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Projects - Simple Grid */}
      <section style={{ paddingBottom: 'var(--spacing-24)' }}>
        <div className="flex justify-between items-end" style={{ marginBottom: 'var(--spacing-8)', borderBottom: '1px solid var(--colors-border)', paddingBottom: 'var(--spacing-4)' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>精选作品</h2>
          <Link href="/portfolio" style={{ fontSize: '0.9rem', color: 'var(--colors-subtle)' }}>查看全部</Link>
        </div>

        <div className="grid">
          {recentProjects.map((project) => (
            <div key={project.slug} style={{ background: 'var(--colors-accent)', padding: 'var(--spacing-8)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{project.title}</h3>
              <p style={{ marginTop: 'var(--spacing-4)', color: 'var(--colors-subtle)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                {project.description}
              </p>
              {project.link && (
                <div style={{ marginTop: 'var(--spacing-4)' }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', textDecoration: 'underline' }}>访问项目</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
