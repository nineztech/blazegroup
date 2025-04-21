import ProjectCard from '../Projects/ProjectCard';
import { projects } from '../../data/projects';

const SolarPump = () => {
  const solarPumpProjects = projects.filter(
    (project) => project.category === 'solar-pump'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Existing solar pump content */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solar Pump Projects</h2>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solarPumpProjects.length > 0 ? (
            solarPumpProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No solar pump projects available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolarPump; 