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
        <div className="w-full md:w-52 xl:w-64">
            <div className="flex items-center gap-x-3 py-3 pl-4 border-b text-white font-light">
                <RiArrowDownSFill />
                <p>personal-info</p>
            </div>

            <div className="pl-4 py-3 md:py-6">
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
                        onClick={() => setSelectedFolder("education")}
                    >
                        <RiFolder3Fill
                            size={16}
                            className="mr-2 text-[#43D9AD]"
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

            <div className="pl-4 py-3 md:py-6 border-b md:border-none">
                <div
                    className="flex items-center mb-2 cursor-pointer"
                    onClick={() =>
                        (window.location.href =
                            "mailto:mobashirulalamseam@gmail.com")
                    }
                >
                    <RiMailFill className="mr-2" size={18} />
                    mob...@gmail.com
                </div>
                <div
                    className="flex items-center mb-2 cursor-pointer"
                    onClick={() =>
                        (window.location.href = "tel:+8801643424044")
                    }
                >
                    <RiPhoneFill className="mr-2" size={18} />
                    +8801643424044
                </div>
            </div>
        </div>
    );
};

export default Folders;
