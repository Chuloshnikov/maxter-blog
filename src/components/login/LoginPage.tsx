"use client"
import { signIn } from 'next-auth/react'
import {redirect} from "next/navigation";
import {useSession} from "next-auth/react";


import { FaGooglePlus } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

const LoginPage = () => {
   const session = useSession();
    const {status} = session;
   
      if (status === 'authenticated') {
        return redirect('/');
      }

      if (status === 'unauthenticated') {
        return (
            <section className='py-4 mdl:py-8'>
                 <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mb-4">
                    <LuSparkles className="h-8 w-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h1>
                    <p className="text-slate-600 font-semibold">Sign in to your Ma<span className='text-accentBg'>X</span>ter account to continue</p>
                </div>
                    
                <div className='text-slate-900 w-full max-w-max mx-auto p-4 h-full flex flex-col gap-4 justify-center items-center border-0 shadow-xl bg-white/70 backdrop-blur-sm'>
                    <div className='font-semibold'>
                        <h3 className="text-xl text-center">Sign in to your account</h3>
                        <p className="text-center">Choose your preferred sign-in method</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                    <button
                    onClick={() => signIn('google')}
                    className='flex items-center gap-2 text-xl font-semibold bg-accentBg py-2 px-8 text-white border-2 border-accentBg hover:bg-white hover:text-accentBg duration-200'
                    >
                        <FaGooglePlus className='w-6 h-6'/>
                        Sign In with Google
                    </button>
                    <button
                    onClick={() => signIn('github')}
                    className='flex items-center gap-2 text-xl font-semibold bg-accentBg py-2 px-8 text-white border-2 border-accentBg hover:bg-white hover:text-accentBg duration-200'
                    >
                        <FaGithub className='w-6 h-6'/>
                        Sign In with GitHub
                    </button>
                    </div>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-slate-500 mb-4">Trusted by thousands of users worldwide</p>
                    <div className="flex justify-center items-center space-x-6 opacity-60">
                    <div className="text-xs text-slate-400">🔒 Secure</div>
                    <div className="text-xs text-slate-400">⚡ Fast</div>
                    <div className="text-xs text-slate-400">🛡️ Private</div>
                    </div>
                </div>
            </section>
            )
        }
}

export default LoginPage;