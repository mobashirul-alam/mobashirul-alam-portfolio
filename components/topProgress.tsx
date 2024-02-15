"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const TopProgress = () => {
    return (
        <ProgressBar
            height="4px"
            color="#FEA55F"
            options={{ showSpinner: false }}
            shallowRouting
        />
    );
};

export default TopProgress;
