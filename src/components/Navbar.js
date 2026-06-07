import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES } from '../constants/services';

// Map SERVICES to the shape Navbar needs
const services = SERVICES.map((s) => ({
  label: s.title.replace(' & ', ' & ').replace(/\bAND\b/, '&'),
  path:  s.path,
  soon:  s.soon,
}));

export default function Navbar() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [dropOpen,    setDropOpen]    = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-deep-navy/95 backdrop-blur-md border-b border-cyan/20' : 'bg-transparent'
    }`}>
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 border border-cyan/60 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              <div className="absolute inset-[4px] border border-amber/40 rotate-12 group-hover:rotate-45 transition-transform duration-500" />
              <span className="text-cyan text-xs font-display font-bold">IoT</span>
            </div>
            <div>
              <span className="font-display text-sm font-bold text-white tracking-widest">Spec</span>
              <span className="font-display text-sm font-bold text-cyan">TECH</span>
              <div className="text-[9px] text-white/40 font-mono tracking-[0.2em] -mt-1">SOLUTIONS</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`animated-border text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                isActive('/') ? 'nav-link-active' : 'text-white/70 hover:text-white'
              }`}
            >
              HOME
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className={`animated-border flex items-center gap-1 text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname.startsWith('/services') ? 'nav-link-active' : 'text-white/70 hover:text-white'
                }`}
              >
                SERVICES
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${dropOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropOpen && (
                <div className="absolute top-full mt-3 right-0 w-56 bg-navy border border-cyan/20 clip-corner shadow-2xl shadow-cyan/10 overflow-hidden animate-fade-in">
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan/60" />
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className={`flex items-center justify-between px-4 py-3 text-xs font-mono tracking-wide border-b border-cyan/10 last:border-0 transition-all duration-200 group ${
                        isActive(s.path)
                          ? 'bg-cyan/10 text-cyan'
                          : 'text-white/60 hover:bg-cyan/5 hover:text-cyan'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-cyan/40 group-hover:text-cyan transition-colors">&gt;</span>
                        {s.label}
                      </span>
                      {s.soon && <span className="coming-soon-badge">SOON</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#about"
              className="animated-border text-sm font-body font-medium tracking-wide text-white/70 hover:text-white transition-colors duration-200"
            >
              ABOUT
            </a>

            <a
              href="#contact"
              className="clip-corner-sm bg-cyan/10 border border-cyan/40 hover:bg-cyan/20 hover:border-cyan text-cyan text-xs font-mono font-bold tracking-widest px-5 py-2 transition-all duration-200 animate-glow-cyan"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0,1,2].map((i) => (
              <span
                key={i}
                className={`block h-[1px] bg-cyan transition-all duration-300 ${
                  i === 0 ? (menuOpen ? 'w-6 rotate-45 translate-y-[6px]' : 'w-6') :
                  i === 1 ? (menuOpen ? 'w-0 opacity-0' : 'w-4') :
                             (menuOpen ? 'w-6 -rotate-45 -translate-y-[6px]' : 'w-5')
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-cyan/20 px-4 py-4 space-y-1">
          <Link to="/" className="block py-3 text-sm font-mono text-white/70 hover:text-cyan border-b border-cyan/10">HOME</Link>
          <div className="border-b border-cyan/10 pb-2">
            <p className="py-3 text-sm font-mono text-white/40 tracking-widest">SERVICES</p>
            {services.map((s) => (
              <Link key={s.path} to={s.path} className="flex items-center justify-between py-2 pl-4 text-xs font-mono text-white/60 hover:text-cyan">
                <span>&gt; {s.label}</span>
                {s.soon && <span className="coming-soon-badge">SOON</span>}
              </Link>
            ))}
          </div>
          <a href="#about"   className="block py-3 text-sm font-mono text-white/70 hover:text-cyan border-b border-cyan/10">ABOUT</a>
          <a href="#contact" className="block py-3 text-sm font-mono text-cyan">CONTACT US</a>
        </div>
      )}
    </nav>
  );
}
