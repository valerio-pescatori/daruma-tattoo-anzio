import Artist from '@components/Artist/Artist';
import Hero from '@components/Hero/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="p-8">
        <Artist />
      </div>
    </div>
  );
}
