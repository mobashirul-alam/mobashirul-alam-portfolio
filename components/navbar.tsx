import Link from "next/link";

const Navbar = () => {
    const links = [
        { id: 1, link: "/", text: "_hello" },
        { id: 2, link: "/", text: "_about-me" },
        { id: 3, link: "/", text: "_projects" },
    ];
    return (
        <div className="grid grid-cols-12 text-[#607B96] font-[450] border-b">
            <div className="col-span-2 border-r py-4 px-5 whitespace-nowrap">
                <Link href="/" className="hover:text-white duration-200">
                    mobashirul-alam-seam
                </Link>
            </div>
            <div className="col-span-10 flex justify-between items-center">
                <div className="flex h-full">
                    {links.map((link) => (
                        <div key={link.id} className="relative flex group">
                            <Link
                                href={link.link}
                                className="h-full py-4 px-8 border-r hover:text-white duration-200"
                            >
                                {link.text}
                            </Link>
                            <div className="absolute bottom-0 h-[0] w-full bg-[#FEA55F] group-hover:h-[3px] duration-300"></div>
                        </div>
                    ))}
                </div>
                <div className="relative flex group">
                    <Link
                        href="/"
                        className="h-full py-4 px-8 border-l hover:text-white duration-200"
                    >
                        _contact-me
                    </Link>
                    <div className="absolute bottom-0 h-[0] w-full bg-[#FEA55F] group-hover:h-[3px] duration-300"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
