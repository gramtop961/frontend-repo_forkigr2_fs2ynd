import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Decorative background accents */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.15]" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_10%_-10%,#3b82f680,transparent_60%),radial-gradient(800px_circle_at_90%_-10%,#6366f180,transparent_60%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 ring-1 ring-white/15 flex items-center justify-center">
              <span className="text-white text-sm font-bold">E</span>
            </div>
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} Equinox ERP. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
