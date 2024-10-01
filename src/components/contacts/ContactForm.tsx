"use client"
import { createContacts } from '@/actions/contactsActions';
import { validateContactForm } from '@/lib/validation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


const ContactForm = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);




    async function handleFormAction(event: React.FormEvent) {
        event.preventDefault();
        setLoading(true);
    
        const data = {
            name,
            email,
            phone,
            message
        };
    
        const validationErrors = validateContactForm(data);
    
        if (validationErrors.length > 0) {
            toast.error(validationErrors.join(', '), {
                style: {
                    borderRadius: '0px',
                    border: '1px solid #EF4444',
                    padding: '16px',
                    color: '#EF4444',
                },
                iconTheme: {
                    primary: '#EF4444',
                    secondary: '#FFFAEE',
                },
            });
            setLoading(false);
            return;  
        }
    
        let formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('message', message);
    
        try {
            await createContacts(formData);
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            toast.success('Thanks for your comment or suggestion. We will definitely send you feedback', {
                style: {
                    borderRadius: '0px',
                    border: '1px solid #3DB4FF',
                    padding: '16px',
                    color: '#3DB4FF',
                },
                iconTheme: {
                    primary: '#3DB4FF',
                    secondary: '#FFFAEE',
                },
            });
        } catch (error) {
            toast.error('Error while submitting form. Please try again.', {
                style: {
                    borderRadius: '0px',
                    border: '1px solid #EF4444',
                    padding: '16px',
                    color: '#EF4444',
                },
                iconTheme: {
                    primary: '#EF4444',
                    secondary: '#FFFAEE',
                },
            });
        } finally {
            setLoading(false);
        }
    }
    

  return (
    <div>
        <form onSubmit={handleFormAction}>
            <div className='flex flex-col'>
                <label className='input-label' 
                htmlFor='nameInput'>
                    What&apos;s your name or company?
                </label>
                <input 
                onChange={e => setName(e.target.value)}
                value={name}
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
                onChange={e => setEmail(e.target.value)}
                value={email}
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
                onChange={e => setPhone(e.target.value)}
                value={phone}
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
                onChange={e => setMessage(e.target.value)}
                value={message}
                id="messageInput" 
                placeholder='your question or proposal...'
                />
            </div>
            <div>
                <button 
                className='submitButton mt-4'
                type='submit'
                >
                    {loading ? "Loading..." : "Send message"}
                </button>
                
            </div>
        </form>
    </div>
  )
}

export default ContactForm;