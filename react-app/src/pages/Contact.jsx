import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="page container">
      <Reveal>
        <p className="eyebrow"><span className="live-dot" /> Book a demo</p>
        <h1 style={{ fontSize: 'clamp(34px,6vw,64px)', maxWidth: '15ch' }}>
          Hear your AI receptionist <span className="grad">answer.</span>
        </h1>
        <p className="lead" style={{ marginTop: 24 }}>
          Tell us about your call volume and we'll spin up a live agent for your
          business — usually within a day. No commitment, no new hardware.
        </p>
      </Reveal>

      <div className="contact-grid" style={{ marginTop: 56 }}>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required placeholder="Your name" />
          </div>
          <div className="field">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" placeholder="Business name" />
          </div>
          <div className="field">
            <label htmlFor="email">Work email</label>
            <input id="email" name="email" type="email" required placeholder="you@company.com" />
          </div>
          <div className="field">
            <label htmlFor="volume">Monthly call volume</label>
            <input id="volume" name="volume" placeholder="e.g. 500–2,000 calls" />
          </div>
          <div className="field">
            <label htmlFor="message">What should it handle?</label>
            <textarea id="message" name="message" rows={4} placeholder="Booking, lead qualification, after-hours coverage…" />
          </div>
          <button className="btn btn-sheen" type="submit">
            {sent ? "Thanks — we'll be in touch shortly" : <>Request my demo <span className="arrow">→</span></>}
          </button>
        </form>

        <div>
          <div className="info-block" style={{ borderTop: 'none', paddingTop: 0 }}>
            <h4>Sales</h4>
            <p>Talk through your call flows, integrations, and volume with our team.</p>
            <a href="mailto:sales@nixxy.ai">sales@nixxy.ai</a>
          </div>
          <div className="info-block">
            <h4>Support</h4>
            <p>Already live? Reach our team for help tuning your agent.</p>
            <a href="mailto:support@nixxy.ai">support@nixxy.ai</a>
          </div>
          <div className="info-block">
            <h4>Prefer to talk?</h4>
            <p>Call our own AI receptionist and hear it for yourself.</p>
            <a href="tel:+18005550199">+1 (800) 555-0199</a>
          </div>
        </div>
      </div>
    </div>
  );
}
