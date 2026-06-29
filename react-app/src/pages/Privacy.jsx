export default function Privacy() {
  return (
    <div className="page container">
      <p className="eyebrow">Legal</p>
      <h1 style={{ fontSize: 'clamp(32px,5vw,56px)' }}>Privacy Policy</h1>
      <div className="prose" style={{ marginTop: 36 }}>
        <p>
          This Privacy Policy describes how NIXXY ("NIXXY", "we", "us") collects,
          uses, and protects information when you use our AI voice receptionist
          service and website. By using our service you agree to this policy.
        </p>
        <h2>Information we collect</h2>
        <p>
          We collect account details you provide (name, email, company), the
          knowledge and configuration you add to your agent, and call data processed
          on your behalf — including audio, transcripts, summaries, and metadata such
          as call time, duration, and outcome.
        </p>
        <h2>How we use information</h2>
        <p>
          We use information to answer and route your calls, generate transcripts and
          analytics, operate and improve the service, provide support, and meet legal
          obligations. Call recordings and transcripts are processed to deliver the
          service you configure.
        </p>
        <h2>Call recording &amp; consent</h2>
        <p>
          You are responsible for providing any call-recording disclosures required in
          your jurisdiction. NIXXY can play a configurable disclosure at the start of
          calls on your behalf.
        </p>
        <h2>Sharing</h2>
        <p>
          We do not sell personal information. We share data only with the
          integrations you connect (such as your calendar or CRM), with service
          providers acting under contract, or where required by law.
        </p>
        <h2>Retention &amp; security</h2>
        <p>
          Data is retained for as long as your account is active or as needed to
          provide the service, and is protected with encryption in transit and at
          rest. You can request export or deletion of your data at any time.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, contact <a href="mailto:privacy@nixxy.ai">privacy@nixxy.ai</a>.
        </p>
        <p style={{ color: 'var(--fg-dim)', fontSize: 13 }}>© 2026 NIXXY — AI Voice Receptionist.</p>
      </div>
    </div>
  );
}
