import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form>
            <div className='flex flex-col'>
                <label className='input-label'>What&apos;s your name or company?</label>
                <input className='px-4 py-2 border-2 ' type='text'/>
            </div>
            <div className='flex flex-col'>
                <label className='input-label'>What&apos;s your email address?</label>
                <input className='px-4 py-2 border-2 ' type='email'/>
            </div>
            <div className='flex flex-col'>
                <label className='input-label'>What&apos;s your phone number</label>
                <input className='px-4 py-2 border-2 ' type='tel'/>
            </div>
            <div className='flex flex-col'>
                <label className='input-label'>What&apos;s your question/proposal?</label>
                <textarea className='px-4 py-2 border-2 '/>
            </div>
            <button 
            className='submitButton mt-4'
            type='submit'
            >
                Send message
            </button>
        </form>
    </div>
  )
}

export default ContactForm;