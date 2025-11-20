const logos = ['Stripe','Shopify','Slack','HubSpot','QuickBooks','Salesforce']

function Logos() {
  return (
    <section aria-label="Trusted by" className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
          <p className="text-center text-xs uppercase tracking-widest text-white/50">Trusted by forward‑thinking teams</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {logos.map((name) => (
              <div key={name} className="text-center text-white/60 text-sm py-2 opacity-70 hover:opacity-100 transition">{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Logos
