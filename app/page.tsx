import CarouselBottom from "./components/carousel-bottom";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl flex-auto px-4">
      <Navbar />
      <Hero />
      <CarouselBottom />
    </div>
  );
}
