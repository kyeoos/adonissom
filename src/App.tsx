import { useEffect, useState } from 'react'
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
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [category])

  return (
    <div className="portfolio-container">
      <div className="grid-overlay"></div>
      
      <header className="site-header">
        <div className="logo">
          <h1>adonis som</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#work">work</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <div className="hero-title-wrapper reveal-on-scroll">
              <h2 className="hero-title">
                Designing for the <br/>
                <span className="italic-text">mind & screen.</span>
              </h2>
            </div>
            
            <div className="hero-bottom reveal-on-scroll">
              <div className="hero-stats">
                <span className="stat-pill">UC Berkeley</span>
                <span className="stat-pill">Cognitive Science</span>
                <span className="stat-pill">UI/UX & Graphics</span>
              </div>
              <p className="description">
                Hi, I'm Adonis. I'm a student passionate about bridging the gap between human cognition and intuitive design. I love creating refined, user-centric interfaces and playful visual identities.
              </p>
            </div>
          </div>
          
          <div className="hero-visual reveal-on-scroll">
            <div className="image-frame">
              <img src="/images/headshot.avif" alt="Adonis Som" className="headshot-image" />
              <div className="floating-badge">✨ Open to work</div>
            </div>
          </div>
        </section>

        <div className="marquee-container">
          <div className="marquee-text">
            <span>graphic design • ui/ux • cognitive science • </span>
            <span className="italic-text">graphic design • ui/ux • cognitive science • </span>
            <span>graphic design • ui/ux • cognitive science • </span>
            <span className="italic-text">graphic design • ui/ux • cognitive science • </span>
          </div>
        </div>

        <section id="about" className="about-section reveal-on-scroll">
          <div className="about-grid">
            <div className="about-left">
              <h2 className="section-title">About <br/><span className="italic-text">me</span></h2>
              <div className="about-image-wrapper">
                <img src="/images/aboutme.avif" alt="Adonis being silly" className="about-image" />
                <div className="doodle-star">✧</div>
              </div>
            </div>
            <div className="about-text">
              <p>
                My name is Adonis Som, and I am a second year at UC Berkeley, majoring in Cognitive Science. I have always had a passion for design, and was able to express my creativity for graphics and illustration starting from when I was in high school.
              </p>
              <p>
                I was an editor for different clubs, created various merch for school events, and was a news editor for my Key Club's division, along with several other projects. Other than design, you'll likely catch me at the gym, thrifting, or doom scrolling on TikTok!
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-header reveal-on-scroll">
            <h2 className="section-title">Selected <span className="italic-text">work</span></h2>
            <div className="filters" role="tablist" aria-label="Work categories">
              {['all','graphics','merch','newsletters','uiux'].map(cat => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-btn ${category === cat ? 'active' : ''}`}
                  onClick={() => setCategory(cat as 'all' | 'graphics' | 'merch' | 'newsletters' | 'uiux')}
                  aria-pressed={category === cat}
                >
                  {cat === 'uiux' ? 'ui/ux' : cat}
                </button>
              ))}
            </div>
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
                  <div className="project-image-wrapper">
                    <img className="project-photo" src={p.image} alt={p.title} loading="lazy" />
                  </div>
                  <div className="project-info">
                    <h3>{p.title}</h3>
                    <p>{p.category === 'uiux' ? 'ui / ux' : p.category}</p>
                  </div>
                </div>
              ))
            })()}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <h2 className="footer-title">Let's <span className="italic-text">connect.</span></h2>
          <a href="#contact" className="btn-primary">Send a message</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Adonis Som.</p>
          <div className="status">Available for work</div>
        </div>
      </footer>
    </div>
  )
}

export default App