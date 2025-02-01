import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { clsx } from 'clsx';
import { getImageProps } from 'next/image';
import { getBackgroundImage } from '@utils/getBackgroundImage';
import { CSSProperties } from 'react';
import bgPattern from './assets/images/bg-pattern.png';

const cormorantGaramond = localFont({
  src: [
    {
      path: './assets/fonts/Cormorant_Garamond/CormorantGaramond-Medium.ttf',
      weight: '400',
    },
    {
      path: './assets/fonts/Cormorant_Garamond/CormorantGaramond-Light.ttf',
      weight: '300',
    },
    {
      path: './assets/fonts/Cormorant_Garamond/CormorantGaramond-Regular.ttf',
      weight: '400',
    },
    {
      path: './assets/fonts/Cormorant_Garamond/CormorantGaramond-Medium.ttf',
      weight: '500',
    },
    {
      path: './assets/fonts/Cormorant_Garamond/CormorantGaramond-SemiBold.ttf',
      weight: '600',
    },
    {
      path: './assets/fonts/Cormorant_Garamond/CormorantGaramond-Bold.ttf',
      weight: '700',
    },
  ],
  display: 'swap',
  variable: '--font-cormorant-garamond',
});

const go3v2 = localFont({
  src: './assets/fonts/go3v2/go3v2.ttf',
  weight: '400',
  display: 'swap',
  variable: '--font-go3v2',
});

export const metadata: Metadata = {
  title: 'Daruma Tattoo Anzio',
  description: 'Studio di tatuaggi ad Anzio, Roma',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: '',
    width: 393,
    height: 852,
    src: bgPattern,
  });
  const backgroundImage = getBackgroundImage(srcSet);
  const style: CSSProperties = {
    height: '100vh',
    width: '100vw',
    backgroundImage: `${backgroundImage}, linear-gradient(to bottom, rgb(var(--midnight-teal)), rgb(var(--deep-navy-black)))`,
  };

  return (
    <html lang="it" className={clsx(cormorantGaramond.variable, go3v2.variable)}>
      <body
        style={style}
        className={clsx(
          'h-screen overflow-y-scroll overscroll-y-none text-text antialiased',
          'bg-base-1 bg-cover bg-repeat-y'
        )}>
        {children}
      </body>
    </html>
  );
}
