import { useEffect, useState } from 'react';
import { profile } from '../data/cv';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

interface NavProps {
  variantLabel: string;
  onCycleVariant: () => void;
}

export default function Nav({ variantLabel, onCycleVariant }: NavProps) {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > lastY && y > 220 && !menuOpen);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`site-nav fixed inset-x-0 top-0 z-50 ${solid ? 'is-solid' : ''} ${hidden ? 'is-hidden' : ''}`}>
      <div className="mx-auto flex max-w-[1350px] items-center justify-between px-5 py-4 md:px-10">
        <button
          type="button"
          onClick={onCycleVariant}
          title={`Hero style: ${variantLabel} — click to switch`}
          aria-label={`Hero style: ${variantLabel}. Click to switch to the next variant`}
          className="cursor-pointer font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-[color:var(--text)] transition-colors hover:text-[color:var(--teal)]"
        >
          ES<span className="text-[color:var(--teal)]">.</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className="u-link mono-label !text-[color:var(--text-dim)] hover:!text-[color:var(--teal)]">
              <span className="mr-1 text-[color:var(--teal)]">0{i + 1}</span> {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={profile.cvUrl} download className="btn-ghost !py-2.5 !px-4">
            ↓ CV
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block h-px w-6 bg-[color:var(--text)] transition-transform duration-300 ${menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`block h-px w-6 bg-[color:var(--text)] transition-transform duration-300 ${menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[color:var(--line)] bg-[rgba(7,9,11,0.97)] md:hidden">
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="mono-label border-b border-[color:var(--line)] py-4 !text-sm !text-[color:var(--text)]"
              >
                <span className="mr-3 text-[color:var(--teal)]">0{i + 1}</span>
                {l.label}
              </a>
            ))}
            <a href={profile.cvUrl} download className="btn-primary mt-4 justify-center" onClick={() => setMenuOpen(false)}>
              ↓ Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
