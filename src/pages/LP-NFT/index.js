import React from "react";
import Texture from "./HomepageTexture";
import Background from "./LabCity";

const ThreeBackground = () => {
    return (
        <div className="relative w-full h-[100vh]">
            <Background />
            <Texture />
            {/* <Texture className="absolute top-0 left-0 w-full h-[90vh] z-10" /> */}
        </div>
    );
};

export default ThreeBackground;
