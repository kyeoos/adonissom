import React, { useEffect, useState } from 'react'
import './App.css'

const projects = [
  { id: 1, title: 'Student Board', image: '/images/graphics/studentboard.png', category: 'graphics' },
  { id: 2, title: 'Campaign Poster', image: '/images/graphics/campaign.jpg', category: 'graphics' },
  { id: 3, title: 'Campaign Variant', image: '/images/graphics/campaign2.png', category: 'graphics' },
  { id: 4, title: 'Project Mockup', image: '/images/uiux/project.png', category: 'uiux' },
  { id: 5, title: 'Insomnia Poster', image: '/images/graphics/insomnia.png', category: 'graphics' },
  { id: 6, title: 'MHHS Design', image: '/images/graphics/mhhs.png', category: 'graphics' },
  { id: 7, title: 'Officers Shirt', image: '/images/graphics/officers.png', category: 'graphics' },
  { id: 8, title: 'Officers Tee 2', image: '/images/graphics/officers2.png', category: 'graphics' },
  { id: 9, title: 'Directors Poster', image: '/images/graphics/directors.png', category: 'graphics' }
]

function App() {
  const [category, setCategory] = useState<'all' | 'graphics' | 'merch' | 'newsletters' | 'uiux'>('all')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
        else entry.target.classList.remove('visible')
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [category])
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
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">Graphic Design & UX</h2>
            <p className="subtitle">
              Cognitive Science student at UC Berkeley
            </p>
            <p className="description">
              Hello! My name is Adonis Som, a second year at UC Berkeley. I am currently majoring in Cognitive Science and pursuing a career in UI/UX. I have always had a passion for design and showcasing my creativity.
            </p>
            <div className="action-buttons">
              <a href="#work" className="btn-primary">View Portfolio</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="chrome-sphere"></div>
          </div>
        </section>

        <section id="about" className="about-section reveal-on-scroll">
          <div className="about-inner">
            <h2>About Me</h2>
            <p>
              I'm Adonis Som — a graphic designer and UX enthusiast studying Cognitive Science at UC Berkeley. I craft visual systems, branding, and user interfaces that balance aesthetics and clarity.
            </p>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-header reveal-on-scroll">
            <h2>Selected Work</h2>
            <div className="line"></div>
          </div>

          <div className="filters reveal-on-scroll" role="tablist" aria-label="Work categories">
            {['all','graphics','merch','newsletters','uiux'].map(cat => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat as any)}
                aria-pressed={category === cat}
              >{cat === 'uiux' ? 'UI/UX' : cat.charAt(0).toUpperCase() + cat.slice(1)}</button>
            ))}
          </div>

          <div className="gallery">
            {(() => {
              const filtered = category === 'all' ? projects : projects.filter(p => p.category === category)
              return filtered.map((p, index) => (
                <div 
                  key={p.id} 
                  className="project-card reveal-on-scroll"
                  style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                >
                  <img className="project-photo" src={p.image} alt={p.title} loading="lazy" />
                  <div className="project-overlay">
                    <div className="project-info">
                      <h3>{p.title}</h3>
                      <p>{p.category === 'uiux' ? 'UI / UX' : p.category.charAt(0).toUpperCase() + p.category.slice(1)}</p>
                    </div>
                  </div>
                </div>
              ))
            })()}
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
