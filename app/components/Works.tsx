"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";
import { Tilt } from "react-tilt";

// --- TYPES ---
type ProjectTag = {
    name: string;
    color: string;
};

type ProjectTeamMember = {
    name: string;
    role: string;
};

export type Project = {
    id: string;
    name: string;
    description: string;
    detailedDescription: string;
    tags: ProjectTag[];
    techIcons: string[];
    image: string;
    screenshots: string[];
    source_code_link?: string;
    deploy_link: string;
    team: ProjectTeamMember[];
    category: ("MERN" | "PHP" | "Next.js")[];
};

// --- HELPER ICONS ---
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
);

// --- PROJECT MODAL COMPONENT ---
interface ProjectModalProps {
    project: Project;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
    project,
    onClose,
    onNext,
    onPrev,
    hasNext,
    hasPrev,
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const handleCarouselNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
    };

    const handleCarouselPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
    };

    // Handle keyboard navigation for modal and carousel
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);


    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            initial={{ backdropFilter: 'blur(0px)' }}
            animate={{ backdropFilter: 'blur(8px)' }}
            exit={{ backdropFilter: 'blur(0px)' }}
            onClick={onClose}
        >
            <motion.div
                className="relative bg-gray-900 bg-gradient-to-br from-gray-900 to-tertiary text-white rounded-2xl shadow-2xl max-w-4xl w-[99%] h-[98vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* --- Main Content --- */}
                <div className="p-4 sm:p-8">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-xl lg:text-2xl font-bold blue-text-gradient">{project.name}</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20">
                            <CloseIcon />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column: Carousel & Links */}
                        <div className="flex flex-col gap-4">
                             {/* Carousel */}
                            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                                <AnimatePresence initial={false}>
                                    <motion.img
                                        key={currentImageIndex}
                                        src={project.screenshots[currentImageIndex]}
                                        alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                                        className="absolute w-full h-full object-cover"
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    />
                                </AnimatePresence>
                                {project.screenshots.length > 1 && (
                                    <>
                                        <button onClick={handleCarouselPrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition">
                                            <ArrowLeftIcon />
                                        </button>
                                        <button onClick={handleCarouselNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition">
                                            <ArrowRightIcon />
                                        </button>
                                    </>
                                )}
                            </div>
                            {/* Links & Team */}
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-wrap gap-4">
                                    <Link href={project.deploy_link} target="_blank" className="flex items-center px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors font-semibold">Live Demo <LinkIcon /></Link>
                                    {project.source_code_link && (
                                        <Link href={project.source_code_link} target="_blank" className="flex items-center px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors font-semibold">Source Code <LinkIcon /></Link>
                                    )}
                                </div>
                                {project.team.length > 0 && (
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-300">Team</h4>
                                        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-1">
                                            {project.team.map((member: ProjectTeamMember) => (
                                                <p key={member.name} className="text-gray-400">{member.name} <span className="text-xs text-gray-500">({member.role})</span></p>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Details & Tech */}
                        <div className="flex flex-col gap-4">
                            <div>
                                <h3 className="text-l font-bold text-gray-200 mb-2">About this project</h3>
                                <p className="text-gray-300 leading-relaxed text-sm text-base">{project.detailedDescription}</p>
                            </div>
                            <div>
                                <h3 className="text-l font-bold text-gray-200 mb-3">Technology Stack</h3>
                                <div className="flex flex-wrap gap-4">
                                    {project.techIcons.map((icon: string, index: number) => (
                                        <div key={index} className="w-12 h-12 p-2 bg-gray-800 rounded-full flex items-center justify-center">
                                            <Image src={icon} alt="tech icon" width={32} height={32} className="object-contain"/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Navigation */}
                <button
                    onClick={onPrev}
                    disabled={!hasPrev}
                    className="absolute left-[-60px] top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all hidden lg:block"
                >
                    <ArrowLeftIcon />
                </button>
                <button
                    onClick={onNext}
                    disabled={!hasNext}
                    className="absolute right-[-60px] top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-all hidden lg:block"
                >
                    <ArrowRightIcon />
                </button>
            </motion.div>
        </motion.div>
    );
};


// --- PROJECT CARD COMPONENT ---
interface ProjectCardProps {
    project: Project;
    onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        onClick={() => onClick(project)}
        className="w-full sm:w-[350px] cursor-pointer"
    >
        <Tilt
            options={{ max: 15, scale: 1.02, speed: 400, glare: true, "max-glare": 0.2 }}
            className="bg-tertiary p-5 rounded-2xl h-full flex flex-col"
        >
            <div className="relative w-full h-[200px]">
                <Image src={project.image} alt={project.name} layout="fill" className="object-cover rounded-2xl" />
            </div>
            <div className="mt-5 flex-grow flex flex-col">
                <h3 className="text-white font-bold text-2xl">{project.name}</h3>
                <p className="mt-2 text-secondary text-sm flex-grow">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag: ProjectTag) => (
                        <p key={tag.name} className={`text-xs ${tag.color}`}>#{tag.name}</p>
                    ))}
                </div>
            </div>
        </Tilt>
    </motion.div>
);


// --- MAIN WORKS COMPONENT ---
const Works = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeFilter, setActiveFilter] = useState<"All" | "MERN" | "PHP" | "Next.js">("All");

    const handleOpenModal = (project: Project) => {
        document.body.style.overflow = 'hidden';
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        document.body.style.overflow = 'auto';
        setSelectedProject(null);
    };

    const filteredProjects: Project[] = activeFilter === "All"
        ? projects
        : projects.filter((p: Project) => p.category.includes(activeFilter));

    const findProjectIndex = (project: Project) => filteredProjects.findIndex((p: Project) => p.id === project.id);
    
    const handleNext = () => {
        if (!selectedProject) return;
        const currentIndex = findProjectIndex(selectedProject);
        if (currentIndex < filteredProjects.length - 1) {
            setSelectedProject(filteredProjects[currentIndex + 1]);
        }
    };
    
    const handlePrev = () => {
        if (!selectedProject) return;
        const currentIndex = findProjectIndex(selectedProject);
        if (currentIndex > 0) {
            setSelectedProject(filteredProjects[currentIndex - 1]);
        }
    };

    const currentIndex = selectedProject ? findProjectIndex(selectedProject) : -1;

    const filterButtons: ("All" | "MERN" | "PHP" | "Next.js")[] = ["All", "MERN", "PHP", "Next.js"];

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sectionSubText">My work</p>
                <h2 className="sectionHeadText">Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    These projects showcase my skills and experience through real-world examples. Each is a testament to my ability to tackle complex problems, work with diverse technologies, and deliver polished, user-centric solutions. Click on a card to see the full details.
                </motion.p>
            </div>
            
            {/* Filter Buttons */}
            <div className="my-10 flex flex-wrap gap-4">
                {filterButtons.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-5 py-2 rounded-full text-base font-semibold transition-all duration-300 ${activeFilter === filter ? 'bg-pink-600 text-white shadow-lg' : 'bg-tertiary text-gray-300 hover:bg-gray-700'}`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Project Cards */}
            <div className="flex flex-wrap gap-7 justify-center sm:justify-start">
                <AnimatePresence>
                    {filteredProjects.map((project: Project) => (
                        <ProjectCard key={project.id} project={project} onClick={handleOpenModal} />
                    ))}
                </AnimatePresence>
            </div>
            
            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={handleCloseModal}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        hasNext={currentIndex < filteredProjects.length - 1}
                        hasPrev={currentIndex > 0}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default SectionWrapper(Works, "");