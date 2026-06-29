import { Link } from 'react-router-dom';
import { plans, credits, faqs } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

export default function Pricing() {
  return (
    <div className="page container">
      <Reveal>
        <p className="eyebrow">Pricing</p>
        <h1 style={{ fontSize: 'clamp(34px,6vw,64px)', maxWidth: '16ch' }}>
          Pay for minutes, <span className="grad">not seats.</span>
        </h1>
        <p className="lead" style={{ marginTop: 24 }}>
          Simple per-minute pricing that drops as you scale. Top up with prepaid
          credits and only pay for the calls your receptionist actually handles.
        </p>
      </Reveal>

      <div className="pricing-grid" style={{ marginTop: 56 }}>
        {plans.map((p, i) => (
          <Reveal as="div" delay={i * 90} className={`price-card${p.featured ? ' featured' : ''}`} key={p.name}>
            {p.featured && <span className="badge">Most popular</span>}
            <h3 className="plan-name">{p.name}</h3>
            <div className="plan-rate"><span>{p.rate}</span> / min</div>
            <p className="plan-blurb">{p.blurb}</p>
            <div className="plan-conc">{p.concurrency}</div>
            <ul className="plan-features">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link to="/contact" className={`btn${p.featured ? ' btn-sheen' : ' btn-ghost'}`} style={{ width: '100%', justifyContent: 'center' }}>
              Get started
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="section-head" style={{ marginTop: 80 }}>
        <p className="eyebrow">Credits</p>
        <h2 style={{ fontSize: 'clamp(24px,3.6vw,38px)' }}>Top up as you go.</h2>
      </Reveal>
      <div className="grid grid-3">
        {credits.map((c, i) => (
          <Reveal delay={i * 80} className="card credit-card" key={c.amount}>
            <div className="credit-amount">{c.amount}</div>
            <div className="credit-note">{c.note}</div>
            <p style={{ color: 'var(--fg-muted)', margin: '10px 0 0' }}>{c.minutes}</p>
          </Reveal>
        ))}
      </div>
      <p style={{ color: 'var(--fg-dim)', fontSize: 13, marginTop: 18 }}>
        Credits are valid for 60 days. No subscriptions, no per-seat fees, no setup costs.
      </p>

      <div className="section-head" style={{ marginTop: 80 }}>
        <p className="eyebrow">FAQ</p>
        <h2 style={{ fontSize: 'clamp(24px,3.6vw,38px)' }}>Pricing questions.</h2>
      </div>
      <div className="faq">
        {faqs.slice(4).concat(faqs.slice(0, 1)).map((f) => (
          <details className="faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>

      <div className="cta-inline">
        <Link to="/contact" className="btn">Talk to sales</Link>
      </div>
    </div>
  );
}
