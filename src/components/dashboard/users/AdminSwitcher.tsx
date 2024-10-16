"use client";
import { useState } from 'react';
import toast from 'react-hot-toast';

const AdminSwitcher = ({ userId, admin }: { userId: FormDataEntryValue, admin: boolean }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(admin || false);
  const [reloadPage, setReloadPage] = useState<boolean>(false);

  async function adminSwitchHandler(newIsAdmin: boolean) {
    const data = { userId, isAdmin: newIsAdmin };
    
    try {
      const response = await fetch("/api/profile", {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        toast.success(`User admin status changed`, {
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
      } else {
        const errorData = await response.json();
        toast.error(`An error occurred: ${JSON.stringify(errorData)}`, {
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
    } catch (error) {
      toast.error(`An error occurred: ${error.message}`, {
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
  }

const toggleSwitch = () => {
    const newIsAdmin = !isAdmin;
    setIsAdmin(newIsAdmin);
    adminSwitchHandler(newIsAdmin);
    setReloadPage(true);
};

if (reloadPage) {
    setTimeout(() => {
        window.location.reload();
    }, 2000); 
}

  return (
    <div className="flex border-2 border-accentBg max-w-max p-2">
      <div className="text-accent-bg text-lg font-bold max-w-[170px] min-h-[50px]">
        {!isAdmin ? (
          <span className="text-gray-500">
            This user does not have admin rights
          </span>
        ) : (
          <span className="text-green-500">
            This user has admin rights
          </span>
        )}
      </div>
      <div className="mt-6">
        <div
          onClick={toggleSwitch}
          className={`w-16 h-8 flex items-center p-1 cursor-pointer transition-colors ${
            isAdmin ? 'bg-accentBg' : 'bg-gray-400'
          }`}
        >
          <div
            className={`h-6 w-6 bg-white shadow-md transform transition-transform ${
              isAdmin ? 'translate-x-8' : 'translate-x-0'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AdminSwitcher;