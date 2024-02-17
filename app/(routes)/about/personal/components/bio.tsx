import { RiCloseLine } from "@remixicon/react";
import CountUp from "react-countup";

const Bio = () => {
    return (
        <div className="w-full border-r">
            <div className="border-b">
                <div className="w-64 flex justify-between items-center gap-x-3 py-3 px-4 border-r font-light">
                    <p>bio</p>
                    <RiCloseLine />
                </div>
            </div>
            <div className="p-5">
                <div className="mb-10 mt-5 flex justify-start items-center gap-x-10 text-white">
                    <div>
                        <h1 className="text-6xl font-bold">
                            <CountUp end={2} duration={5} />+
                        </h1>

                        <p className="text-sm">
                            Years of <br /> Experiences
                        </p>
                    </div>
                    <div>
                        <h1 className="text-6xl font-bold">
                            <CountUp end={8} duration={5} />+
                        </h1>
                        <p className="text-sm">
                            Projects <br /> Completed
                        </p>
                    </div>
                </div>
                <div className="text-lg space-y-3">
                    <p>Hey there! I&apos;m Mobashirul,</p>
                    <p>
                        A passionate Front-end developer with over 1.5 years of
                        experience in web development. Specializing in MERN
                        Stack development, I&apos;ve honed my skills in MongoDB,
                        Express.js, React, and Node.js, while recently delving
                        into Next.js and Prisma to enhance my projects.
                    </p>
                    <p>
                        I thrive in team environments and have a record of
                        successful collaboration, working alongside designers,
                        and fellow developers to bring ideas to life. Solving
                        problems and debugging issues bring me immense
                        satisfaction, and I excel at unraveling complex bugs and
                        finding creative solutions. Overcoming obstacles with my
                        problem-solving skills and determination is incredibly
                        rewarding.
                    </p>
                    <p>
                        Outside of coding, you&apos;ll find me exploring nature,
                        and entertained with sports like cricket, football, or
                        cycle riding. With a passion for continuous learning and
                        a knack for problem-solving, I&apos;m excited about the
                        journey ahead and the endless possibilities in the world
                        of web development.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bio;
