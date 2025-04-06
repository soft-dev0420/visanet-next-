import React from "react";
import "./assets/css/body-canvas.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/homepage";
import LPNFTPage from "./pages/LP-NFT";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LPNFTPage />} />
                <Route path="/nft" element={<LPNFTPage />} />
            </Routes>
        </Router>
    );
};

export default App;