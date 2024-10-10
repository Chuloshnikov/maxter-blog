import React from 'react';

const Explanations = () => {
  return (
    <section className='py-10 mt-10 w-full mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-5 w-full bg- bg-gradient-to-r from-[#3DB4FF] to-gray-200 spacey-1'>
            <div className='flex flex-col gap-12 text-center p-8'>
                <h4 className='text-4xl font-bold text-white'>
                    This website was designed to create a community of smart and talented developers.
                </h4>
                <blockquote className='text-xl font-semibold'>
                    - Only we can save this world -
                </blockquote>
            </div>
            <div className='p-8'>
                <video autoPlay muted loop>
                    <source src="/content/keyboard.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    </section>
  )
}

export default Explanations;