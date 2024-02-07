"use client";

import { Player } from "@lottiefiles/react-lottie-player";

const LottiePlayer = ({ src }: { src: string }) => {
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
