'use client';
import clsx, { ClassValue } from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

export type EmblaCarouselProps = {
  images: StaticImageData[];
  className?: ClassValue;
};

export function EmblaCarousel({ images, className }: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const btnClass: ClassValue = 'bg-anthracite-gray absolute flex size-6 items-center justify-center rounded-full p-1';

  return (
    <div className={clsx('relative overflow-hidden rounded-lg shadow-lg', className)}>
      {/* shadow */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 size-full shadow-inner" />
      {/* fullscreen button */}
      <button onClick={() => {}} className={clsx(btnClass, 'top-2 right-2 z-20')}>
        <Expand className="size-4" />
      </button>
      {/* left button */}
      <button onClick={() => emblaApi?.scrollPrev()} className={clsx(btnClass, 'top-1/2 left-2 z-20 -translate-y-1/2')}>
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
  );
}
