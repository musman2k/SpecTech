# SpecTech IoT Solutions — Website

A production-ready React website for an IoT engineering agency. Cyberpunk-industrial theme with dark navy, electric cyan, and amber accents.

---

## Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Framework  | React 18 + React Router v6             |
| Styling    | Tailwind CSS v3 (custom theme)          |
| Fonts      | Orbitron · Share Tech Mono · Exo 2     |
| Icons      | Emoji (zero-dependency)                |

---

## Directory Structure

```
spectech-iot/
├── public/
│   ├── index.html          ← HTML shell + Google Fonts link
│   ├── manifest.json       ← PWA manifest
│   └── robots.txt
│
├── src/
│   ├── index.js            ← ReactDOM entry point
│   ├── App.js              ← Router + top-level layout
│   ├── index.css           ← Tailwind directives + custom utilities
│   │
│   ├── constants/
│   │   ├── services.js     ← SERVICES array + TECH_STACK (single source of truth)
│   │   └── contact.js      ← AGENCY info (name, email, location, version)
│   │
│   ├── components/
│   │   ├── Navbar.js               ← Sticky nav, services dropdown, mobile menu
│   │   ├── HeroSection.js          ← Reusable hero banner for service pages
│   │   ├── ServiceCard.js          ← Card component for home services grid
│   │   ├── ServiceDetailLayout.js  ← Shared layout for all service detail pages
│   │   ├── TechTag.js              ← Chip badge for tools / technologies
│   │   ├── AboutSection.js         ← Agency stats + animated orbital graphic
│   │   ├── ContactSection.js       ← Contact form (used on every page)
│   │   └── Footer.js               ← Site-wide footer with nav links
│   │
│   ├── pages/
│   │   ├── Home.js                         ← Landing page
│   │   └── services/
│   │       ├── TrackerIntegration.js
│   │       ├── MITAppInventor.js
│   │       ├── ArduinoSensors.js
│   │       ├── FleetManagement.js
│   │       └── Robotics.js                 ← "Coming Soon" page
│   │
│   └── assets/                     ← Place logos, images here
│
├── tailwind.config.js      ← Custom colors, fonts, keyframes
├── postcss.config.js
├── package.json
└── README.md
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server  (http://localhost:3000)
npm start

# 3. Production build  → /build
npm run build
```

---

## Customisation Guide

### Agency branding — one file to change
Edit **`src/constants/contact.js`**:
```js
export const AGENCY = {
  name:     'YourBrand',
  fullName: 'YourBrand IoT Solutions',
  email:    'hello@yourdomain.com',
  location: 'Your City, Country',
  ...
};
```

### Colors
Edit **`tailwind.config.js`** → `theme.extend.colors`:
```js
'cyan':      '#00e5ff',   // primary accent
'amber':     '#ffab00',   // secondary accent
'deep-navy': '#050d1a',   // page background
'navy':      '#081428',   // card backgrounds
```

### Adding a new service
1. Add an entry to **`src/constants/services.js`** → `SERVICES` array
2. Create **`src/pages/services/YourService.js`** using `<ServiceDetailLayout>`
3. Add a `<Route>` in **`src/App.js`**

That's it — Navbar, Footer, and Home page all derive from `SERVICES` automatically.

---

## Pages & Routes

| Route                           | Component               | Notes               |
|---------------------------------|-------------------------|---------------------|
| `/`                             | `Home`                  | Landing page        |
| `/services/tracker-integration` | `TrackerIntegration`    |                     |
| `/services/mit-app-inventor`    | `MITAppInventor`        |                     |
| `/services/arduino-sensors`     | `ArduinoSensors`        |                     |
| `/services/fleet-management`    | `FleetManagement`       |                     |
| `/services/robotics`            | `Robotics`              | Coming Soon badge   |

---

## Features

- Sticky navbar with animated dropdown + mobile hamburger
- Scroll-triggered reveal animations (IntersectionObserver)
- Circuit-board SVG background patterns
- Animated orbital logo illustration on About section
- Clipped-corner card style throughout
- Glow effects on primary CTAs
- Contact form with simulated async submission state
- Coming Soon badge for Robotics service
- PWA-ready manifest
- Zero icon library dependency (emoji icons)
