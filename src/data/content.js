// Product content for the NIXXY AI voice receptionist site.
// Original copy written for this rebuild.

export const metrics = [
  { value: '1.8M+', label: 'Calls answered every month' },
  { value: '58%', label: 'Average reduction in front-desk workload' },
  { value: '2.7x', label: 'More booked appointments from inbound calls' },
  { value: '99.99%', label: 'Platform uptime' },
];

export const features = [
  {
    title: 'Human-sounding voice',
    desc: 'Native audio-to-audio responses under 300ms, so conversations feel natural — not like talking to a robot or waiting on a script.',
  },
  {
    title: 'Talk over it, anytime',
    desc: 'Callers can interrupt mid-sentence and the agent adapts instantly, just like a real receptionist would.',
  },
  {
    title: 'Never a busy signal',
    desc: 'Handle unlimited calls at once. No hold music, no queues — every caller is answered on the first ring, 24/7.',
  },
  {
    title: 'Knows your business',
    desc: 'Connect your FAQs, docs, menus, and policies. The agent answers from your own knowledge base using retrieval, not guesswork.',
  },
  {
    title: 'Speaks their language',
    desc: 'Detects and switches languages mid-call, so you can serve every caller without a separate line or staff member.',
  },
  {
    title: 'Books and routes',
    desc: 'Schedules appointments on your calendar, qualifies leads, takes messages, and warm-transfers to a human when it matters.',
  },
  {
    title: 'Bring your own numbers',
    desc: 'Keep your existing phone numbers and carrier. Point your line at NIXXY and go live — no migrations, no new hardware.',
  },
  {
    title: 'Every call, in your CRM',
    desc: 'Transcripts, call summaries, sentiment, and intent flow straight into your tools, so nothing slips through the cracks.',
  },
];

export const steps = [
  {
    title: 'Design your agent',
    desc: 'Pick a voice, write the greeting, and set guardrails in plain English. Define what it should do — book, qualify, answer, transfer.',
  },
  {
    title: 'Connect your knowledge',
    desc: 'Upload FAQs and docs, link your calendar and CRM, and add the policies your receptionist needs to answer accurately.',
  },
  {
    title: 'Go live on your number',
    desc: 'Forward your existing line to NIXXY and your AI receptionist starts answering immediately — with full transcripts from call one.',
  },
];

export const industries = [
  {
    name: 'Real estate', desc: 'Capture every buyer and renter inquiry, schedule showings, and qualify leads before they reach an agent.',
    sample: { caller: 'Is the downtown loft still available to tour?', agent: 'It is — I have Saturday at 11 or 1. Shall I book one for you?' },
  },
  {
    name: 'Legal services', desc: 'Intake new clients 24/7, screen matters, and book consultations without tying up paralegals.',
    sample: { caller: 'I need to talk to someone about a contract dispute.', agent: 'I can set up a consultation. Are mornings or afternoons better?' },
  },
  {
    name: 'Healthcare & dental', desc: 'Book, reschedule, and confirm appointments, answer insurance questions, and triage after hours.',
    sample: { caller: 'Can I move my cleaning to next week?', agent: "Done — you're rebooked for Tuesday at 9:30am." },
  },
  {
    name: 'Home services', desc: 'Answer every job call, dispatch urgent requests, and quote standard work while your crews are on site.',
    sample: { caller: "My water heater's leaking — can someone come today?", agent: "I'm flagging this as urgent and dispatching a tech now." },
  },
  {
    name: 'Restaurants', desc: 'Take reservations and to-go orders, answer hours and menu questions, and stop missing the dinner rush.',
    sample: { caller: 'Table for four tonight around 7?', agent: 'I have 7:15 on the patio — want me to hold it?' },
  },
  {
    name: 'Automotive', desc: 'Schedule service, answer parts and pricing questions, and follow up on quotes automatically.',
    sample: { caller: 'When can you fit me in for an oil change?', agent: "Thursday at 8am works — I'll add it to the schedule." },
  },
  {
    name: 'E-commerce & retail', desc: 'Handle order status, returns, and product questions across every line at once.',
    sample: { caller: "Where's my order? It's been a week.", agent: 'It shipped Monday — arriving tomorrow by 8pm. Want the tracking link?' },
  },
  {
    name: 'Professional services', desc: 'Qualify inbound interest, route to the right team, and book discovery calls around the clock.',
    sample: { caller: 'Do you have time for a discovery call this week?', agent: "I do — Wednesday at 3pm. I'll send a calendar invite." },
  },
];

export const plans = [
  {
    name: 'Starter',
    rate: '$0.15',
    blurb: 'For small teams putting their first AI receptionist on one line.',
    concurrency: '1 concurrent agent',
    features: [
      'Human-sounding voice agent',
      'Bring your own number',
      'Knowledge base (FAQs & docs)',
      'Call transcripts & summaries',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    rate: '$0.12',
    blurb: 'For growing businesses handling steady call volume across teams.',
    concurrency: '2 concurrent agents',
    featured: true,
    features: [
      'Everything in Starter',
      'Calendar & CRM integrations',
      'Multilingual conversations',
      'Sentiment & intent tracking',
      'Warm transfer to a human',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    rate: '$0.10',
    blurb: 'For high-volume operations that need depth, control, and SLAs.',
    concurrency: '3+ concurrent agents',
    features: [
      'Everything in Growth',
      'Unlimited concurrent calls',
      'Custom routing & guardrails',
      'Dedicated success manager',
      'Uptime SLA & audit logs',
    ],
  },
];

export const credits = [
  { amount: '$20', note: 'Try it out', minutes: '~130–200 minutes' },
  { amount: '$50', note: 'Most popular', minutes: '~330–500 minutes' },
  { amount: '$100', note: 'Best value', minutes: '~660–1,000 minutes' },
];

export const useCases = [
  {
    tag: '01',
    title: 'Inbound',
    desc: 'Answer every incoming call on the first ring — book appointments, qualify leads, and take messages without a single caller hitting voicemail.',
  },
  {
    tag: '02',
    title: 'After-hours',
    desc: 'Cover nights, weekends, and holidays so every caller is answered on the first ring — no voicemail, no missed patients or leads.',
  },
  {
    tag: '03',
    title: 'Global',
    desc: 'Greet callers in their own language and switch mid-conversation, so one agent covers every market on every line.',
  },
];

export const testimonials = [
  {
    quote: 'It picks up on the first ring at 2am and books the job. We stopped losing after-hours calls overnight.',
    name: 'Marcus Bell',
    role: 'Owner, Bell Plumbing & Heating',
    metric: '+41% booked jobs',
  },
  {
    quote: 'Callers genuinely think it\'s a person. Our front desk finally has time to handle patients in the room.',
    name: 'Dr. Priya Nandakumar',
    role: 'Practice Lead, Northgate Dental',
    metric: '58% fewer holds',
  },
  {
    quote: 'We pointed our main line at NIXXY in an afternoon. Lead response went from hours to seconds.',
    name: 'Elena Ruiz',
    role: 'Head of Sales, Vantage Realty',
    metric: '2.7x qualified leads',
  },
];

export const faqs = [
  {
    q: 'Does it really sound human?',
    a: 'Yes. NIXXY uses native audio-to-audio processing with sub-300ms responses, so there are no robotic pauses. Callers can interrupt and the agent keeps up naturally.',
  },
  {
    q: 'Do I need to change my phone number?',
    a: 'No. Keep your existing numbers and carrier. You simply forward your line to NIXXY and you can route back to a human anytime.',
  },
  {
    q: 'How does it answer questions about my business?',
    a: 'You connect your own knowledge — FAQs, documents, menus, policies — and the agent answers from that using retrieval, so responses stay accurate and on-brand.',
  },
  {
    q: 'Can it book appointments?',
    a: 'It books, reschedules, and confirms directly on your connected calendar, qualifies leads, takes messages, and warm-transfers when a human is needed.',
  },
  {
    q: 'What does it cost?',
    a: 'Simple per-minute pricing starting at $0.10/minute on higher tiers, with prepaid credit packs. You only pay for the minutes you actually use.',
  },
  {
    q: 'How fast can I go live?',
    a: 'Most teams launch the same day: design the agent, connect your knowledge, forward your number. No new hardware or long migrations.',
  },
];
