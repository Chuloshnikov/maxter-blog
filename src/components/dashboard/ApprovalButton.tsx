"use client"
import { useState } from "react";
import toast from 'react-hot-toast';

const ApprovalButton = ({ id, approved, action, }: { id: FormDataEntryValue, approved: boolean, action: string }) => {
    const [isApproved, setIsApproved] = useState<boolean>(approved || false);
    const [reloadPage, setReloadPage] = useState<boolean>(false);

    async function approvalHandler(newIsApproved: boolean) {
        const data = { id, isApproved: newIsApproved };
        
        try {
          const response = await fetch(`/api/${action}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
          });
    
          if (response.ok) {
            toast.success(`${action} status changed`, {
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
        } catch (error: any) {
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
        const newIsApproved = !isApproved;
        setIsApproved(newIsApproved);
        approvalHandler(newIsApproved);
        setReloadPage(true);
    };
    
    if (reloadPage) {
        setTimeout(() => {
            window.location.reload();
        }, 2000); 
    }

    return (
        <div className="flex border-2 border-gray-500 max-w-max p-2">
          <div className="text-accent-bg text-lg font-bold min-w-[120px]">
            {!isApproved ? (
              <span className="text-yellow-500">
                not approved
              </span>
            ) : (
              <span className="text-green-500">
                approved
              </span>
            )}
          </div>
          <div>
            <div
              onClick={toggleSwitch}
              className={`w-16 h-8 flex items-center p-1 cursor-pointer transition-colors ${
                isApproved ? 'bg-accentBg' : 'bg-gray-400'
              }`}
            >
              <div
                className={`h-6 w-6 bg-white shadow-md transform transition-transform ${
                  isApproved ? 'translate-x-8' : 'translate-x-0'
                }`}
              ></div>
            </div>
          </div>
        </div>
      );
}

export default ApprovalButton;