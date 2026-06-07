import React from 'react';

export default function TechTag({ label, color = 'cyan' }) {
  if (color === 'amber') {
    return (
      <span className="inline-block px-3 py-1 text-xs font-mono border border-amber/30 text-amber/80 bg-amber/5 clip-corner-sm hover:bg-amber/10 hover:border-amber/60 transition-all duration-200 cursor-default">
        {label}
      </span>
    );
  }
  return (
    <span className="tech-tag cursor-default">
      {label}
    </span>
  );
}
