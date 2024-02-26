"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { myProjects } from "@/lib/data/projects";
import {
    RiArrowDownSFill,
    RiCloseLine,
    RiExternalLinkFill,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
    const items = [
        {
            id: 1,
            label: "All",
            stack: "all",
        },
        {
            id: 2,
            label: "Front-end",
            stack: "frontend",
        },
        {
            id: 3,
            label: "Full-stack",
            stack: "fullstack",
        },
    ] as const;

    return (
        <div className="flex w-full h-full">
            <div className="w-80 shrink-0 border-r h-full">
                <div className="flex items-center gap-x-3 py-3 pl-4 border-b text-white font-light">
                    <RiArrowDownSFill />
                    <p>projects</p>
                </div>

                {/* Lists */}
                <div className="p-5 space-y-3">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-x-5"
                        >
                            <Checkbox
                                id="terms"
                                onChange={() => console.log("item.stack")}
                                className="border-[#607B96]"
                            />

                            <p className="group-hover:text-white duration-300 cursor-pointer">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- PROJECTS --- */}
            <div className="w-full">
                <div className="border-b">
                    <div className="w-64 flex justify-between items-center gap-x-3 py-3 px-4 border-r font-light">
                        <p>all projects</p>
                        <RiCloseLine />
                    </div>
                </div>
                <ScrollArea className="h-[calc(100vh-260px)] px-28">
                    <div className="grid grid-cols-3 gap-10 my-24">
                        {myProjects.map((project) => (
                            <div key={project.id} className="max-w-[370px]">
                                <div>
                                    <p className="mb-3 text-[#607b96]">
                                        {"//"} {project.name}
                                    </p>
                                    <div className="border rounded-2xl">
                                        <div className="h-[145px] overflow-hidden relative">
                                            <Image
                                                alt=""
                                                src={project.img}
                                                width={370}
                                                height={145}
                                                className="rounded-2xl"
                                            />
                                            <div className="absolute top-5 right-5 bg-[#86E1F9] rounded-[2px] p-1">
                                                <project.mainTechIcon
                                                    size={20}
                                                    className="text-black"
                                                />
                                            </div>
                                        </div>
                                        <div className="py-5 px-6">
                                            <p>{project.title}</p>
                                            <div className="flex justify-between items-center">
                                                <Button className="border rounded-[8px] mt-5 bg-[#1C2B3A] py-[10px] px-[14px]">
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        className="flex items-center gap-x-4"
                                                    >
                                                        Visit{" "}
                                                        <RiExternalLinkFill
                                                            size={16}
                                                            className="mb-1"
                                                        />
                                                    </a>
                                                </Button>
                                                <Button className="border rounded-[8px] mt-5 bg-[#1C2B3A] py-[10px] px-[14px]">
                                                    <Link href={"/projects/1"}>
                                                        View Details
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};

export default ProjectsPage;
