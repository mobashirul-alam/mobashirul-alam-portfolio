import {
    RiFacebookFill,
    RiGithubFill,
    RiLinkedinBoxFill,
} from "@remixicon/react";

const Footer = () => {
    return (
        <div className="border-t text-[#607B96]">
            <div className="hidden lg:flex justify-between items-center">
                <div className="flex items-center">
                    <p className="py-4 px-5 border-r">find me in:</p>
                    <a href="/" className="p-4 border-r">
                        <RiLinkedinBoxFill
                            size={24}
                            className="hover:text-[#C4C4C4] duration-200"
                        />
                    </a>
                    <a href="/" className="p-4 border-r">
                        <RiFacebookFill
                            size={24}
                            className="hover:text-[#C4C4C4] duration-200"
                        />
                    </a>
                </div>
                <div>
                    <a
                        href=""
                        className="flex items-center gap-x-1 px-6 py-4 border-l hover:text-[#C4C4C4] duration-200"
                    >
                        <span className="hidden lg:block">
                            @mobashirul-alam
                        </span>{" "}
                        <RiGithubFill size={24} />
                    </a>
                </div>
            </div>
            {/* Mobile view */}
            <div className="flex lg:hidden justify-between items-center">
                <p className="py-4 px-4 sm:px-5 whitespace-nowrap">find me in:</p>

                <div className="flex items-center">
                    <a
                        href="https://www.linkedin.com/in/mobashirul-alam-seam/"
                        target="_blank"
                        className="p-4 border-l"
                    >
                        <RiLinkedinBoxFill
                            size={24}
                            className="hover:text-[#C4C4C4] duration-200"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/mobashirul.seam"
                        target="_blank"
                        className="p-4 border-l"
                    >
                        <RiFacebookFill
                            size={24}
                            className="hover:text-[#C4C4C4] duration-200"
                        />
                    </a>
                    <a
                        href="https://github.com/mobashirul-alam"
                        target="_blank"
                        className="p-4 border-l"
                    >
                        <RiGithubFill
                            size={24}
                            className="hover:text-[#C4C4C4] duration-200"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
