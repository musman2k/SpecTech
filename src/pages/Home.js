import React, { useEffect, useRef } from 'react';
import ServiceCard from '../components/ServiceCard';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { SERVICES, TECH_STACK } from '../constants/services';

// Map SERVICES to ServiceCard props
const services = SERVICES.map((s) => ({
  icon:        s.icon,
  title:       s.title,
  description: s.short,
  path:        s.path,
  accentColor: s.accentColor,
  soon:        s.soon,
}));

export default function Home() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  return (
    <div>
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-deep-navy" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-70" />
        <div className="absolute inset-0 bg-circuit-pattern" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 100% 70% at 50% 40%, rgba(0,229,255,0.06) 0%, transparent 70%)' }} />

        {/* Animated horizontal scan */}
        <div
          className="absolute left-0 right-0 h-20 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,229,255,0.02) 50%, transparent 100%)',
            animation: 'scan 8s linear infinite',
          }}
        />

        {/* Corner decorations */}
        <div className="absolute top-20 left-6 w-16 h-16 border-t-2 border-l-2 border-cyan/30" />
        <div className="absolute top-20 right-6 w-16 h-16 border-t-2 border-r-2 border-cyan/30" />
        <div className="absolute bottom-10 left-6 w-16 h-16 border-b-2 border-l-2 border-amber/20" />
        <div className="absolute bottom-10 right-6 w-16 h-16 border-b-2 border-r-2 border-amber/20" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
          {/* Status line */}
          <div className="inline-flex items-center gap-3 border border-cyan/25 bg-cyan/5 clip-corner-sm px-4 py-2 mb-10 animate-fade-in">
            <div className="pulse-dot" style={{ width: 6, height: 6 }} />
            <span className="font-mono text-[10px] text-cyan/70 tracking-[0.25em]">SYSTEMS ONLINE // ACCEPTING NEW PROJECTS</span>
          </div>

          {/* Main headline */}
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-wider leading-none mb-6 animate-slide-in-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            <span className="block text-white">CONNECTING</span>
            <span className="block text-cyan text-glow-cyan">SENSORS</span>
            <span className="block text-white">TO THE CLOUD</span>
          </h1>

          {/* Tagline */}
          <p
            className="font-body text-white/55 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-in-up"
            style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
          >
            Full-stack IoT engineering — from microcontroller firmware and sensor integration
            to cloud platforms, real-time dashboards, and mobile applications.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <a
              href="#services"
              className="clip-corner bg-cyan/10 border border-cyan/50 hover:bg-cyan/20 hover:border-cyan text-cyan font-mono font-bold text-sm tracking-widest px-8 py-4 transition-all duration-200 animate-glow-cyan"
            >
              [ EXPLORE SERVICES ]
            </a>
            <a
              href="#contact"
              className="clip-corner bg-amber/10 border border-amber/40 hover:bg-amber/20 hover:border-amber text-amber font-mono font-bold text-sm tracking-widest px-8 py-4 transition-all duration-200 animate-glow-amber"
            >
              [ START A PROJECT ]
            </a>
          </div>

          {/* Tech stack ticker */}
          <div
            className="mt-16 animate-fade-in"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            <div className="font-mono text-[9px] text-white/20 tracking-[0.3em] mb-3">POWERED BY</div>
            <div className="flex flex-wrap justify-center gap-2">
              {TECH_STACK.map((t) => (
                <span key={t} className="font-mono text-[10px] text-white/25 border border-white/10 px-2 py-1 clip-corner-sm hover:text-cyan/60 hover:border-cyan/25 transition-colors duration-200 cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-slow">
          <div className="font-mono text-[9px] text-white/20 tracking-[0.3em]">SCROLL</div>
          <div className="w-[1px] h-8 bg-gradient-to-b from-cyan/40 to-transparent" />
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────── */}
      <section id="services" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={addReveal} className="reveal text-center mb-16">
            <div className="font-mono text-xs text-cyan/50 tracking-[0.4em] mb-3">WHAT WE BUILD</div>
            <h2 className="font-display text-3xl sm:text-4xl font-black tracking-wide text-white mb-4">
              OUR <span className="text-cyan text-glow-cyan">SERVICES</span>
            </h2>
            <p className="font-body text-white/50 max-w-2xl mx-auto">
              From embedded firmware to cloud infrastructure — we cover the complete IoT stack
              so you can focus on your business logic.
            </p>
          </div>

          <div ref={addReveal} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.path} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────── */}
      <div ref={addReveal} className="reveal">
        <AboutSection />
      </div>

      {/* ─── CONTACT ──────────────────────────────────── */}
      <div ref={addReveal} className="reveal">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
