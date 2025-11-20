import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Next‑gen ERP platform
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.7 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Build a modern ERP for your growing business
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-5 text-lg md:text-xl text-white/70 max-w-2xl">
            Centralize operations, finance, inventory, and HR with a sleek, animated experience that feels as powerful as it looks.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-5 py-3 font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-50 transition">
              Book a live demo
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/15 hover:bg-white/15 transition">
              Explore features
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-80 w-[120%] bg-gradient-to-t from-blue-500/20 via-indigo-500/20 to-transparent blur-3xl pointer-events-none" />
    </section>
  )
}

export default Hero
