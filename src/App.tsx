import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <header>
        <h1>My Graphic Design Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section id="work">
          <h2>Selected Works</h2>
          <div className="gallery">
            {/* Add portfolio items here */}
            <div className="placeholder-item">Project 1</div>
            <div className="placeholder-item">Project 2</div>
            <div className="placeholder-item">Project 3</div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Graphic Designer. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
