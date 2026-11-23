import { profile } from '../../data/cv';

export function LocationLine({ className = '' }: { className?: string }) {
  return (
    <p className={`mono-label !text-[0.62rem] !tracking-[0.18em] !text-[color:var(--teal)] md:!text-[0.72rem] ${className}`}>
      {profile.location}
    </p>
  );
}

export function RoleLine({ className = '', pmClassName = 'text-[color:var(--text)]' }: { className?: string; pmClassName?: string }) {
  return (
    <p className={`text-xl md:text-2xl ${className}`}>
      <span className="script-accent text-3xl md:text-4xl">{profile.roleAccent}</span>{' '}
      <span className={`font-[family-name:var(--font-display)] text-base font-normal uppercase tracking-wider md:text-xl ${pmClassName}`}>
        {profile.role}
      </span>
    </p>
  );
}

export function Keywords({ className = '' }: { className?: string }) {
  return (
    <p className={`mono-label !text-[0.6rem] !tracking-[0.28em] !text-[color:var(--text-dim)] ${className}`}>
      {profile.keywords.join('  ·  ')}
    </p>
  );
}

export function HeroCtas({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-4 sm:flex-row ${className}`}>
      <a href={profile.cvUrl} download className="btn-primary">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download CV
      </a>
      <a href={profile.telegramUrl} target="_blank" rel="noreferrer" className="btn-ghost">
        Get in touch
      </a>
    </div>
  );
}

export function ScrollCue() {
  return (
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
  );
}

export function GridFloor({ horizon = '42%' }: { horizon?: string }) {
  return (
    <>
      <div aria-hidden className="horizon-glow" style={{ bottom: horizon }} />
      <div aria-hidden className="grid-floor" style={{ height: `calc(${horizon} + 4%)` }} />
    </>
  );
}
