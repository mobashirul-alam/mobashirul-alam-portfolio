import { RiCloseLine } from "@remixicon/react";

const Bio = () => {
    return (
        <div className="w-full border-r">
            <div className="border-b">
                <div className="w-64 flex justify-between items-center gap-x-3 py-3 px-4 border-r font-light">
                    <p>personal-info</p>
                    <RiCloseLine />
                </div>
            </div>
            <div>Bio</div>
        </div>
    );
};

export default Bio;
