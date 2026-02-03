import { getAllProjects } from '@/lib/api';
import { Metadata } from 'next';
import Link from 'next/link';
import { BASE_PATH } from '@/lib/constants';
import styles from './portfolio.module.css';

export const metadata: Metadata = {
    title: '作品集 | Selected Works',
};

export default function Portfolio() {
    const projects = getAllProjects(['title', 'description', 'slug', 'link', 'coverImage']);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.pageTitle}>Selected Works</h1>
                <p className={styles.subtitle}>
                    Design & Development Portfolio
                </p>
            </header>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <Link key={project.slug} href={`/portfolio/${project.slug}`} className={styles.item}>
                        {project.coverImage ? (
                            <img
                                src={project.coverImage.startsWith('/') ? `${BASE_PATH}${project.coverImage}` : project.coverImage}
                                alt={project.title}
                                className={styles.image}
                            />
                        ) : (
                            <div className={styles.placeholder}>
                                {project.title.substring(0, 2).toUpperCase()}
                            </div>
                        )}

                        <div className={styles.overlay}>
                            <h2 className={styles.title}>{project.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
