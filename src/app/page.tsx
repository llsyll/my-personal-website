import { getAllProjects } from '@/lib/api';
// Remove DateFormatter, keep Link if needed or used inside components
// import DateFormatter from '@/components/DateFormatter'; 
// import Link from 'next/link'; // ProjectCard handles links
import ProjectCard from '@/components/ProjectCard';
import { BASE_PATH } from '@/lib/constants';

export default function Home() {
  const allProjects = getAllProjects(['title', 'description', 'slug', 'link', 'coverImage']);

  return (
    <div className="container" style={{ maxWidth: '1200px', paddingTop: '4rem' }}>
      {/* Main Content - Work First */}
      <section className="page-header-container">
        <h1 className="page-title">
          Selected Works
        </h1>

        {/* Project Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginTop: '4rem' }}>
          {allProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              slug={project.slug}
              link={project.link}
              image={project.coverImage}
              index={index}
              basePath={BASE_PATH}
            />
          ))}
        </div>
      </section>

      <div style={{ paddingBottom: 'var(--spacing-24)' }}></div>
    </div>
  );
}
