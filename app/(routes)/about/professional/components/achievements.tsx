import { RiCloseLine } from "@remixicon/react";
import Image from "next/image";

const Achievements = () => {
    return (
        <div className="w-full lg:border-r border-t md:border-t-0 md:border-l">
            <div className="border-b">
                <div className="w-full md:w-64 flex justify-between items-center gap-x-3 py-3 px-4 md:border-r font-light">
                    <p>achievements</p>
                    <RiCloseLine />
                </div>
            </div>
            <div className="p-5 grid grid-cols-1 xl:grid-cols-2 xl:gap-x-5">
                <div>
                    <div className="rounded-md flex justify-center">
                        <Image
                            src={"/MobashirulCertificate.jpg"}
                            alt="Certificate"
                            width={310}
                            height={240}
                            className="rounded-md p-4 border hover:border-white/50 duration-500"
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
