import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';

const links = [
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/industries', label: 'Industries' },
  { to: '/pricing', label: 'Pricing' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${open ? ' open' : ''}${scrolled ? ' scrolled' : ''}`}>
      <div className="container bar">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <div className="nav-menu">
          <nav className="nav-links">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : '')}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-actions">
            <a href="https://myhealth.nixxy.ai/signin" className="nav-signin" onClick={() => setOpen(false)}>Sign in</a>
            <Link to="/signup" className="btn btn-cta" onClick={() => setOpen(false)}>Get started <span className="arrow">→</span></Link>
          </div>
        </div>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
