import Reveal from '../components/Reveal';
import { education, languages } from '../data/cv';

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1350px] scroll-mt-24 px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="mono-label mb-3 text-[color:var(--teal)]">04 · Background</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold uppercase leading-tight md:text-4xl">
            Education <br />& languages
          </h2>
          <div className="section-rule mt-6" />
        </Reveal>

        <div className="lg:col-span-8">
          <dl>
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 70}>
                <div className="grid gap-1 border-b border-[color:var(--line)] py-6 first:pt-0 sm:grid-cols-2 sm:items-baseline">
                  <dt className="font-[family-name:var(--font-display)] text-base font-semibold text-[color:var(--text)]">
                    {e.title}
                  </dt>
                  <dd className="text-sm leading-relaxed text-[color:var(--text-dim)] sm:text-right">{e.place}</dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {languages.map((l) => (
                <p key={l.name} className="text-sm text-[color:var(--text-dim)]">
                  <span className="mono-label mr-3 text-[color:var(--volt)]">{l.name}</span>
                  {l.level}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
