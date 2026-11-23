import Reveal from '../components/Reveal';
import { experience } from '../data/cv';

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-[1350px] scroll-mt-24 px-5 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="mono-label mb-3 text-[color:var(--teal)]">02 · Experience</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold uppercase leading-tight md:text-5xl">
          Ten years of <span className="script-accent normal-case">shipping</span>
        </h2>
        <div className="section-rule mt-6" />
      </Reveal>

      <div className="relative mt-16 pl-10 md:pl-14">
        <div aria-hidden className="timeline-rail" />
        <div className="space-y-10 md:space-y-14">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.period} delay={Math.min(i * 60, 180)} className="relative">
              <span aria-hidden className="timeline-dot left-[-2.55rem] md:left-[-3.55rem]" />
              <article
                className={`exp-card relative p-6 md:p-9 ${
                  i % 2 === 0 ? 'md:w-[78%]' : 'md:ml-auto md:w-[64%]'
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-[color:var(--text)] md:text-xl">
                    {job.role}
                  </h3>
                  <p className="mono-label text-[color:var(--volt)]">{job.period}</p>
                </div>
                <p className="mt-2 text-sm text-[color:var(--text-dim)]">
                  <span className="text-[color:var(--teal)]">{job.company}</span>
                  {' · '}
                  {job.domain}
                  {' · '}
                  {job.location}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[0.95rem] leading-relaxed text-[color:var(--text-dim)]">
                      <span aria-hidden className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-[color:var(--teal)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
