"use client";

import { useState } from "react";
import CodeSnippet from "../components/codeSnippet";
import Certificates from "./components/certificates";
import Experiences from "./components/experiences";
import Folders from "./components/folders";
import Skills from "./components/skills";

const ProfessionalPage = () => {
    const [selectedFolder, setSelectedFolder] = useState("skills");

    return (
        <div className="flex w-full h-full">
            <div className="w-64 border-r h-full">
                <Folders {...{ selectedFolder, setSelectedFolder }} />
            </div>

            <div className="grid grid-cols-2 w-full">
                {selectedFolder === "skills" && <Skills />}
                {selectedFolder === "experiences" && <Experiences />}
                {selectedFolder === "certificates" && <Certificates />}

                <CodeSnippet />
            </div>
        </div>
    );
};

export default ProfessionalPage;
