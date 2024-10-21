import { ContactsModel } from "@/models/Contacts";
import mongoose from "mongoose";


export default async function CheckProposal({ params: { id } }: { params: { id: string } }) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const contactInfo = JSON.parse(JSON.stringify( await ContactsModel.findById(id)));
  return (
    <div>
        {id}
    </div>
  )
}
