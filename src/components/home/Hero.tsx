"use client"
import Image from "next/image";
import { serverOnTheGrass } from "@/assets/images/images";
import { LuArrowRightSquare } from "react-icons/lu";
import Link from "next/link";

import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="relative max-h-[800px]">
        <Image 
        src={serverOnTheGrass} 
        className="w-screen h-[400px] md:h-[800px] opacity-90 object-cover" 
        width={1900} 
        height={800} 
        alt="hero"
        />
        <motion.div 
        className="absolute top-[10%] left-[7%] md:left-[10%]"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        >
          <h2 className="text-accentBg text-4xl md:text-8xl font-bold drop-shadow-lg">
              <span className="text-2xl md:text-6xl">
                Inspire your imagination <br/>with
              </span>
              {" "}
              <span className="text-white">Ma</span>
              <span className="text-accentBg">
                X
              </span>
              <span className="text-white">ter</span>
          </h2>
          <div className="flex gap-4 items-center mt-8 max-w-max cursor-pointer group">
              <div className="max-w-10 grid grid-cols-2 gap-2 group-hover:gap-4 duration-200">
                  <span className="block w-4 h-4 bg-accentBg"></span>
                  <span className="block w-4 h-4 bg-accentBg"></span>
                  <span className="block w-4 h-4 bg-accentBg"></span>
                  <span className="block w-4 h-4 bg-accentBg"></span>
              </div>
                <Link
                href={'/blog'}
                  className='text-xl flex items-center gap-2 font-semibold bg-accentBg py-2 px-4 text-white border-2 border-accentBg hover:bg-white hover:text-accentBg duration-200'
              >
                  <span className="text-2xl">To blogs</span>
                  <LuArrowRightSquare className="w-8 h-8"/>
              </Link>
              <div className="max-w-10 grid grid-cols-2 gap-2 group-hover:gap-4 duration-200">
                  <span className="block w-4 h-4 bg-accentBg"></span>
                  <span className="block w-4 h-4 bg-accentBg"></span>
                  <span className="block w-4 h-4 bg-accentBg"></span>
                  <span className="block w-4 h-4 bg-accentBg"></span>
              </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero;