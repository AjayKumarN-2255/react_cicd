
import './App.css'

function App() {

  return (
    <>
      <main className="container">
        <section className="hero">
          <h1>Build. Deploy. Scale.(updated) </h1>
          <p>
            A modern React frontend ready for real-world applications.
            Clean structure, reusable components, and production-ready.
          </p>

          <div className="actions">
            <button className="primary">Get Started</button>
            <button className="secondary">Learn More</button>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>Fast</h3>
            <p>Optimized performance using modern React patterns.</p>
          </div>

          <div className="feature-card">
            <h3>Scalable</h3>
            <p>Component-based architecture that grows with your app.</p>
          </div>

          <div className="feature-card">
            <h3>Production Ready</h3>
            <p>Built to integrate with Docker and CI/CD pipelines.</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
