"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const links = [
        { id: 1, link: "/", text: "_hello" },
        { id: 2, link: "/about/personal", text: "_about-me" },
        { id: 3, link: "/projects", text: "_projects" },
    ];
    return (
        <div className="flex justify-between items-center text-[#607B96] font-[450] border-b w-full">
            <div className="flex items-center">
                <div className="w-80 border-r py-4 pl-5 whitespace-nowrap">
                    <Link
                        href="/"
                        className="hover:text-white duration-200 w-[320px]"
                    >
                        mobashirul-alam-seam
                    </Link>
                </div>
                <div className="flex h-full ">
                    {links.map((link) => (
                        <div key={link.id} className="relative flex group">
                            <Link
                                href={link.link}
                                className={`h-full py-4 px-8 border-r hover:text-white ${
                                    pathname === link.link && "text-white"
                                } ${
                                    pathname === "/about/professional" &&
                                    link.link.includes("/about") &&
                                    "text-white"
                                } duration-200`}
                            >
                                {link.text}
                            </Link>
                            <div
                                className={`absolute bottom-0 h-[0] w-full bg-[#FEA55F] group-hover:h-[3px] ${
                                    pathname === link.link && "h-[3px]"
                                } ${
                                    pathname === "/about/professional" &&
                                    link.link.includes("/about") &&
                                    "h-[3px]"
                                } duration-300`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex group ">
                <Link
                    href="/contact"
                    className={`h-full py-4 px-8 border-l hover:text-white ${
                        pathname === "/contact" && "text-white"
                    } duration-200`}
                >
                    _contact-me
                </Link>
                <div
                    className={`absolute bottom-0 h-[0] w-full bg-[#FEA55F] group-hover:h-[3px] ${
                        pathname === "/contact" && "h-[3px]"
                    } duration-300`}
                ></div>
            </div>
        </div>
    );
};

export default Navbar;
