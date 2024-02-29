"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Developed a portfolio website using Next.js, a React framework, to showcase my projects and skills. Implemented responsive design principles to ensure optimal viewing experience across devices. Utilized Next.js features such as server-side rendering and static site generation for improved performance and SEO.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Real-Time Chat Application with Next.js ",
    description: "cutting-edge real-time chat messaging application using Next.js 13. Led a cross-functional team in all stages of the project lifecycle, from ideation to deployment, resulting in the creation of a fully functional and visually appealing chat platform. Leveraged advanced technologies and best practices to ensure optimal performance and user experience.",
    image: "/images/msg.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Neverland Agency Website",
    description: "Utilized latest web development technologies such as GSAP and Scroll Trigger to create seamless and captivating animations, enhancing the user experience. Implemented scroll-triggered animations to create a video-like effect as users scroll through the page, showcasing careful planning and execution. Serves as a testament to my creative vision, technical skills, and dedication to crafting a unique and captivating web presence.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/xx-abhijeet-xx/Neverland-Agency?tab=readme-ov-file",
    previewUrl: "https://neverlandagency.netlify.app/",
  },
  {
    id: 4,
    title: "Lagunitas",
    description: "Utilized GSAP, Locomotive, and Parallax to create an immersive experience, bringing the brewery atmosphere to life. Implemented a unique feature where the beer bottle moves with the swipe of your finger as you scroll down the page, enhancing user engagement. Magic effect: The beer bottle seamlessly fixes itself into the container as users continue to explore the website, adding an element of surprise and delight.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/xx-abhijeet-xx/Lagunitas-Beer_Ad?tab=readme-ov-file",
    previewUrl: "https://lagunitas.netlify.app/",
  },
  {
    id: 5,
    title: "Jomor Design Website",
    description: "Light/dark mode toggle: Choose your preferred viewing mode, with the option to switch between a dark or light background for a more personalized experience. Smooth Scrolling Animations: Experience seamless and effortless scrolling animations powered by Locomotive Scroll, creating an unforgettable user experience. Stunning Parallax Effects: Add depth and dimension to your website with our innovative parallax effects, designed to captivate and engage visitors.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/xx-abhijeet-xx/Jomor-Design?tab=readme-ov-file",
    previewUrl: "https://jomor-design.netlify.app/",
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
