import AboutRoutes from "./components/aboutRoutes";

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
            <div className="w-full h-full">{children}</div>
        </div>
    );
}
