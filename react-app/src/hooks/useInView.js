import { useEffect, useRef, useState } from 'react';

// Returns [ref, inView] — flips to true once the element scrolls into view.
export default function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setInView(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px', ...options }
    );
    obs.observe(el);
    // Safety net: never leave content trapped if the observer never fires.
    const fallback = setTimeout(() => setInView(true), 2500);
    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, []);

  return [ref, inView];
}
