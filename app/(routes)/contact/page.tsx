import Loader from "@/components/loader";
import { ScrollArea } from "@/components/ui/scroll-area";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ContactFolders = dynamic(() => import("./components/contactFolders"));
const ContactForm = dynamic(() => import("./components/contactForm"));

const ContactPage = () => {
    return (
        <Suspense fallback={<Loader />}>
            <div className="hidden lg:flex justify-stretch items-start w-full h-[calc(100vh-155px)] 2xl:h-[calc(100vh-213px)]">
                <div className="w-60 2xl:w-80 shrink-0 border-r h-full">
                    <ContactFolders />
                </div>
                <div className="h-full w-[calc(100%-240px)] 2xl:w-[calc(100%-320px)]">
                    <ContactForm />
                </div>
            </div>
            <ScrollArea className="lg:hidden h-[calc(100vh-140px)] md:h-[calc(100vh-155px)]">
                <div className="flex flex-col md:flex-row justify-stretch items-start w-full h-auto md:h-[calc(100vh-137px)]">
                    <div className="w-full md:w-60 shrink-0 md:border-r h-full">
                        <ContactFolders />
                    </div>
                    <div className="w-full h-full md:w-[calc(100%-240px)]">
                        <ContactForm />
                    </div>
                </div>
            </ScrollArea>
        </Suspense>
    );
};

export default ContactPage;
