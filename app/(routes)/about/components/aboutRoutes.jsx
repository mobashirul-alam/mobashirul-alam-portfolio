"use client";

import { RiTerminalBoxFill, RiUser4Fill } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AboutRoutes = () => {
    const pathname = usePathname();
    const routes = [
        { id: 1, link: "/about/professional", icon: RiTerminalBoxFill },
        { id: 2, link: "/about/personal", icon: RiUser4Fill },
    ];

    return (
        <div>
            {routes.map((route) => (
                <div
                    key={route.id}
                    className="py-4 w-[63px] flex justify-center"
                >
                    <Link href={route.link}>
                        <route.icon
                            size={24}
                            className={`${
                                pathname === route.link
                                    ? "opacity-100"
                                    : "opacity-40"
                            } hover:opacity-100`}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AboutRoutes;
