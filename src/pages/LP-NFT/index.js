import React from "react";
import Navbar from "./navbar";
import Page1 from "./page1";
// import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page6 from "./page6";
import Footer from "./footer";

const ThreeBackground = () => {
    return (
        <>
            <Navbar />
            <Page1 />
            {/* <Page2 /> */}
            <Page3 />
            <Page4 />
            <Page6 />
            <Footer />
        </>
    );
};

export default ThreeBackground;
