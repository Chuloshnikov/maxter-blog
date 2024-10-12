"use client"
import { redirect } from 'next/navigation';
import { useState } from 'react'

const DeleteUser = ({ id }: {id: string}) => {
    const [redirectToUsers, setRedirectToUsers] = useState<boolean>(false);

    async function handleDeleteClick() {
            const res = await fetch('/api/users/profile/?_id=' + id, {
                method: 'DELETE',
            });
            setRedirectToUsers(true);
    }
        


    if (redirectToUsers) {
        return redirect('/admin/users');
    }

  return (
    <div>
        <button className='px-4 py-2 text-white font-semibold text-semibold bg-red-500 border-2 border-red-500 hover:bg-white hover:text-red-500 duration-200'>
            Delete user
        </button>
    </div>
  )
}

export default DeleteUser