import { RiCloseLine } from "@remixicon/react";
import ProjectsOrbitCarousel from "./projectsOrbitCarousel";

const ShortProjectView = () => {
    return (
        <div className="md:border-l lg:border-l-0 xl:border-l md:border-t lg:border-t-0">
            <div className="border-b border-t md:border-t-0">
                <div className="w-full md:w-64 flex justify-between items-center gap-x-3 py-3 px-4 md:border-r font-light">
                    <p>projects</p>
                    <RiCloseLine />
                </div>
            </div>

            <div className="p-5 h-[calc(100%-48px)] flex items-center justify-center">
                <ProjectsOrbitCarousel />
            </div>
        </div>
    );
};

export default ShortProjectView;
