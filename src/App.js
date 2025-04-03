import React from "react";
import "./assets/css/body-canvas.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./components/LabCity";
import HomePage from "./pages/homepage";
import LabCity from "./components/HomepageTexture";
// import LabLaycaster from "./components/LabLaycaster";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/lab-city" element={<LabCity />} />
            </Routes>
        </Router>
    );
};

export default App;