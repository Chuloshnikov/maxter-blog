"use client"

import ProposalsContainer from '@/components/dashboard/proposals/ProposalsContainer';
import { ContactsTypes } from '@/models/Contacts';
import mongoose from 'mongoose';
import { useEffect, useState } from 'react';

export default function Proposals() {
  const [allContacts, setAllContacts] = useState<ContactsTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProposals();
  }, []);

  function fetchProposals() {
    setLoading(true);
    fetch('/api/proposals').then(res => {
        res.json().then(proposals => {
          setAllContacts(proposals.reverse());
          setLoading(false);
        });
    });
}
  
  return (
    <div className='flex flex-col gap-4 justify-between'>
      <ProposalsContainer
        items={allContacts} 
        loading={loading}
        slug={"all proposals"}
      />
    </div>
  )
}
