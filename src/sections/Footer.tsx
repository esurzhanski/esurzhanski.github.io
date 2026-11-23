import { profile } from '../data/cv';

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] py-10">
      <div className="mx-auto flex max-w-[1350px] flex-col items-center justify-between gap-4 px-5 text-center md:flex-row md:px-10 md:text-left">
        <p className="mono-label !normal-case !tracking-[0.08em] text-[color:var(--text-dim)]">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-[family-name:var(--font-script)] text-xl text-[color:var(--teal)]" style={{ textShadow: '0 0 16px rgba(0,253,207,0.35)' }}>
          shipped with intent
        </p>
        <a href="#top" className="u-link mono-label">
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
