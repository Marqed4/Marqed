import { useEffect } from "react";
import Icon from "./Icon.js";
import Navbar from "./Navbar.js";

const Resume = () => {
  useEffect(() => {
    document.title = "Zachery Francis - Resume";
  }, []);

  return (
    <div className="resume-container">
      <Icon />
      <Navbar />
      <div className="resume-card">

        <div className="resume-header">
          <h1 className="resume-name">Zachery Francis</h1>
          <p className="resume-tagline">
           917-615-5474 · zacherywfrancis@gmail.com · marqed.it · github.com/Marqed4
          </p>
          <p className="resume-tagline"> Brooklyn, NY | U.S. Citizen</p>
        </div>

        <section className="resume-section">
          <h2 className="resume-section-title">Education & Certificates</h2>

          <div className="resume-edu-item">
            <p className="resume-edu-degree">
              B.S. Information Systems &amp; B.S. Business Management
              <span className="resume-edu-minor"> · Minor: Computer Science</span>
            </p>
            <p className="resume-edu-school">Brooklyn College - Spring 2026</p>
          </div>

          <div className="resume-edu-item">
            <p className="resume-edu-degree">
              CodePath: Intermediate Technical Interview Prep (TIP102) &amp; Applied AI Engineering (AI110)
            </p>
            <p className="resume-edu-school">Summer 2026</p>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Technical Skills</h2>

          <div className="resume-skills-grid">
            <div className="resume-skill-card">
              <p className="resume-skill-label">Languages</p>
              <p className="resume-skill-val">Java, Python, JavaScript</p>
            </div>

            <div className="resume-skill-card">
              <p className="resume-skill-label">Databases</p>
              <p className="resume-skill-val">SQL, PostgreSQL</p>
            </div>

            <div className="resume-skill-card">
              <p className="resume-skill-label">Frameworks</p>
              <p className="resume-skill-val">React, React Tauri, Spark Java</p>
            </div>

            <div className="resume-skill-card">
              <p className="resume-skill-label">Software</p>
              <p className="resume-skill-val">
                Adobe After Effects, Adobe Premiere, Adobe Photoshop, Sony Vegas Pro, Microsoft Excel
              </p>
            </div>

            <div className="resume-skill-card">
              <p className="resume-skill-label">Build and Dependency Tools</p>
              <p className="resume-skill-val">Maven, NPM, Cargo</p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Projects</h2>

          <div className="resume-project">
            <p className="resume-project-title">
              Popular Vote : Full-Stack Web App | <a href="https://popularvote.marqed.it"><u>Live Site</u></a> | <a href="https://marqed.it/PopularVote"><u>Documentation</u></a> | <a href="https://github.com/Marqed4/PopularVote"><u>GitHub</u></a>
              <span className="resume-project-date"> Spring 2026</span>
            </p>
            <ul className="resume-project-list">
              <li>
                Demoed to a live class of 40 users who joined via QR code in real time, validating the full
                session flow end to end under simultaneous load.
              </li>
              <li>
                Built a live Q&amp;A platform where hosts create rooms shared via link, QR code, or join code;
                implemented with React, Node.js, PostgreSQL, and Google OAuth.
              </li>
              <li>
                Developed with a 3-person Agile team with twice-weekly Scrum standups and Kanban
                tracking/organizing.
              </li>
              <li>
                Integrated Gemini Flash 2.5 to cluster participant questions by semantic theme, reducing
                duplicate host responses and keeping sessions focused.
              </li>
              <li>
                Leveraged constructive criticism from my senior engineer/adjunct to redesign the cluster
                component into a unified, maintainable codebase with dynamic role-based rendering, reducing
                duplicate logic and improving host/participant UX by separating advanced host tools from
                streamlined participant actions.
              </li>
            </ul>
          </div>

          <div className="resume-project">
            <p className="resume-project-title">
              Calisigh : Desktop Calendar App | <a href="https://marqed.it/Calisigh"><u>Documentation</u></a> | <a href="https://github.com/Marqed4/Calisigh"><u>GitHub</u></a>
              <span className="resume-project-date"> 2026</span>
            </p>
            <ul className="resume-project-list">
              <li>
                Built and shipped a cross-platform desktop calendar using React, Tauri, and Java, packaged
                as a Windows installer and distributed via GitHub; adopted by 5 external users.
              </li>
              <li>
                Embedded an Ollama 3.2 local LLM for on-device natural-language scheduling, keeping all
                user data offline with no API dependency; use it personally as a daily scheduling tool.
              </li>
            </ul>
          </div>

          <div className="resume-project">
            <p className="resume-project-title">
              Sudoku : Full-Stack Puzzle Web App | <a href="https://github.com/Marqed4/Soduku"><u>GitHub</u></a>
              <span className="resume-project-date"> 2026</span>
            </p>
            <ul className="resume-project-list">
              <li>
                Built a React + Python/Flask app that generates, validates, and algorithmically solves
                Sudoku puzzles; integrated a Gemini Flash 2.5 + PIL image pipeline to scan physical
                puzzles, used with friends to race solutions on the same scanned board.
              </li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Work History</h2>

          <div className="resume-job">
            <div className="resume-job-header">
              <p className="resume-job-title">Teacher's Assistant, Computer Science Dept</p>
              <span className="resume-job-date">February 2026 - Present</span>
            </div>
            <p className="resume-job-org">Brooklyn College, Brooklyn, NY</p>
            <ul className="resume-job-list">
              <li>
                Evaluated and debugged Java assignments for 60+ students via TuringsCraft: CodeLab;
                adjusted feedback until grade outcomes improved.
              </li>
              <li>
                Students returned voluntarily for feedback and depth-related assistance rather than
                surface corrections.
              </li>
              <li>
                Tracked common mistakes and coordinated with instructors to adjust lecture emphasis.
              </li>
            </ul>
          </div>

          <div className="resume-job">
            <div className="resume-job-header">
              <p className="resume-job-title">Logistics Associate</p>
              <span className="resume-job-date">August 2024 - May 2025</span>
            </div>
            <p className="resume-job-org">The Kitpak, Brooklyn, NY</p>
            <ul className="resume-job-list">
              <li>
                Restructured picking and packing workflow, reducing order turnaround on high-volume days
                without accuracy loss.
              </li>
              <li>
                Coordinated international orders across Windows, macOS, and Shopify; caught
                cross-platform discrepancies before shipment.
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;