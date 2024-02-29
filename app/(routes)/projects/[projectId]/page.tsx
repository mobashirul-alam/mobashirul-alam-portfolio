"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { myProjects } from "@/lib/data/projects";
import {
    RiArrowDownSFill,
    RiCloseLine,
    RiExternalLinkLine,
} from "@remixicon/react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const SingleProjectPage = ({ params }: { params: { projectId: string } }) => {
    const project = myProjects.find(
        (project) => project.id === params.projectId
    );

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <div className="h-full">
            <div className="flex w-full h-full">
                <div className="w-80 shrink-0 border-r h-full">
                    <div className="flex items-center gap-x-3 py-3 pl-4 border-b text-white font-light">
                        <RiArrowDownSFill />
                        <p>used tech</p>
                    </div>

                    {/* Lists */}
                    <div className="p-5 space-y-3">
                        {project?.usedTech.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex items-center gap-x-5 gap-y-5 group"
                            >
                                <tech.icon
                                    size={24}
                                    className="group-hover:text-white duration-500"
                                />

                                <p className="group-hover:text-white duration-500">
                                    {tech.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-x-3 py-3 pl-4 border-y text-white font-light">
                        <RiArrowDownSFill />
                        <p>links</p>
                    </div>
                    <div className="p-5 space-y-3">
                        <div className="flex items-center mb-2">
                            <RiExternalLinkLine className="mr-2" size={18} />
                            <a
                                href={project?.link}
                                className="hover:text-white duration-200"
                                target="_blank"
                            >
                                Live link
                            </a>
                        </div>
                        <div className="flex items-center mb-2">
                            <RiExternalLinkLine className="mr-2" size={18} />
                            <a
                                href={project?.clientRepoLink}
                                className="hover:text-white duration-200"
                                target="_blank"
                            >
                                Client Repo
                            </a>
                        </div>
                        {project?.serverRepoLink && (
                            <div className="flex items-center mb-2">
                                <RiExternalLinkLine
                                    className="mr-2"
                                    size={18}
                                />
                                <a
                                    href={project?.serverRepoLink}
                                    className="hover:text-white duration-200"
                                    target="_blank"
                                >
                                    Server Repo
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* --- PROJECTS --- */}
                <div className="w-full h-full">
                    <div className="border-b">
                        <div className="border-r w-max">
                            <div className="flex justify-start items-center gap-x-3 py-3 px-4 font-light">
                                <p>{project?.name}</p>
                                <RiCloseLine />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="h-[calc(100vh-260px)] p-5 w-full flex justify-center items-center">
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                orientation="vertical"
                                className="w-full max-w-4xl -mt-5 rounded-xl"
                                plugins={[plugin.current]}
                                onMouseEnter={plugin.current.stop}
                                onMouseLeave={plugin.current.reset}
                            >
                                <CarouselContent className="-mt-1 h-[450px]">
                                    {project?.banners.map((banner, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="pt-1 md:basis-1/2 rounded-xl"
                                        >
                                            <Image
                                                src={banner}
                                                alt="project-img"
                                                width={800}
                                                height={450}
                                                className="rounded-xl"
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="bg-transparent border-[#607B96] text-[#607B96]" />
                                <CarouselNext className="bg-transparent border-[#607B96] text-[#607B96]" />
                            </Carousel>
                        </div>
                        <ScrollArea className="h-[calc(100vh-260px)] p-5 border-l">
                            <h3>Project Details</h3>
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProjectPage;
