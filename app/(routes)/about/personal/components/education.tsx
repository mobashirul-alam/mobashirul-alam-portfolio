import { RiCloseLine } from "@remixicon/react";

const Education = () => {
    return (
        <div className="w-full border-r">
            <div className="border-b">
                <div className="w-64 flex justify-between items-center gap-x-3 py-3 px-4 border-r font-light">
                    <p>education</p>
                    <RiCloseLine />
                </div>
            </div>
            <div>
                <p className="p-5 text-base">Education</p>
            </div>
        </div>
    );
};

export default Education;
