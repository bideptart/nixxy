export default function Terms() {
  return (
    <div className="page container">
      <p className="eyebrow">Legal</p>
      <h1 style={{ fontSize: 'clamp(32px,5vw,56px)' }}>Terms &amp; Conditions</h1>
      <div className="prose" style={{ marginTop: 36 }}>
        <p>
          These Terms &amp; Conditions govern your use of the NIXXY AI voice
          receptionist service and website. By accessing the service you agree to be
          bound by these terms.
        </p>
        <h2>The service</h2>
        <p>
          NIXXY provides AI voice agents that answer, handle, and route phone calls
          on your behalf based on the configuration and knowledge you supply. You are
          responsible for the accuracy of that configuration and for how the agent is
          used in your business.
        </p>
        <h2>Acceptable use</h2>
        <p>
          You agree not to use the service for unlawful, deceptive, or abusive
          calling, or in violation of telecommunications, consumer-protection, or
          recording-consent laws. You must obtain any consents required to record or
          process calls.
        </p>
        <h2>Billing</h2>
        <p>
          The service is billed per minute of call time against prepaid credits.
          Credits are non-refundable and expire 60 days after purchase unless
          otherwise stated. Rates vary by plan tier.
        </p>
        <h2>Availability &amp; disclaimers</h2>
        <p>
          We target high availability but the service is provided "as is" without
          warranties of uninterrupted or error-free operation. AI responses may be
          imperfect; you are responsible for human oversight where appropriate.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          To the extent permitted by law, NIXXY is not liable for indirect or
          consequential damages arising from use of the service.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms? Contact <a href="mailto:legal@nixxy.ai">legal@nixxy.ai</a>.
        </p>
        <p style={{ color: 'var(--fg-dim)', fontSize: 13 }}>© 2026 NIXXY — All rights reserved.</p>
      </div>
    </div>
  );
}
