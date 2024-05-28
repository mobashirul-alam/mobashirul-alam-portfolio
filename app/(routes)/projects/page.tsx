"use client";

import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { myProjects } from "@/lib/data/projects";
import {
    RiArrowDownSFill,
    RiCloseLine,
    RiExternalLinkFill,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const ProjectsPage = () => {
    // const items = [
    //     {
    //         id: 1,
    //         label: "All",
    //         stack: "all",
    //     },
    //     {
    //         id: 2,
    //         label: "Front-end",
    //         stack: "frontend",
    //     },
    //     {
    //         id: 3,
    //         label: "Full-stack",
    //         stack: "fullstack",
    //     },
    // ] as const;

    return (
        <Suspense fallback={<Loader />}>
            <div className="flex flex-col md:flex-row w-full md:h-full">
                <div className="w-full md:w-52 lg:w-[272px] xl:w-80 shrink-0 h-full">
                    <div className="flex items-center gap-x-3 py-3 pl-4 border-b text-white font-light">
                        <RiArrowDownSFill />
                        <p>projects</p>
                    </div>

                    {/* Lists */}
                    {/* <div className="p-5 space-y-3">
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
                    </div> */}
                </div>

                {/* --- PROJECTS --- */}
                <div className="w-full border-t md:border-t-0 md:border-l">
                    <div className="border-b">
                        <div className="w-full md:w-64 flex justify-between items-center gap-x-3 py-3 px-4 md:border-r font-light">
                            <p>all projects</p>
                            <RiCloseLine />
                        </div>
                    </div>
                    <ScrollArea className="h-[calc(100vh-376px)] md:h-[calc(100vh-202px)] 2xl:h-[calc(100vh-262px)] px-5 lg:px-10 xl:px-5 2xl:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-5 2xl:gap-10 my-5 lg:my-10 xl:my-14 2xl:my-16">
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
                                            <div className="py-5 xl:py-3 2xl:py-5 px-6 xl:px-3 2xl:px-6">
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
                                                        <Link
                                                            href={`/projects/${project.id}`}
                                                        >
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
        </Suspense>
    );
};

export default ProjectsPage;
