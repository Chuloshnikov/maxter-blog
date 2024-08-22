import Image from "next/image";
import { heroImage } from "@/assets/images/images";


const Hero = () => {
  return (
    <section className="relative">
        <Image src={heroImage} width={1000} height={400} objectFit="cover" alt="hero"/>
        <h2 className="absolute top-10 left-8 text-accentBg text-6xl font-bold">Inspire your texts</h2>
    </section>
  )
}

export default Hero;