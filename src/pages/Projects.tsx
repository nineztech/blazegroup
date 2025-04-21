import React, { useState } from 'react';
import ProjectHero from '../components/Projects/ProjectHero';
import ProjectStats from '../components/Projects/ProjectStats'; // Ensure this path is correct
import ProjectFilters from '../components/Projects/ProjectFilters';
import ProjectGrid from '../components/Projects/ProjectGrid'; // Ensure this path is correct
import { projects } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProjectHero />
      <ProjectStats />
      <ProjectFilters
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <ProjectGrid projects={projects} activeFilter={activeFilter} />
    </div>
  );
};

export default Projects;