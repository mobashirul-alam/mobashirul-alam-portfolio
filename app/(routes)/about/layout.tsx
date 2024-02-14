import AboutRoutes from "./components/aboutRoutes.jsx";

export default function AboutPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex items-start h-full">
            <div className="border-r h-full w-[64px]">
                <AboutRoutes />
            </div>
            <div className="w-full h-full">{children}</div>
        </div>
    );
}
