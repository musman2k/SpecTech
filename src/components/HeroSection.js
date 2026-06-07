import React from 'react';

export default function HeroSection({ title, subtitle, accent, description, badge }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-gradient" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,229,255,0.08) 0%, transparent 70%)'
      }} />
      {/* Horizontal accent lines */}
      <div className="absolute top-24 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="coming-soon-badge text-[0.65rem] tracking-[0.2em]">{badge}</span>
          </div>
        )}
        <div className="font-mono text-xs text-cyan/50 tracking-[0.4em] mb-4 uppercase">
          {subtitle}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-wider mb-6 leading-tight">
          <span className="text-white">{title} </span>
          {accent && <span className="text-cyan text-glow-cyan">{accent}</span>}
        </h1>
        {description && (
          <p className="font-body text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            {description}
          </p>
        )}
        {/* Bottom accent */}
        <div className="mt-8 flex justify-center gap-2 items-center">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-cyan/50" />
          <div className="w-1 h-1 bg-cyan rotate-45" />
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-cyan/50" />
        </div>
      </div>
    </section>
  );
}
