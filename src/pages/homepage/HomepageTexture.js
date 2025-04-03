import React, { useState } from "react";
// import head_logo from "/assets/images/header-logo.png";
// import center_logo from "/assets/images/center-logo.png";

const HomePageTexture = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);


  return (
    <div className="absolute w-full h-screen overflow-hidden">      
      <header className="top-0 left-0 w-4/5 mx-auto p-5 flex justify-between items-center z-10">
      <img src="/assets/images/header-logo.png" alt="Integrity Logo" className="h-9 ml-[4vw]" />
      <button className="bg-white text-black rounded-full px-[13px] py-[6px] text-lg font-medium hover:bg-opacity-90 mr-[5vw]">
        Join the waitlist
      </button>
    </header>

    <div className="flex flex-col items-center justify-center h-screen text-white text-center gap-6 mt-[90px]">
      <img src="/assets/images/center-logo.png" alt="Integrity Symbol" className="w-20 h-20 mb-5 drop-shadow-[0_0_20px_#22c55e] -mt-[120px] scale-[1.1]" />
      <h1 className="text-6xl font-custom" style={{ fontFamily: 'previewfont' }}>Discover</h1>
      <p className="text-2xl text-gray-400 max-w-xl mt-3">
        On-Chain Protocol Bringing Bitcoin Mining Logic to Web3 Assets
      </p>

      <div className="flex gap-3 mt-5">
        {code.map((char, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="w-[54px] h-[63px] rounded-md text-center text-lg border-2 border-gray-800 bg-transparent focus:ring-2 focus:ring-white-500"
            value={char}
            onChange={(e) => {
              const newCode = [...code];
              newCode[index] = e.target.value;
              setCode(newCode);
            }}
          />
        ))}
      </div>

      <button className="mt-4 px-12 text-lg py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
        Enter Website →
      </button>
    </div>

    </div>
  );
};

export default HomePageTexture;
