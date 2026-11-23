import Reveal from '../components/Reveal';
import { expertise } from '../data/cv';

export default function Expertise() {
  return (
    <section id="expertise" className="relative scroll-mt-24 border-y border-[color:var(--line)] bg-[color:var(--ink-2)] py-24 md:py-36">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <Reveal>
          <p className="mono-label mb-3 text-[color:var(--teal)]">03 · Core expertise</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold uppercase leading-tight md:text-5xl">
            What I bring <span className="script-accent normal-case">to the table</span>
          </h2>
          <div className="section-rule mt-6" />
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {expertise.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 90}
              className={i === 0 ? 'lg:col-span-5' : i === 1 ? 'lg:col-span-7' : 'lg:col-span-12'}
            >
              <div className="h-full border-t-2 border-[color:var(--teal)] pt-6">
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold uppercase tracking-wide text-[color:var(--text)] md:text-lg">
                  {group.title}
                </h3>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="tag-chip inline-block">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
