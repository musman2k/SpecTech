import React, { useState } from 'react';
import { functions } from '../lib/appwrite';
import { AGENCY } from '../constants/contact';

// ─── Your deployed Appwrite Function ID ──────────────────────────────────────
const FUNCTION_ID = '6a25a59e00340a65df7e';

export default function ContactSection() {
  const [form, setForm]     = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const execution = await functions.createExecution(
        FUNCTION_ID,
        JSON.stringify(form),               // body sent as JSON
        false,                              // async: false = wait for result
        '/',                                // path
        'POST',                             // method
        { 'content-type': 'application/json' }
      );

      const result = JSON.parse(execution.responseBody);

      if (result.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
        setErrorMsg(result.message ?? 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Could not reach the server. Please check your connection.');
      console.error('Appwrite function error:', err);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-circuit-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="font-mono text-xs text-cyan/50 tracking-[0.4em] mb-3">CONNECT WITH US</div>
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-wide text-white mb-4">
            START YOUR <span className="text-cyan text-glow-cyan">PROJECT</span>
          </h2>
          <p className="font-body text-white/50 max-w-xl mx-auto">
            Have an IoT idea or challenge? We engineer solutions from sensor to cloud. Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <div className="space-y-8">
            {[
              { icon: '📡', label: 'SIGNAL FREQUENCY', value: AGENCY.email,    sub: 'Typical reply: < 24 hours' },
              { icon: '🌐', label: 'NETWORK NODE',      value: AGENCY.location, sub: 'Remote & On-site available' },
              { icon: '⚡', label: 'UPTIME',            value: '24/7 Support',  sub: 'For critical IoT systems' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 group">
                <div className="w-12 h-12 border border-cyan/30 clip-corner-sm flex items-center justify-center text-xl bg-cyan/5 flex-shrink-0 group-hover:border-cyan/60 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] text-cyan/50 tracking-widest mb-1">{item.label}</div>
                  <div className="font-body font-medium text-white">{item.value}</div>
                  <div className="font-mono text-xs text-white/30">{item.sub}</div>
                </div>
              </div>
            ))}

            {/* Status */}
            <div className="border border-cyan/20 clip-corner p-4 bg-cyan/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="pulse-dot" />
                <span className="font-mono text-xs text-green-neon tracking-widest">SYSTEMS ONLINE</span>
              </div>
              <p className="font-body text-xs text-white/40">
                All services operational. Currently accepting new projects.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan/40" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber/40" />

            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="text-4xl animate-float">✅</div>
                <h3 className="font-display text-lg font-bold text-cyan text-glow-cyan">MESSAGE TRANSMITTED</h3>
                <p className="font-body text-white/50">We've received your signal. Expect a response within 24 hours.</p>
                <button
                  onClick={() => { setStatus(null); setForm({ name:'', email:'', service:'', message:'' }); }}
                  className="mt-4 font-mono text-xs border border-cyan/30 text-cyan/70 px-4 py-2 clip-corner-sm hover:border-cyan hover:text-cyan transition-all"
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 border border-cyan/15 clip-corner p-6 bg-navy/60 backdrop-blur">
                <div className="font-mono text-[10px] text-cyan/40 tracking-[0.3em] mb-4">TRANSMISSION FORM</div>

                {[
                  { name: 'name',  label: 'IDENTIFIER (NAME)',     type: 'text',  placeholder: 'Your name' },
                  { name: 'email', label: 'RETURN ADDRESS (EMAIL)', type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block font-mono text-[10px] text-cyan/50 tracking-widest mb-1">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-deep-navy border border-cyan/20 focus:border-cyan/60 focus:outline-none font-body text-sm text-white placeholder-white/20 px-4 py-3 clip-corner-sm transition-colors duration-200"
                    />
                  </div>
                ))}

                <div>
                  <label className="block font-mono text-[10px] text-cyan/50 tracking-widest mb-1">SERVICE REQUESTED</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-deep-navy border border-cyan/20 focus:border-cyan/60 focus:outline-none font-body text-sm text-white/80 px-4 py-3 clip-corner-sm transition-colors duration-200 appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option>Tracker Integration</option>
                    <option>MIT App Inventor</option>
                    <option>Arduino &amp; Sensors</option>
                    <option>Fleet Management</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-cyan/50 tracking-widest mb-1">MESSAGE PAYLOAD</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your project..."
                    required
                    className="w-full bg-deep-navy border border-cyan/20 focus:border-cyan/60 focus:outline-none font-body text-sm text-white placeholder-white/20 px-4 py-3 clip-corner-sm transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full clip-corner bg-cyan/10 border border-cyan/50 hover:bg-cyan/20 hover:border-cyan text-cyan font-mono font-bold text-sm tracking-widest py-4 transition-all duration-200 animate-glow-cyan disabled:opacity-50"
                >
                  {status === 'sending' ? '[ TRANSMITTING... ]' : '[ SEND TRANSMISSION ]'}
                </button>

                {/* Error message */}
                {status === 'error' && (
                  <div className="border border-red-500/40 bg-red-500/10 p-3 clip-corner-sm">
                    <p className="font-mono text-xs text-red-400 tracking-wide">
                      ⚠ TRANSMISSION FAILED — {errorMsg}
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
