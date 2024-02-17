import { RiCloseLine } from "@remixicon/react";

const Certificates = () => {
    return (
        <div className="w-full border-r">
            <div className="border-b">
                <div className="w-64 flex justify-between items-center gap-x-3 py-3 px-4 border-r font-light">
                    <p>certificates</p>
                    <RiCloseLine />
                </div>
            </div>
            <div className="p-5">
                <p>Certificates</p>
            </div>
        </div>
    );
};

export default Certificates;
