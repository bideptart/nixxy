import { useEffect, useRef, useState } from 'react';

const script = [
  { who: 'caller', text: 'Hi, do you have any availability this Friday?' },
  { who: 'agent', text: 'We do — I can offer 2:30 or 4:00 PM. Which works best?' },
  { who: 'caller', text: "Let's do 4 o'clock." },
  { who: 'agent', text: "Booked for Friday at 4:00 PM. You'll get a text confirmation shortly." },
];

export default function CallCard() {
  const [shown, setShown] = useState(0); // how many lines revealed
  const [typing, setTyping] = useState(true);
  const [seconds, setSeconds] = useState(8);
  const bodyRef = useRef(null);

  // Reveal lines one at a time, then pause and loop.
  useEffect(() => {
    let t;
    if (shown < script.length) {
      setTyping(true);
      t = setTimeout(() => {
        setTyping(false);
        setShown((n) => n + 1);
      }, shown === 0 ? 700 : 1500);
    } else {
      t = setTimeout(() => setShown(0), 3200);
    }
    return () => clearTimeout(t);
  }, [shown]);

  // Call timer ticking up.
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s >= 59 ? 8 : s + 1)), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [shown, typing]);

  const visible = script.slice(0, shown);
  const nextWho = shown < script.length ? script[shown].who : null;

  return (
    <div className="call-card" aria-hidden="true">
      <div className="call-glow" />
      <div className="call-head">
        <span className="live-dot" />
        <span className="call-status">Live call</span>
        <span className="call-timer">00:{String(seconds).padStart(2, '0')}</span>
      </div>

      <div className="waveform" data-active={typing && nextWho === 'agent'}>
        {Array.from({ length: 32 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${(i % 8) * 0.08}s` }} />
        ))}
      </div>

      <div className="call-transcript" ref={bodyRef}>
        {visible.map((t, i) => (
          <div key={i} className={`bubble ${t.who}`}>
            <span className="bubble-who">{t.who === 'agent' ? 'NIXXY' : 'Caller'}</span>
            {t.text}
          </div>
        ))}
        {typing && nextWho && (
          <div className={`bubble ${nextWho} is-typing`}>
            <span className="bubble-who">{nextWho === 'agent' ? 'NIXXY' : 'Caller'}</span>
            <span className="dots"><i /><i /><i /></span>
          </div>
        )}
      </div>

      <div className="call-foot">
        <span className="tag">Intent: booking</span>
        <span className="tag">Sentiment: positive</span>
        <span className="tag accent">↳ Calendar</span>
      </div>
    </div>
  );
}
