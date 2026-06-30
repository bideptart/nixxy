// "AI+ NIXXY" wordmark: bold AI with a green plus + voice-pulse, then the NIXXY word.
export default function Logo() {
  return (
    <span className="logo" aria-label="AI+ NIXXY">
      <span className="logo-mark">
        <span className="logo-ai">AI</span>
        <span className="logo-plus">+</span>
        <svg className="logo-wave" viewBox="0 0 46 14" fill="none" aria-hidden="true">
          <path
            d="M1 7 H10 L13 1.5 L17.5 12.5 L21.5 4 L24 7 H45"
            stroke="currentColor" strokeWidth="1.6"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="logo-word">NIXXY</span>
    </span>
  );
}
