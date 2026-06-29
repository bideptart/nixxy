import { Link } from 'react-router-dom';
import { metrics, features, steps, useCases, testimonials } from '../data/content.js';
import CallCard from '../components/CallCard.jsx';
import IndustryExplorer from '../components/IndustryExplorer.jsx';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';

export default function Home() {
  return (
    <>
      <section className="hero container hero-split">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> AI Voice Receptionist</p>
          <h1>
            Never miss <br /> a call <span className="grad">again.</span>
          </h1>
          <p className="sub">
            NIXXY answers your phones 24/7 with an AI receptionist that books
            appointments, qualifies leads, and sounds genuinely human — responding
            in under 300&nbsp;milliseconds.
          </p>
          <div className="cta-row">
            <Link to="/contact" className="btn btn-sheen">Book a demo <span className="arrow">→</span></Link>
            <Link to="/pricing" className="btn btn-ghost">See pricing</Link>
          </div>
          <p className="hero-note">No new hardware · Keep your number · Live the same day</p>
        </div>
        <div className="hero-visual"><CallCard /></div>
      </section>

      <section className="metrics-band">
        <div className="container metrics">
          {metrics.map((m, i) => (
            <Reveal className="metric" delay={i * 90} key={m.label}>
              <div className="metric-value"><Counter value={m.value} /></div>
              <div className="metric-label">{m.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <Reveal className="section-head">
          <p className="eyebrow">Why NIXXY</p>
          <h2>A receptionist that sounds human <span className="grad">and never clocks out.</span></h2>
        </Reveal>
        <div className="grid grid-3">
          {features.slice(0, 6).map((f, i) => (
            <Reveal className="card glow-card" delay={(i % 3) * 80} key={f.title}>
              <h3 className="card-title">{f.title}</h3>
              <p className="card-desc">{f.desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop: 28 }}>
          <Link to="/features" className="text-link">See all features →</Link>
        </Reveal>
      </section>

      {/* Use cases — three columns */}
      <section className="section container">
        <Reveal className="section-head">
          <p className="eyebrow">Use cases</p>
          <h2>Inbound, outbound, every language.</h2>
        </Reveal>
        <div className="grid grid-3">
          {useCases.map((u, i) => (
            <Reveal className="usecase glow-card" delay={i * 90} key={u.title}>
              <span className="usecase-tag">/{u.tag}</span>
              <h3>{u.title}</h3>
              <p>{u.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="section container">
        <Reveal className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>Live in three steps.</h2>
        </Reveal>
        <div className="steps3">
          {steps.map((s, i) => (
            <Reveal className="step3" delay={i * 110} key={s.title}>
              <div className="step3-badge">0{i + 1}</div>
              <h3 className="step3-title">{s.title}</h3>
              <p className="step3-desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop: 28 }}>
          <Link to="/how-it-works" className="text-link">Walk through setup →</Link>
        </Reveal>
      </section>

      {/* Industries — interactive explorer */}
      <section className="section container ie-section">
        <Reveal className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p className="eyebrow">Built for your front desk</p>
            <h2>One receptionist, every industry.</h2>
          </div>
          <Link to="/industries" className="text-link">Explore industries →</Link>
        </Reveal>
        <Reveal><IndustryExplorer /></Reveal>
      </section>

      {/* Testimonials */}
      <section className="section container">
        <Reveal className="section-head">
          <p className="eyebrow">Results</p>
          <h2>Teams that stopped missing calls.</h2>
        </Reveal>
        <div className="grid grid-3">
          {testimonials.map((t, i) => (
            <Reveal className="quote-card" delay={i * 90} key={t.name}>
              <div className="quote-metric">{t.metric}</div>
              <p className="quote-text">“{t.quote}”</p>
              <div className="quote-by">
                <span className="quote-name">{t.name}</span>
                <span className="quote-role">{t.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="glow glow-cta" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ justifyContent: 'center' }}><span className="live-dot" /> Ready when you are</p>
            <h2>Hear it answer your next call.</h2>
            <p>Spin up your AI receptionist and forward a line today. Pay only for the minutes you use.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-sheen">Book a demo <span className="arrow">→</span></Link>
              <Link to="/pricing" className="btn btn-ghost">See pricing</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
