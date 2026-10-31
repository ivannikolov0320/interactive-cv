import "./App.css";

function App() {
  return (
    <main className="page">

      <header className="header">
  <nav className="navigation">
    <a className="logo" href="#home">
      IK<span>.</span>
    </a>

    <div className="navigationLinks">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
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
          <a className="button primary" href="#about">
            About me
          </a>

          <a className="button secondary" href="#contact">
            Contact me
          </a>
        </div>
      </section>

      <section className="section" id="about">
        <p className="label">ABOUT ME</p>

        <h2>Turning complex initiatives into clear delivery plans.</h2>

        <p>
          I am a project manager focused on digital transformation,
          artificial intelligence and data-driven decision-making.
        </p>
      </section>

      <section className="section alternate" id="experience">
        <p className="label">EXPERIENCE</p>

        <h2>Project Manager</h2>

        <h3>Postbank</h3>

        <p>
          Managing digital transformation and technology initiatives across
          cross-functional teams.
        </p>
      </section>

      <section className="section" id="contact">
        <p className="label">CONTACT</p>

        <h2>Let&apos;s connect.</h2>

        <a
          className="button primary"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </section>

      <footer>
        <p>© 2026 Ivan K. Nikolov</p>
      </footer>
    </main>
  );
}

export default App;
