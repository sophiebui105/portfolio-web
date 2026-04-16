import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-red-600 font-semibold text-lg mb-2">Portfolio Showcase</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            WELCOME TO MY PROFESSIONAL PORTFOLIO
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            Explore my journey in data analysis, and project management. Discover the projects that showcase my technical skills and professional growth. Each project below represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
