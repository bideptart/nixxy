import { useState } from 'react';

const summary = [
  ['Plan', 'Growth — monthly', false],
  ['Phone number', 'Assigned at checkout', true],
  ['Included minutes', '800', false],
  ['Voice rate', '$0.12 / min', false],
];

export default function Signup() {
  const [done, setDone] = useState(false);

  return (
    <div className="page container">
      <div className="signup-layout">
        {/* form */}
        <div className="signup-form">
          <h1 style={{ fontSize: 'clamp(26px,3.6vw,40px)' }}>Create your account</h1>
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <div className="grid grid-2">
              <div className="field"><label htmlFor="name">Your name</label><input id="name" required placeholder="Jane Doe" /></div>
              <div className="field"><label htmlFor="company">Company</label><input id="company" placeholder="Acme Inc." /></div>
            </div>
            <div className="grid grid-2">
              <div className="field"><label htmlFor="username">Username</label><input id="username" required placeholder="jane" /></div>
              <div className="field"><label htmlFor="email">Work email</label><input id="email" type="email" required placeholder="jane@acme.com" /></div>
            </div>
            <div className="grid grid-2">
              <div className="field"><label htmlFor="phone">Phone (optional)</label><input id="phone" placeholder="+1 555 010 0000" /></div>
              <div className="field"><label htmlFor="password">Password (8+ chars)</label><input id="password" type="password" required minLength={8} placeholder="••••••••" /></div>
            </div>

            <p className="signup-note">📞 Your phone number is included in the plan and assigned automatically at checkout — no separate fee.</p>

            <div className="field"><label htmlFor="agent">Agent name (optional)</label><input id="agent" placeholder="Acme Receptionist" /></div>
            <div className="field">
              <label htmlFor="greeting">Greeting / behaviour (optional)</label>
              <textarea id="greeting" rows={4} placeholder={'e.g. "Hi, thanks for calling. I can help you book an appointment or take a message."'} />
            </div>
            <p style={{ color: 'var(--fg-dim)', fontSize: 13 }}>
              Leave blank for a friendly default — you can refine it from your dashboard later.
            </p>
          </form>
        </div>

        {/* order summary */}
        <aside className="signup-summary">
          <div className="card">
            <p className="eyebrow">Order summary</p>
            {summary.map(([k, v, muted]) => (
              <div className="sum-row" key={k}>
                <span>{k}</span>
                <span className={muted ? 'muted' : 'strong'}>{v}</span>
              </div>
            ))}
            <div className="sum-divider" />
            <div className="sum-row total"><span>Billed today</span><strong>$93</strong></div>
            <button
              className="btn btn-cta"
              style={{ width: '100%', justifyContent: 'center', marginTop: 18 }}
              onClick={() => setDone(true)}
            >
              {done ? 'Redirecting to checkout…' : <>Continue to secure checkout <span className="arrow">→</span></>}
            </button>
            <p className="sum-fine">Secure Stripe checkout · Cards · Apple Pay · Google Pay</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
