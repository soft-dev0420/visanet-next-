import React from "react";
import "./assets/css/body-canvas.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import LPNFT from "./pages/LP-NFT";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/nft" element={<LPNFT />} />
            </Routes>
        </Router>
    );
};

export default App;