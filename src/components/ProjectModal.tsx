import React, { useEffect, useRef } from "react";
import { ExternalLinkIcon, GithubIcon, XIcon } from "lucide-react";

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    images?: string[] | null;
    technologies: string[];
    demoUrl: string;
    githubUrl: string;
    featured: boolean;
}

interface ProjectModalProps {
    project: Project | null;
    darkMode: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, darkMode, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (project && modalRef.current) {
            // Small delay to ensure modal is rendered
            setTimeout(() => {
                modalRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            }, 100);
        }
    }, [project]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 p-4"
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className={`relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 ${darkMode ? 'bg-[#1a1a1d]' : 'bg-white'
                    }`}
                style={{
                    position: "relative",
                    transform: "translate(0, 0)",
                    margin: "auto"
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className={`absolute top-6 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-[#2c2c30] text-[#f5f5f7] hover:bg-[#3c3c40] shadow-md shadow-black/20' : 'bg-[#f5f5f7] text-[#6e6e73] hover:bg-gray-200 shadow-md shadow-black/5'
                        }`}
                >
                    <XIcon className="h-5 w-5" />
                </button>

                {/* Modal Content */}
                <div className="overflow-y-auto max-h-[90vh]">
                    {/* Project Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className={darkMode ? 'text-[#0071e3]' : 'text-[#0071e3]'}>
                                {project.title}
                            </span>
                        </h2>

                        {/* Description */}
                        <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-[#b1b1b3]' : 'text-[#6e6e73]'}`}>
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-[#2c2c30] text-[#f5f5f7] shadow-md shadow-black/20' : 'bg-[#f5f5f7] text-[#6e6e73] shadow-md shadow-black/5'
                                            }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg ${'bg-[#0071e3] text-white hover:bg-[#0077ED] hover:shadow-xl'
                                    }`}
                            >
                                Live Demo <ExternalLinkIcon className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg ${darkMode ? 'bg-[#2c2c30] text-[#f5f5f7] hover:bg-[#3c3c40] shadow-black/20 hover:shadow-black/30' : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-gray-100 shadow-black/5 hover:shadow-black/10'
                                    }`}
                            >
                                View Code <GithubIcon className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
