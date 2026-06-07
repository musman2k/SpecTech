/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'deep-navy':   '#050d1a',
        'navy':        '#081428',
        'navy-light':  '#0d1f38',
        'navy-border': '#112240',
        'cyan':        '#00e5ff',
        'cyan-dim':    '#00b8cc',
        'amber':       '#ffab00',
        'amber-dim':   '#cc8800',
        'green-neon':  '#00ff88',
        'red-alert':   '#ff3355',
      },
      fontFamily: {
        mono:    ['"Share Tech Mono"', 'Courier New', 'monospace'],
        display: ['"Orbitron"', 'sans-serif'],
        body:    ['"Exo 2"', 'sans-serif'],
      },
      animation: {
        'pulse-slow':   'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'flicker':      'flicker 4s linear infinite',
        'scan':         'scan 6s linear infinite',
        'float':        'float 6s ease-in-out infinite',
        'glow-cyan':    'glowCyan 2s ease-in-out infinite alternate',
        'glow-amber':   'glowAmber 2s ease-in-out infinite alternate',
        'slide-in-up':  'slideInUp 0.6s ease forwards',
        'fade-in':      'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        flicker: {
          '0%,19%,21%,23%,25%,54%,56%,100%': { opacity: 1 },
          '20%,24%,55%': { opacity: 0.4 },
        },
        scan: {
          '0%': { backgroundPosition: '0 -100vh' },
          '100%': { backgroundPosition: '0 100vh' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        glowCyan: {
          from: { boxShadow: '0 0 8px #00e5ff44, 0 0 20px #00e5ff22' },
          to:   { boxShadow: '0 0 16px #00e5ff88, 0 0 40px #00e5ff44' },
        },
        glowAmber: {
          from: { boxShadow: '0 0 8px #ffab0044, 0 0 20px #ffab0022' },
          to:   { boxShadow: '0 0 16px #ffab0088, 0 0 40px #ffab0044' },
        },
        slideInUp: {
          from: { opacity: 0, transform: 'translateY(40px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)
        `,
        'circuit': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2300e5ff' stroke-width='0.3' opacity='0.08'%3E%3Cpath d='M30 0v15M30 45v15M0 30h15M45 30h15M15 15l10 10M35 35l10 10M45 15L35 25M25 35l-10 10'/%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3Ccircle cx='45' cy='15' r='2'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
};
