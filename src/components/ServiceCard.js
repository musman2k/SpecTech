import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ icon, title, description, path, soon, accentColor = 'cyan', index = 0 }) {
  const isCyan  = accentColor === 'cyan';
  const colors  = isCyan
    ? { border: 'border-cyan/20 hover:border-cyan/60', glow: 'hover:shadow-cyan/10', tag: 'text-cyan', btn: 'border-cyan/40 text-cyan hover:bg-cyan/10 hover:border-cyan' }
    : { border: 'border-amber/20 hover:border-amber/60', glow: 'hover:shadow-amber/10', tag: 'text-amber', btn: 'border-amber/40 text-amber hover:bg-amber/10 hover:border-amber' };

  return (
    <div
      className={`relative group bg-navy border ${colors.border} clip-corner p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${colors.glow} animate-fade-in`}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
    >
      {/* Corner decoration */}
      <div className={`absolute top-0 right-0 w-4 h-4 border-t border-r ${isCyan ? 'border-cyan/50' : 'border-amber/50'} group-hover:w-6 group-hover:h-6 transition-all duration-300`} />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10" />

      {/* Index number */}
      <div className="absolute top-4 left-4 font-mono text-xs text-white/10 font-bold select-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Soon badge */}
      {soon && (
        <div className="absolute top-3 right-8">
          <span className="coming-soon-badge">COMING SOON</span>
        </div>
      )}

      {/* Icon */}
      <div className={`mb-4 mt-4 text-3xl ${colors.tag} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className={`font-display text-sm font-bold tracking-wide mb-3 ${colors.tag}`}>
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-white/55 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* CTA */}
      {soon ? (
        <div className={`inline-flex items-center gap-2 text-xs font-mono ${colors.tag} opacity-40`}>
          <span className="coming-soon-badge">IN DEVELOPMENT</span>
        </div>
      ) : (
        <Link
          to={path}
          className={`inline-flex items-center gap-2 text-xs font-mono border ${colors.btn} clip-corner-sm px-4 py-2 transition-all duration-200`}
        >
          EXPLORE SERVICE
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      )}
    </div>
  );
}
