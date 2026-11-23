import Reveal from '../components/Reveal';
import { profile, stats } from '../data/cv';

function GradientFrame() {
  return (
    <svg className="frame-lines" aria-hidden>
      <defs>
        <linearGradient id="frame-grad" x1="16.8%" x2="86.7%" y1="6.7%" y2="92.5%">
          <stop offset="0%" stopColor="#00fdcf" />
          <stop offset="25%" stopColor="#00e8e4" />
          <stop offset="50%" stopColor="#00b1ff" />
          <stop offset="75%" stopColor="#0062ff" />
          <stop offset="100%" stopColor="#0000ff" />
          <animate attributeName="x1" dur="8s" repeatCount="indefinite" values="0%;0%;50%;100%;100%;100%;50%;0%;0%" />
          <animate attributeName="x2" dur="8s" repeatCount="indefinite" values="100%;100%;50%;0%;0%;0%;50%;100%;100%" />
          <animate attributeName="y1" dur="8s" repeatCount="indefinite" values="50%;0%;0%;0%;50%;100%;100%;100%;50%" />
          <animate attributeName="y2" dur="8s" repeatCount="indefinite" values="50%;100%;100%;100%;50%;0%;0%;0%;50%" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" fill="none" stroke="url(#frame-grad)" strokeWidth="2" style={{ width: 'calc(100% - 2px)', height: 'calc(100% - 2px)' }} />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1350px] scroll-mt-24 px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="mono-label mb-3 text-[color:var(--teal)]">01 · Profile</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold uppercase leading-tight md:text-5xl">
            People, products <br className="hidden md:block" />&{' '}
            <span className="script-accent normal-case">practical</span> AI
          </h2>
          <div className="section-rule mt-6" />
          <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-[color:var(--text-dim)]">{profile.summary}</p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="gradient-frame relative h-full bg-[color:var(--ink-2)] p-8 md:p-10">
            <GradientFrame />
            <p className="mono-label mb-8 text-[color:var(--text-dim)]">// track record</p>
            <dl className="space-y-8">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-5">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[color:var(--teal)] md:text-4xl" style={{ textShadow: '0 0 24px rgba(0,253,207,0.35)' }}>
                    {s.value}
                  </dd>
                  <dd className="max-w-[22ch] text-sm leading-snug text-[color:var(--text-dim)]">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
