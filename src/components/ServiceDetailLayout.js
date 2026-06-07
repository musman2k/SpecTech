import React from 'react';
import { Link } from 'react-router-dom';
import TechTag from './TechTag';
import ContactSection from './ContactSection';

export default function ServiceDetailLayout({
  title,
  subtitle,
  accentWord,
  description,
  overview,
  tools = [],
  features = [],
  useCases = [],
  process = [],
  comingSoon = false,
}) {
  return (
    <div className="min-h-screen bg-deep-navy">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
        <div className="absolute top-24 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs text-white/30 hover:text-cyan/60 transition-colors mb-8 group">
            <svg className="w-3 h-3 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            BACK TO HOME
          </Link>

          {comingSoon && (
            <div className="mb-6"><span className="coming-soon-badge text-xs tracking-widest">COMING SOON</span></div>
          )}

          <div className="font-mono text-xs text-cyan/50 tracking-[0.4em] mb-4 uppercase">{subtitle}</div>
          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-wider mb-6 leading-tight">
            <span className="text-white">{title} </span>
            {accentWord && <span className="text-cyan text-glow-cyan">{accentWord}</span>}
          </h1>
          <p className="font-body text-white/60 text-lg leading-relaxed">{description}</p>

          <div className="mt-8 flex justify-center gap-2 items-center">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-cyan/50" />
            <div className="w-1 h-1 bg-cyan rotate-45" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-cyan/50" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-20">

        {/* Overview */}
        {overview && (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-mono text-[10px] text-cyan/40 tracking-[0.3em] mb-3"> OVERVIEW</div>
              <h2 className="font-display text-2xl font-bold text-white tracking-wide mb-5">What We Deliver</h2>
              <div className="font-body text-white/60 leading-relaxed space-y-3">
                {overview.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="border border-cyan/15 clip-corner-sm p-4 bg-navy/60 hover:border-cyan/30 transition-colors duration-300">
                  <div className="text-xl mb-2">{f.icon}</div>
                  <h4 className="font-mono text-xs text-cyan font-bold tracking-wide mb-1">{f.title}</h4>
                  <p className="font-body text-xs text-white/45 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tools */}
        {tools.length > 0 && (
          <section>
            <div className="font-mono text-[10px] text-cyan/40 tracking-[0.3em] mb-3"> TECH STACK</div>
            <h2 className="font-display text-2xl font-bold text-white tracking-wide mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((t, i) => (
                <TechTag key={i} label={t.label} color={t.color || 'cyan'} />
              ))}
            </div>
          </section>
        )}

        {/* Process */}
        {process.length > 0 && (
          <section>
            <div className="font-mono text-[10px] text-cyan/40 tracking-[0.3em] mb-3"> HOW WE WORK</div>
            <h2 className="font-display text-2xl font-bold text-white tracking-wide mb-8">Our Process</h2>
            <div className="relative">
              {/* Connector line */}
              <div className="absolute left-6 top-10 bottom-10 w-[1px] bg-gradient-to-b from-cyan/40 via-cyan/20 to-transparent hidden sm:block" />
              <div className="space-y-6">
                {process.map((step, i) => (
                  <div key={i} className="relative flex gap-6 items-start group">
                    <div className="relative flex-shrink-0 w-12 h-12 border border-cyan/40 clip-corner-sm bg-navy flex items-center justify-center font-display text-sm font-black text-cyan group-hover:bg-cyan/10 transition-colors duration-200">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="border border-cyan/10 clip-corner-sm p-4 bg-navy/40 flex-1 hover:border-cyan/25 transition-colors duration-300">
                      <h4 className="font-mono text-sm text-white font-bold mb-1 tracking-wide">{step.title}</h4>
                      <p className="font-body text-sm text-white/50">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Use Cases */}
        {useCases.length > 0 && (
          <section>
            <div className="font-mono text-[10px] text-amber/40 tracking-[0.3em] mb-3"> APPLICATIONS</div>
            <h2 className="font-display text-2xl font-bold text-white tracking-wide mb-6">Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((uc, i) => (
                <div key={i} className="flex items-start gap-3 border border-amber/15 clip-corner-sm p-4 bg-amber/5 hover:border-amber/30 transition-colors duration-300">
                  <span className="text-amber mt-0.5 flex-shrink-0">{uc.icon}</span>
                  <div>
                    <h4 className="font-mono text-xs text-amber font-bold mb-1">{uc.title}</h4>
                    <p className="font-body text-xs text-white/45">{uc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center border border-cyan/20 clip-corner bg-navy/60 p-12">
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-cyan/40" />
          <h3 className="font-display text-xl font-bold text-white mb-4">
            Ready to <span className="text-cyan">get started</span>?
          </h3>
          <p className="font-body text-white/50 mb-8 max-w-md mx-auto">
            Reach out with your project requirements and let's build something remarkable.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 clip-corner bg-cyan/10 border border-cyan/50 hover:bg-cyan/20 hover:border-cyan text-cyan font-mono font-bold text-sm tracking-widest px-8 py-4 transition-all duration-200 animate-glow-cyan"
          >
            <span>[ INITIATE PROJECT ]</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </section>
      </div>

      <ContactSection />
    </div>
  );
}
