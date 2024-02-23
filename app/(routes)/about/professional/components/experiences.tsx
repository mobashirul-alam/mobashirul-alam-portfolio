import { RiCloseLine, RiLinkedinBoxFill } from "@remixicon/react";

const Experiences = () => {
    return (
        <div className="w-full border-r">
            <div className="border-b">
                <div className="w-64 flex justify-between items-center gap-x-3 py-3 px-4 border-r font-light">
                    <p>experiences</p>
                    <RiCloseLine />
                </div>
            </div>
            <div className="p-5">
                <div className="border hover:border-white/50 rounded-md p-3 flex justify-between items-start duration-1000">
                    <div>
                        <h3 className="text-lg font-semibold text-white/50">
                            Frontend Developer
                        </h3>
                        <p className="text-sm">
                            <span className="text-white/70 font-medium">
                                ITCO
                            </span>{" "}
                            - Full time
                        </p>
                        <p className="text-sm">Nov 2022 - Jun 2023</p>
                        <p className="text-sm">Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <a
                            href="https://www.linkedin.com/company/itcobd/"
                            target="_blank"
                        >
                            <RiLinkedinBoxFill
                                size={32}
                                className="hover:text-[#C4C4C4] duration-200"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;
