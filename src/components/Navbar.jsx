import { useState } from 'react'
import { Menu, ArrowRight } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 ring-1 ring-white/10 flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <span className="text-white text-lg font-semibold tracking-tight">Equinox ERP</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
            <a href="#integrations" className="text-white/70 hover:text-white transition">Integrations</a>
            <a href="#pricing" className="text-white/70 hover:text-white transition">Pricing</a>
            <a href="#about" className="text-white/70 hover:text-white transition">About</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-white/80 hover:text-white ring-1 ring-white/10 hover:ring-white/20 transition">Sign in</button>
            <button className="group px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-blue-50 transition inline-flex items-center gap-2">
              Get demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white p-2 rounded-lg ring-1 ring-white/10">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="mt-4 md:hidden rounded-xl ring-1 ring-white/10 bg-white/5 backdrop-blur-md p-4 space-y-3">
            <a href="#features" className="block text-white/80">Features</a>
            <a href="#integrations" className="block text-white/80">Integrations</a>
            <a href="#pricing" className="block text-white/80">Pricing</a>
            <a href="#about" className="block text-white/80">About</a>
            <div className="pt-2 border-t border-white/10 flex items-center gap-3">
              <button className="px-4 py-2 rounded-lg text-white/80 ring-1 ring-white/10">Sign in</button>
              <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium">Get demo</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
