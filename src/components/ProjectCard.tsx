import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200 flex flex-col h-full">
      {project.imageUrl && (
        <div className="relative w-full h-48 md:h-56 bg-gray-200 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-8 md:p-10 flex-1 flex flex-col">
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 hover:text-blue-600 transition-colors">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>
        
        <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
          {project.description}
        </p>

        <div className="mb-6">
          <p className="text-gray-600 font-semibold mb-2">Tools:</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors duration-300 mt-auto"
        >
          VIEW PROJECT →
        </a>
      </div>
    </div>
  );
}
