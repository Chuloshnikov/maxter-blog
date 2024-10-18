"use client"
import { useEffect, useState, useCallback } from 'react';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';

const DeleteButton = ({ id, item, dir }: {id: string, item: string, dir: string}) => {
    const [redirectToUsers, setRedirectToUsers] = useState<boolean>(false);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);

    const handleDeleteClick = useCallback(async () => {
        const res = await fetch(`/api/${dir}/?_id=${id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            setRedirectToUsers(true);
        }
    }, [id]);

    useEffect(() => {
        if (deleteModal) {
            toast((t) => (
                <div className='flex flex-col gap-2 items-center justify-center rounded-none'>
                  are you sure you want to delete this {item}? 
                  <div className='flex gap-1'>
                    <button 
                        onClick={handleDeleteClick}
                        className='text-white bg-red-500 border-2 border-red-500 font-semibold px-4 py-1.5 hover:bg-white hover:text-red-500 duration-200'>
                            delete
                    </button>
                    <button 
                        className='border-2 border-accentBg px-2 py-1 hover:bg-accentBg hover:text-white duration-200' 
                        onClick={() => toast.dismiss(t.id)}>
                            close
                    </button>
                  </div>
                </div>
              ), {
                style: {
                    borderRadius: '0px',
                    border: '1px solid #3DB4FF',
                    padding: '16px',
                    color: '#3DB4FF',
                }
            });

            // Сбросить deleteModal в false после показа тоста
            setDeleteModal(false);
        }
    }, [deleteModal, handleDeleteClick, item]);

    if (redirectToUsers) {
        return redirect(`/admin/delete-success/${dir}`);
    }

    return (
        <div>
            <button 
                onClick={() => setDeleteModal(true)}
                className='px-4 py-2 text-white font-semibold bg-red-500 border-2 border-red-500 hover:bg-white hover:text-red-500 duration-200'>
                Delete{" "}{item}
            </button>
        </div>
    );
};

export default DeleteButton;