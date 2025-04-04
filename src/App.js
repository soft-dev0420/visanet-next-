import React from "react";
import "./assets/css/body-canvas.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Page3 from "./pages/LP-NFT/Page3";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/lab-city" element={<LabCity />} /> */}
                <Route path="/page3" element={<Page3 />} />
            </Routes>
        </Router>
    );
};

export default App;