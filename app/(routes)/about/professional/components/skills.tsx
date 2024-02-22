import { ScrollArea } from "@/components/ui/scroll-area";
import {
    RiBootstrapLine,
    RiCloseLine,
    RiCss3Fill,
    RiGithubFill,
    RiHtml5Fill,
    RiJavascriptFill,
    RiReactjsFill,
    RiTrelloFill,
} from "@remixicon/react";
import { BiLogoNetlify, BiLogoTypescript } from "react-icons/bi";
import { SiFirebase, SiPostman, SiTailwindcss, SiVercel } from "react-icons/si";
import { TbBrandNextjs, TbBrandRedux, TbBrandVscode } from "react-icons/tb";

const Skills = () => {
    const languageSkills = [
        {
            id: 1,
            name: "HTML",
            icon: RiHtml5Fill,
        },
        {
            id: 2,
            name: "CSS",
            icon: RiCss3Fill,
        },
        {
            id: 3,
            name: "JavaScript",
            icon: RiJavascriptFill,
        },
        {
            id: 4,
            name: "TypeScript",
            icon: BiLogoTypescript,
        },
    ];

    const libraryFrameworks = [
        { id: 1, name: "React", icon: RiReactjsFill },
        { id: 2, name: "Next.js", icon: TbBrandNextjs },
        { id: 3, name: "Redux", icon: TbBrandRedux },
        { id: 4, name: "Tailwind CSS", icon: SiTailwindcss },
        { id: 5, name: "Bootstrap", icon: RiBootstrapLine },
    ];
    const tools = [
        { id: 1, name: "GitHub", icon: RiGithubFill },
        { id: 2, name: "VS Code", icon: TbBrandVscode },
        { id: 3, name: "Firebase", icon: SiFirebase },
        { id: 4, name: "Netlify", icon: BiLogoNetlify },
        { id: 5, name: "Vercel", icon: SiVercel },
        { id: 6, name: "Postman", icon: SiPostman },
        { id: 7, name: "Trello", icon: RiTrelloFill },
    ];
    return (
        <div className="w-full border-r">
            <div className="border-b">
                <div className="w-64 flex justify-between items-center gap-x-3 py-3 px-4 border-r font-light">
                    <p>skills</p>
                    <RiCloseLine />
                </div>
            </div>
            <ScrollArea className="h-96">
                <div className="p-5">
                    <div className="mb-5">
                        <h1 className="text-base font-medium text-white mb-2">
                            Languages
                        </h1>
                        <div className="flex items-center gap-5">
                            {languageSkills.map((skill) => (
                                <div
                                    key={skill.id}
                                    className="border hover:border-white/50 shadow-md py-3 rounded-md flex flex-col justify-center items-center w-36 duration-1000"
                                >
                                    <skill.icon size={32} className="mb-1" />
                                    <p className="text-lg font-semibold">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-5">
                        <h1 className="text-base font-medium text-white mb-2">
                            Libraries & Frameworks
                        </h1>
                        <div className="flex flex-wrap items-center gap-5">
                            {libraryFrameworks.map((skill) => (
                                <div
                                    key={skill.id}
                                    className="border hover:border-white/50 shadow-md py-3 rounded-md flex flex-col justify-center items-center w-36 duration-1000"
                                >
                                    <skill.icon size={32} className="mb-1" />
                                    <p className="text-lg font-semibold">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-5">
                        <h1 className="text-base font-medium text-white mb-2">
                            Tools & Platforms
                        </h1>
                        <div className="flex flex-wrap items-center gap-5">
                            {tools.map((skill) => (
                                <div
                                    key={skill.id}
                                    className="border hover:border-white/50 shadow-md py-3 rounded-md flex flex-col justify-center items-center w-36 duration-1000"
                                >
                                    <skill.icon size={32} className="mb-1" />
                                    <p className="text-lg font-semibold">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-5">
                        <h1 className="text-base font-medium text-white mb-2">
                            Tools & Platforms
                        </h1>
                        <div className="flex flex-wrap items-center gap-5">
                            {tools.map((skill) => (
                                <div
                                    key={skill.id}
                                    className="border hover:border-white/50 shadow-md py-3 rounded-md flex flex-col justify-center items-center w-36 duration-1000"
                                >
                                    <skill.icon size={32} className="mb-1" />
                                    <p className="text-lg font-semibold">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
};

export default Skills;
