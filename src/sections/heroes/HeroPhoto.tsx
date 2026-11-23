import { GridFloor, HeroCtas, Keywords, LocationLine, RoleLine } from './shared';

function PhotoFrame() {
  return (
    <div className="gradient-frame relative w-[270px] shrink-0 sm:w-[320px] lg:w-[360px]">
      <svg className="frame-lines" aria-hidden>
        <defs>
          <linearGradient id="photo-frame-grad" x1="16.8%" x2="86.7%" y1="6.7%" y2="92.5%">
            <stop offset="0%" stopColor="#00fdcf" />
            <stop offset="50%" stopColor="#00b1ff" />
            <stop offset="100%" stopColor="#0000ff" />
            <animate attributeName="x1" dur="8s" repeatCount="indefinite" values="0%;0%;50%;100%;100%;100%;50%;0%;0%" />
            <animate attributeName="x2" dur="8s" repeatCount="indefinite" values="100%;100%;50%;0%;0%;0%;50%;100%;100%" />
            <animate attributeName="y1" dur="8s" repeatCount="indefinite" values="50%;0%;0%;0%;50%;100%;100%;100%;50%" />
            <animate attributeName="y2" dur="8s" repeatCount="indefinite" values="50%;100%;100%;100%;50%;0%;0%;0%;50%" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" fill="none" stroke="url(#photo-frame-grad)" strokeWidth="2" style={{ width: 'calc(100% - 2px)', height: 'calc(100% - 2px)' }} />
      </svg>
      {/* Фото: кадрировано под рамку 4:5, телефон вне кадра */}
      <div className="photo-shell aspect-[4/5]">
        <img
          src="/evgeni.jpg"
          alt="Evgeni Surzhanski"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
    </div>
  );
}

/** Вариант 2 — с фото: сплит-лейаут, текст слева, портрет в градиентной рамке справа */
export default function HeroPhoto() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden px-5 py-28 md:px-10">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 85% 30%, rgba(0,98,255,0.13), transparent 60%), radial-gradient(ellipse 45% 40% at 10% 80%, rgba(0,253,207,0.07), transparent 60%)',
        }}
      />
      <GridFloor />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <LocationLine className="mb-6" />
          <h1 className="flicker font-[family-name:var(--font-display)] text-[10vw] font-extrabold uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            <span className="text-chrome block">Evgeni</span>
            <span className="text-chrome block">Surzhanski</span>
          </h1>
          <RoleLine className="mt-6" />
          <Keywords className="mt-8" />
          <HeroCtas className="mt-10 lg:[&>*]:!items-start" />
        </div>
        <PhotoFrame />
      </div>
    </section>
  );
}
