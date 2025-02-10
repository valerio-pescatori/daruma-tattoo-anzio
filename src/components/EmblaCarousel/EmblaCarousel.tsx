'use client';
import clsx, { ClassValue } from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';
import Image, { StaticImageData } from 'next/image';
import { useMemo, useState } from 'react';

export type EmblaCarouselProps = {
  images: StaticImageData[];
  className?: ClassValue;
};

export function EmblaCarousel({ images, className }: EmblaCarouselProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const btnClass: ClassValue = 'bg-anthracite-gray absolute flex size-6 items-center justify-center rounded-full p-1';

  const carouselMain = useMemo(
    () => (
      <div className={clsx('relative overflow-hidden rounded-lg shadow-lg', className)}>
        {/* shadow */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 size-full shadow-inner" />
        {/* fullscreen button */}
        <button onClick={() => setIsFullscreen(!isFullscreen)} className={clsx(btnClass, 'top-2 right-2 z-20')}>
          <DynamicIcon name={isFullscreen ? 'x' : 'expand'} className="size-4" />
        </button>
        {/* left button */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className={clsx(btnClass, 'top-1/2 left-2 z-20 -translate-y-1/2')}>
          <ChevronLeft />
        </button>
        {/* carousel */}
        <div ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div key={index} className="mr-px min-w-0 shrink-0 grow-0 basis-full">
                <Image src={image} alt={`Immagine ${index}`} />
              </div>
            ))}
          </div>
        </div>
        {/* right button */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          className={clsx(btnClass, 'top-1/2 right-2 z-20 -translate-y-1/2')}>
          <ChevronRight />
        </button>
      </div>
    ),
    [isFullscreen]
  );

  return (
    <>
      {isFullscreen ? (
        <div className="bg-base-1/50 fixed top-1/2 left-0 flex h-screen w-screen -translate-y-1/2 items-center p-4">
          {carouselMain}
        </div>
      ) : (
        carouselMain
      )}
    </>
  );
}
