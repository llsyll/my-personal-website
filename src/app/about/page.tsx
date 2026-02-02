export const metadata = {
    title: '关于我 | 个人介绍',
};

export default function About() {
    return (
        <div className="container" style={{ paddingBottom: 'var(--spacing-24)' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto', paddingTop: 'var(--spacing-24)' }}>
                <header style={{ marginBottom: 'var(--spacing-12)' }}>
                    <h1 style={{ fontWeight: 500, fontSize: '2.5rem' }}>关于我</h1>
                </header>

                <article className="markdown-body">
                    <p className="lead" style={{ fontSize: '1.25rem', color: 'var(--colors-foreground)' }}>
                        👋 你好！我是[你的名字]。一名专注于构建卓越用户体验的全栈开发者。
                    </p>
                    <p>
                        我深信简洁即是美。在代码世界里，我追求优雅的架构和极致的性能；在设计领域，我推崇极简主义，力求通过减法还原事物的本质。
                    </p>
                    <p>
                        除此之外，我也是一名开源爱好者和终身学习者。欢迎通过邮件或社交媒体与我交流。
                    </p>

                    <hr style={{ margin: '3rem 0', border: 0, borderTop: '1px solid var(--colors-border)' }} />

                    <h2>联系方式</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem' }}>
                            <span style={{ color: 'var(--colors-subtle)', display: 'inline-block', width: '80px' }}>Email</span>
                            <a href="mailto:example@example.com" style={{ textDecoration: 'underline' }}>example@example.com</a>
                        </li>
                        <li>
                            <span style={{ color: 'var(--colors-subtle)', display: 'inline-block', width: '80px' }}>GitHub</span>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>@yourusername</a>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
    );
}
