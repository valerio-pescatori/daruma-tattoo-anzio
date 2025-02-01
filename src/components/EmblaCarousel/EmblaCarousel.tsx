'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image, { StaticImageData } from 'next/image';
import clsx, { ClassValue } from 'clsx';

export type EmblaCarouselProps = {
  images: StaticImageData[];
  className?: ClassValue;
};

export function EmblaCarousel({ images, className }: EmblaCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className={clsx('relative overflow-hidden', className)} ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className="mr-px min-w-0 shrink-0 grow-0 basis-full">
            <Image src={image} alt={`Immagine ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
