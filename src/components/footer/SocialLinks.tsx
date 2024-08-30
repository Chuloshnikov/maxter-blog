import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { BiLogoTiktok } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa6";



const SocialLinks = () => {
  return (
    <div className="mx-auto">
        <ul className="flex gap-4">
            <li className="p-1 flex items-center justify-center border border-white hover:border-black hover:text-black duration-200">
                <Link 
                
                href="/facebook.com"
                >
                    <FaXTwitter />
                </Link>
            </li>
            <li className="p-1 flex items-center justify-center border border-white hover:border-black hover:text-black duration-200">
                <Link 
                
                href="/facebook.com"
                >
                    <FaInstagram />
                </Link>
            </li>
            <li className="p-1 flex items-center justify-center border border-white hover:border-black hover:text-black duration-200">
                <Link 
                
                href="/facebook.com"
                >
                    <FaFacebookF/>
                </Link>
            </li>
            <li className="p-1 flex items-center justify-center border border-white hover:border-black hover:text-black duration-200">
                <Link 
                
                href="/facebook.com"
                >
                    <FaMediumM/>
                </Link>
            </li>
            <li className="p-1 flex items-center justify-center border border-white hover:border-black hover:text-black duration-200">
                <Link 
                
                href="/facebook.com"
                >
                    <BiLogoTiktok/>
                </Link>
            </li>
            <li className="p-1 flex items-center justify-center border border-white hover:border-black hover:text-black duration-200">
                <Link 
                
                href="/facebook.com"
                >
                    <FaGithub/>
                </Link>
            </li>
            <li className="p-1 flex items-center justify-center border border-white hover:border-black hover:text-black duration-200">
                <Link 
                
                href="/facebook.com"
                >
                    <FaStackOverflow/>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks