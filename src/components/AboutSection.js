import React from 'react';

const stats = [
  { value: '5+',   label: 'Years Experience' },
  { value: '50+',  label: 'IoT Projects' },
  { value: '100%', label: 'Cloud Uptime' },
  { value: '24/7', label: 'Monitoring' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-deep-navy" />
      <div className="absolute inset-0 bg-circuit-pattern opacity-20" />

      {/* Vertical accent line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan/10 to-transparent hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left — Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 animate-float">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 border border-cyan/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 border border-amber/15 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              <div className="absolute inset-8 border border-cyan/10 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
              
              {/* Center hexagon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-cyan/40 bg-navy/80 clip-corner flex flex-col items-center justify-center gap-2 animate-glow-cyan">
                  <div className="font-display text-3xl font-black text-cyan text-glow-cyan">IoT</div>
                  <div className="font-mono text-[9px] text-cyan/50 tracking-widest">SpecTech</div>
                </div>
              </div>

              {/* Orbit dots */}
              {['ESP8266', 'Arduino', 'LoRaWAN', 'MQTT'].map((label, i) => {
                const angle = (i * 90 - 45) * (Math.PI / 180);
                const r     = 124;
                const x     = 50 + r * Math.cos(angle) / 2.88;
                const y     = 50 + r * Math.sin(angle) / 2.88;
                return (
                  <div
                    key={label}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-2 h-2 bg-amber rounded-full animate-pulse-slow" />
                      <span className="font-mono text-[8px] text-white/40 whitespace-nowrap">{label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <div className="font-mono text-xs text-cyan/50 tracking-[0.4em] mb-3">ABOUT THE AGENCY</div>
            <h2 className="font-display text-3xl sm:text-4xl font-black tracking-wide text-white mb-6">
              FULL-STACK <span className="text-cyan text-glow-cyan">IoT</span> ENGINEERS
            </h2>
            <div className="space-y-4 text-white/60 font-body leading-relaxed mb-8">
              <p>
                We are a specialized IoT engineering agency with <span className="text-white font-medium">5+ years</span> of hands-on experience across the full embedded-to-cloud stack. From wiring sensors to deploying cloud dashboards, we handle every layer.
              </p>
              <p>
                Our engineers work with <span className="text-cyan font-medium">ESP32, Arduino, STM32, Raspberry Pi, LoRaWAN</span> and a wide variety of industrial sensors. We build end-to-end solutions: firmware, cloud connectivity, real-time dashboards, mobile applications, and fleet management systems.
              </p>
              <p>
                Whether you need a rapid prototype, a production-grade automation system, or an industrial IoT deployment — we deliver <span className="text-white font-medium">secure, optimized, and future-ready</span> systems tailored to your exact requirements.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="border border-cyan/20 bg-navy/50 clip-corner-sm p-4 text-center hover:border-cyan/40 transition-colors duration-300">
                  <div className="font-display text-xl font-black text-cyan text-glow-cyan">{s.value}</div>
                  <div className="font-mono text-[9px] text-white/40 tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
