import React from "react";
import Texture from "./HomepageTexture";
import Background from "./LabCity";

const ThreeBackground = () => {
    return (
        <div className="relative w-full h-screen">
            <Background />
            <Texture className="absolute top-0 left-0 w-full h-full z-10" />
        </div>
    );
};

export default ThreeBackground;
