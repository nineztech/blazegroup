import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/project';
import { MapPin, Zap } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm capitalize">
          {project.category.replace('-', ' ')}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.name}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{project.location}</span>
        </div>
        
        <div className="flex items-center text-yellow-500 mb-4">
          <Zap className="w-5 h-5 mr-2" />
          <span className="font-semibold">{project.capacity}</span>
        </div>
        
        {project.description && (
          <p className="text-gray-600 text-sm">{project.description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;