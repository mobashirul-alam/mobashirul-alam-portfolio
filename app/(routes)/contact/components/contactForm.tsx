import { RiCloseLine } from "@remixicon/react";
import MainForm from "./mainForm";

const ContactForm = () => {
    return (
        <div className="h-full w-full ">
            <div className="border-b w-full">
                <div className="w-64 flex justify-between items-center gap-x-3 py-3 px-4 border-r font-light">
                    <p>contacts</p>
                    <RiCloseLine />
                </div>
            </div>
            <div className="grid grid-cols-2 h-[calc(100%-48px)]">
                <div className="border-r flex justify-center items-center">
                    {/* ----- MAIN FORM ----- */}
                    <MainForm />
                </div>

                <div>contact</div>
            </div>
        </div>
    );
};

export default ContactForm;
