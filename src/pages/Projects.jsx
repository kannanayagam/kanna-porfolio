import { useState } from 'react';
import { projects } from '../data/projects';

const filters = ['All', 'AI', 'Automation', 'Web', 'Semiconductor'];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));

    return (
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    <span className="text-gray-500">&lt;</span>
                    Projects
                    <span className="text-gray-500">/&gt;</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    <span className="text-cyber-cyan">//</span> Work that makes an impact
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`px-4 py-1.5 text-sm font-mono rounded transition-all duration-300 border ${activeFilter === f
                            ? 'bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan'
                            : 'border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-glass-dark backdrop-blur-md rounded-lg border border-glass-border p-6 flex flex-col hover:border-cyber-cyan/30 hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Icon */}
                        <div className="text-4xl mb-4">{project.emoji}</div>

                        {/* Title */}
                        <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-4">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-2 py-0.5 text-xs bg-white/5 text-gray-500 border border-gray-700 rounded font-mono">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        {(project.github || project.link) && (
                            <div className="flex gap-3 mt-5 pt-4 border-t border-white/5">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-cyber-cyan hover:underline flex items-center gap-1"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                )}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-cyber-cyan hover:underline flex items-center gap-1"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
