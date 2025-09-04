import React, { useState, useEffect, useRef, useCallback } from "react";
import { ExternalLinkIcon, GithubIcon, XIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const modalRef = useRef<HTMLDivElement>(null);

    // Get all images - always start with main project image, then add additional images
    const allImages = React.useMemo(() => {
        if (!project?.image) return [];
        
        const mainImage = project.image;
        const additionalImages = project.images && project.images.length > 0 
            ? project.images.filter(img => img !== mainImage) 
            : [];
        
        return [mainImage, ...additionalImages];
    }, [project?.image, project?.images]);

    const nextImage = useCallback(() => {
        if (allImages.length <= 1) return;
        setCurrentImageIndex((prev) => {
            const nextIndex = (prev + 1) % allImages.length;
            console.log('Next image:', prev, '->', nextIndex, 'Total:', allImages.length);
            return nextIndex;
        });
    }, [allImages.length]);

    const prevImage = useCallback(() => {
        if (allImages.length <= 1) return;
        setCurrentImageIndex((prev) => {
            const prevIndex = (prev - 1 + allImages.length) % allImages.length;
            console.log('Prev image:', prev, '->', prevIndex, 'Total:', allImages.length);
            return prevIndex;
        });
    }, [allImages.length]);

    const goToImage = useCallback((index: number) => {
        if (index >= 0 && index < allImages.length) {
            console.log('Go to image:', index);
            setCurrentImageIndex(index);
        }
    }, [allImages.length]);

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

    // Reset image index when project changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [project?.id]);

    // Keyboard navigation for image carousel
    useEffect(() => {
        const handleArrowKeys = (e: KeyboardEvent) => {
            if (allImages.length > 1) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    prevImage();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    nextImage();
                }
            }
        };

        document.addEventListener('keydown', handleArrowKeys);
        return () => {
            document.removeEventListener('keydown', handleArrowKeys);
        };
    }, [allImages.length, nextImage, prevImage]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 p-4"
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(12px) saturate(150%)",
                WebkitBackdropFilter: "blur(12px) saturate(150%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className={`relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 ${darkMode ? 'bg-[#1a1a1d]/90' : 'bg-white/90'
                    }`}
                style={{
                    position: "relative",
                    transform: "translate(0, 0)",
                    margin: "auto",
                    backdropFilter: "blur(32px) saturate(180%)",
                    WebkitBackdropFilter: "blur(32px) saturate(180%)",
                    boxShadow: darkMode 
                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.8)" 
                        : "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className={`absolute top-6 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-[#2c2c30]/80 text-[#f5f5f7] hover:bg-[#3c3c40]/90 shadow-md shadow-black/20 backdrop-blur-sm' : 'bg-[#f5f5f7]/80 text-[#6e6e73] hover:bg-gray-200/90 shadow-md shadow-black/5 backdrop-blur-sm'
                        }`}
                >
                    <XIcon className="h-5 w-5" />
                </button>

                {/* Modal Content */}
                <div className="overflow-y-auto max-h-[90vh]">
                    {/* Project Image Carousel - Instagram Style */}
                    <div className="relative h-64 md:h-80 overflow-hidden bg-black">
                        {/* Image Container with Smooth Transition */}
                        <div 
                            className="flex transition-transform duration-300 ease-out h-full"
                            style={{
                                transform: `translateX(-${currentImageIndex * 100}%)`,
                            }}
                        >
                            {allImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="w-full h-full flex-shrink-0 relative"
                                >
                                    <img
                                        src={image}
                                        alt={`${project.title} - Image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        loading={index === 0 ? "eager" : "lazy"}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons - Enhanced Instagram Style */}
                        {allImages.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm shadow-lg border border-white/10 z-20"
                                >
                                    <ChevronLeftIcon className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm shadow-lg border border-white/10 z-20"
                                >
                                    <ChevronRightIcon className="h-5 w-5" />
                                </button>
                            </>
                        )}

                        {/* Instagram-style Dot Indicators */}
                        {allImages.length > 1 && (
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
                                {allImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToImage(index)}
                                        className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                                            index === currentImageIndex
                                                ? 'bg-[#0071e3] shadow-sm'
                                                : 'bg-white/40 hover:bg-white/60'
                                        }`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Swipe Gesture Area (for future touch support) */}
                        <div className="absolute inset-0 group" />
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
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm ${darkMode ? 'bg-[#2c2c30]/80 text-[#f5f5f7] shadow-md shadow-black/20' : 'bg-[#f5f5f7]/80 text-[#6e6e73] shadow-md shadow-black/5'
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
                                className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm ${'bg-[#0071e3]/90 text-white hover:bg-[#0077ED] hover:shadow-xl'
                                    }`}
                            >
                                Live Demo <ExternalLinkIcon className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm ${darkMode ? 'bg-[#2c2c30]/80 text-[#f5f5f7] hover:bg-[#3c3c40]/90 shadow-black/20 hover:shadow-black/30' : 'bg-[#f5f5f7]/80 text-[#1d1d1f] hover:bg-gray-100/90 shadow-black/5 hover:shadow-black/10'
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
