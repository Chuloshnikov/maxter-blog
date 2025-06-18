import About from "@/components/home/About";
import Advertisement from "@/components/home/Advertisement";
import Categories from "@/components/home/Categories";
import Explanations from "@/components/home/Explanations";
import Hero from "@/components/home/Hero";
import PlatformStats from "@/components/home/PlatformStats";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <About/>
      <Explanations/>
      <PlatformStats/>
      <Categories/>
      <Advertisement/>
    </section>
  );
}
