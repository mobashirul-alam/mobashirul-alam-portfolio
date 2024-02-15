import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TopProgress from "@/components/topProgress";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${firaCode.className} h-screen p-[49px] bg-[#010c15] text-[#607B96]`}
            >
                <div className="bg-[#011627] h-full border border-[#1E2D3D] rounded-[8px] flex flex-col justify-between">
                    <TopProgress />
                    <Navbar />
                    <div className="h-full">{children}</div>
                    <Footer />
                    <Toaster />
                </div>
            </body>
        </html>
    );
}
