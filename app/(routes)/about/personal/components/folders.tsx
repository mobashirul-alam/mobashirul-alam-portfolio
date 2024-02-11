import {
    RiArrowDownSFill,
    RiArrowRightSLine,
    RiFolder3Fill,
    RiMailFill,
    RiPhoneFill,
} from "@remixicon/react";
import { Dispatch, SetStateAction } from "react";

interface FoldersProps {
    selectedFolder: string;
    setSelectedFolder: Dispatch<SetStateAction<string>>;
}

const Folders: React.FC<FoldersProps> = ({
    selectedFolder,
    setSelectedFolder,
}) => {
    return (
        <div className="w-64">
            <div className="flex items-center gap-x-3 py-3 pl-4 border-b text-white font-light">
                <RiArrowDownSFill />
                <p>personal-info</p>
            </div>

            <div className="pl-4 py-6">
                <div className="flex items-center mb-2">
                    <RiArrowRightSLine className="mr-3" />
                    <div
                        className="cursor-pointer flex items-center"
                        onClick={() => setSelectedFolder("bio")}
                    >
                        <RiFolder3Fill
                            size={16}
                            className="mr-2 text-[#E99287]"
                        />
                        <p
                            className={`font-light leading-[21px] hover:text-white duration-100 ${
                                selectedFolder === "bio" && "text-white"
                            }`}
                        >
                            bio
                        </p>
                    </div>
                </div>
                <div className="flex items-center mb-2">
                    <RiArrowRightSLine className="mr-3" />
                    <div
                        className="cursor-pointer flex items-center"
                        onClick={() => setSelectedFolder("interest")}
                    >
                        <RiFolder3Fill
                            size={16}
                            className="mr-2 text-[#43D9AD]"
                        />
                        <p
                            className={`font-light leading-[21px] hover:text-white duration-100 ${
                                selectedFolder === "interest" && "text-white"
                            }`}
                        >
                            interest
                        </p>
                    </div>
                </div>
                <div className="flex items-center mb-2">
                    <RiArrowRightSLine className="mr-3" />
                    <div
                        className="cursor-pointer flex items-center"
                        onClick={() => setSelectedFolder("education")}
                    >
                        <RiFolder3Fill
                            size={16}
                            className="mr-2 text-[#3A49A4]"
                        />
                        <p
                            className={`font-light leading-[21px] hover:text-white duration-100 ${
                                selectedFolder === "education" && "text-white"
                            }`}
                        >
                            education
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-x-3 py-3 pl-4 border-y text-white font-light">
                <RiArrowDownSFill />
                <p>contacts</p>
            </div>

            <div className="pl-4 py-6">
                <div className="flex items-center mb-2">
                    <RiMailFill className="mr-2" size={18} />
                    user@gmail.com
                </div>
                <div className="flex items-center mb-2">
                    <RiPhoneFill className="mr-2" size={18} />
                    +3598246359
                </div>
            </div>
        </div>
    );
};

export default Folders;