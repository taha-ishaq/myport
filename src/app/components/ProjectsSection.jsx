"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Resume Builder",
    description: "A Resume builder Application using React and Firebase With redux toolkit",
    image: "/images/projects/1.PNG",
    secondaryImages: ["/images/projects/1b.PNG", "/images/projects/1c.PNG","/images/projects/1d.PNG"],
    tag: ["All", "Mobile Apps"],
    gitUrl: "https://github.com/taha-ishaq/resume-builder",
    previewUrl: "resume-builder-409bf.web.app/",
  },
  {
    id: 2,
    title: "IDE",
    description: "An IDE for Programming Made with React",
    image: "/images/projects/2.PNG",
    secondaryImages: ["/images/projects/2b.PNG"],
    tag: ["All","MobileApps"],
    gitUrl: "https://github.com/taha-ishaq/idef",
    previewUrl: "https://idef.vercel.app/",
  },
  {
    id: 3,
    title: "Crazy Server By Rasel Backend",
    description: "Image of Clean Architechture of My Backend Application showcasing my SKills in Nodejs Express",
    image: "/images/projects/3.PNG",
    secondaryImages: [""],
    tag: ["All", "Mobile Apps"],
    gitUrl: "https://github.com/taha-ishaq/crazy",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Chatty",
    description: "A MERN STACK Chat Application Made by help of Zustang having Auths, Profiles , Different themes, Cloudinary as Cloud, Pictures and seamless chat experience",
    image: "/images/projects/4.PNG",
    secondaryImages: ["/images/projects/4b.PNG", "/images/projects/4c.PNG","/images/projects/4d.PNG","/images/projects/4e.PNG","/images/projects/4f.PNG"],
    tag: ["All","Mobile Apps"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Redux toolkit Applciation",
    description: "A React Application Showcasing Use of Redux Global State Management",
    image: "/images/projects/5.PNG",
    secondaryImages: ["/images/projects/5b.PNG"],
    tag: ["All","Mobile Apps"],
    gitUrl: "https://github.com/taha-ishaq/React-redux-commerce-project",
    previewUrl: "https://react-redux-commerce-project.vercel.app/",
  },
  {
    id: 6,
    title: "Hobbey Tracker Redux toolkit Applciation",
    description: "A React Application Showcasing Use of Redux Global State Management As A Hobby tracker ",
    image: "/images/projects/6.PNG",
    secondaryImages: [""],
    tag: ["All","Mobile Apps"],
    gitUrl: "https://github.com/taha-ishaq/habit-tracker-React-redux-applciation",
    previewUrl: "https://habit-tracker-react-redux-applciation.vercel.app/",
  },
  {
    id: 7,
    title: "SafiyaKhanum A MERN STACK E-Commerce Store",
    description: "A MER Stack E-Commerce store for SafiyaKhanum Made with REACT-EXPRESS-MONGODB-CLoudinary having an Admin Panel, Dashboards, Attractive Ui, Best Practices and a SEO of 92",
    image: "/images/projects/7.PNG",
    secondaryImages: ["/images/projects/7b.PNG", "/images/projects/7c.PNG","/images/projects/7d.PNG","/images/projects/7e.PNG", "/images/projects/7f.PNG","/images/projects/7g.PNG"],
    tag: ["All","Mobile Apps"],
    gitUrl: "https://github.com/taha-ishaq/sufinew",
    previewUrl: "https://safiyalatest.vercel.app/",
  },
  {
    id: 8,
    title: "Next.Js Personal Portfolio",
    description: "Personal Portfolio Made Using NEXT.JS",
    image: "/images/projects/8.PNG",
    secondaryImages: [""],
    tag: ["All","Mobile Apps"],
    gitUrl: "https://github.com/taha-ishaq/myport",
    previewUrl: "",
  },
  {
    id: 9,
    title: "My GitHub Account and All My Undeployed and Deployed Projects",
    description: "Showcasing My Ci/Cd Skills and Contributions and management of My Repositiories",
    image: "/images/projects/9.PNG",
    secondaryImages: [""],
    tag: ["All","Mobile Apps"],
    gitUrl: "https://github.com/taha-ishaq",
    previewUrl: "",
  },
  // Add additional project objects similarly
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
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
          name="Mobile Apps"
          isSelected={tag === "Mobile Apps"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
  title={project.title}
  description={project.description}
  imgUrl={project.image}
  gitUrl={project.gitUrl}
  previewUrl={project.previewUrl}
  secondaryImages={project.secondaryImages} // Pass secondary images
  onClick={() => handleImageClick(project)}
/>
          </motion.li>
        ))}
      </ul>

      {/* Modal for displaying secondary images */}
      {selectedProject && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg max-w-lg mx-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black"
            >
              Close
            </button>
            <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="mb-4">{selectedProject.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {selectedProject.secondaryImages?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Secondary ${index}`}
                  className="w-full h-32 object-cover rounded"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;