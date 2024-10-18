"use client"
import { ChangeEvent, useState } from 'react'
import SocialLinks from './SocialLinks'
import { validateGetInTouchForm } from '@/lib/validation';
import toast from 'react-hot-toast';


const GetInTouchForm = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleFormSubmit(ev: ChangeEvent<HTMLFormElement>) {
    ev.preventDefault();
    setLoading(true);

    const validationErrors = validateGetInTouchForm({email});
    
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
    
            const response = await fetch('/api/submitters', {
              method: 'POST',
              headers: {'Content-type': 'application/json'},
              body: JSON.stringify(email),
          });
          if (response.ok) {
              toast.success('Your email saved, thank you!', {
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
              clearEmail();
              setLoading(false);
          } else {
              toast.error('An error has occurred', {
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
          }
          setLoading(false);
  }

  function clearEmail() {
    setEmail('')
  }

  return (
    <div className='flex flex-col gap-4 justify-between flex-1/3'>
        <div className='flex flex-col gap-4'>
            <h4 className='text-2xl font-semibold'>Get in touch</h4>
            <form onSubmit={handleFormSubmit} 
            className='flex'
            >
                <input
                onChange={ev => setEmail(ev.target.value)}
                className='xs:px-2 sm:px-4 py-2 bg-accentBg border border-white placeholder:text-white'
                type='email'
                placeholder='email'
                value={email}
                />
                <button
                className='px-4 py-2 bg-black text-white hover:bg-white hover:text-black duration-200 border-2 border-black'
                type='submit'
                >
                    {loading ? (<div>1</div>) : ('Submit')}
                </button>
                
            </form>
        </div>
        <SocialLinks/>
       
    </div>
  )
}

export default GetInTouchForm