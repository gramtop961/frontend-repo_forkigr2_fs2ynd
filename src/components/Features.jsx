import { motion } from 'framer-motion'
import { Building2, ChartBar, Boxes, ShieldCheck, Zap, Workflow } from 'lucide-react'

const items = [
  {
    icon: Building2,
    title: 'Unified Operations',
    desc: 'Manage finance, supply chain, sales, and HR in one place with consistent workflows.',
  },
  {
    icon: ChartBar,
    title: 'Real‑time Insights',
    desc: 'Dashboards update instantly so your team can act on the latest numbers.',
  },
  {
    icon: Boxes,
    title: 'Inventory Mastery',
    desc: 'Track stock, batches, and orders with automated re‑ordering and alerts.',
  },
  {
    icon: Workflow,
    title: 'Automated Workflows',
    desc: 'Drag‑and‑drop approvals and rules that match how your business actually runs.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise‑grade Security',
    desc: 'SSO, role‑based access, and audit trails keep your data locked down.',
  },
  {
    icon: Zap,
    title: 'Fast and Flexible',
    desc: 'Modern architecture, APIs, and integrations that scale with your growth.',
  },
]

function Features() {
  return (
    <section id="features" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-white">
            Everything your team needs — beautifully integrated
          </motion.h2>
          <p className="mt-4 text-white/70">Designed for modern operations with a dark navy aesthetic that feels focused and calm.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-6 hover:bg-white/[0.06] transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center ring-1 ring-white/20 shadow-lg shadow-blue-500/20">
                {item.icon && <item.icon className="h-5 w-5" />}
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{item.title}</h3>
              <p className="mt-2 text-white/65">{item.desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="mt-3 text-sm text-white/60 opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-16 h-40 bg-gradient-to-t from-blue-500/20 via-indigo-500/20 to-transparent blur-3xl" />
    </section>
  )
}

export default Features
