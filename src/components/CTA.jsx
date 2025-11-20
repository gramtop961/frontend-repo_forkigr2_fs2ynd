import { ArrowRight } from 'lucide-react'

function CTA() {
  return (
    <section id="demo" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-12 ring-1 ring-white/20 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_0%_0%,rgba(255,255,255,0.25),transparent_60%)]" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">See it in action</h3>
              <p className="mt-3 text-white/90">Get a guided tour tailored to your workflows. We’ll map modules to your exact use cases.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#" className="group inline-flex items-center gap-2 rounded-xl bg-white text-slate-950 px-5 py-3 font-medium shadow-lg hover:bg-blue-50 transition">
                Book my demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
