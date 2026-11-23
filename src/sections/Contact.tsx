import { useState, type FormEvent } from 'react';
import Reveal from '../components/Reveal';
import { profile } from '../data/cv';

type Status = 'idle' | 'sent';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean; message?: boolean }>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const next = {
      name: !name,
      email: !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      message: !message,
    };
    setErrors(next);
    if (next.name || next.email || next.message) return;
    // Stub: no backend yet — message is not sent anywhere.
    setStatus('sent');
    form.reset();
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-[color:var(--line)] bg-[color:var(--ink-2)] py-24 md:py-36">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 80% 100%, rgba(0,98,255,0.12), transparent 65%), radial-gradient(ellipse 45% 35% at 15% 90%, rgba(0,253,207,0.07), transparent 60%)',
        }}
      />
      <div className="relative mx-auto grid max-w-[1350px] gap-14 px-5 md:px-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="mono-label mb-3 text-[color:var(--teal)]">05 · Contact</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold uppercase leading-tight md:text-5xl">
            Let’s build <br />
            <span className="script-accent normal-case">what’s next</span>
          </h2>
          <div className="section-rule mt-6" />
          <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-[color:var(--text-dim)]">
            Open to product/project leadership roles, consulting on AI adoption, and ambitious zero-to-one projects.
          </p>
          <div className="mt-10 space-y-4">
            <p className="text-sm text-[color:var(--text-dim)]">
              <span className="mono-label mr-4 text-[color:var(--text)]">Telegram</span>
              <a href={profile.telegramUrl} target="_blank" rel="noreferrer" className="u-link">
                {profile.telegram}
              </a>
            </p>
            <p className="text-sm text-[color:var(--text-dim)]">
              <span className="mono-label mr-4 text-[color:var(--text)]">Location</span>
              {profile.location}
            </p>
            <p className="text-sm text-[color:var(--text-dim)]">
              <span className="mono-label mr-4 text-[color:var(--text)]">LinkedIn</span>
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="u-link">
                {profile.linkedin}
              </a>
            </p>
            <p className="text-sm">
              <a href={profile.cvUrl} download className="u-link">
                ↓ Download full CV (PDF)
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          {status === 'sent' ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center border border-[color:var(--teal)] p-10 text-center" role="status">
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--teal)]">
                Message drafted
              </p>
              <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-[color:var(--text-dim)]">
                This form is a demo for now — nothing was sent. The fastest way to reach me is Telegram:{' '}
                <a href={profile.telegramUrl} target="_blank" rel="noreferrer" className="u-link">
                  {profile.telegram}
                </a>
              </p>
              <button type="button" className="btn-ghost mt-8" onClick={() => setStatus('idle')}>
                Write another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mono-label mb-2 block text-[color:var(--text-dim)]">
                    Name
                  </label>
                  <input id="c-name" name="name" type="text" autoComplete="name" placeholder="Your name" className={`field ${errors.name ? 'field-error' : ''}`} />
                  {errors.name && <p className="mt-1 text-xs text-[#ff5d5d]">Please enter your name</p>}
                </div>
                <div>
                  <label htmlFor="c-email" className="mono-label mb-2 block text-[color:var(--text-dim)]">
                    Email
                  </label>
                  <input id="c-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" className={`field ${errors.email ? 'field-error' : ''}`} />
                  {errors.email && <p className="mt-1 text-xs text-[#ff5d5d]">Please enter a valid email</p>}
                </div>
              </div>
              <div>
                <label htmlFor="c-message" className="mono-label mb-2 block text-[color:var(--text-dim)]">
                  Message
                </label>
                <textarea id="c-message" name="message" rows={5} placeholder="What would you like to discuss?" className={`field resize-y ${errors.message ? 'field-error' : ''}`} />
                {errors.message && <p className="mt-1 text-xs text-[#ff5d5d]">Please write a message</p>}
              </div>
              <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
                Send message
              </button>
              <p className="text-xs text-[color:var(--text-dim)]">
                For the fastest and most reliable response, feel free to reach me directly on{' '}
                <a href={profile.telegramUrl} target="_blank" rel="noreferrer" className="u-link">
                  Telegram
                </a>
                .
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
