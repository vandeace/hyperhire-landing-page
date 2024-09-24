import CarouselBottom from "./components/carousel-bottom";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <div className="mx-auto w-full max-w-6xl flex-auto px-4">
        <Navbar />
        <Hero />
        <CarouselBottom />
      </div>
      <div className="bg-[#FBFBFB]">
        <Footer />
      </div>
    </div>
  );
}
