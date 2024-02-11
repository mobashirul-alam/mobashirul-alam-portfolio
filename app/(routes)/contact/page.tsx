import ContactFolders from "./components/contactFolders";
import ContactForm from "./components/contactForm";

const ContactPage = () => {
    return (
        <div className="flex justify-stretch items-start w-full h-full">
            <div className="w-80 border-r h-full">
                <ContactFolders />
            </div>
            <div className="h-full w-[calc(100%-320px)]">
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;
