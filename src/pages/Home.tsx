import { useState, type ComponentType } from 'react';
import Nav from '../sections/Nav';
import HeroClean from '../sections/heroes/HeroClean';
import HeroPhoto from '../sections/heroes/HeroPhoto';
import HeroTerminal from '../sections/heroes/HeroTerminal';
import HeroDuo from '../sections/heroes/HeroDuo';
import HeroWhite from '../sections/heroes/HeroWhite';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Expertise from '../sections/Expertise';
import Education from '../sections/Education';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const HEROES: Record<number, ComponentType> = {
  1: HeroWhite,
  2: HeroPhoto,
  3: HeroTerminal,
  4: HeroDuo,
  5: HeroClean,
};

const VARIANT_LABELS: Record<number, string> = {
  1: 'White',
  2: 'Photo',
  3: 'Terminal',
  4: 'Duo',
  5: 'Clean',
};

export default function Home() {
  const [variant, setVariant] = useState(1);
  const ActiveHero = HEROES[variant] ?? HeroClean;

  return (
    <div className="grain min-h-[100dvh] bg-[color:var(--ink)] text-[color:var(--text)]">
      <Nav
        variantLabel={VARIANT_LABELS[variant]}
        onCycleVariant={() => setVariant((v) => (v % 5) + 1)}
      />
      <main>
        <ActiveHero key={variant} />
        <About />
        <Experience />
        <Expertise />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
