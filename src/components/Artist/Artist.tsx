import skisa from '@app/assets/images/to-replace/skisa.png';
import { EmblaCarousel } from '@components/EmblaCarousel/EmblaCarousel';
import clsx, { ClassValue } from 'clsx';
import Image from 'next/image';
import tattoo1 from '@app/assets/images/to-replace/tattoo1.jpg';
import tattoo2 from '@app/assets/images/to-replace/tattoo2.jpg';
import tattoo3 from '@app/assets/images/to-replace/tattoo3.jpg';
import tattoo4 from '@app/assets/images/to-replace/tattoo4.jpg';
import { emblaCarouselTheme } from '@components/EmblaCarousel/style';

export default function Artist() {
  const artistName = 'Skisa';
  const images = [tattoo1, tattoo2, tattoo3, tattoo4];

  return (
    <section className="flex h-svh flex-col gap-8 p-8">
      <h1 className="text-5xl">Artisti</h1>

      <div>
        <div className="">
          <h2 className="text-4xl">{artistName}</h2>
          <sub className="my-1 inline-block text-xs font-light">vari - stili - dell&apos;artista</sub>
        </div>
        <span
          className={clsx(
            'relative float-right mb-6 inline-flex size-1/2 justify-center',
            // bottom half circle
            'before:absolute before:-bottom-6 before:left-0 before:z-20 before:block before:h-1/2 before:w-full',
            'before:border-accent before:rounded-b-full before:border-10 before:border-t-0',
            // full background circle
            'after:border-accent after:border-10',
            'after:absolute after:top-6 after:left-0 after:z-0 after:h-full after:w-full after:rounded-full'
          )}>
          <Image className="z-10" src={skisa} alt={`Foto profilo di ${artistName}`} width={109} height={164} />
        </span>
        <div className="relative float-right hidden aspect-square items-start justify-center">
          <div className={clsx('hidden')} />
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
        sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Aliquam in hendrerit urna. Pellentesque
        sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
      </div>
      {/* TODO: add shadow to pseudo element */}
      <EmblaCarousel className={'inset-shadow rounded-xl shadow-lg'} images={images} />
    </section>
  );
}
