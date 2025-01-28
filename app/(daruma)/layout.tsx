import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { clsx } from 'clsx';

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
  return (
    <html lang="it" className={clsx(cormorantGaramond.variable, go3v2.variable)}>
      <body className="bg-base-1 bg-gradient-to-[45deg] bg-from-base-1 bg-to-base-2 text-text h-screen overflow-y-scroll overscroll-y-none antialiased">
        {children}
      </body>
    </html>
  );
}
