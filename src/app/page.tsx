import About from "@/components/home/About";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="max-w-contentContainer mx-auto flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <About/>
    </main>
  );
}
