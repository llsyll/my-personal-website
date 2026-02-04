'use client';

// import styles from './about.module.css';
// import { BASE_PATH } from '@/lib/constants';

// Metadata removed to support 'use client'
// import styles from './about.module.css';
// import { BASE_PATH } from '@/lib/constants';

export default function About() {
    return (
        <div className="container" style={{ maxWidth: '1200px', paddingTop: '4rem', paddingBottom: '6rem' }}>
            <header className="page-header-container">
                <h1 className="page-title">
                    I'm Pixel Wave,<br />
                    a digital designer based in Digital World.
                </h1>
            </header>

            <div className="split-layout">
                {/* Left Column - Bio */}
                <div>
                    <p className="text-body-lg" style={{ marginBottom: '2rem', maxWidth: '480px' }}>
                        拥有超过15年的数字设计经验，专注于构建卓越的用户体验。在代码世界里，我追求优雅的架构和极致的性能；在设计领域，我推崇极简主义，力求通过减法还原事物的本质。
                    </p>
                    <div style={{ marginTop: '4rem' }}>
                        <h2 className="section-label">Contact</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <span className="text-subtle">Weixin: lllxiancongll</span>
                            <a href="mailto:llsyll@gmail.com" className="text-subtle" style={{ textDecoration: 'none' }}>Email: llsyll@gmail.com</a>
                            <a href="https://www.behance.net/llsyll" target="_blank" className="text-subtle" style={{ textDecoration: 'none' }}>Behance: behance.net/llsyll</a>
                        </div>
                    </div>
                </div>

                {/* Right Column - Experience */}
                <div>
                    <h2 className="section-label">Experience</h2>

                    <div className="exp-item">
                        <div className="exp-role">Design Director — 正邦创意</div>
                        <div className="exp-meta">2016 — Present</div>
                        <p className="text-body-md">
                            京东智能, 京东服饰家居, 华为, 工商银行
                        </p>
                    </div>

                    <div className="exp-item">
                        <div className="exp-role">Art Director — 蓝门互动</div>
                        <div className="exp-meta">2012 — 2013</div>
                        <p className="text-body-md">
                            伊利, 方正, 日产尼桑
                        </p>
                    </div>

                    <div className="exp-item">
                        <div className="exp-role">Interactive Designer — Plusfactory</div>
                        <div className="exp-meta">2009 — 2012</div>
                        <p className="text-body-md">
                            Adidas, Converse, Mazda, Starbucks
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .exp-item {
                    margin-bottom: 2rem;
                }
                .exp-role {
                    font-size: 1rem;
                    color: #131313;
                    margin-bottom: 0.25rem;
                }
                .exp-meta {
                    font-size: 0.9rem;
                    color: #A1A1A1;
                    margin-bottom: 0.5rem;
                }
            `}</style>
        </div>
    );
}
