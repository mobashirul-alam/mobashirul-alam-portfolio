"use client";

import { useState } from "react";
import CodeSnippet from "../components/codeSnippet";
import Bio from "./components/bio";
import Folders from "./components/folders";

const PersonalInfo = () => {
    const [selectedFolder, setSelectedFolder] = useState("bio");

    return (
        <div className="flex w-full h-full">
            <div className="w-64 border-r h-full">
                <Folders {...{ selectedFolder, setSelectedFolder }} />
            </div>

            <div className="grid grid-cols-2 w-full">
                {selectedFolder === "bio" && <Bio />}

                <CodeSnippet />
            </div>
        </div>
    );
};

export default PersonalInfo;
