import ProposalsContainer from '@/components/dashboard/proposals/ProposalsContainer';
import { ContactsModel } from '@/models/Contacts';
import mongoose from 'mongoose';

export default async function Proposals() {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const allContacts = JSON.parse(JSON.stringify( await ContactsModel.find()));
  
  return (
    <div className='flex flex-col gap-4 justify-between'>
      <ProposalsContainer
        action={"check"} 
        items={allContacts} 
        slug={"all proposals"}
      />
    </div>
  )
}
