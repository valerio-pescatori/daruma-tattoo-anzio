import Image from 'next/image';
import style from './Hero.module.css';
import clsx from 'clsx';
import heroImage from '../../assets/images/hero.jpeg';
import darumaLogo from '../../assets/images/logo.svg';

export default function Hero() {
  return (
    <header id="hero" className="relative h-screen scroll-mt-20">
      <Image className="opacity-40 w-full h-full" src={heroImage} alt="Immagine di sfondo del locale" />

      <div className="absolute bottom-0 left-0 h-32 bg-gradient-to-t from-background w-full" />
      <div
        className={clsx(
          'absolute top-1/2 left-0 -translate-y-1/2 z-10 w-full text-center opacity-100',
          style.animateFadeOut
        )}>
        <h1 className="text-4xl md:text-6xl xl:text-8xl font-go3v2">
          <span className="animate-fade-in">Daruma Tattoo - Anzio</span>
          {/* <AnimatedText text="Daruma Tattoo - Anzio" /> */}
        </h1>
        <h2 className="opacity-80">Benvenuto al Daruma Tattoo Shop! Ci trovi in Via A. Gramsci 51 ad Anzio (RM)</h2>
        <Image className="mx-auto mt-8 animate-spin w-1/3 md:w-1/5" src={darumaLogo} alt="Daruma logo" />
      </div>
    </header>
  );
}
