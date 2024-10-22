"use client"

import ButtonLoading from '@/components/ui/ButtonLoading';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function Submitters() {
  const [emails, setEmails] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch('/api/submitters');
        const data = await response.json();
        const emailList = data.map((submitter: { email: string }) => submitter.email);
        setEmails(emailList);
      } catch (error) {
        console.error('Error fetching submitters:', error);
      }
      setLoading(false);
    };

    fetchEmails();
  }, []);

  const copyEmailsToClipboard = () => {
    const emailsString = emails.join(' ');
    navigator.clipboard.writeText(emailsString)
      .then(() => toast.success(`Emails copied to clipboard`, {
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
    })).catch(err => console.error('Error copying emails: ', err));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Submitters Emails</h1>
      {!emails?.length && !loading ? (
        <p>No emails found.</p>
      ) : (
        <ul className="mb-4">
          {emails.map((email, index) => (
            <li key={index} className="py-1">{email}</li>
          ))}
        </ul>
      )}
      {loading && (
        <div className='w-full flex items-start p-4'>
          <ButtonLoading/>
        </div>
      )}
      <button 
        className="submitButton" 
        onClick={copyEmailsToClipboard}
      >
        Copy All Emails
      </button>
    </div>
  );
}