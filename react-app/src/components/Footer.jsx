import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand">NIXXY</span>
            <p>
              The AI voice receptionist that answers every call, books every
              appointment, and never sleeps — so your team can focus on the work
              that needs a human.
            </p>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <Link to="/features">Features</Link>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/industries">Industries</Link>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link to="/contact">Book a demo</Link>
            <a href="mailto:hello@nixxy.ai">Contact sales</a>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NIXXY — AI Voice Receptionist. All rights reserved.</span>
          <div className="socials">
            <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
