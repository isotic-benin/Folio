import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen selection:bg-cancer-cyan/30 selection:text-cancer-moonlight">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] rounded-full bg-cancer-cyan/10 blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] md:w-[50vw] md:h-[50vw] rounded-full bg-[#0a192f]/80 blur-[100px] md:blur-[150px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] rounded-full bg-cancer-glow/5 blur-[100px] md:blur-[150px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
