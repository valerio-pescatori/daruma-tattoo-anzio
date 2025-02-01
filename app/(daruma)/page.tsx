import Artist from '@components/Artst/Artst';
import Hero from '@components/Hero/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="px-8">
        <Artist />
      </div>
    </div>
  );
}
