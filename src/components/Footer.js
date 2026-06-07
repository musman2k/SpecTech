import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants/services';
import { AGENCY } from '../constants/contact';

const serviceLinks = SERVICES.map((s) => ({ label: s.title, path: s.path, soon: s.soon }));

export default function Footer() {
  return (
    <footer className="relative bg-navy border-t border-cyan/15 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center border border-cyan/50 rotate-45">
                <span className="text-cyan text-[10px] font-display font-bold -rotate-45">IoT</span>
              </div>
              <span className="font-display text-sm font-bold text-white tracking-widest">
                Spec<span className="text-cyan">TECH</span>
              </span>
            </div>
            <p className="font-body text-xs text-white/40 leading-relaxed max-w-xs">
              End-to-end IoT engineering: from sensors and microcontrollers to cloud platforms and mobile apps.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div className="pulse-dot" />
              <span className="font-mono text-[10px] text-green-neon/80">ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[10px] text-cyan/50 tracking-[0.3em] mb-4">SERVICES</h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="font-body text-xs text-white/40 hover:text-cyan transition-colors duration-200 flex items-center gap-2">
                    <span className="text-cyan/20">&gt;</span> {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 className="font-mono text-[10px] text-cyan/50 tracking-[0.3em] mb-4">CONNECT</h4>
            <div className="space-y-3">
              <div className="font-body text-xs text-white/40">📡 {AGENCY.email}</div>
              <div className="font-body text-xs text-white/40">🌐 {AGENCY.location}</div>
              <div className="font-body text-xs text-white/40">⏱ Available: 24/7 for IoT emergencies</div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-5 font-mono text-xs border border-cyan/30 text-cyan/70 px-4 py-2 clip-corner-sm hover:border-cyan hover:text-cyan transition-all duration-200"
            >
              GET IN TOUCH →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cyan/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-white/20">
          © {new Date().getFullYear()} {AGENCY.fullName}. All systems reserved.
          </p>
          <p className="font-mono text-[10px] text-cyan/20">
            {AGENCY.version} SIGNAL STRONG LATENCY: 0ms
          </p>
        </div>
      </div>
    </footer>
  );
}
