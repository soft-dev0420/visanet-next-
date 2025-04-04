import React from "react";
import "./assets/css/body-canvas.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
// import LabCity from "./components/HomepageTexture";
import SecondFrame from "./pages/secondFrame";
// import LabLaycaster from "./components/LabLaycaster";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/lab-city" element={<LabCity />} /> */}
                <Route path="/secondFrame" element={<SecondFrame />} />
            </Routes>
        </Router>
    );
};

export default App;