"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { CgMenuGridR } from 'react-icons/cg';
import { GrClose } from "react-icons/gr";
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const NavbarMenuButton = ({status}: {status: any}) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        open: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            stiffness: 20,
            damping: 10,
          },
        },
        closed: {
          opacity: 0,
          x: "-100%",
          transition: {
            type: "spring",
            stiffness: 20,
            damping: 10,
          },
        },
      };
    
      const links = [
        { name: "Home", href: "/home" },
        { name: "About", href: "/#about" },
        { name: "Blog", href: "/blog" },
        { name: "Contacts", href: "/contacts" },
      ];


    if (!isOpen) {
        return (
            <div className='lg:hidden'>
                <CgMenuGridR onClick={() => setIsOpen(!isOpen)} className='l w-14 h-14 text-accentBg'/>
            </div>
        )
    }


    if (isOpen) {
        return (   
            <div> 
                <div className='lg:hidden'>
                    <CgMenuGridR onClick={() => setIsOpen(!isOpen)} className='l w-14 h-14 text-accentBg'/>
                </div>
                <motion.div
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={menuVariants}
                    className="z-10 absolute top-0 left-0 h-screen w-full bg-white p-6 text-accentBg"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className='w-full flex justify-end items-end'>
                        <div className='border-2 border-accentBg p-1'>
                            <GrClose className='text-accentBg w-5 h-5' onClick={() => setIsOpen(!isOpen)}/>
                        </div>
                    </div>
                    <nav className="flex flex-col space-y-4 w-full h-screen">
                    
                        {links.map((link) => (
                            <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-accentBg text-lg"
                            whileHover={{ scale: 1.1 }}
                            >
                            {link.name}
                            </motion.a>
                        ))}
                        {!status ? (
                            <button 
                            onClick={() => signIn("google")}
                            className='text-xl max-w-max font-semibold bg-accentBg py-2 px-4 text-white border-2 border-accentBg hover:bg-white hover:text-accentBg duration-200'
                            >
                                Get started
                            </button>
                        ) : (
                            <Link
                            href={'/profile'}
                            className='text-xl max-w-max font-semibold bg-accentBg py-2 px-4 text-white border-2 border-accentBg hover:bg-white hover:text-accentBg duration-200'
                            >
                                Profile
                            </Link>
                        )}
                    </nav>
                </motion.div>
              </div>    
        )
    }
}

export default NavbarMenuButton;