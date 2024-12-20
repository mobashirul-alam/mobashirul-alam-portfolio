"use client";

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

            <div className="pl-4 py-2 lg:py-6">
                <div
                    className="flex items-center mb-2 cursor-pointer"
                    onClick={() =>
                        (window.location.href =
                            "mailto:mobashirulalamseam@gmail.com")
                    }
                >
                    <RiMailFill className="mr-2" size={18} />
                    <span className="block md:hidden 2xl:block">
                        mobashirulalamseam@gmail.com
                    </span>
                    <span className="hidden md:block 2xl:hidden">
                        mobashirulalamseam
                        <br />
                        @gmail.com
                    </span>
                </div>
                <div
                    className="flex items-center mb-2 cursor-pointer"
                    onClick={() =>
                        (window.location.href = "tel:+8801643424044")
                    }
                >
                    <RiPhoneFill className="mr-2" size={18} />
                    +8801643424044
                </div>
            </div>

            <div className="flex items-center gap-x-3 py-3 pl-4 border-y text-white font-light">
                <RiArrowDownSFill />
                <p>find-me-also-in</p>
            </div>

            <div className="pl-4 py-2 lg:py-6 border-b md:border-none">
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
