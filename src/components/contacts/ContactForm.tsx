"use client"
import React from 'react';


const ContactForm = () => {

    
      
  return (
    <div>
        <form>
            <div className='flex flex-col'>
                <label className='input-label'>What&apos;s your name or company?</label>
                <input placeholder='your name or company tag...' type='text'/>
            </div>
            <div className='flex flex-col'>
                <label className='input-label'>What&apos;s your email address?</label>
                <input placeholder='your email address...' type='email'/>
            </div>
            <div className='flex flex-col'>
                <label className='input-label'>What&apos;s your phone number</label>
                <input placeholder='your phone number...' type='tel'/>
            </div>
            <div className='flex flex-col'>
                <label className='input-label'>What&apos;s your question/proposal?</label>
                <textarea placeholder='your question or proposal...'/>
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