import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-auto px-4">
      <Navbar />
      <Hero />
    </div>
  );
}
