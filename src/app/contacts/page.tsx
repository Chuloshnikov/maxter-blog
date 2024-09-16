import ContactForm from "@/components/contacts/ContactForm";


export default function Contacts() {
return (
    <main className="max-w-contentContainer mx-auto flex min-h-screen flex-col items-center justify-between">
        <div className="flex flex-col gap-8 mt-12">
            <div className="flex flex-col gap-4 max-w-[500px]">
                <h2 className="text-4xl font-extrabold text-accentBg">
                    Get in touch with Ma<span className="text-black">X</span>ter
                </h2>
                <p className="text-2xl">
                    For feedback and suggestions, including commercial ones, 
                    you can fill out the form and we will contact you shortly.
                </p>
            </div>
            <div>
                <ContactForm/>
            </div>
        </div>
        <div>

        </div>
    </main>
)
}
