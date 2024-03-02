"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenuFill } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import { Button } from "./ui/button";

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
                <div className="lg:w-60 xl:w-80 lg:border-r py-4 pl-3 md:pl-5 whitespace-nowrap">
                    <Link
                        href="/"
                        className="hover:text-white duration-200 xl:w-[320px]"
                    >
                        mobashirul-alam-seam
                    </Link>
                </div>
                <div className="hidden lg:flex h-full ">
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
            <div className="relative hidden lg:flex group ">
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
            {/* Mobile nav */}
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-transparent"
                        >
                            <RiMenuFill className="text-[#607B96]/70 hover:text-[#607B96]/100" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="bg-[#011627] pt-10 p-0 w-full flex flex-col justify-between">
                        <div>
                            <div className="border-b py-5 px-8 whitespace-nowrap">
                                <Link
                                    href="/"
                                    className={`h-full w-full hover:text-white duration-200`}
                                >
                                    mobashirul-alam-seam
                                </Link>
                            </div>
                            <div>
                                {links.map((link) => (
                                    <div
                                        key={link.id}
                                        className="relative flex group"
                                    >
                                        <SheetClose asChild>
                                            <Link
                                                href={link.link}
                                                className={`h-full w-full py-4 px-8 border-b hover:text-white ${
                                                    pathname === link.link &&
                                                    "text-white"
                                                } ${
                                                    pathname ===
                                                        "/about/professional" &&
                                                    link.link.includes(
                                                        "/about"
                                                    ) &&
                                                    "text-white"
                                                } duration-200`}
                                            >
                                                {link.text}
                                            </Link>
                                        </SheetClose>
                                    </div>
                                ))}
                                <SheetClose asChild>
                                    <Link
                                        href="/contact"
                                        className={`h-full w-full py-4 px-8 border-b hover:text-white ${
                                            pathname === "/contact" &&
                                            "text-white"
                                        } duration-200`}
                                    >
                                        _contact-me
                                    </Link>
                                </SheetClose>
                            </div>
                        </div>
                        <SheetFooter className="mt-auto">
                            <Footer />
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};

export default Navbar;
