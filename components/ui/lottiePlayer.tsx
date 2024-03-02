"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";

const LottiePlayer = ({ src }: { src: string }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <Player
            autoplay
            loop
            src={src}
            style={{ height: "500px", width: "500px" }}
        />
    );
};

export default LottiePlayer;
