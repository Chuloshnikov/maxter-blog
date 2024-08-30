import React from 'react'

type Props = {}

const GetInTouchForm = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 justify-between flex-1/3'>
        <div className='flex flex-col gap-4'>
            <h4 className='text-2xl font-semibold'>Get in touch</h4>
            <form>
                <input
                className='px-4 py-2 bg-accentBg border border-white placeholder:text-white'
                type='email'
                placeholder='email'
                />
                <button
                className='px-4 py-2 bg-black texct-white hover:bg-white hover:text-accentBg duration-200'
                type='submit'
                >
                    Submit
                </button>
                
            </form>
        </div>
       
    </div>
  )
}

export default GetInTouchForm