import { profile } from '../data/cv';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5">
      {/* ambient sky glow */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 18%, rgba(0,98,255,0.14), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 30%, rgba(0,253,207,0.10), transparent 65%)',
        }}
      />

      {/* retro sun */}
      <div aria-hidden className="retro-sun absolute left-1/2 top-[6%] h-[190px] w-[190px] -translate-x-1/2 md:top-[7%] md:h-[280px] md:w-[280px]" />

      {/* grid floor + horizon */}
      <div aria-hidden className="horizon-glow" />
      <div aria-hidden className="grid-floor" />

      {/* content */}
      <div className="relative z-10 mt-[180px] flex flex-col items-center text-center md:mt-[230px]">
        <p className="mono-label mb-4 !text-[0.62rem] !tracking-[0.18em] !text-[color:var(--teal)] md:!text-[0.72rem]">
          {profile.location} · {profile.telegram}
        </p>

        <h1 className="flicker font-[family-name:var(--font-display)] text-[9.5vw] font-extrabold uppercase leading-[0.95] tracking-tight sm:text-[10vw] lg:text-[6.2rem]">
          <span className="text-chrome block">Evgeni</span>
          <span className="text-chrome block">Surzhanski</span>
        </h1>

        <p className="mt-5 text-xl md:text-2xl">
          <span className="script-accent text-3xl md:text-4xl">{profile.roleAccent}</span>{' '}
          <span className="font-[family-name:var(--font-display)] text-base font-normal uppercase tracking-wider text-[color:var(--text)] md:text-xl">
            {profile.role}
          </span>
        </p>

        <p className="mono-label mt-8 !text-[0.6rem] !tracking-[0.28em] !text-[color:var(--text-dim)]">
          {profile.keywords.join('  ·  ')}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a href={profile.cvUrl} download className="btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="scroll-cue absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-label="Scroll to About section"
      >
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none" stroke="var(--teal)" strokeWidth="1.5" aria-hidden>
          <rect x="1" y="1" width="20" height="32" rx="10" />
          <line x1="11" y1="8" x2="11" y2="14" strokeLinecap="round" />
        </svg>
      </a>
    </section>
  );
}
