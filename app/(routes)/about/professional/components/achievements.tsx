import { RiCloseLine } from "@remixicon/react";
import Image from "next/image";

const Achievements = () => {
    return (
        <div className="w-full border-r">
            <div className="border-b">
                <div className="w-64 flex justify-between items-center gap-x-3 py-3 px-4 border-r font-light">
                    <p>achievements</p>
                    <RiCloseLine />
                </div>
            </div>
            <div className="p-5 grid grid-cols-2 gap-x-5">
                <div>
                    <div className="rounded-md p-4 border hover:border-white/50 duration-500">
                        <Image
                            src={"/MobashirulCertificate.jpg"}
                            alt="Certificate"
                            width={310}
                            height={240}
                            className="rounded-md"
                        />
                    </div>
                    <p className="text-center mt-2 text-sm">
                        Complete Web Development
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
