import PrintButton from '@/components/PrintButton';

export const metadata = {
    title: '简历 | 个人经历',
};

export default function Resume() {
    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-24)', paddingBottom: 'var(--spacing-24)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <header style={{ borderBottom: '1px solid var(--colors-foreground)', paddingBottom: 'var(--spacing-8)', marginBottom: 'var(--spacing-12)' }}>
                    <h1 style={{ marginBottom: 'var(--spacing-4)', fontSize: '3rem', fontWeight: 500 }}>[你的名字]</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--spacing-4)', color: 'var(--colors-subtle)' }}>
                        <p style={{ fontSize: '1.25rem' }}>全栈开发工程师 / UI 设计师</p>
                        <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
                            <span>example@email.com</span>
                            <span>yourwebsite.com</span>
                        </div>
                    </div>
                </header>

                <div className="grid" style={{ gap: 'var(--spacing-12)', gridTemplateColumns: '1fr' }}>

                    <section>
                        <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--colors-subtle)', marginBottom: 'var(--spacing-6)' }}>简介</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                            热爱技术，追求极致用户体验的开发者。拥有丰富的 Web 开发经验，擅长使用 React, Node.js 和 Next.js 构建高性能应用。
                        </p>
                    </section>

                    <section>
                        <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--colors-subtle)', marginBottom: 'var(--spacing-6)' }}>工作经历</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-2)' }}>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 500 }}>高级前端工程师</h4>
                                    <span style={{ color: 'var(--colors-subtle)' }}>2022 - 至今</span>
                                </div>
                                <div style={{ marginBottom: 'var(--spacing-2)' }}>某某科技有限公司</div>
                                <ul style={{ paddingLeft: '1.2rem', color: 'var(--colors-subtle)' }}>
                                    <li>负责公司核心产品的架构设计与开发，提升页面加载速度 40%。</li>
                                    <li>主导设计系统（Design System）的搭建，统一全线产品视觉风格。</li>
                                </ul>
                            </div>

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-2)' }}>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 500 }}>前端开发工程师</h4>
                                    <span style={{ color: 'var(--colors-subtle)' }}>2020 - 2022</span>
                                </div>
                                <div style={{ marginBottom: 'var(--spacing-2)' }}>创新网络工作室</div>
                                <ul style={{ paddingLeft: '1.2rem', color: 'var(--colors-subtle)' }}>
                                    <li>开发多个企业级管理后台，实现复杂的交互逻辑。</li>
                                    <li>参与小程序开发，累计用户超过 10 万。</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--colors-subtle)', marginBottom: 'var(--spacing-6)' }}>技能</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-3)' }}>
                            {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Figma', 'Git'].map(skill => (
                                <span key={skill} style={{ border: '1px solid var(--colors-border)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius)', fontSize: '0.9rem' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                </div>
            </div>

            <PrintButton />
        </div>
    );
}
