import { RiReactjsFill } from "@remixicon/react";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiFirebase, SiTailwindcss } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";

export const myProjects = [
    {
        id: "1",
        name: "KNOT - Cloud Business Management",
        title: "A Full-Stack Business Management Tool.",
        img: "/projects/knot.png",
        mainTechIcon: RiReactjsFill,
        banners: ["/projects/knot.png"],
        usedTech: [
            { name: "React", icon: RiReactjsFill },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Node.js", icon: TbBrandNodejs },
            { name: "MongoDB", icon: BiLogoMongodb },
            { name: "Express", icon: SiExpress },
            { name: "Firebase", icon: SiFirebase },
        ],
        link: "https://knot-849b7.web.app/",
        clientRepoLink: "https://github.com/TeamHero6/knot-client",
        serverRepoLink: "https://github.com/TeamHero6/knot-server",
        shortDescription: `<div>
            <h3>
                Projects
            </h3>
            <p>
                innerHTML in reactjs
            </p> 
        </div>`,
        description: `<div>
            <h3>
                Projects
            </h3>
            <p>
                innerHTML in reactjs
            </p> 
        </div>`,
    },
];
