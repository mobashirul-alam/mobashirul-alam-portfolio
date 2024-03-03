import Loader from "@/components/loader";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const AboutRoutes = dynamic(() => import("./components/aboutRoutes"));

export default function AboutPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col md:flex-row items-start h-full">
            <div className="md:border-r h-full w-full md:w-[64px]">
                <AboutRoutes />
            </div>
            <div className="w-full h-full">
                <Suspense fallback={<Loader />}>{children}</Suspense>
            </div>
        </div>
    );
}
