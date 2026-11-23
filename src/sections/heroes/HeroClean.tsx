import { GridFloor, HeroCtas, Keywords, LocationLine, RoleLine, ScrollCue } from './shared';

/** Вариант 1 — без солнца: чистая типографика, звёздное поле, сетка-пол */
export default function HeroClean() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5">
      <div aria-hidden className="starfield absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(0,98,255,0.10), transparent 60%), radial-gradient(ellipse 55% 40% at 50% 55%, rgba(0,253,207,0.06), transparent 65%)',
        }}
      />
      <GridFloor horizon="36%" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <LocationLine className="mb-6" />
        <h1 className="flicker font-[family-name:var(--font-display)] text-[11vw] font-extrabold uppercase leading-[0.95] tracking-tight sm:text-[11vw] lg:text-[7.2rem]">
          <span className="text-chrome block">Evgeni</span>
          <span className="text-chrome block">Surzhanski</span>
        </h1>
        <RoleLine className="mt-6" />
        <Keywords className="mt-14" />
        <HeroCtas className="mt-6" />
      </div>

      <ScrollCue />
    </section>
  );
}
