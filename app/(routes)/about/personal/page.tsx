"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import ShortProjectView from "../components/shortProjectView";
import Bio from "./components/bio";
import Education from "./components/education";
import Folders from "./components/folders";

const PersonalInfo = () => {
    const [selectedFolder, setSelectedFolder] = useState("bio");

    return (
        <>
            <div className="hidden 2xl:flex w-full h-full">
                <div className="w-64 border-r h-full">
                    <Folders {...{ selectedFolder, setSelectedFolder }} />
                </div>

                <div className="grid grid-cols-2 w-full">
                    {selectedFolder === "bio" && <Bio />}
                    {selectedFolder === "education" && <Education />}

                    <ShortProjectView />
                </div>
            </div>
            <ScrollArea className="2xl:hidden h-[calc(100vh-193px)] md:h-[calc(100vh-155px)]">
                <div className="flex flex-col md:flex-row w-full h-full">
                    <div className="w-full md:w-52 lg:w-64 h-full md:h-[calc(100vh-155px)]">
                        <Folders {...{ selectedFolder, setSelectedFolder }} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                        {selectedFolder === "bio" && <Bio />}
                        {selectedFolder === "education" && <Education />}

                        <ShortProjectView />
                    </div>
                </div>
            </ScrollArea>
        </>
    );
};

export default PersonalInfo;
