import { useEffect } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.jsx"
import "./Projects.css";

import ProjectsInactive from "../resources/art/projects page graphics/Projects Inactive.gif"
import ProjectsActive from "../resources/art/projects page graphics/Projects Active.gif"

import CalisighLogo from "../resources/art/calisigh page graphics/icon.png";
import PopularVoteLogo from "../resources/art/popularvote page graphics/Favicon.png"
import SudokuLogo from "../resources/art/sudoku page graphics/Favicon.png"
import TimeRabbitLogo from "../resources/art/time rabbit page graphics/Time_Rabbit.png"

const ProjectsArray = [
  {
    id: 1,
    logo: CalisighLogo,
    title: "Calisigh",
    description: "A feature‑rich Midwestern-emo calendar\n" +
  "Open it, add your events, choose your themes, and self-loath...",
  },
  {
    id: 2,
    logo: PopularVoteLogo,
    title: "PopularVote",
    description: "Private query session w/ AI forked clustering/condensing\n",
  },
    {
    id: 3,
    logo: SudokuLogo,
    title: "Sudoku",
    description: "A full‑stack Sudoku solver, scanner, and generator\n",
  },
  {
    id: 3,
    logo: TimeRabbitLogo,
    title: "TimeRabbit",
    description: "A simple stopwatch app\n",
  },
];
// Each title will be sub folder
const Projects = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Navbar />
      <div className="projects-page">
        <img src={ProjectsInactive}
        className="projects-header"
        alt="Projects"
        />
        <div className="projects-grid">
            {ProjectsArray.map((project) => (
            <a
                key={project.id}
                href={"/" + project.title}
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
      <Footer />
    </>
  );
};

export default Projects;
export { ProjectsInactive, ProjectsActive };