# NIXXY — AI Voice Receptionist

A marketing site for an **AI voice receptionist** product, built in **React (Vite +
React Router)**. The AI receptionist answers calls 24/7, books appointments,
qualifies leads, and sounds human. The concept is inspired by services like
9278.ai; all copy here is original.

## Run it
```sh
npm install
npm run dev       # http://localhost:5173
```
Production build:
```sh
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

## Pages
| Route | Page |
|-------|------|
| `/` | Landing — hero with a live-call visual, metrics band, features, how-it-works, industries, CTA |
| `/features` | Full feature grid + FAQ |
| `/how-it-works` | 3-step setup + what happens on every call |
| `/pricing` | Per-minute tiers (Starter / Growth / Scale), credit packs, pricing FAQ |
| `/industries` | Use cases by industry |
| `/contact` | Book-a-demo form + contact details |
| `/privacy-policy`, `/terms-and-conditions` | Legal |
| `*` | 404 |

## Structure
```
src/
  main.jsx              # entry + router (loads index.css + enhance.css)
  App.jsx               # routes
  components/
    Header.jsx          # sticky nav, mobile menu, scroll state
    Footer.jsx
    Layout.jsx          # header/footer wrapper + ambient glow background
    CallCard.jsx        # animated live-call hero visual (typing loop)
    Reveal.jsx          # scroll-reveal wrapper (fade/slide in)
    Counter.jsx         # metrics that count up when in view
  hooks/
    useInView.js        # IntersectionObserver hook (with safety fallback)
  pages/                # Home, Features, HowItWorks, Pricing,
                        # Industries, Contact, Privacy, Terms, NotFound
  data/content.js       # all product copy (features, steps, plans, FAQ,
                        # use-cases, testimonials, metrics…)
  styles/
    index.css           # design tokens + base component styles
    enhance.css         # motion, glows, marquee, micro-interactions
```

## Design & motion
- **Theme:** the original dark monochrome theme is preserved — black background,
  white display headings, Fragment Mono "eyebrow" labels, Inter body. A single
  green accent (`--accent-live`) signals "live": the call indicator, the
  gradient headline word, the "most popular" badge, and checkmarks.
- **Motion:** scroll-reveal on sections/cards, count-up metrics, an animated
  live-call demo (looping typing transcript + reactive waveform), an infinite
  industries marquee, an ambient glow/grid background, button sheen + arrow
  nudges, and hover lifts. All motion respects `prefers-reduced-motion`.
- **Content:** edit [`src/data/content.js`](src/data/content.js) to change
  features, pricing, industries, steps, metrics, testimonials, or FAQs — most
  pages render straight from it.

## Notes
- The contact form is front-end only (no backend); submit shows a confirmation.
- Metrics, phone number, and pricing are illustrative placeholders.
- Inspired by the AI-voice-agent category (e.g. 9278.ai); copy and structure here
  are original, not copied.
