import { RiCloseLine, RiGraduationCapLine } from "@remixicon/react";

const Education = () => {
    return (
        <div className="w-full border-r">
            <div className="border-b">
                <div className="w-64 flex justify-between items-center gap-x-3 py-3 px-4 border-r font-light">
                    <p>education</p>
                    <RiCloseLine />
                </div>
            </div>
            <div className="p-5">
                <div>
                    <h1 className="text-lg font-medium text-white mb-5">
                        Academic Course
                    </h1>
                    <div className="flex items-center gap-x-5 mb-5">
                        <RiGraduationCapLine size={40} />
                        <div>
                            <h3 className="font-medium">
                                Hajera Taju Degree College, Chittagong
                            </h3>
                            <p className="text-sm">HSC (Science)</p>
                            <p className="text-sm opacity-85">
                                July 2017 - June 2019
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5 mb-5">
                        <RiGraduationCapLine size={40} />
                        <div>
                            <h3 className="font-medium">
                                National University, Bangladesh
                            </h3>
                            <p className="text-sm">BSc. in Mathematics</p>
                            <p className="text-sm opacity-85">
                                July 2019 - Ongoing
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium text-white mb-5">
                        Professional Course
                    </h1>
                    <div className="flex items-center gap-x-5 mb-5">
                        <RiGraduationCapLine size={40} />
                        <div>
                            <h3 className="font-medium">
                                Complete Web Development Course With Jhankar
                                Mahbub
                            </h3>
                            <p className="text-sm">Programming Hero</p>
                            <p className="text-sm opacity-85">
                                January - June 2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
