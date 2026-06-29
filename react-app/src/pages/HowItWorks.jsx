import { Link } from 'react-router-dom';
import { steps } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

export default function HowItWorks() {
  return (
    <div className="page container">
      <Reveal>
        <p className="eyebrow">How it works</p>
        <h1 style={{ fontSize: 'clamp(34px,6vw,64px)', maxWidth: '15ch' }}>
          From sign-up to answering calls — <span className="grad">in a day.</span>
        </h1>
        <p className="lead" style={{ marginTop: 24 }}>
          No call-center build-out, no new phone system. Configure your agent, connect
          your knowledge, and forward your line.
        </p>
      </Reveal>

      <div className="steps-list" style={{ marginTop: 56 }}>
        {steps.map((s, i) => (
          <Reveal className="step-row" delay={i * 90} key={s.title}>
            <div className="step-num">0{i + 1}</div>
            <div>
              <h3 style={{ fontSize: 22, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: 'var(--fg-muted)', margin: 0, maxWidth: '60ch' }}>{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="section-head" style={{ marginTop: 88 }}>
        <p className="eyebrow">Under the hood</p>
        <h2 style={{ fontSize: 'clamp(26px,4vw,40px)' }}>What happens on every call.</h2>
      </Reveal>
      <div className="grid grid-2">
        {[
          ['Answers instantly', 'Native audio-to-audio responses in under 300ms — no robotic lag, full-duplex so callers can interrupt.'],
          ['Understands intent', 'Detects what the caller wants — book, ask, complain, buy — and follows your guardrails to handle it.'],
          ['Acts in your tools', 'Creates calendar events, updates your CRM, sends confirmations, or warm-transfers to a teammate.'],
          ['Logs everything', 'Delivers a transcript, summary, sentiment, and intent for every call so you keep full visibility.'],
        ].map(([t, d], i) => (
          <Reveal className="card glow-card" delay={(i % 2) * 70} key={t}>
            <h3 className="card-title">{t}</h3>
            <p className="card-desc">{d}</p>
          </Reveal>
        ))}
      </div>

      <div className="cta-inline">
        <Link to="/contact" className="btn btn-sheen">Book a demo <span className="arrow">→</span></Link>
        <Link to="/features" className="btn btn-ghost">Explore features</Link>
      </div>
    </div>
  );
}
