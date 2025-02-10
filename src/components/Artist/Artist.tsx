import skisa from '@app/assets/images/to-replace/skisa.png';
import tattoo1 from '@app/assets/images/to-replace/tattoo1.jpg';
import tattoo2 from '@app/assets/images/to-replace/tattoo2.jpg';
import tattoo3 from '@app/assets/images/to-replace/tattoo3.jpg';
import tattoo4 from '@app/assets/images/to-replace/tattoo4.jpg';
import { EmblaCarousel } from '@components/EmblaCarousel/EmblaCarousel';
import Image from 'next/image';

export default function Artist() {
  const artistName = 'Skisa';
  const images = [tattoo1, tattoo2, tattoo3, tattoo4];

  return (
    <section className="flex h-lvh flex-col gap-8 p-8">
      <h1 className="text-5xl">Artisti</h1>
      <div>
        <Image
          className="float-right w-1/2"
          src={skisa}
          alt={`Foto profilo di ${artistName}`}
          width={109}
          height={164}
        />
        <div className="">
          <h2 className="text-4xl">{artistName}</h2>
          <sub className="my-1 inline-block text-xs font-light">vari - stili - dell&apos;artista</sub>
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
        sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Aliquam in hendrerit urna. Pellentesque
        sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
      </div>
      {/* TODO: add shadow to pseudo element */}
      <EmblaCarousel images={images} />
      <div className="flex items-center justify-center">
        <button className="from-accent to-accent-2 bg-from-accent text-base-1 shadow-accent shadow-gold rounded-full bg-gradient-to-r px-6 py-1">
          Prenota appuntamento
        </button>
      </div>
    </section>
  );
}
