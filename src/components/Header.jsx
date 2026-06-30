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
        <nav className="nav">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
<Link to="/contact" className="btn btn-ghost" onClick={() => setOpen(false)}>Book a demo</Link>
<Link to="/signup" className="btn btn-sheen" onClick={() => setOpen(false)}>Get started</Link>

        </nav>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
