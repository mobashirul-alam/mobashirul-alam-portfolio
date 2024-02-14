import LottiePlayer from "@/components/ui/lottiePlayer";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex justify-center items-center h-full px-80">
            <div className="grid grid-cols-2 w-full h-full">
                <div className=" flex items-center">
                    <div>
                        <p className="text-lg font-[450] text-[#E5E9F0]">
                            Hi all. I am
                        </p>
                        <h1 className="text-[#E5E9F0] font-light text-6xl leading-[82px]">
                            Mobashirul <br /> Alam Seam
                        </h1>
                        <h3 className="text-[#4D5BCE] text-[32px] font-[450] leading-[42px] mb-20">
                            {">"} Front-end Developer
                        </h3>
                        <p className="text-[#607B96] font-[450] mb-2">
                            {
                                "// crafting the web through code and creative innovation"
                            }
                        </p>
                        <p className="text-[#607B96] font-[450] mb-2">
                            {
                                "// visit my github profile to know my coding experience"
                            }
                        </p>
                        <div className="flex items-center text-base font-medium gap-x-2">
                            <p className="text-[#4D5BCE]">const</p>
                            <p className="text-[#43D9AD]">githubLink</p>
                            <p className="text-white">=</p>
                            <a
                                href="https://github.com/mobashirul-alam"
                                target="_blank"
                                className="text-[#E99287]"
                            >
                                &quot;
                                <span className="underline">
                                    https://github.com/mobashirul-alam
                                </span>
                                &quot;
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="col-span-4 relative ">
                <Image
                    alt=""
                    src="/code-snippet.png"
                    width={560}
                    height={182}
                    className="mx-auto opacity-40"
                />
                <Image
                    alt=""
                    src="/code-snippet.png"
                    width={560}
                    height={182}
                    className="mx-auto relative my-5 z-50"
                />
                <Image
                    alt=""
                    src="/code-snippet.png"
                    width={560}
                    height={182}
                    className="mx-auto opacity-40"
                />
                <Image
                    alt=""
                    src="/Green.svg"
                    width={954}
                    height={492}
                    className="absolute -top-32 -left-40 -z-0 opacity-60"
                />
                <Image
                    alt=""
                    src="/Blue.svg"
                    width={954}
                    height={492}
                    className="absolute -bottom-24 -right-40 -z-0 opacity-60"
                />
            </div> */}
                <div className="flex justify-end items-center">
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
    );
}
