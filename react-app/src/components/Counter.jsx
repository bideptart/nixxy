import { useEffect, useRef, useState } from 'react';
import useInView from '../hooks/useInView.js';

// Animates a numeric value when scrolled into view, preserving any
// prefix/suffix (e.g. "1.8M+", "58%", "2.7x", "99.99%").
export default function Counter({ value, duration = 1400 }) {
  const [ref, inView] = useInView();
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const m = String(value).match(/^([^\d-]*)(-?[\d,]*\.?\d+)(.*)$/);
    if (!m) { setDisplay(value); return; }
    const prefix = m[1] || '';
    const numStr = m[2].replace(/,/g, '');
    const suffix = m[3] || '';
    const target = parseFloat(numStr);
    const decimals = (numStr.split('.')[1] || '').length;

    const start = performance.now();
    const fmt = (n) =>
      decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString('en-US');

    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(prefix + fmt(target * eased) + suffix);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return <span ref={ref}>{display}</span>;
}
