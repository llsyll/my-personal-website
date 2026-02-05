import { getAllProjects } from '@/lib/api';
import { Metadata } from 'next';
import Link from 'next/link';
import { BASE_PATH } from '@/lib/constants';
import styles from './portfolio.module.css';
import PortfolioItem from '@/components/PortfolioItem';

export const metadata: Metadata = {
    title: '作品集 | Selected Works',
};

export default function Portfolio() {
    const projects = getAllProjects(['title', 'description', 'slug', 'link', 'coverImage']);

    return (
        <div className="container" style={{ paddingTop: '4rem' }}>
            <header className="page-header-container">
                <h1 className="page-title">Selected Works</h1>
                <p className="text-body-lg">
                    Design & Development Portfolio
                </p>
            </header>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <PortfolioItem
                        key={project.slug}
                        title={project.title}
                        description={project.description} // Passing description now
                        slug={project.slug}
                        image={project.coverImage}
                        basePath={BASE_PATH}
                    />
                ))}
            </div>
        </div>
    );
}
