import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-shadow duration-300 border border-gray-200 dark:border-gray-800 flex flex-col h-full group"
    >
      {project.imageUrl && (
        <div className="relative w-full h-48 md:h-56 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
          {project.description}
        </p>

        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400 font-semibold mb-3 text-sm uppercase tracking-wide">Tools & Tech</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, toolIndex) => (
              <motion.span
                key={toolIndex}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-300 dark:border-blue-700/50 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, x: 4 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg mt-auto w-fit"
        >
          View Project
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}
