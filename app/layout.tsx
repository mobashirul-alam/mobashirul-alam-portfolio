import Footer from "@/components/footer";
import TopProgress from "@/components/topProgress";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Fira_Code } from "next/font/google";
import "./globals.css";
const MyNavbar = dynamic(() => import("@/components/navbar"));
const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mobashirul Alam Seam",
    description:
        "Welcome to Mobashirul Alam Seam's portfolio website! As a passionate frontend developer, I specialize in creating beautiful and intuitive user interfaces using cutting-edge technologies such as React, JavaScript, and Tailwind CSS. Explore my projects to see examples of my work, ranging from responsive web applications to interactive UI designs. Let's connect and discuss how I can help bring your digital projects to life!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${firaCode.className} h-screen p-3 md:p-5 2xl:p-[49px] bg-[#010c15] text-[#607B96]`}
            >
                <div className="bg-[#011627] h-full border border-[#1E2D3D] rounded-[8px] flex flex-col justify-between">
                    <TopProgress />
                    <MyNavbar />
                    <div className="h-full">{children}</div>
                    <Footer />
                    <Toaster />
                </div>
            </body>
        </html>
    );
}
