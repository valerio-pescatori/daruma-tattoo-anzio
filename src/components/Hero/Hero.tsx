import heroImage from '@app/assets/images/hero.png';
import darumaLogo from '@app/assets/images/logo.svg';
import Image from 'next/image';
import { ChevronsDown } from 'lucide-react';

export default function Hero() {
  return (
    <header className="bg-base-1 h-lvh scroll-mt-20">
      <div className="relative">
        {/* shadow */}
        <div id="shadow" className="from-base-1 absolute inset-0 -bottom-px bg-gradient-to-t to-70%" />
        {/* hero image */}
        <Image className="size-full" width={393} height={790} src={heroImage} alt="Immagine di sfondo del locale" />
        {/* text */}
        <div className="absolute top-[40%] left-0 w-full -translate-y-1/2 text-center">
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

        <ChevronsDown className="absolute bottom-0 left-1/2 size-16 -translate-x-1/2 translate-y-1/2" />
      </div>
    </header>
  );
}
