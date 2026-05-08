"use client";
import React from "react";
import "../scss/Global.scss";
import l4wHomeImage from "../assets/images/Licence-4-Work.png";
import halsaFullImage from "../assets/images/Halsa-Footwear.png";
import ecomImage from "../assets/images/besthostingpicks.webp";
import deskr from "../assets/images/deskr.webp"
import citagenix from "../assets/images/citagenix.webp"

const projectsData = [
  {
    id: 101,
    title: "Capture-411",
    date: "2024 - Present",
    description:
      "An AI-Powered GovCon Intelligence Platform. I engineered a multi-pass AI agentic pipeline using AWS Bedrock (Claude 3.5) to parse unstructured solicitation documents, reducing analysis time from 2 hours to 3 minutes with 92% accuracy.",
    stack: ["Next.js", "FastAPI", "AWS Bedrock", "PostgreSQL", "Turborepo"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    liveLink: "https://www.capture411.com/home",
    icon: "🤖",
  },
  {
    id: 102,
    title: "Power Dental Studio",
    date: "2024",
    description:
      "A comprehensive B2B Dental SaaS ecosystem. I integrated the QuickBooks Online API to automate a 20-hour/week billing process and developed an in-browser 3D STL viewer using Three.js and Web Workers for digital dental scans.",
    stack: ["Next.js", "NestJS", "Three.js", "QuickBooks API", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    liveLink: "https://powerdentalstudio.com/",
    icon: "🦷",
  },

  {
    id: 1,
    title: "Halsa Footwear",
    date: "February 2023",
    description:
      "Halsa Footwear is an e-commerce website specializing in comfortable, health-focused footwear. My role was to enhance the website's user experience, improve loading speeds, and create a seamless shopping journey on both desktop and mobile.",
    stack: ["Shopify", "CSS"],
    image: halsaFullImage,
    liveLink: "https://halsafootwear.com/",
    icon: "🪙",
  },
  {
    id: 2,
    title: "Licences4Work",
    date: "January 2023",
    description:
      "Licences 4 Work offers training and certification for different job skills in Australia. My role was to make the website easier to use, improve the mobile experience, and simplify the course registration process.",
    stack: ["WordPress", "CSS"],
    image: l4wHomeImage,
    liveLink: "https://www.licences4work.com.au/",
    icon: "🏋️",
  },
  {
    id: 3,
    title: "Best Hosting Picks",
    date: "October 2023",
    description:
      "This WordPress-based site helps users easily compare web hosting providers with a clean, responsive design. I worked on improving the front-end, ensuring fast load times and mobile-friendly layouts, and enhancing the user experience for seamless navigation across pages.",
    stack: ["WordPress", "CSS"],
    image: ecomImage,
    liveLink: "https://www.besthostingpicks.com/",
    icon: "🛒",
  },
  {
    id: 4,
    title: "Deskr",
    date: "January 2024",
    description:
      "Deskr is a workspace management platform that helps companies optimize their office space and improve employee collaboration. I worked on refining the user interface and enhancing the website’s responsiveness.",
    stack: ["React", "Next.js", "SCSS"],
    image:deskr,
    liveLink: "https://deskr.co/",
    icon: "💼",
  },
  {
    id: 5,
    title: "Hansamed - Citagenix",
    date: "February 2024",
    description:
      "Hansamed Citagenix is a medical website offering surgical and regenerative solutions. My role involved improving UI/UX, optimizing performance, and ensuring seamless navigation for both professionals and patients.",
    stack: ["WordPress", "CSS"],
    image:citagenix,
    liveLink: "https://hansamed.net/citagenix",
    icon: "⚕️",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects spacing_top spacing_bottom">
      <div className="container">
        <div className="project-content">
          <h3 className="section-title">Portfolio</h3>
          <h2 className="section-subtitle">
            A Senior Software Engineer <br /> based in Chandigarh, India📍
          </h2>

          <p>
            As a <strong>Senior Software Engineer</strong> with <strong>5 years of experience</strong>, 
            I specialize in building scalable enterprise SaaS platforms and high-performance AI intelligence pipelines.
          </p>
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className={`project ${index % 2 !== 0 ? "reversed-proj" : ""}`}
              >
                <div className="pro__img">
                  <a target="_blank" href={project.liveLink} rel="noreferrer">
                    <img src={project.image} alt={project.title} />
                  </a>
                </div>
                <div className="pro__text">
                  <h3>
                    {project.title}{" "}
                    <span className="date-class">
                      ({project.date}) {project.icon}
                    </span>
                  </h3>
                  <p>{project.description}</p>
                  {project.stack?.length > 0 && (
                    <div className="stack">
                      {project.stack.map((tech, i) => (
                        <p key={i}>{tech}</p>
                      ))}
                    </div>
                  )}
                  <div className="links">
                    {project.codeLink ? (
                      <a target="_blank" href={project.codeLink} rel="noreferrer">
                        Code
                      </a>
                    ) : (
                      <span className="disabled">Code Unavailable</span>
                    )}
                    <a target="_blank" href={project.liveLink} rel="noreferrer">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
