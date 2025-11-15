import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Database, Rocket, ShieldCheck, Workflow, Zap, Sparkles, Globe, MousePointerClick } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function App() {
  const scrollToFeatures = () => {
    const el = document.getElementById('features')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/60 border-b border-teal-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold">F</div>
            <span className="font-extrabold tracking-tight text-xl">Faramir</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="/test" className="text-gray-600 hover:text-gray-900">Status</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={scrollToFeatures} className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-teal-200 text-teal-700 hover:bg-teal-50 transition">
              Explore
            </button>
            <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition shadow-sm">
              Start free trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section className="relative w-full" style={{ minHeight: '90vh' }}>
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* subtle gradient overlays to make text readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal-50/60 via-transparent to-transparent" />

        <div className="relative z-10 pt-28 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-3 py-1 text-xs text-teal-700 shadow-sm">
                <Sparkles className="h-3.5 w-3.5" /> New: Visual workflow builder
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-5 text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900">
                Extract Any Data, Anywhere
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-5 text-lg text-gray-700 leading-relaxed">
                Powerful web scraping tools that turn complex data extraction into simple workflows. Build automated pipelines, enrich datasets, and scale your data operations effortlessly.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#cta" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal-600 text-white font-medium shadow-sm hover:bg-teal-700 transition">
                  Start free trial
                  <Rocket className="h-4 w-4" />
                </a>
                <a href="#features" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-teal-200 text-teal-700 bg-white/70 hover:bg-white transition">
                  See features
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: <Database className="h-5 w-5 text-teal-600" />, label: 'Data at scale' },
                  { icon: <ShieldCheck className="h-5 w-5 text-teal-600" />, label: 'Anti-blocking' },
                  { icon: <Workflow className="h-5 w-5 text-teal-600" />, label: 'Visual flows' },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    {f.icon}
                    <span>{f.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="lg:col-span-6" />
          </div>
        </div>
      </section>

      {/* Logo bar */}
      <section className="py-10 bg-gradient-to-b from-white to-teal-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-6">Trusted by data teams and developers</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 opacity-70">
            {['Nebula Labs','AtlasIQ','DataForge','Orion','Kite','Quanta'].map((n, i) => (
              <div key={i} className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500 text-sm">{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Turn messy websites into clean, structured data</h2>
            <p className="mt-4 text-gray-600">Everything you need to scrape at scale: render JavaScript, rotate proxies, solve captchas, and orchestrate workflows — without the brittle code.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Zap className="h-6 w-6 text-teal-600" />,
                title: 'Blazing-fast extraction',
                desc: 'Headless browser rendering with smart caching and automatic retries.'
              },
              {
                icon: <Globe className="h-6 w-6 text-teal-600" />,
                title: 'Global proxy network',
                desc: 'Residential and datacenter pools with automatic rotation and geotargeting.'
              },
              {
                icon: <MousePointerClick className="h-6 w-6 text-teal-600" />,
                title: 'No-code workflow builder',
                desc: 'Drag, drop, and connect steps to build complex, reliable pipelines visually.'
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-teal-600" />,
                title: 'Anti-blocking built in',
                desc: 'Human-like timing, captcha solving, and device fingerprint rotation.'
              },
              {
                icon: <Database className="h-6 w-6 text-teal-600" />,
                title: 'Structured outputs',
                desc: 'Export to JSON, CSV, Parquet, and stream directly to your data warehouse.'
              },
              {
                icon: <Workflow className="h-6 w-6 text-teal-600" />,
                title: 'Schedule & monitor',
                desc: 'Automate schedules, set SLAs, and monitor with alerts and dashboards.'
              }
            ].map((f, idx) => (
              <div key={idx} className="rounded-2xl border border-teal-100 p-6 bg-gradient-to-br from-white to-teal-50/30 hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-teal-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Simple, powerful workflow</h2>
            <p className="mt-4 text-gray-600">From idea to production in minutes. No complex setup — just add steps and hit run.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Point & capture',
                desc: 'Select elements visually or with CSS/XPath. Preview output instantly.'
              },
              {
                step: '2',
                title: 'Automate & enrich',
                desc: 'Chain steps, log in, paginate, and enrich results with APIs.'
              },
              {
                step: '3',
                title: 'Scale & ship',
                desc: 'Schedule runs, stream to your warehouse, and monitor with alerts.'
              }
            ].map((s, i) => (
              <div key={i} className="relative rounded-2xl bg-white border border-teal-100 p-6">
                <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-semibold shadow">{s.step}</div>
                <h3 className="mt-6 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing (teaser) */}
      <section id="pricing" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Pricing that scales with you</h2>
            <p className="mt-4 text-gray-600">Transparent per-run pricing and generous free tier. Only pay for what you extract.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: 'Starter', price: 'Free', features: ['1,000 requests / mo', '1 concurrent run', 'Community support'] },
              { name: 'Growth', price: '$79/mo', features: ['100,000 requests', '5 concurrent runs', 'Email support'] },
              { name: 'Scale', price: 'Custom', features: ['Millions of requests', 'Dedicated pool', 'SLA & SSO'] },
            ].map((p, i) => (
              <div key={i} className={`rounded-2xl p-6 border ${i===1 ? 'border-teal-300 shadow-lg' : 'border-teal-100'} bg-gradient-to-br from-white to-teal-50/30`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <span className="text-teal-700 font-semibold">{p.price}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600" /> {f}</li>
                  ))}
                </ul>
                <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-md ${i===1 ? 'bg-teal-600 text-white hover:bg-teal-700' : 'border border-teal-200 text-teal-700 hover:bg-teal-50'} transition`}>
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to build your first data pipeline?</h3>
            <p className="mt-4 text-teal-100">Start for free. No credit card required. Spin up your first workflow in minutes and scale without the headaches.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-teal-700 font-medium shadow-sm hover:bg-teal-50 transition">Start free trial</a>
            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition">Book a demo</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold">F</div>
            <span className="font-semibold">Faramir</span>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Faramir, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
