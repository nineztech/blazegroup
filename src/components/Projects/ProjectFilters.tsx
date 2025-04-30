// src/components/Projects/ProjectFilters.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  'all',
  'commercial',
  'residential',
  'ground-mounted',
  'solar-pump'
];

const ProjectFilters = ({ activeFilter, onFilterChange }: ProjectFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-5 mt-7">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 rounded-full capitalize transition-all ${
            activeFilter === filter
              ? 'bg-yellow-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter.replace('-', ' ')}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilters;