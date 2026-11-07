import { useState } from "react";
import "./App.css";

const experience = [
  { period: "February 2025 - Present", position: "Project Manager", company: "Postbank (Eurobank Bulgaria AD)", location: "Sofia, Bulgaria", description: "Managing digital transformation and technology initiatives, coordinating cross-functional teams and supporting the delivery of high-value projects.", current: true },
  { period: "February 2023 - January 2025", position: "IT Security Project Manager", company: "DXC Technology", location: "Sofia, Bulgaria", description: "Coordinated IT security projects, stakeholders, delivery activities, risks and dependencies in an international technology environment." },
  { period: "August 2022 - November 2022", position: "Project Coordinator", company: "DreamShot", location: "Sofia, Bulgaria", description: "Supported project coordination, communication, task tracking and collaboration between project stakeholders." },
  { period: "February 2022 - August 2022", position: "Senior Exception Management Coordinator", company: "TTEC", location: "Sofia, Bulgaria", description: "Coordinated exception management activities, supported operational issue resolution and stakeholder communication." },
  { period: "November 2020 - February 2022", position: "Exception Management Coordinator", company: "TTEC", location: "Sofia, Bulgaria", description: "Managed operational exceptions, monitored cases and supported communication between internal teams and stakeholders." },
];

const education = [
  { period: "Currently studying", programme: "AI for Digital Transformation", institution: "Athens University of Economics and Business", shortName: "AUEB", current: true },
  { period: "September 2022 - July 2023", programme: "Master's Degree in International Project Management", institution: "University of National and World Economy", shortName: "UNWE" },
  { period: "September 2016 - July 2020", programme: "Bachelor's Degree in Business Informatics and Communications", institution: "University of National and World Economy", shortName: "UNWE" },
];

const certificationGroups = [
  { category: "Artificial Intelligence", description: "AI foundations, automation, prompt engineering, responsible AI and practical business implementation.", certifications: [
    { title: "AI for Education and Self-Education", issuer: "SoftUni AI", issued: "Mar 2026" },
    { title: "AI Privacy, Security and Regulations", issuer: "SoftUni AI", issued: "Feb 2026" },
    { title: "AI Automation", issuer: "SoftUni AI", issued: "Jan 2026" },
    { title: "Implementing AI in Business", issuer: "SoftUni AI", issued: "Dec 2025" },
    { title: "Prompt Engineering", issuer: "SoftUni AI", issued: "Nov 2025" },
    { title: "AI Basics", issuer: "SoftUni AI", issued: "May 2025" },
  ]},
  { category: "Project Management and Agile", description: "Agile delivery, Scrum practices and flexible business management methodologies.", certifications: [
    { title: "SAFe® Scrum Master", issuer: "SAFe by Scaled Agile, Inc.", issued: "Jul 2026" },
    { title: "Introduction and Adaptation to Flexible Agile Business Management Methodologies", issuer: "ITCE", issued: "Mar 2026" },
    { title: "Agile Advanced with Scrum", issuer: "Software University (SoftUni)", issued: "Jul 2022" },
    { title: "Agile Essentials with Scrum", issuer: "Software University (SoftUni)", issued: "Jun 2022" },
  ]},
  { category: "Technology, Security and Business Analysis", description: "Cybersecurity, SaaS, software testing, DevOps, programming and business analysis.", certifications: [
    { title: "The Complete 2024 Software Testing Bootcamp", issuer: "Udemy", issued: "Dec 2024" },
    { title: "DevOps Foundations: Continuous Delivery/Continuous Integration", issuer: "LinkedIn", issued: "Mar 2024" },
    { title: "IT Business Analysis", issuer: "Software University (SoftUni)", issued: "Nov 2023" },
    { title: "Introduction to Cyber Security", issuer: "Software University (SoftUni)", issued: "Oct 2023" },
    { title: "Microsoft SaaS and Security", issuer: "Software University (SoftUni)", issued: "Jun 2022" },
    { title: "Introduction to Programming Using HTML and CSS", issuer: "Software University (SoftUni)", issued: "Aug 2021" },
  ]},
  { category: "UX, UI and Creative Design", description: "User experience, interface design and practical work with Adobe creative tools.", certifications: [
    { title: "UI Design", issuer: "SoftUni Creative", issued: "May 2022" },
    { title: "UX Design", issuer: "SoftUni Creative", issued: "Apr 2022" },
    { title: "Adobe Photoshop CS6", issuer: "SoftUni Creative", issued: "Feb 2022" },
    { title: "Adobe After Effects CC", issuer: "SoftUni Creative", issued: "Nov 2021" },
    { title: "Adobe Premiere Pro", issuer: "SoftUni Creative", issued: "Oct 2021" },
    { title: "Adobe Illustrator CS", issuer: "SoftUni Creative", issued: "Oct 2021" },
    { title: "Design Basics", issuer: "SoftUni Creative", issued: "Aug 2021" },
    { title: "The Complete App Design Course - UX, UI and Design Thinking", issuer: "Udemy", issued: "Mar 2021" },
  ]},
  { category: "Marketing and Communication", description: "Digital marketing channels, content strategy and professional business communication.", certifications: [
    { title: "E-mail Marketing", issuer: "SoftUni Digital", issued: "Mar 2021" },
    { title: "Interactive Guide to Business Communication", issuer: "TTEC", issued: "Mar 2021" },
    { title: "Google Ads", issuer: "SoftUni Digital", issued: "Feb 2021" },
    { title: "Facebook Marketing", issuer: "SoftUni Digital", issued: "Dec 2020" },
    { title: "Content Marketing", issuer: "SoftUni Digital", issued: "Nov 2020" },
    { title: "Marketing Basics", issuer: "SoftUni Digital", issued: "Oct 2020" },
  ]},
];

const skillGroups = [
  { title: "Project Management", skills: ["Project Planning", "Business Analysis","Stakeholder Management", "Risk Management", "Dependency Management", "Cross-functional Coordination",] },
  { title: "Digital Transformation", skills: ["Digital Initiatives", "Process Improvement", "Innovation", "Business and Technology Alignment", "Change Coordination"] },
  { title: "AI and Data", skills: ["Artificial Intelligence", "AI Automation", "Prompt Engineering", "Data Analysis", "Power BI", "Data-driven Decision-making",  "Project Reporting"] },
  { title: "Technology and Security", skills: ["IT Security Projects", "Cybersecurity Awareness",  "Software Testing", "DevOps Foundations", "Technology Delivery"] },
];

const projectAwards = [
  {
    year: "2026",
    award: "Best Active Banking Digital Project",
    awardOriginal: "Best Active Banking Digital Project",
    organization: "Bank of the Year Awards",
    project: "EVA AI",
    role: "Project Manager",
    category: "Artificial Intelligence",
    description:
      "EVA AI is an internal AI assistant developed by Postbank for employees across the branch network, contact centre and internal teams. The project received the only award dedicated to artificial intelligence in the competition.",
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7475532373657382912/",
    accent: "green",
  },
  {
    year: "2026",
    award: "Transform IT Awards '26",
    awardOriginal: "Digital transformation recognition",
    organization: "Digitalk and A1",
    project: "LoanAdmin",
    role: "Project Manager",
    category: "Process Automation",
    description:
      "LoanAdmin transforms the processing of unstructured information by converting email-based input into a structured and automated workflow, supporting faster and more efficient operations.",
    link: "https://digitalk.bg/business_ai/2026/03/27/4897305_transform_it_awards_26_lab_thread_poshtenska_banka/",
    accent: "blue",
  },
  {
    year: "2026",
    award: "Audience Award",
    awardOriginal: "Audience Award for Best Corporate Website",
    organization: "Website of the Year",
    project: "New Postbank Corporate Website",
    role: "Project Manager",
    category: "Digital Customer Experience",
    description:
      "The new Postbank corporate website was recognized by the public for its modern digital experience, accessible content structure and improved presentation of the bank's services.",
    link: "https://bgweb.bg/s/winners/",
    accent: "bronze",
  },
];

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Certifications", "certifications"],
  ["Skills", "skills"],
  ["Awards", "awards"],
  ["Contact", "contact"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const certificationCount = certificationGroups.reduce((sum, group) => sum + group.certifications.length, 0);

  return (
    <main className="page">
      <header className="header">
        <nav className="navigation" aria-label="Main navigation">
          <a className="logo" href="#home" onClick={closeMenu} aria-label="Ivan K. Nikolov - Home"><span>IKN</span><b>.</b></a>
          <button className={`menuButton ${menuOpen ? "menuButtonOpen" : ""}`} type="button" aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span><span></span></button>
          <div className={`navigationLinks ${menuOpen ? "menuOpen" : ""}`}>{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}</div>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="heroContent">
          <p className="label">PROJECT MANAGER · DIGITAL TRANSFORMATION · AI</p>
          <h1 className="heroName"><span>Ivan</span><span className="middleName">K<span className="nameDot">.</span></span><span>Nikolov</span></h1>
          <p className="introduction">Helping teams turn strategy into impact by leading digital transformation, driving innovation and delivering high-value projects.</p>
          <div className="heroButtons"><a className="button primary" href="#experience">Explore my experience</a><a className="button secondary" href="#contact">Contact me</a></div>
          <div className="currentStatus">
            <article className="statusCard"><span className="statusIndicator"></span><div><p className="statusLabel">CURRENTLY WORKING</p><h2>Project Manager</h2><p>Postbank</p></div></article>
            <article className="statusCard"><span className="statusIndicator studying"></span><div><p className="statusLabel">CURRENTLY STUDYING</p><h2>AI for Digital Transformation</h2><p>Athens University of Economics and Business</p></div></article>
          </div>
        </div>
      </section>

      <section className="section aboutSection" id="about">
        <div><p className="label">ABOUT ME</p><h2>Connecting strategy, technology and practical delivery.</h2></div>
        <div className="aboutContent"><p className="largeParagraph">I am a project manager with experience in digital transformation, IT security and technology delivery.</p><p>My professional focus is on transforming complex business objectives into clear delivery plans, coordinating cross-functional teams and maintaining effective communication between business and technology stakeholders.</p><p>I am currently working as a Project Manager at Postbank and studying AI for Digital Transformation at the Athens University of Economics and Business.</p><div className="aboutFacts"><div><strong>Based in Sofia,</strong><span> Bulgaria</span></div><div><strong>Project Management</strong><span>Professional focus</span></div><div><strong>Digital Transformation</strong><span>Area of expertise</span></div><div><strong>Artificial Intelligence</strong><span>Current area of study</span></div></div></div>
      </section>

      <section className="fullWidthSection" id="experience"><div className="section"><div className="sectionHeading"><p className="label">EXPERIENCE</p><h2>Professional journey</h2><p>Experience across banking, technology, IT security, project coordination and operations.</p></div><div className="timeline">{experience.map((item) => <article className={`experienceItem ${item.current ? "currentExperience" : ""}`} key={`${item.company}-${item.position}`}><div className="experiencePeriod"><p>{item.period}</p>{item.current && <span className="currentBadge">Current role</span>}</div><div className="experienceInformation"><h3>{item.position}</h3><p className="company">{item.company}</p><p className="location">{item.location}</p><p className="experienceDescription">{item.description}</p></div></article>)}</div></div></section>

      <section className="section" id="education"><div className="sectionHeading"><p className="label">EDUCATION</p><h2>Education and continuous development</h2></div><div className="educationGrid">{education.map((item) => <article className={`educationCard ${item.current ? "currentStudy" : ""}`} key={`${item.institution}-${item.programme}`}><div className="educationTop"><span className="institutionShortName">{item.shortName}</span>{item.current && <span className="currentBadge">In progress</span>}</div><p className="educationPeriod">{item.period}</p><h3>{item.programme}</h3><p className="institution">{item.institution}</p></article>)}</div></section>

      <section className="fullWidthSection certificationsSection"><div className="section" id="certifications"><div className="sectionHeading certificationHeading"><div><p className="label">CERTIFICATIONS AND COURSES</p><h2>Continuous learning across technology and business</h2></div><p className="certificationSummary">A portfolio of {certificationCount} credentials, grouped by professional area.</p></div><div className="certificationGroups">{certificationGroups.map((group, groupIndex) => <article className="certificationGroup" key={group.category}><div className="certificationGroupHeader"><span className="groupNumber">{String(groupIndex + 1).padStart(2, "0")}</span><div><h3>{group.category}</h3><p>{group.description}</p></div></div><div className="certificationCards">{group.certifications.map((certificate) => <div className="certificationCard" key={`${certificate.title}-${certificate.issued}`}><div className="certificateMeta"><span>{certificate.issuer}</span><time>{certificate.issued}</time></div><h4>{certificate.title}</h4></div>)}</div></article>)}</div></div></section>

      <section className="section" id="skills"><div className="sectionHeading"><p className="label">EXPERTISE</p><h2>Skills and capabilities</h2><p>A combination of project delivery, transformation, technology and analytical capabilities.</p></div><div className="skillGroups">{skillGroups.map((group) => <article className="skillGroup" key={group.title}><h3>{group.title}</h3><div className="skillsList">{group.skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div></article>)}</div></section>

<section className="fullWidthSection awardsSection" id="awards">
  <div className="section">
    <div className="sectionHeading awardsHeading">
      <div>
        <p className="label">PROJECT AWARDS AND RECOGNITION</p>

        <h2>Recognition for projects delivered with impact.</h2>
      </div>

      <p className="awardsSummary">
        Selected distinctions received by projects that I led as Project
        Manager at Postbank.
      </p>
    </div>

    <div className="awardsGrid">
      {projectAwards.map((item, index) => (
        <article
          className={`awardCard awardAccent-${item.accent}`}
          key={`${item.project}-${item.award}`}
        >
          <div className="awardTop">
            <span className="awardNumber">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="awardYear">{item.year}</span>
          </div>

          <div className="awardSymbol" aria-hidden="true">
            <span></span>
          </div>

          <p className="awardCategory">{item.category}</p>

          <h3>{item.award}</h3>

          <p className="awardOriginal">{item.awardOriginal}</p>

          <div className="recognizedProject">
            <span>Recognized project</span>
            <strong>{item.project}</strong>
          </div>

          <p className="awardDescription">{item.description}</p>

          <div className="awardDetails">
            <div>
              <span>Awarded by</span>
              <strong>{item.organization}</strong>
            </div>

            <div>
              <span>My role</span>
              <strong>{item.role}</strong>
            </div>
          </div>

          <a
            className="awardLink"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View public information about ${item.award} for ${item.project}`}
          >
            View public recognition
            <span aria-hidden="true">↗</span>
          </a>
        </article>
      ))}
    </div>

    <p className="awardsDisclaimer">
      The distinctions were awarded to the respective projects and
      organizations. My contribution was as Project Manager responsible for
      coordinating their delivery.
    </p>
  </div>
</section>

      <section className="contactSection" id="contact"><div className="contactContent"><p className="label">CONTACT</p><h2>Let&apos;s create meaningful impact.</h2><p>Connect with me to discuss project management, digital transformation, technology and AI initiatives.</p><div className="heroButtons contactButtons"><a className="button primary" href="https://www.linkedin.com/in/ivan-nikolov-safe%C2%AE-12249b1b5/" target="_blank" rel="noreferrer">View LinkedIn</a><a className="button secondary" href="mailto:ivan.krasenov.nikolov@gmail.com">Send email</a></div></div></section>

      <footer className="footer"><div className="footerIdentity"><a className="footerLogo" href="#home" aria-label="Back to top"><span>IKN</span><b>.</b></a><p>© {new Date().getFullYear()} Ivan K. Nikolov</p></div><a className="backToTop" href="#home">Back to top ↑</a></footer>
    </main>
  );
}

export default App;
