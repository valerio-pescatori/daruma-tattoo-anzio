import heroImage from '@app/assets/images/hero.png';
import darumaLogo from '@app/assets/images/logo.svg';
import Image from 'next/image';

export default function Hero() {
  return (
    <header className="h-dvh scroll-mt-20 bg-base-1">
      <div className="relative">
        <Image className="w-full" width={393} height={790} src={heroImage} alt="Immagine di sfondo del locale" />
        <div id="shadow" className="absolute inset-0 -bottom-px bg-gradient-to-t from-base-1 to-70%" />
      </div>

      <div className="absolute left-0 top-[40%] w-full -translate-y-1/2 text-center">
        <h1 className="font-go3v2 text-5xl drop-shadow">
          Daruma Tattoo <br /> Anzio
        </h1>
        <h2 className="drop-shadow">Via A. Gramsci 51, Anzio (RM)</h2>
        <Image
          className="mx-auto mt-16 w-3/5 animate-spin md:w-1/5"
          width={80}
          height={80}
          src={darumaLogo}
          alt="Daruma logo"
        />
      </div>
    </header>
  );
}
