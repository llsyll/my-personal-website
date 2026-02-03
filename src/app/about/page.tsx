import styles from './about.module.css';

export const metadata = {
    title: '关于我 | 个人介绍',
};

export default function About() {
    return (
        <div className="container">
            <div className={styles.container}>
                <header className={styles.header}>
                    <img src="/images/profile.png" alt="Profile" className={styles.avatar} />
                    <h1 className={styles.title}>About Me</h1>
                </header>

                <section>
                    <p className={styles.lead}>
                        Creative Director / Art Director / Interactive Designer
                    </p>
                    <p className={styles.bio}>
                        拥有超过15年的数字设计经验，专注于构建卓越的用户体验。在代码世界里，我追求优雅的架构和极致的性能；在设计领域，我推崇极简主义，力求通过减法还原事物的本质。
                    </p>
                </section>

                <hr className={styles.divider} />

                <section>
                    <h2 className={styles.sectionTitle}>Experience</h2>

                    <div className={styles.experienceItem}>
                        <div className={styles.meta}>
                            <span className={styles.period}>2016 — Present</span>
                            <span className={styles.role}>Design Director</span>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.company}>正邦创意 - 邦互动</h3>
                            <p className={styles.description}>负责多个大型品牌项目的数字设计与创意指导。</p>
                            <ul className={styles.projectList}>
                                <li className={styles.projectTag}>京东智能</li>
                                <li className={styles.projectTag}>京东服饰家居</li>
                                <li className={styles.projectTag}>京东超市</li>
                                <li className={styles.projectTag}>京东物流</li>
                                <li className={styles.projectTag}>华为</li>
                                <li className={styles.projectTag}>国美</li>
                                <li className={styles.projectTag}>工商银行</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.experienceItem}>
                        <div className={styles.meta}>
                            <span className={styles.period}>2012 — 2013</span>
                            <span className={styles.role}>Art Director</span>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.company}>蓝门互动</h3>
                            <p className={styles.description}>服务主要客户的视觉设计与指导。</p>
                            <ul className={styles.projectList}>
                                <li className={styles.projectTag}>伊利奶粉</li>
                                <li className={styles.projectTag}>伊利优酸乳</li>
                                <li className={styles.projectTag}>方正</li>
                                <li className={styles.projectTag}>日产尼桑</li>
                                <li className={styles.projectTag}>长城汽车</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.experienceItem}>
                        <div className={styles.meta}>
                            <span className={styles.period}>2009 — 2012</span>
                            <span className={styles.role}>Interactive Designer</span>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.company}>Plusfactory</h3>
                            <p className={styles.description}>参与众多国际品牌的互动设计项目。</p>
                            <ul className={styles.projectList}>
                                <li className={styles.projectTag}>NBA</li>
                                <li className={styles.projectTag}>Adidas</li>
                                <li className={styles.projectTag}>Converse</li>
                                <li className={styles.projectTag}>Mazda</li>
                                <li className={styles.projectTag}>Walmart</li>
                                <li className={styles.projectTag}>Dove</li>
                                <li className={styles.projectTag}>Visa</li>
                                <li className={styles.projectTag}>Starbucks</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.experienceItem}>
                        <div className={styles.meta}>
                            <span className={styles.period}>2006 — 2008</span>
                            <span className={styles.role}>Interactive Designer</span>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.company}>Xplus</h3>
                            <p className={styles.description}>负责电子杂志的设计与动画制作工作。</p>
                        </div>
                    </div>
                </section>

                <hr className={styles.divider} />

                <section>
                    <h2 className={styles.sectionTitle}>Contact</h2>
                    <ul className={styles.contactList}>
                        <li className={styles.contactItem}>
                            <span className={styles.contactLabel}>Email</span>
                            <a href="mailto:llsyll@gmail.com" className={styles.contactLink}>llsyll@gmail.com</a>
                        </li>
                        <li className={styles.contactItem}>
                            <span className={styles.contactLabel}>Behance</span>
                            <a href="https://www.behance.net/llsyll" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>behance.net/llsyll</a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
