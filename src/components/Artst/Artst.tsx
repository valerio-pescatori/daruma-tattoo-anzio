import skisa from '@app/assets/images/to-replace/skisa.png';
import Image from 'next/image';

export default function Artist() {
  const artistName = 'Skisa';

  return (
    <section className="h-screen pt-8">
      <h1 className="text-5xl">Artisti</h1>

      <div className="mt-8 flex">
        <div className="shrink">
          <h2 className="text-4xl">{artistName}</h2>
          <sub className="text-xs font-light">vari - stili - dell&apos;artista</sub>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Aliquam in hendrerit
            urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
        {/*  TODO: ADD CIRCLE */}
        <Image src={skisa} alt={`Foto profilo di ${artistName}`} width={109} height={164} />
      </div>
    </section>
  );
}
