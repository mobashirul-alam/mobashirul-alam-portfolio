import { RiReactjsFill } from "@remixicon/react";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiFirebase, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";

export const myProjects = [
    {
        id: "1",
        name: "Dev Diary",
        title: "A MERN stack blog application using React & Tailwind",
        img: "/projects/dev-diary/dev-diary-1.png",
        mainTechIcon: RiReactjsFill,
        banners: [
            "/projects/dev-diary/dev-diary-1.png",
            "/projects/dev-diary/dev-diary-2.png",
            "/projects/dev-diary/dev-diary-3.png",
            "/projects/dev-diary/dev-diary-4.png",
            "/projects/dev-diary/dev-diary-5.png",
            "/projects/dev-diary/dev-diary-6.png",
            "/projects/dev-diary/dev-diary-7.png",
            "/projects/dev-diary/dev-diary-8.png",
            "/projects/dev-diary/dev-diary-9.png",
            "/projects/dev-diary/dev-diary-10.png",
            "/projects/dev-diary/dev-diary-11.png",
        ],
        usedTech: [
            { name: "React", icon: RiReactjsFill },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Node.js", icon: TbBrandNodejs },
            { name: "MongoDB", icon: BiLogoMongodb },
            { name: "Express", icon: SiExpress },
            { name: "Firebase", icon: SiFirebase },
        ],
        link: "https://dev-diary.onrender.com/",
        clientRepoLink: "https://github.com/mobashirul-alam/dev-diary",
        serverRepoLink: "",
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
    {
        id: "2",
        name: "Hydra VR Landing Page",
        title: "A simple landing page using Tailwind CSS.",
        img: "/projects/hydra/img-1.png",
        mainTechIcon: TbBrandNextjs,
        banners: [
            "/projects/hydra/hydra-responsive-view.png",
            "/projects/hydra/img-1.png",
            "/projects/hydra/img-2.png",
            "/projects/hydra/img-3.png",
            "/projects/hydra/img-4.png",
        ],
        usedTech: [
            { name: "React", icon: RiReactjsFill },
            { name: "Next.js", icon: TbBrandNextjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
        link: "https://hydra-landing-page-zeta.vercel.app/",
        clientRepoLink: "https://github.com/mobashirul-alam/hydra-landing-page",
        serverRepoLink: "",
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
    {
        id: "3",
        name: "Scold Portfolio",
        title: "A portfolio website with responsive view.",
        img: "/projects/scold/img-1.png",
        mainTechIcon: TbBrandNextjs,
        banners: [
            "/projects/scold/scold-responsive-view.png",
            "/projects/scold/img-1.png",
            "/projects/scold/img-2.png",
            "/projects/scold/img-3.png",
            "/projects/scold/img-4.png",
            "/projects/scold/img-5.png",
            "/projects/scold/img-6.png",
            "/projects/scold/img-7.png",
        ],
        usedTech: [
            { name: "React", icon: RiReactjsFill },
            { name: "Next.js", icon: TbBrandNextjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "TypeScript", icon: BiLogoTypescript },
        ],
        link: "https://scold-portfolio.vercel.app/",
        clientRepoLink: "https://github.com/mobashirul-alam/scold-portfolio",
        serverRepoLink: "",
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
