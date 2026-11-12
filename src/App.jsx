import './App.css'

const skills = [
  {
    category: 'Programming',
    items: ['C Programming', 'JavaScript', 'Python – Learning']
  },
  {
    category: 'Web Development',
    items: ['HTML', 'CSS', 'React', 'JavaScript']
  },
  {
    category: 'Cybersecurity',
    items: ['Networking Fundamentals', 'Cybersecurity Fundamentals', 'Linux']
  },
  {
    category: 'Tools & Platforms',
    items: ['VS Code', 'GitHub', 'Ubuntu', 'Figma']
  }
]

const projects = [
  {
    number: '01',
    name: 'EduBridge',
    type: 'Education Technology',
    status: 'Project Exploration',
    description:
      'An educational platform concept focused on connecting learners with useful learning resources and creating a more accessible learning experience.',
    technologies: 'Web Development • UI/UX • Research'
  },
  {
    number: '02',
    name: 'UPSC Unlock',
    type: 'Productivity & Education',
    status: 'Website Concept',
    description:
      'A study-planning concept designed to help learners organise daily study goals, track progress and build consistent learning habits.',
    technologies: 'HTML • CSS • JavaScript'
  },
  {
    number: '03',
    name: 'Project Phoenix',
    type: 'Smartphone Utility',
    status: 'Innovation Idea',
    description:
      'An idea for improving communication when a phone is in silent mode, helping users stay informed about important calls and notifications.',
    technologies: 'Problem Solving • Research • App Development'
  }
]

const experiences = [
  {
    role: 'Team Leader',
    organisation: 'Novanest – NEC Team',
    description:
      'Leading a student team, coordinating activities, encouraging collaboration and contributing to innovation-focused initiatives.'
  },
  {
    role: 'Student & Technology Enthusiast',
    organisation: 'RGUKT Nuzvid',
    description:
      'Exploring computer science, participating in learning activities and developing practical technical skills through projects.'
  }
]

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}

      <nav className="navbar">

        <a href="#home" className="logo-mark" aria-label="Home">
         <img
  src={`${import.meta.env.BASE_URL}my-logo.png`}
  alt="KSD Royal Logo"
/> 
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Connect ↗
        </a>

      </nav>


      {/* HERO SECTION */}

      <main className="hero" id="home">

        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            OPEN TO LEARNING & OPPORTUNITIES
          </div>

          <p className="greeting">HELLO, I'M</p>

          <h1>
            K V S Dhana
            <br />
            Lakshmi <span>Royal.</span>
          </h1>

          <h2>
            Aspiring Cybersecurity Professional
            <br />
            <span>CSE Student | Technology Enthusiast</span>
          </h2>

          <p className="tagline">
            Ideas Without Limits.
            <br />
            Learning Without Boundaries.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>

            <a href="#about" className="secondary-button">
              Discover More
            </a>

          </div>

        </div>


        {/* TECHNOLOGY VISUAL */}

        <div className="hero-visual">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          <div className="visual-core">
            <div className="core-inner">
              &lt;/&gt;
            </div>
          </div>

          <div className="floating-card card-one">
            <span>01</span>
            <p>INNOVATION</p>
          </div>

          <div className="floating-card card-two">
            <span>02</span>
            <p>SECURITY</p>
          </div>

          <div className="floating-card card-three">
            <span>03</span>
            <p>CREATIVITY</p>
          </div>

        </div>

      </main>


      {/* ABOUT SECTION */}

      <section className="next-section" id="about">

        <p className="section-label">01 — ABOUT ME</p>

        <h2>
          Beyond the <span>Ordinary.</span>
        </h2>

        <p>
          I'm K V S Dhana Lakshmi Royal, a Computer Science and
          Engineering student at RGUKT Nuzvid, passionate about
          technology, innovation and continuous learning.
        </p>

        <p>
          My interests span Web Development, Cybersecurity,
          Artificial Intelligence and Software Engineering.
          I enjoy exploring new technologies, experimenting
          with ideas and understanding how technology can
          solve real-world challenges.
        </p>

        <p>
          Beyond academics, I value leadership, teamwork,
          creativity and collaboration. My involvement in
          student initiatives and project activities has
          encouraged me to think differently, take responsibility
          and turn ideas into action.
        </p>

        <p>
          I believe learning is a continuous journey. My goal
          is to develop meaningful software solutions, explore
          emerging technologies and contribute to innovations
          that create a positive impact.
        </p>

      </section>


      {/* EDUCATION SECTION */}

      <section className="next-section" id="education">

        <p className="section-label">02 — EDUCATION</p>

        <h2>
          My Academic <span>Journey.</span>
        </h2>

        <div className="info-card">

          <h3>B.Tech — Computer Science and Engineering</h3>

          <p>Rajiv Gandhi University of Knowledge Technologies</p>

          <p>RGUKT Nuzvid, Andhra Pradesh</p>

          <p>Currently pursuing — First Year</p>

        </div>

        <div className="info-card">

          <h3>Pre-University Course (PUC)</h3>

          <p>RGUKT Nuzvid</p>

          <p>Academic average: 9.30 CGPA</p>

        </div>

      </section>


      {/* SKILLS SECTION */}

      <section className="next-section" id="skills">

        <p className="section-label">03 — MY EXPERTISE</p>

        <h2>
          Skills & <span>Interests.</span>
        </h2>

        <p>
          My technical journey is continuously evolving.
          These are the areas I am exploring and developing.
        </p>

        <div className="card-grid">

          {skills.map((skill, index) => (

            <div className="info-card" key={index}>

              <span className="card-number">
                0{index + 1}
              </span>

              <h3>{skill.category}</h3>

              <div className="skill-list">

                {skill.items.map((item, itemIndex) => (

                  <span className="skill-tag" key={itemIndex}>
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* PROJECTS SECTION */}

      <section className="next-section" id="projects">

        <p className="section-label">04 — SELECTED WORK</p>

        <h2>
          Ideas into <span>Projects.</span>
        </h2>

        <p>
          Exploring problems, researching possibilities
          and developing ideas into meaningful solutions.
        </p>

        <div className="card-grid">

          {projects.map((project) => (

            <article className="project-card" key={project.number}>

              <span className="card-number">
                {project.number}
              </span>

              <p className="project-type">
                {project.type}
              </p>

              <h3>{project.name}</h3>

              <span className="project-status">
                {project.status}
              </span>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies}
              </div>

            </article>

          ))}

        </div>

      </section>


      {/* EXPERIENCE SECTION */}

      <section className="next-section" id="experience">

        <p className="section-label">05 — LEADERSHIP & EXPERIENCE</p>

        <h2>
          Learning Beyond <span>Classrooms.</span>
        </h2>

        <div className="card-grid">

          {experiences.map((experience, index) => (

            <div className="info-card" key={index}>

              <span className="card-number">
                0{index + 1}
              </span>

              <h3>{experience.role}</h3>

              <p className="experience-org">
                {experience.organisation}
              </p>

              <p>{experience.description}</p>

            </div>

          ))}

        </div>

      </section>


      {/* ACHIEVEMENTS SECTION */}

      <section className="next-section" id="achievements">

        <p className="section-label">06 — ACHIEVEMENTS & ACTIVITIES</p>

        <h2>
          Milestones of <span>Growth.</span>
        </h2>

        <div className="info-card">

          <h3>Academic Performance</h3>

          <p>
            Achieved a 9.30 CGPA average during the Pre-University Course.
          </p>

        </div>

        <div className="info-card">

          <h3>NCC — Army Wing</h3>

          <p>
            Completed Tritiya Sopan.
          </p>

        </div>

        <p>
          More verified certifications, activities and achievements
          will be added as I progress.
        </p>

      </section>


      {/* RESUME SECTION */}

      <section className="next-section" id="resume">

        <p className="section-label">07 — MY RESUME</p>

        <h2>
          A Closer Look at <span>My Journey.</span>
        </h2>

        <p>
          Explore my academic background, technical interests,
          projects and experiences.
        </p>

        <p>
          My downloadable resume will be available here soon.
        </p>

      </section>


    {/* CONTACT SECTION */}

<section id="contact" className="section">
  <h2>Let's Connect</h2>
  <p className="section-subtitle">
    Feel free to reach out through any of these platforms.
  </p>

  <div className="contact-grid">

    <a href="mailto:kvsdhanalakshmi09@gmail.com" className="contact-card">
      <span>✉</span>
      <h3>Email</h3>
      <p>kvsdhanalakshmi09@gmail.com</p>
    </a>

    <a href="https://github.com/kvsdhanalakshmi09"
       target="_blank" rel="noreferrer" className="contact-card">
      <span>⌘</span>
      <h3>GitHub</h3>
      <p>https://github.com/kvsdhanalakshmi09</p>
    </a>

<a
  href="https://www.linkedin.com/in/dhanalakshmi-royal-kvs-0a9a18328?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  target="_blank"
  rel="noreferrer"
  className="contact-card"
>
  <span>in</span>
  <h3>LinkedIn</h3>
  <p>Click me to connect ↗</p>
</a>



  </div>
</section>



      {/* FOOTER */}

      <footer>

        <p>
          © 2026 K V S Dhana Lakshmi Royal.
        </p>

        <p>
          Ideas Without Limits. Learning Without Boundaries.
        </p>

        <a href="#home">
          Back to Top ↑
        </a>

      </footer>

    </div>
  )
}

export default App