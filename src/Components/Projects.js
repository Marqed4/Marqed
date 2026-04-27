import { useEffect } from "react";
import Navbar from "./Navbar.js";
import "./Projects.css";

import ProjectsHeader from "../resources/art/projects page graphics/Projects Inactive.gif"

import CalisighLogo from "../resources/art/calisigh page graphics/icon.png";

const ProjectsArray = [
  {
    id: 1,
    logo: CalisighLogo,
    title: "Calisigh",
    description:
  "A feature‑rich Midwestern-emo calendar\n" +
  "Open it, add your events, choose your themes, and self-loath...",
  },
  {
    id: 1,
    logo: CalisighLogo,
    title: "Popular Vote",
    description:
  "Private query session w/ AI forked clustering/ condensing\n",
  },
];
// Each title will be sub folder
const Projects = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Navbar />

      <div className="projects-page">
        <img src={ProjectsHeader} className="projects-header" alt="Projects" />
        <div className="projects-grid">
            {ProjectsArray.map((project) => (
            <a
                key={project.id}
                href={"/" + project.title.toLowerCase()}
                className="project-card"
                >
                <img
                    src={project.logo}
                    alt={project.title + " logo"}
                    className="project-logo"
                />
                <h2 className="project-name">{project.title}</h2>
                <p className="project-description">{project.description}</p>
            </a>
            ))}
        </div>
      </div>
    </>
  );
};

export default Projects;