import { GridFloor, HeroCtas, Keywords, LocationLine, RoleLine, ScrollCue } from './shared';

/** Вариант 5 — как Duo, но имя и Product Manager чисто белые */
export default function HeroWhite() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5">
      <div aria-hidden className="starfield absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 58% 36% at 50% 36%, rgba(0,253,207,0.20), transparent 68%), radial-gradient(ellipse 70% 45% at 50% 0%, rgba(0,98,255,0.08), transparent 60%)',
        }}
      />
      <GridFloor horizon="36%" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <LocationLine className="mb-6" />
        <h1 className="flicker font-[family-name:var(--font-display)] text-[11vw] font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-[11vw] lg:text-[7.2rem]">
          <span className="block">Evgeni</span>
          <span className="block">Surzhanski</span>
        </h1>
        <RoleLine className="mt-6" pmClassName="text-white" />
        <Keywords className="mt-14" />
        <HeroCtas className="mt-6" />
      </div>

      <ScrollCue />
    </section>
  );
}
