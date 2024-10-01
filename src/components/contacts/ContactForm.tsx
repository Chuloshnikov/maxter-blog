"use client"
import { validateContactForm } from '@/lib/validation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


const ContactForm = () => {
    const [error, setError] = useState<string>('');

    async function handleFormAction(formData: FormData) {
        const validate = validateContactForm(formData);

        if (validate === "Validation successful") {
            await saveContacts(formData);
            toast.success('Profile saved!');
        } else {
            setError(validate);
        }

      }
      
  return (
    <div>
        <form action={handleFormAction}>
            <div className='flex flex-col'>
                <label className='input-label' 
                htmlFor='nameInput'>
                    What&apos;s your name or company?
                </label>
                <input 
                name='name' 
                id="nameInput" 
                type="text" 
                placeholder='your name or company tag...'
                />
            </div>
            <div className='flex flex-col'>
                <label className='input-label' 
                htmlFor='emailInput'>
                    What&apos;s your email address?
                </label>
                <input 
                name='email' 
                id="emailInput" 
                type='email'
                placeholder='your email address...' />
            </div>
            <div className='flex flex-col'>
                <label 
                htmlFor='phoneInput'
                className='input-label'
                >
                    What&apos;s your phone number
                </label>
                <input 
                name='phone'
                id="phoneInput" 
                type='tel'
                placeholder='your phone number...' />
            </div>
            <div className='flex flex-col'>
                <label 
                htmlFor='messageInput'
                className='input-label' 
                >What&apos;s your question/proposal?
                </label>
                <textarea 
                name="message" 
                id="messageInput" 
                placeholder='your question or proposal...'
                />
            </div>
            <div>
                <button 
                className='submitButton mt-4'
                type='submit'
                >
                    Send message
                </button>
                {error && <span>{error}</span>}
            </div>
        </form>
    </div>
  )
}

export default ContactForm;