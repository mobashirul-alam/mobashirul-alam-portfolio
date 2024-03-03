import Loader from "@/components/loader";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

const LottiePlayer = dynamic(() => import("@/components/ui/lottiePlayer"));

export default function Home() {
    return (
        <Suspense fallback={<Loader />}>
            <div className="flex justify-center items-center h-full px-5 lg:px-12 xl:px-20 2xl:px-80">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full max-w-[1440px]">
                    <div className="flex items-center justify-center lg:justify-start">
                        <div>
                            <p className="text-lg font-[450] text-[#E5E9F0]">
                                Hi all. I am
                            </p>
                            <h1 className="text-[#E5E9F0] font-light text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[62px] md:leading-[82px] lg:leading-[62px] xl:leading-[82px]">
                                Mobashirul <br /> Alam Seam
                            </h1>
                            <h3 className="text-[#4D5BCE] text-[20px] md:text-[32px] lg:text-[20px] xl:text-[32px] font-[450] leading-[26px] md:leading-[42px] mb-20 lg:mb-6 xl:mb-20">
                                {">"} Front-end Developer
                            </h3>
                            <p className="hidden md:block text-[#607B96] text-wrap text-sm md:text-base lg:text-sm xl:text-base font-[450] mb-2">
                                {"//"} crafting the web through code and
                                creative innovation
                            </p>
                            <p className="hidden md:block text-[#607B96] text-sm md:text-base lg:text-sm xl:text-base font-[450] mb-2">
                                {"//"} visit my github profile to know my coding
                                experience
                            </p>
                            <p className="md:hidden text-[#607B96] text-sm md:text-base lg:text-sm xl:text-base font-[450] mb-2">
                                {"//"} find my profile on github
                            </p>
                            <div className="text-base lg:text-sm xl:text-base font-medium">
                                <p className="">
                                    <span className="text-[#4D5BCE] mr-2">
                                        const
                                    </span>
                                    <span className="text-[#43D9AD] mr-2">
                                        githubLink
                                    </span>
                                    <span className="text-white mr-2">=</span>
                                    <a
                                        href="https://github.com/mobashirul-alam"
                                        target="_blank"
                                        className="text-[#E99287]"
                                    >
                                        <span className="flex md:inline items-center flex-wrap underline">
                                            &quot;
                                            <span>https://</span>
                                            <span>
                                                github.com/mobashirul-alam
                                            </span>
                                            &quot;
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-end items-center">
                        <div className="relative">
                            <LottiePlayer src="https://lottie.host/1500a3e0-d621-4225-9e05-3cd214891e81/WlmhjUswwG.json" />

                            <Image
                                alt=""
                                src="/Blue.svg"
                                width={954}
                                height={492}
                                className="absolute -bottom-24 -left-20 -z-0 opacity-60"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}
