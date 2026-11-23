import { useEffect, useState } from 'react';
import { HeroCtas, Keywords } from './shared';
import { profile } from '../../data/cv';

interface Line {
  text: string;
  kind: 'cmd' | 'name' | 'role' | 'plain';
}

const LINES: Line[] = [
  { text: '$ whoami', kind: 'cmd' },
  { text: 'Evgeni Surzhanski', kind: 'name' },
  { text: '$ cat role.txt', kind: 'cmd' },
  { text: 'AI-Native Product Manager', kind: 'role' },
  { text: '$ ls ./domains', kind: 'cmd' },
  { text: 'fintech/  mobile/  gaming/  ai-native-products/', kind: 'plain' },
];

function lineClass(kind: Line['kind']) {
  switch (kind) {
    case 'cmd':
      return 'text-[color:var(--volt)]';
    case 'name':
      return 'font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-[color:var(--teal)] md:text-2xl';
    case 'role':
      return 'text-[color:var(--text)]';
    default:
      return 'text-[color:var(--text-dim)]';
  }
}

/** Вариант 5 — терминал: имя «печатается» в консоли */
export default function HeroTerminal() {
  const [charCount, setCharCount] = useState(0);
  const total = LINES.reduce((acc, l) => acc + l.text.length + 1, 0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCharCount(total);
      return;
    }
    let n = 0;
    const timer = window.setInterval(() => {
      n += 1;
      setCharCount(n);
      if (n >= total) window.clearInterval(timer);
    }, 22);
    return () => window.clearInterval(timer);
  }, [total]);

  let used = 0;
  const rendered = LINES.map((line) => {
    const start = used;
    used += line.text.length + 1;
    const visible = Math.max(0, Math.min(line.text.length, charCount - start));
    return { ...line, visible, start };
  });
  const done = charCount >= total;

  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 py-28">
      <div aria-hidden className="starfield absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 40%, rgba(0,253,207,0.07), transparent 62%), radial-gradient(ellipse 70% 45% at 50% 100%, rgba(0,98,255,0.12), transparent 60%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[720px]">
        <div className="terminal">
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-[color:var(--line)] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5d5d]" />
            <span className="h-3 w-3 rounded-full bg-[color:var(--volt)]" />
            <span className="h-3 w-3 rounded-full bg-[color:var(--teal)]" />
            <span className="mono-label ml-3 !text-[0.6rem] text-[color:var(--text-dim)]">evgeni@ai-native ~ zsh</span>
          </div>
          <div className="min-h-[240px] px-5 py-6 font-[family-name:var(--font-mono)] text-[0.8rem] leading-[2.1] md:min-h-[260px] md:text-[0.9rem]">
            {rendered.map((line, i) => (
              <p key={i} className={lineClass(line.kind)}>
                {line.text.slice(0, line.visible)}
                {!done && charCount >= line.start && charCount < line.start + line.text.length + 1 && (
                  <span className="terminal-caret" />
                )}
              </p>
            ))}
            {done && (
              <p className="text-[color:var(--volt)]">
                $ <span className="terminal-caret" />
              </p>
            )}
          </div>
        </div>

        <p className="mt-8 text-center text-xl md:text-2xl">
          <span className="script-accent text-3xl md:text-4xl">{profile.roleAccent}</span>{' '}
          <span className="font-[family-name:var(--font-display)] text-base font-normal uppercase tracking-wider text-[color:var(--text)] md:text-xl">
            {profile.role}
          </span>
        </p>
        <Keywords className="mt-6 text-center" />
        <HeroCtas className="mt-8 justify-center" />
      </div>
    </section>
  );
}
