'use client';


const SECTION_SPACING = '0rem';

export default function About() {
    return (
        <div className="container" style={{ maxWidth: '1200px', paddingTop: '4rem', paddingBottom: '6rem' }}>
            <header className="page-header-container">
                <h1 className="page-title">
                    I'm Xu Ke,<br />
                    Creative Director based in Beijing.
                </h1>
                <p className="text-body-lg" style={{ marginTop: '2rem', fontStyle: 'italic', opacity: 0.8 }}>
                    "Do have faith in what you're doing."
                </p>
            </header>

            <div className="split-layout">
                {/* Left Column - Bio & Contact */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: SECTION_SPACING }}>
                    <p className="text-body-lg" style={{ maxWidth: '480px' }}>
                        拥有丰富的设计经验，曾服务于京东、华为、伊利、Adidas、NBA 等知名品牌。从互动设计到创意总监，始终致力于打造卓越的用户体验和视觉表现。
                    </p>

                    <div>
                        <h2 className="section-label">Skills</h2>
                        <p className="text-body-md" style={{ maxWidth: '480px' }}>
                            Adobe Photoshop, Illustrator, After Effects, MagicaVoxel, Figma
                        </p>
                    </div>

                    <div>
                        <h2 className="section-label">Education</h2>
                        <div className="exp-item">
                            <div className="exp-role">Advertising Art Design</div>
                            <div className="exp-meta">Beijing Institute Of Fashion Technology</div>
                            <div className="exp-meta">2004 — 2006</div>
                            <p className="text-body-md">
                                广告学，传播学，视觉表达
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="section-label">Contact</h2>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className="text-subtle">Weixin: llxiancongll</span>
                            <a href="mailto:llsyll@gmail.com" className="text-subtle" style={{ textDecoration: 'none' }}>Email: llsyll@gmail.com</a>
                            <a href="https://www.behance.net/llsyll" target="_blank" className="text-subtle" style={{ textDecoration: 'none' }}>Behance: behance.net/llsyll</a>
                        </div>
                    </div>
                </div>

                {/* Right Column - Experience */}
                <div>
                    <h2 className="section-label" style={{ marginBottom: '2rem' }}>Experience</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: SECTION_SPACING }}>
                        <div className="exp-item">
                            <div className="exp-role">邦互动 设计总监 — 正邦创意</div>
                            <div className="exp-meta">2016 — Present</div>
                            <p className="text-body-md">
                                京东智能, 京东服饰家居, 京东超市, 京东物流, 京东新通路, 京东x事业部, 京东企业购, 苏宁2018概念设计, 华为, 国美, 工商银行
                            </p>
                        </div>

                        <div className="exp-item">
                            <div className="exp-role">Art Director — 蓝门互动</div>
                            <div className="exp-meta">2012 — 2013</div>
                            <p className="text-body-md">
                                伊利奶粉, 伊利优酸乳, 方正, 日产尼桑, 长城汽车
                            </p>
                        </div>

                        <div className="exp-item">
                            <div className="exp-role">Interactive Designer — Plusfactory</div>
                            <div className="exp-meta">2009 — 2012</div>
                            <p className="text-body-md">
                                NBA, Adidas, Converse, Enbrel, Mazda, Walmart, Dove, TOEFL, Visa, Espn metlife, Hennessy, Starbucks, Robedi Kappa
                            </p>
                        </div>

                        <div className="exp-item">
                            <div className="exp-role">Interactive Designer — Xplus</div>
                            <div className="exp-meta">2006 — 2008</div>
                            <p className="text-body-md">
                                电子杂志的设计，动画制作工作。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
