import "./App.css";

const projects = [
  {
    category: "Digital Transformation",
    title: "Digital Transformation Project",
    description:
      "Coordinated business and technology stakeholders, project scope, risks, dependencies and delivery activities.",
  },
  {
    category: "Artificial Intelligence",
    title: "AI Initiative",
    description:
      "Supported an AI-focused initiative involving business requirements, technology teams and implementation planning.",
  },
  {
    category: "Data and Reporting",
    title: "Management Reporting",
    description:
      "Supported structured reporting and data visualisation to improve project monitoring and decision-making.",
  },
];

const skills = [
  "Project Management",
  "Digital Transformation",
  "Stakeholder Management",
  "Risk Management",
  "Artificial Intelligence",
  "Data Analysis",
  "Power BI",
  "Agile Delivery",
];

function App() {
  return (
    <main className="page">
      <header className="header">
        <nav className="navigation" aria-label="Main navigation">
          <a className="logo" href="#home">
            IK<span>.</span>
          </a>

          <div className="navigationLinks">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section className="hero" id="home">
        <p className="label">PROJECT MANAGER</p>

        <h1>
          Ivan K. <span>Nikolov</span>
        </h1>

        <p className="introduction">
          I manage digital transformation, technology and AI initiatives,
          connecting business needs with practical delivery.
        </p>

        <div className="buttons">
          <a className="button primary" href="#projects">
            View my work
          </a>

          <a className="button secondary" href="#contact">
            Contact me
          </a>
        </div>
      </section>

      <section className="section" id="about">
        <p className="label">ABOUT ME</p>

        <h2>Turning complex initiatives into clear delivery plans.</h2>

        <div className="aboutContent">
          <p>
            I am a project manager focused on digital transformation,
            artificial intelligence and data-driven decision-making.
          </p>

          <p>
            My work includes coordinating cross-functional teams, managing
            stakeholders and translating business objectives into actionable
            project plans.
          </p>
        </div>
      </section>

      <section className="section alternate" id="experience">
        <p className="label">EXPERIENCE</p>

        <h2>Professional experience</h2>

        <div className="experienceItem">
          <div className="experiencePeriod">Present</div>

          <div className="experienceInformation">
            <h3>Project Manager</h3>
            <p className="company">Postbank</p>
            <p>
              Managing digital transformation and technology initiatives
              across cross-functional teams.
            </p>
          </div>
        </div>

        <div className="experienceItem">
          <div className="experiencePeriod">Previous experience</div>

          <div className="experienceInformation">
            <h3>Previous position</h3>
            <p className="company">Company name</p>
            <p>
              This content will be replaced with information from the final
              version of the CV.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <p className="label">SELECTED PROJECTS</p>

        <h2>Projects and initiatives</h2>

        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <p className="projectCategory">{project.category}</p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alternate" id="skills">
        <p className="label">EXPERTISE</p>

        <h2>Skills and capabilities</h2>

        <div className="skillsList">
          {skills.map((skill) => (
            <span className="skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section contactSection" id="contact">
        <p className="label">CONTACT</p>

        <h2>Let&apos;s connect.</h2>

        <p>
          You can contact me through LinkedIn or send me an email.
        </p>

        <div className="buttons">
          <a
            className="button primary"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="button secondary"
            href="mailto:your-email@example.com"
          >
            Send email
          </a>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Ivan K. Nikolov</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;