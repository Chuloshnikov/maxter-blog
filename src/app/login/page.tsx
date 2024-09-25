"use client"
import { signIn } from 'next-auth/react'
import {redirect} from "next/navigation";
import {useSession} from "next-auth/react";


export default function LoginPage() {
    const session = useSession();
    const {status} = session;
   
      if (status === 'authenticated') {
        return redirect('/');
      }

      if (status === 'unauthenticated') {
        return (
            <main className='w-screen h-[calc(100vh-21.1rem)]'>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-2'>
                    <button
                    onClick={() => signIn('google')}
                    className='text-xl font-semibold bg-accentBg py-2 px-8 text-white border-2 border-accentBg hover:bg-white hover:text-accentBg duration-200'
                    >
                        Sign In with Google
                    </button>
                    <button
                    onClick={() => signIn('github')}
                    className='text-xl font-semibold bg-accentBg py-2 px-8 text-white border-2 border-accentBg hover:bg-white hover:text-accentBg duration-200'
                    >
                        Sign In with GitHub
                    </button>
                    </div>
               )
              }
  }
         
                  }

