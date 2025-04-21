import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './Projectcard';
import { Project } from '../../types/project';

interface ProjectGridProps {
  projects: Project[];
  activeFilter: string;
}

const ProjectGrid = ({ projects, activeFilter }: ProjectGridProps) => {
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') {
      return true;
    }
    return project.category === activeFilter;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;