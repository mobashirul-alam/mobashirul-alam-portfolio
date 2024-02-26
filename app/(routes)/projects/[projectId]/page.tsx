import { myProjects } from "@/lib/data/projects";
import {
    RiArrowDownSFill,
    RiCloseLine,
    RiExternalLinkLine,
} from "@remixicon/react";

const SingleProjectPage = ({ params }: { params: { projectId: string } }) => {
    const project = myProjects.find(
        (project) => project.id === params.projectId
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
                    {/* <ScrollArea className="h-[calc(100vh-260px)] px-28">
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
                                                        <Link
                                                            href={"/projects/1"}
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
                    </ScrollArea> */}
                </div>
            </div>
        </div>
    );
};

export default SingleProjectPage;
