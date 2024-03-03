"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiTerminalBoxFill, RiUser4Fill } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AboutRoutes = () => {
    const pathname = usePathname();
    const routes = [
        {
            id: 1,
            link: "/about/professional",
            icon: RiTerminalBoxFill,
            name: "Professional",
        },
        { id: 2, link: "/about/personal", icon: RiUser4Fill, name: "Personal" },
    ];

    return (
        <>
            <div className="hidden md:block">
                {routes.map((route) => (
                    <div
                        key={route.id}
                        className="py-3 md:py-4 w-[64px] flex justify-center"
                    >
                        <Link href={route.link}>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <route.icon
                                            size={24}
                                            className={`${
                                                pathname === route.link
                                                    ? "opacity-100 text-white md:text-[#607B96]"
                                                    : "opacity-40"
                                            } hover:opacity-100`}
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{route.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="block md:hidden">
                <div className="flex md:hidden flex-row justify-center border-b">
                    {routes.map((route) => (
                        <div
                            key={route.id}
                            className="py-3 md:py-4 w-[64px] flex justify-center"
                        >
                            <Link href={route.link}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <route.icon
                                                size={24}
                                                className={`${
                                                    pathname === route.link
                                                        ? "opacity-100 text-white md:text-[#607B96]"
                                                        : "opacity-40"
                                                } hover:opacity-100`}
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{route.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AboutRoutes;
