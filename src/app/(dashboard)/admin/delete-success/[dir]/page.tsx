"use client"

import { sliceLastSymbolOfString } from "@/lib/utils"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
import { IoCheckboxSharp } from "react-icons/io5";

export default function DeleteSuccess({ params: { dir } }: { params: { dir: string } }) {


  return (
    <div className="flex flex-col gap-10 items-center justify-center">
        <Link 
        className="w-full flex items-center gap-2 justify-center py-6 px-10 bg-accentBg border-4 border-accentBg text-white text-2xl text-center hover:text-accentBg hover:bg-white duration-200  font-semibold"
        href={`/admin/${dir}`}
        >
        <FaArrowLeft/>
        <span>Back to {dir}</span>
        </Link>
        <div className="flex flex-col items-center text-center">
            <div className="text-accentBg text-lg mdl:text-4xl font-bold">{sliceLastSymbolOfString(dir)} deleted successfully</div>
            <IoCheckboxSharp className="w-20 h-20 text-green-500"/>
        </div>
    </div>
  )
}
