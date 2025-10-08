"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

// --- Data: team members ---
const selectedProjects = [
    {
        id: 1,
        name: "My Docs",
        mainTech: "Next.js",
        img: "/projects/my-docs/my-docs-1.png",
        liveLink: "https://my-docs-web.vercel.app/",
    },
    {
        id: 2,
        name: "Minimal Portfolio",
        mainTech: "Next.js",
        img: "/projects/minimal-portfolio/minimal-portfolio-1.png",
        liveLink: "https://minimal-portfolio-sandy.vercel.app/",
    },
    {
        id: 3,
        name: "TastyBite",
        mainTech: "Next.js",
        img: "/projects/tasty-bite/tasty-bite-1.png",
        liveLink: "https://tasty-bite-web.vercel.app",
    },
    {
        id: 4,
        name: "TourHub",
        mainTech: "Next.js",
        img: "/projects/tour-hub/tour-hub-1.png",
        liveLink: "https://tour-hub-frontend.vercel.app",
    },
    {
        id: 5,
        name: "Dev Diary",
        mainTech: "React.js",
        img: "/projects/dev-diary/dev-diary-1.png",
        liveLink: "https://dev-diary.onrender.com/",
    },
    {
        id: 6,
        name: "Hydra VR Landing Page",
        mainTech: "Next.js",
        img: "/projects/hydra/img-1.png",
        liveLink: "https://hydra-landing-page-zeta.vercel.app/",
    },
    {
        id: 7,
        name: "Scold Portfolio",
        mainTech: "Next.js",
        img: "/projects/scold/img-1.png",
        liveLink: "https://scold-portfolio.vercel.app/",
    },
    {
        id: 8,
        name: "Prime Mart e-commerce app",
        mainTech: "Next.js",
        img: "/projects/prime-mart/prime-mart-1.png",
        liveLink: "https://prime-mart-frontend.vercel.app/",
    },
];

// --- Utility for fallback images ---
const safeImage = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://placehold.co/100x100/E0E7FF/4338CA?text=Error";
};

// --- Custom hook for mobile detection ---
const useIsMobile = (breakpoint: number = 768): boolean => {
    const [isMobile, setIsMobile] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (typeof window === "undefined") return;
        const checkScreenSize = (): void =>
            setIsMobile(window.innerWidth < breakpoint);

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, [breakpoint]);

    return isMobile;
};

// --- Main Component ---
export default function ProjectsOrbitCarousel() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isHovering, setIsHovering] = React.useState(false);
    const isMobile = useIsMobile();

    const navigate = useRouter();

    const containerRadius = isMobile ? 130 : 200;
    const profileSize = isMobile ? 60 : 80;
    const containerSize = containerRadius * 2 + 100;

    // Calculate rotation for each profile
    const getRotation = React.useCallback(
        (index: number): number =>
            (index - activeIndex) * (360 / selectedProjects.length),
        [activeIndex]
    );

    // Navigation
    const next = () => setActiveIndex((i) => (i + 1) % selectedProjects.length);
    const prev = () =>
        setActiveIndex(
            (i) => (i - 1 + selectedProjects.length) % selectedProjects.length
        );

    const handleProfileClick = React.useCallback(
        (index: number) => {
            if (index === activeIndex) return;
            setActiveIndex(index);
        },
        [activeIndex]
    );

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent): void => {
            if (event.key === "ArrowLeft") prev();
            else if (event.key === "ArrowRight") next();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Auto-rotation
    React.useEffect(() => {
        if (isHovering) return;

        const interval = setInterval(() => {
            next();
        }, 5000);

        return () => clearInterval(interval);
    }, [isHovering]);

    return (
        <div
            className="flex flex-col items-center p-4 relative min-h-[400px] transition-colors duration-300"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div
                className="relative flex items-center justify-center"
                style={{ width: containerSize, height: containerSize }}
            >
                {/* Active Person Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedProjects[activeIndex].id}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                        }}
                        className="z-10 bg-gray-900/50 backdrop-blur-sm shadow-2xl shadow-gray-900/50 rounded-xl p-3 md:p-4 w-48 md:w-52 text-center border border-gray-800"
                    >
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            src={selectedProjects[activeIndex].img}
                            alt={selectedProjects[activeIndex].name}
                            onError={safeImage}
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto -mt-10 md:-mt-14 border-4 border-white object-cover shadow-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                        >
                            <h2 className="mt-2 text-base md:text-lg font-bold text-white">
                                {selectedProjects[activeIndex].name}
                            </h2>
                            <div className="flex items-center justify-center text-xs md:text-sm text-gray-400 mt-1">
                                <span className="truncate">
                                    {selectedProjects[activeIndex].mainTech}
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="flex justify-center items-center mt-3 space-x-2"
                        >
                            <button
                                onClick={prev}
                                className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-600 transition-colors"
                            >
                                <ChevronLeft
                                    size={16}
                                    className="text-gray-300"
                                />
                            </button>
                            <Link
                                href={selectedProjects[activeIndex].liveLink}
                                className="px-4 py-1 text-sm rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit
                            </Link>
                            <button
                                onClick={next}
                                className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-600 transition-colors"
                            >
                                <ChevronRight
                                    size={16}
                                    className="text-gray-300"
                                />
                            </button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Orbiting Profiles with Counter-Rotation */}
                {selectedProjects.map((p, i) => {
                    const rotation = getRotation(i);
                    const isActive = i === activeIndex;

                    return (
                        <motion.div
                            key={p.id}
                            animate={{
                                transform: `rotate(${rotation}deg) translateY(-${containerRadius}px)`,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 150,
                                damping: 20,
                                delay: isActive
                                    ? 0
                                    : Math.abs(i - activeIndex) * 0.05,
                            }}
                            style={{
                                width: profileSize,
                                height: profileSize,
                                position: "absolute",
                                top: `calc(50% - ${profileSize / 2}px)`,
                                left: `calc(50% - ${profileSize / 2}px)`,
                                zIndex: isActive ? 20 : 10,
                            }}
                        >
                            {/* Counter-rotation to keep image upright */}
                            <motion.div
                                animate={{ rotate: -rotation }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 20,
                                }}
                                className="w-full h-full"
                            >
                                <motion.img
                                    src={p.img}
                                    alt={p.name}
                                    onError={safeImage}
                                    onClick={() => handleProfileClick(i)}
                                    whileHover={{
                                        scale: 1.15,
                                        boxShadow:
                                            "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full h-full object-cover rounded-full cursor-pointer transition-all duration-300 ${
                                        isActive
                                            ? "border-4 border-indigo-400 shadow-lg"
                                            : "border-2 border-gray-300 hover:border-indigo-400"
                                    }`}
                                />
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
                {selectedProjects.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full ${
                            index === activeIndex
                                ? "bg-indigo-400"
                                : "bg-gray-600"
                        }`}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>
        </div>
    );
}
