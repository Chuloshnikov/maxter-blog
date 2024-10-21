import ProposalPage from "@/components/dashboard/proposals/ProposalPage";
import { ContactsModel, ContactsTypes } from "@/models/Contacts";
import mongoose from "mongoose";


export default async function CheckProposal({ params: { id } }: { params: { id: string } }) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const contactInfo = JSON.parse(JSON.stringify( await ContactsModel.findById(id)));

  return (
    <div className='flex flex-col gap-4 justify-between'>
       <ProposalPage item={contactInfo}/>
    </div>
  )
}
