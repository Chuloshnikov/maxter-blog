import About from "@/components/home/About";
import Advertisement from "@/components/home/Advertisement";
import Explanations from "@/components/home/Explanations";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <About/>
      <Explanations/>
      <Advertisement/>
    </main>
  );
}
