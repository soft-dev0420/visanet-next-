import React, { useState } from "react";

const HomePageTexture = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);


  return (
    <div className="absolute w-full h-screen overflow-hidden">      
      <header className="top-0 left-0 w-4/5 mx-auto p-5 flex justify-between items-center z-10">
        <img src="/assets/images/header-logo.png" alt="Integrity Logo" className="h-9" />
        <button className="bg-white text-black rounded-full px-6 py-2 text-sm font-medium hover:bg-opacity-90">
          Ask an Invitation
        </button>
      </header>

      <div className=" flex flex-col items-center justify-center h-screen text-white text-center">
        <img src="/assets/images/center-logo.png" alt="Integrity Symbol" className="w-20 h-20 mb-5 drop-shadow-lg" />
        <h1 className="text-4xl font-semibold">Discover</h1>
        <p className="text-lg text-gray-400 max-w-md mt-3">
          The World's First On-Chain Bitcoin Backed Reward Protocol for Web3 Enterprises
        </p>
        
        <div className="flex gap-2 mt-5">
          {code.map((char, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-10 h-10 text-center text-lg border border-green-400 bg-transparent focus:ring-2 focus:ring-white-500"
              value={char}
              onChange={(e) => {
                const newCode = [...code];
                newCode[index] = e.target.value;
                setCode(newCode);
              }}
            />
          ))}
        </div>
        
        <button className="mt-4 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          Enter your invitation code →
        </button>
      </div>
    </div>
  );
};

export default HomePageTexture;
