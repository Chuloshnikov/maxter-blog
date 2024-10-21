"use client"
import DateConverter from '@/components/ui/DateConverter';
import { useEffect } from 'react';

interface ProposalTypes {
    item: {
        _id?: FormDataEntryValue;
        name: string;
        email: string;
        phone: string;
        message: string;
        read: boolean;
        createdAt?: Date;
    }
}

const ProposalPage = ({ item }: ProposalTypes) => {
    useEffect(() => {
        const markAsRead = async () => {
          if (!item.read && item._id) { // Check if the proposal has been read
            try {
              const response = await fetch(`/api/proposals/${item._id}/markAsRead`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ read: true }),
              });
    
              if (response.ok) {
                console.log('Marked as read');
              } else {
                console.error('Failed to mark as read');
              }
            } catch (error) {
              console.error('Error marking as read:', error);
            }
          }
        };
    
        markAsRead(); // Call the function when component mounted
      }, [item.read, item._id]);
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='border-2 border-gray-500 p-8 flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
                <span className='block mt-4 text-xs uppercase font-bold text-gray-400'>Company or persone name:</span>
                <span className='p-2 bg-gray-200'>{item.name}</span>
            </div>
            <div className='flex flex-col'>
                <span className='block mt-4 text-xs uppercase font-bold text-gray-400'>Email:</span>
                <span className='p-2 bg-gray-200'>{item.email}</span>
            </div>
            <div className='flex flex-col'>
                <span className='block mt-4 text-xs uppercase font-bold text-gray-400'>Phone number:</span>
                <span className='p-2 bg-gray-200'>{item.phone}</span>
            </div>
            <div className='flex flex-col'>
                <span className='block mt-4 text-xs uppercase font-bold text-gray-400'>Message:</span>
                <span className='p-2 bg-gray-200 min-w-[300px] min-h-[250px]'>{item.message}</span>
            </div>
            <span>{DateConverter({ mongoDate: item.createdAt })}</span>
        </div>
    </div>
  )
}

export default ProposalPage;