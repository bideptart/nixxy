import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

// PORTAL_BASE must point at the live NIXXY portal (nginx proxies /api -> :4100).
const PORTAL_BASE = 'https://myhealth.nixxy.ai';
const RESELLER_PORTAL = 'nixxy.ai';
const DEFAULT_LANGUAGE = 'en-US';
const PLAN_IDS = ['starter', 'growth', 'scale'];

const usd = (n) =>
  '$' + Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

export default function Signup() {
  const [params] = useSearchParams();
  const initialPlan = (() => {
    const p = params.get('plan');
    return p && PLAN_IDS.includes(p) ? p : 'growth';
  })();
  const initialCycle = params.get('cycle') === 'yearly' ? 'yearly' : 'monthly';

  const [plans, setPlans] = useState([]);
  const [loadError, setLoadError] = useState(null);
  const [cycle, setCycle] = useState(initialCycle);
  const [selectedId, setSelectedId] = useState(initialPlan);
  const [form, setForm] = useState({
    name: '', company: '', username: '', email: '', phone: '', password: '',
    agentName: '', greeting: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${PORTAL_BASE}/api/plans?portal=${encodeURIComponent(RESELLER_PORTAL)}`)
      .then((r) => r.json())
      .then((d) => { if (!cancelled) setPlans(d.plans || []); })
      .catch((e) => { if (!cancelled) setLoadError(e.message || 'Could not load plans'); });
    return () => { cancelled = true; };
  }, []);

  const selectedPlan = useMemo(() => plans.find((p) => p.id === selectedId), [plans, selectedId]);
  const priceFor = (p) => (cycle === 'yearly' ? p.yearlyAmount : p.amount);
  const yearlySavings = (p) => p.yearlySavingsUsd ?? Math.max(0, p.amount * 12 - p.yearlyAmount);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!selectedPlan) return setError('Please pick a plan.');
    if (!form.name.trim()) return setError('Tell us your name.');
    if (!form.company.trim()) return setError('Company is required.');
    if (!form.username.trim()) return setError('Pick a username.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError('Enter a valid email.');
    if (form.password.length < 8) return setError('Password must be 8+ characters.');

    setSubmitting(true);
    const company = form.company.trim();
    const body = {
      name: form.name.trim(), company, username: form.username.trim(),
      email: form.email.trim(), phone: form.phone.trim(), password: form.password,
      planLabel: selectedPlan.label, planAmount: priceFor(selectedPlan), planMin: selectedPlan.min,
      planRate: selectedPlan.rate, planAgents: selectedPlan.agents, planCycle: cycle,
      voice: 'Kore', language: DEFAULT_LANGUAGE,
      agentName: form.agentName.trim() || `${company} Receptionist`,
      greeting: form.greeting.trim() || `Hi, thanks for calling ${company}. How can I help today?`,
      prompt: '', kbCompany: '', kbFaqs: '', resellerPortal: RESELLER_PORTAL,
    };

    try {
      const session = await fetch(`${PORTAL_BASE}/api/stripe/checkout-session/signup`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
      }).then((r) => r.json());
      if (session.url) window.location.href = session.url;
      else { setSubmitting(false); setError(session.error || 'Could not start checkout.'); }
    } catch (err) { setSubmitting(false); setError(err.message || 'Could not start checkout.'); }
  };

  const planPrice = selectedPlan ? priceFor(selectedPlan) : 0;

  return (
    <div className="page container" style={{ paddingBottom: 96 }}>
      <Reveal>
        <p className="eyebrow">Get started</p>
        <h1 style={{ fontSize: 'clamp(32px,5.5vw,58px)', maxWidth: '18ch' }}>
          Launch your AI receptionist <span className="grad">in minutes.</span>
        </h1>
        <p className="lead" style={{ marginTop: 22 }}>
          Pick a plan, tell us about your business, and check out. Your phone number is
          assigned automatically and your voice agent goes live right after payment.
        </p>
      </Reveal>

      {loadError && <div className="su-alert" style={{ marginTop: 32 }}>Couldn’t load plans: {loadError}</div>}
      {!loadError && plans.length === 0 && <p style={{ color: 'var(--fg-muted)', marginTop: 40 }}>Loading plans…</p>}

      {plans.length > 0 && (
        <>
          <div style={{ marginTop: 44, display: 'flex', justifyContent: 'center' }}>
            <div className="su-toggle">
              <button type="button" className={cycle === 'monthly' ? 'on' : ''} onClick={() => setCycle('monthly')}>Monthly</button>
              <button type="button" className={cycle === 'yearly' ? 'on' : ''} onClick={() => setCycle('yearly')}>
                Yearly <span className="su-save">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="pricing-grid" style={{ marginTop: 32 }}>
            {plans.map((p) => {
              const selected = p.id === selectedId;
              return (
                <div key={p.id} role="button" tabIndex={0}
                  onClick={() => setSelectedId(p.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedId(p.id); } }}
                  className={`price-card${selected ? ' featured' : ''}`} style={{ cursor: 'pointer' }}>
                  {p.tag && <span className="badge">{p.tag}</span>}
                  {selected && !p.tag && <span className="badge">Selected</span>}
                  <h3 className="plan-name">{p.label}</h3>
                  <div className="plan-rate"><span>{usd(priceFor(p))}</span> /{cycle === 'yearly' ? 'yr' : 'mo'}</div>
                  {cycle === 'yearly' && (
                    <div style={{ color: 'var(--accent-live)', fontSize: 12, marginTop: 4 }}>
                      Save {usd(yearlySavings(p))} vs monthly
                    </div>
                  )}
                  <p className="plan-blurb">{p.sub}</p>
                  <div className="plan-conc">
                    {Number(p.min).toLocaleString('en-US')} min · {usd(p.rate)}/min ·{' '}
                    {p.agents >= 999 ? 'Unlimited agents' : `${p.agents} agents`}
                  </div>
                  <ul className="plan-features">
                    {(p.perks || []).filter((perk) => !/phone number|concurrent call/i.test(perk))
                      .map((perk) => <li key={perk}>{perk}</li>)}
                  </ul>
                  <div className={`btn${selected ? ' btn-sheen' : ' btn-ghost'}`}
                    style={{ width: '100%', justifyContent: 'center', pointerEvents: 'none' }}>
                    {selected ? '✓ Selected' : 'Select plan'}
                  </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={submit} className="su-layout" style={{ marginTop: 44 }}>
            <div className="card">
              <h3 style={{ marginTop: 0, fontSize: 22 }}>Create your account</h3>
              <div className="su-grid2">
                <SuField id="name" label="Your name" value={form.name} onChange={set('name')} />
                <SuField id="company" label="Company" value={form.company} onChange={set('company')} />
                <SuField id="username" label="Username" value={form.username} onChange={set('username')} />
                <SuField id="email" label="Work email" type="email" value={form.email} onChange={set('email')} />
                <SuField id="phone" label="Phone (optional)" value={form.phone} onChange={set('phone')} />
                <SuField id="password" label="Password (8+ chars)" type="password" value={form.password} onChange={set('password')} />
              </div>
              <div className="su-note">
                📞 Your phone number is included in the plan and assigned automatically at checkout — no separate fee.
              </div>
              <div className="field" style={{ marginBottom: 0 }}>
                <label htmlFor="agentName">Agent name (optional)</label>
                <input id="agentName" value={form.agentName} onChange={set('agentName')}
                  placeholder={form.company ? `${form.company} Receptionist` : 'Acme Receptionist'} />
              </div>
              <div className="field" style={{ marginTop: 18, marginBottom: 0 }}>
                <label htmlFor="greeting">Greeting / behaviour (optional)</label>
                <textarea id="greeting" rows={5} value={form.greeting} onChange={set('greeting')}
                  placeholder={form.company
                    ? `e.g. "Hi, thanks for calling ${form.company}. I can help you book an appointment, share pricing, or take a message."`
                    : 'e.g. "Hi, thanks for calling. I can help you book an appointment or take a message."'} />
                <p style={{ color: 'var(--fg-dim)', fontSize: 12, marginTop: 8 }}>
                  Leave blank for a friendly default — you can refine it from your dashboard later.
                </p>
              </div>
            </div>

            <div className="su-summary">
              <div className="card" style={{ position: 'sticky', top: 96 }}>
                <p className="eyebrow" style={{ marginTop: 0 }}>Order summary</p>
                <SuRow label="Plan"><strong>{selectedPlan?.label} · {cycle === 'yearly' ? 'yearly' : 'monthly'}</strong></SuRow>
                <SuRow label="Phone number"><span style={{ color: 'var(--fg-dim)', fontSize: 13 }}>Assigned at checkout</span></SuRow>
                <SuRow label="Included minutes"><span style={{ color: 'var(--fg-muted)' }}>{selectedPlan ? Number(selectedPlan.min).toLocaleString('en-US') : '—'}</span></SuRow>
                <SuRow label="Voice rate"><span style={{ color: 'var(--fg-muted)' }}>{selectedPlan ? `${usd(selectedPlan.rate)} / min` : '—'}</span></SuRow>
                <div className="su-divider" />
                <SuRow label="Billed today"><span style={{ fontSize: 22, fontWeight: 700 }}>{usd(planPrice)}</span></SuRow>
                {error && <div className="su-alert" style={{ marginTop: 16 }}>{error}</div>}
                <button type="submit" className="btn btn-sheen" disabled={submitting}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 18 }}>
                  {submitting ? 'Redirecting to checkout…' : 'Continue to secure checkout →'}
                </button>
                <p style={{ color: 'var(--fg-dim)', fontSize: 12, textAlign: 'center', marginTop: 12 }}>
                  Secure Stripe checkout · Cards · Apple&nbsp;Pay · Google&nbsp;Pay.
                </p>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

function SuField({ id, label, value, onChange, type = 'text', placeholder }) {
  return (
    <div className="field" style={{ marginBottom: 0 }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}
function SuRow({ label, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '8px 0' }}>
      <span style={{ color: 'var(--fg-muted)' }}>{label}</span>
      <div style={{ textAlign: 'right' }}>{children}</div>
    </div>
  );
}
