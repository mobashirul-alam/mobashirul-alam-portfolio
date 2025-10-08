"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import ShortProjectView from "../components/shortProjectView";
import Achievements from "./components/achievements";
import Experiences from "./components/experiences";
import Folders from "./components/folders";
import Skills from "./components/skills";

const ProfessionalPage = () => {
    const [selectedFolder, setSelectedFolder] = useState("skills");

    return (
        <>
            <div className="hidden 2xl:flex w-full h-full">
                <div className="w-64 border-r h-full">
                    <Folders {...{ selectedFolder, setSelectedFolder }} />
                </div>

                <div className="grid grid-cols-2 w-full">
                    {selectedFolder === "skills" && <Skills />}
                    {selectedFolder === "experiences" && <Experiences />}
                    {selectedFolder === "achievements" && <Achievements />}

                    <ShortProjectView />
                </div>
            </div>
            <ScrollArea className="2xl:hidden h-[calc(100vh-193px)] md:h-[calc(100vh-155px)]">
                <div className="flex flex-col md:flex-row w-full h-full">
                    <div className="w-full md:w-64 h-full md:h-[calc(100vh-155px)]">
                        <Folders {...{ selectedFolder, setSelectedFolder }} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                        {selectedFolder === "skills" && <Skills />}
                        {selectedFolder === "experiences" && <Experiences />}
                        {selectedFolder === "achievements" && <Achievements />}

                        <ShortProjectView />
                    </div>
                </div>
            </ScrollArea>
        </>
    );
};

export default ProfessionalPage;
