import { Link } from 'react-router-dom';
import { industries } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

export default function Industries() {
  return (
    <div className="page container">
      <Reveal>
        <p className="eyebrow">Industries</p>
        <h1 style={{ fontSize: 'clamp(34px,6vw,64px)', maxWidth: '16ch' }}>
          Wherever the phone rings, <span className="grad">NIXXY answers.</span>
        </h1>
        <p className="lead" style={{ marginTop: 24 }}>
          The same AI receptionist adapts to your business — your hours, your services,
          your booking flow, your tone.
        </p>
      </Reveal>

      <div className="grid grid-2" style={{ marginTop: 56 }}>
        {industries.map((ind, i) => (
          <Reveal className="card glow-card" delay={(i % 2) * 70} key={ind.name}>
            <h3 className="card-title">{ind.name}</h3>
            <p className="card-desc">{ind.desc}</p>
          </Reveal>
        ))}
      </div>

      <div className="cta-band" style={{ marginTop: 80, borderRadius: 20 }}>
        <div className="glow glow-cta" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <h2>Don't see your industry?</h2>
            <p>If your business runs on phone calls, NIXXY can answer them. Let's build your agent.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-sheen">Book a demo <span className="arrow">→</span></Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
