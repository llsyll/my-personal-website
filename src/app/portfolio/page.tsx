import { getAllProjects } from '@/lib/api';
import { Metadata } from 'next';
import PortfolioItem from '@/components/PortfolioItem';
import styles from './portfolio.module.css';

export const metadata: Metadata = {
    title: '作品集 | Selected Works',
};



export default function Portfolio() {
    const projects = getAllProjects(['title', 'description', 'slug', 'link', 'coverImage']);

    return (
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
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
                        description={project.description}
                        slug={project.slug}
                        image={project.coverImage}
                    />
                ))}
            </div>
        </div>
    );
}
