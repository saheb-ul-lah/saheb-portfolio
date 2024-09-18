"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "UrbanHype",
    description: "A modern e-commerce site with sleek animations, responsive design, built for Metapoise hackathon; secured 2nd place.",
    image: "/images/projects/Project_1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://urban-hype-final.vercel.app/",
    previewUrl: "https://urban-hype-final.vercel.app/",
  },
  {
    id: 2,
    title: "Modern Alumni Management System",
    description: "Modern alumni management platform for the Mass Communication Department, Dibrugarh University.",
    image: "/images/projects/Project_2.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://csjmcalumni.in",
    previewUrl: "https://csjmcalumni.in",
  },
  {
    id: 3,
    title: "Journal Website",
    description: "An annual peer-reviewed research journal of the Department of Pharmaceutical Sciences, Dibrugarh University.",
    image: "/images/projects/Project_3.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "https://pharma-2024.vercel.app/",
    previewUrl: "https://pharma-2024.vercel.app/",
  },
  {
    id: 5,
    title: "Focus on Today",
    description: "A web app designed to help users set and track daily goals to improve productivity and focus. ",
    image: "/images/projects/Project_4.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://saheb-ul-lah.github.io/Focus-on-Today--A-ToDo-App/",
    previewUrl: "https://saheb-ul-lah.github.io/Focus-on-Today--A-ToDo-App/",
  },
  {
    id: 5,
    title: "Flags of the World",
    description: "Flags of the World is a web application designed to provide users with an interactive platform to explore flags and details of countries from around the world.",
    image: "/images/projects/Project_5.png",
    tag: ["All", "Web"],
    gitUrl: "https://saheb-ul-lah.github.io/Flags-of-the-World-Explore-Countries-And-Their-Details/",
    previewUrl: "https://saheb-ul-lah.github.io/Flags-of-the-World-Explore-Countries-And-Their-Details/",
  },
  {
    id: 6,
    title: "Count Count CLI",
    description: "Count-Count-CLI is a simple CLI game that I built as a hobby project. It's designed to help you practice counting while having some fun",
    image: "/images/projects/6.jfif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/saheb-ul-lah/Count-Count-CLI",
    previewUrl: "https://github.com/saheb-ul-lah/Count-Count-CLI",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
