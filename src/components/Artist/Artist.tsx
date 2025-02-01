import skisa from '@app/assets/images/to-replace/skisa.png';
import clsx from 'clsx';
import Image from 'next/image';

export default function Artist() {
  const artistName = 'Skisa';

  return (
    <section className="h-svh">
      <h1 className="text-5xl">Artisti</h1>

      <div className="mt-8 flex">
        <div className="w-1/2">
          <h2 className="text-4xl">{artistName}</h2>
          <sub className="my-1 inline-block text-xs font-light">vari - stili - dell&apos;artista</sub>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Aliquam in hendrerit
            urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
        {/*  TODO: ADD CIRCLE */}
        <div className="w-1/2">
          <div className="relative flex aspect-square w-full items-start justify-center">
            {/* upper half circle */}
            <div
              className={clsx(
                'border-accent rounded-b-full border-10 border-t-0',
                'absolute -bottom-6 left-0 z-20 h-1/2 w-full'
              )}
            />
            <Image className="z-10" src={skisa} alt={`Foto profilo di ${artistName}`} width={109} height={164} />
            {/* lower full circle */}
            <div className={clsx('border-accent border-10', 'absolute top-6 left-0 z-0 h-full w-full rounded-full')} />
          </div>
        </div>
      </div>
    </section>
  );
}
