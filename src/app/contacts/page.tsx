import ContactForm from "@/components/contacts/ContactForm";
import Link from "next/link";


export default function Contacts() {
return (
    <main className="flex min-h-screen flex-col items-center justify-between mb-12">
        <div className='p-4 flex flex-col mdl:flex-row justify-between gap-16'>
            <div className="flex flex-col gap-8 mt-12">
                <div className="flex flex-col gap-4 max-w-[500px]">
                    <h2 className="text-4xl font-extrabold text-accentBg">
                        Get in touch with Ma<span className="text-black">X</span>ter
                    </h2>
                    <p className="text-2xl">
                        For feedback and suggestions, including commercial ones, 
                        you can fill out the form and we will contact you shortly.
                    </p>
                    <p className="text-lg">
                        Drop us a line or use the contact form below to get in touch.
                    </p>
                </div>
                <div>
                    <ContactForm/>
                </div>
            </div>
            <div className="mdl:mt-16">
                <div className='w-full mdl:max-w-[400px]'>
                    <video autoPlay muted loop>
                        <source src="/content/community.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="bg-accentBg text-white p-12 flex flex-col gap-4">
                <div>
                    <h3 className='text-lg font-semibold'>Chat to us</h3>
                    <p className='text-sm'>Our friendly team is here to help</p>
                    <Link className='text-sm font-semibold' href={`mailto:maks447@ukr.net`}>maks447@ukr.net</Link>
                </div>
                <div>
                    <h3 className='text-lg font-semibold'>Call us</h3>
                    <p className='text-sm'>Our friendly team is here to help</p>
                    <Link className='text-sm font-semibold' href={`tel:+380977285778`}>+380977285778</Link>
                </div>
                <div>
                    <h3 className='text-lg font-semibold'>Visit us</h3>
                    <p className='text-sm'>Come say hello at our office</p>
                    <span className='text-sm font-semibold'>5203 Center Blvd, Long Island City, NY 11101</span>
                </div>
                </div>
            </div>
        </div>
    </main>
)
}
