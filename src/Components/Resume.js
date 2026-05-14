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
          <p className="resume-tagline">Brooklyn, NY - 917-516-5474 - zacherywfrancis@gmail.com</p>
        </div>

        <section className="resume-section">
          <h2 className="resume-section-title">Profile</h2>
          <p className="resume-profile">
            Student at Brooklyn College (Minor: Computer Science) currently building a full desktop app in Java,
            React, and Tauri with an integrated local LLM. Comfortable across the stack from systems programming
            to React, with hands-on experience in IT support and teaching. Looking for a position where I can
            contribute and keep learning about tech.
          </p>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>

          <div className="resume-edu-item">
            <p className="resume-edu-degree">
              Bachelor of Science, Information Systems <span className="resume-edu-minor">· Minor: Computer Science</span>
            </p>
            <p className="resume-edu-school">Brooklyn College - Expected: December 2026</p>
          </div>

          <div className="resume-edu-item">
            <p className="resume-edu-degree">Associate of Liberal Arts</p>
            <p className="resume-edu-school">Kingsborough Community College - August 2021 - May 2023</p>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Technical Skills</h2>

          <div className="resume-skills-grid">
            <div className="resume-skill-card">
              <p className="resume-skill-label">Languages</p>
              <p className="resume-skill-val">Java, C#, Python, JavaScript, Rust</p>
            </div>

            <div className="resume-skill-card">
              <p className="resume-skill-label">Databases</p>
              <p className="resume-skill-val">SQL, MongoDB, PostgreSQL</p>
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
              <p className="resume-skill-val">Maven, NPM, Cargo, Wtedia Encoder</p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Professional Experience</h2>

          <div className="resume-job">
            <div className="resume-job-header">
              <p className="resume-job-title">Teacher's Assistant, Computer Science Dept</p>
              <span className="resume-job-date">February 2026 - Current</span>
            </div>
            <p className="resume-job-org">Brooklyn College</p>
            <ul className="resume-job-list">
              <li>
                Evaluated and provided feedback on student programming assignments for 60+ students using
                TuringsCraft: CodeLab, supporting learning outcomes in an introductory CS course.
              </li>
            </ul>
          </div>

          <div className="resume-job">
            <div className="resume-job-header">
              <p className="resume-job-title">Logistics Associate</p>
              <span className="resume-job-date">August 2024 - May 2025</span>
            </div>
            <p className="resume-job-org">The Kitpak</p>
            <ul className="resume-job-list">
              <li>
                Processed high-volume daily orders by accurately picking, packing, and labeling makeup and beauty
                products for timely shipment.
              </li>
              <li>
                Coordinated international orders across Windows, macOS, and Shopify, ensuring accurate cross-border
                fulfillment.
              </li>
              <li>
                Maintained inventory accuracy through systematic organization and restocking, reducing fulfillment
                errors.
              </li>
            </ul>
          </div>

          <div className="resume-job">
            <div className="resume-job-header">
              <p className="resume-job-title">IT Helpdesk</p>
              <span className="resume-job-date">August 2022 - May 2023</span>
            </div>
            <p className="resume-job-org">Kingsborough Community College</p>
            <ul className="resume-job-list">
              <li>
                Delivered technical support to a campus community of 20,000+ students and staff, resolving hardware
                and software issues under time pressure.
              </li>
              <li>
                Diagnosed and resolved Microsoft Outlook configuration issues, improving email reliability for
                faculty and students.
              </li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Projects</h2>

          <div className="resume-project">
            <p className="resume-project-title">
              Calisigh Desktop Calendar App | marqed.it/Calisigh | GitHub In Progress
            </p>
            <ul className="resume-project-list">
              <li>
                Built a fully customizable desktop calendar with React Tauri and Rust, featuring user-defined
                backgrounds and alert sounds; ships as a packaged Windows installer (v1.1.5) with Temurin 21 JDE
                available on GitHub.
              </li>
              <li>Implemented multithreaded system alerts for reliable background notifications.</li>
              <li>
                Integrated a local LLM handler via Ollama for on-device AI assistance with no external data
                transmission.
              </li>
            </ul>
          </div>

          <div className="resume-project">
            <p className="resume-project-title">Popular Vote Full-Stack Web App | GitHub In Progress</p>
            <ul className="resume-project-list">
              <li>
                Live session platform where hosts share a room via link, QR code, or join code for real-time
                participant Q and A.
              </li>
              <li>
                AI clusters and organizes participant questions so hosts can address themes rather than repeat
                similar answers.
              </li>
              <li>Built with React, Node.js, and Supabase for real-time data sync.</li>
            </ul>
          </div>

          <div className="resume-project">
            <p className="resume-project-title">TimeRabbit Java / Swing | GitHub</p>
            <ul className="resume-project-list">
              <li>
                First personal project; a Java Swing stopwatch with start, stop, and reset functions. Includes a
                shipped Windows installer (v1.1.5) available on GitHub.
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
