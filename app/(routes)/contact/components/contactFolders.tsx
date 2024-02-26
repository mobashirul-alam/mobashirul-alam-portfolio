import {
    RiArrowDownSFill,
    RiExternalLinkLine,
    RiMailFill,
    RiPhoneFill,
} from "@remixicon/react";

const ContactFolders = () => {
    return (
        <div className="w-full">
            <div className="flex items-center gap-x-3 py-3 pl-4 border-b text-white font-light">
                <RiArrowDownSFill />
                <p>contacts</p>
            </div>

            <div className="pl-4 py-6">
                <div className="flex items-center mb-2">
                    <RiMailFill className="mr-2" size={18} />
                    user@gmail.com
                </div>
                <div className="flex items-center mb-2">
                    <RiPhoneFill className="mr-2" size={18} />
                    +3598246359
                </div>
            </div>

            <div className="flex items-center gap-x-3 py-3 pl-4 border-y text-white font-light">
                <RiArrowDownSFill />
                <p>find-me-also-in</p>
            </div>

            <div className="pl-4 py-6">
                <div className="flex items-center mb-2">
                    <RiExternalLinkLine className="mr-2" size={18} />
                    <a
                        href="https://www.linkedin.com/in/mobashirul-alam-seam/"
                        className="hover:text-white duration-200"
                        target="_blank"
                    >
                        LinkedIn Profile
                    </a>
                </div>
                <div className="flex items-center mb-2">
                    <RiExternalLinkLine className="mr-2" size={18} />
                    <a
                        href="https://github.com/mobashirul-alam"
                        className="hover:text-white duration-200"
                        target="_blank"
                    >
                        Github Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactFolders;
