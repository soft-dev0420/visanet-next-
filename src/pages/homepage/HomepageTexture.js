import React, { useState } from "react";

const HomePageTexture = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  return (
    <div className="absolute top-0 left-0 w-full h-[100vh] z-10">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center z-10">
        <img
          src="/assets/images/header-logo.png"
          alt="Integrity Logo"
          className="h-8 sm:h-9 ml-2 sm:ml-[4vw]"
        />
        <button className="bg-white text-black rounded-full px-4 sm:px-5 py-2 text-sm sm:text-base font-medium hover:bg-opacity-90 mr-2 sm:mr-[5vw]">
          Join the waitlist
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-white text-center gap-6 px-4 pt-[180px] sm:pt-[90px]">
        <img
          src="/assets/images/center-logo.png"
          alt="Integrity Symbol"
          className="w-16 h-16 mb-4 drop-shadow-[0_0_20px_#22c55e] scale-[1.1]"
        />
        <h1
          className="text-6xl font-custom"
          style={{ fontFamily: "previewfont" }}
        >
          Discover
        </h1>
        <p className="text-lg sm:text-2xl text-gray-400 max-w-md sm:max-w-xl mt-2 sm:mt-3 px-2">
          The First On-Chain Protocol Bringing Bitcoin Mining Logic to Web3 Assets
        </p>

        {/* Input Boxes */}
        <div className="flex gap-2 sm:gap-3 mt-4">
          {code.map((char, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-10 h-12 sm:w-[54px] sm:h-[63px] rounded-md text-center text-base sm:text-lg border-2 border-gray-800 bg-transparent focus:ring-2 focus:ring-white"
              value={char}
              onChange={(e) => {
                const newCode = [...code];
                newCode[index] = e.target.value;
                setCode(newCode);
              }}
            />
          ))}
        </div>

        {/* Button */}
        <button className="mt-4 px-8 sm:px-12 text-base sm:text-lg py-2.5 sm:py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          Enter Website →
        </button>
      </div>
    </div>
  );
};

export default HomePageTexture;
