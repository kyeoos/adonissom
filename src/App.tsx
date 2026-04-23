import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <div className="grid-overlay"></div>
      <header className="y2k-header">
        <div className="logo">
          <h1>ADONIS SOM</h1>
          <span className="badge">v1.0</span>
        </div>
        <nav>
          <ul>
            <li><a href="#work">[ WORK ]</a></li>
            <li><a href="#about">[ ABOUT ]</a></li>
            <li><a href="#contact">[ CONTACT ]</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <h2 className="glitch" data-text="Graphic Design & UX">Graphic Design & UX</h2>
            <p className="subtitle">
              Intended Cognitive Science @ UC Berkeley
            </p>
            <p className="description">
              Bridging the gap between human cognition and digital interfaces. 
              Specializing in Y2K-inspired aesthetics, user-centric design, and functional visual systems.
            </p>
            <div className="action-buttons">
              <a href="#work" className="btn-primary">VIEW_ARCHIVE.exe</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="chrome-sphere"></div>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-header">
            <h2>// SELECTED_WORKS</h2>
            <div className="line"></div>
          </div>
          <div className="gallery">
            <div className="project-card">
              <div className="project-image placeholder">IMG_01</div>
              <div className="project-info">
                <h3>UX Research</h3>
                <p>Cognitive load analysis</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image placeholder">IMG_02</div>
              <div className="project-info">
                <h3>Brand Identity</h3>
                <p>Y2K Revival</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image placeholder">IMG_03</div>
              <div className="project-info">
                <h3>Interface Design</h3>
                <p>Web Application</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="y2k-footer">
        <div className="marquee">
          <span>SYSTEM ONLINE • ADONIS SOM • GRAPHIC DESIGN • UX • COGNITIVE SCIENCE • UC BERKELEY • </span>
          <span>SYSTEM ONLINE • ADONIS SOM • GRAPHIC DESIGN • UX • COGNITIVE SCIENCE • UC BERKELEY • </span>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ADONIS SOM. ALL RIGHTS RESERVED.</p>
          <div className="status">STATUS: OPTIMAL</div>
        </div>
      </footer>
    </div>
  )
}

export default App
