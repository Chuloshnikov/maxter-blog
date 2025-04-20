"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useInViewContext } from "@/context/InViewContext";

const NavbarLinks: React.FC = () => {
  const path = usePathname();
  const { inView } = useInViewContext();

  return (
    <nav className="">
      <ul className="hidden lg:flex gap-8 items-center text-xl font-medium mt-4">
        <li className="-mt-4">
          <Link href={"/"} className="max-w-max">
            <h1 className="font-extrabold text-6xl">
              Ma
              <span className="text-accentBg">X</span>
              ter
            </h1>
          </Link>
        </li>

        <li>
          <Link
            href={"/"}
            className={!inView && path === "/" ? "activeLink" : "linkHover"}
          >
            home
          </Link>
        </li>
        <span className="w-4 h-4 bg-accentBg"></span>
        <li>
          <Link
            href={"/#about"}
            className={path === "/" && inView ? "activeLink" : "linkHover"}
          >
            about
          </Link>
        </li>
        <span className="w-4 h-4 bg-accentBg"></span>
        <li>
          <Link
            href={"/blog"}
            className={path.includes("/blog") ? "activeLink" : "linkHover"}
          >
            blog
          </Link>
        </li>
        <span className="w-4 h-4 bg-accentBg"></span>
        <li>
          <Link
            href={"/contacts"}
            className={path.includes("/contacts") ? "activeLink" : "linkHover"}
          >
            contacts
          </Link>
        </li>
      </ul>

      <ul className="items-center lg:hidden text-lg font-medium mt-4">
        <li className="-mt-4">
          <Link href={"/"} className="max-w-max">
            <h1 className="font-extrabold text-5xl">
              Ma
              <span className="text-accentBg">X</span>
              ter
            </h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLinks;
