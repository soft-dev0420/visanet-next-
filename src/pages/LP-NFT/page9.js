import React from "react";

export default function Frame() {
  return (
    <div className="relative w-full min-h-[100vh] bg-black text-white overflow-hidden bg-no-repeat bg-center bg-cover">
      <div className="w-full flex justify-center px-4 mt-[150px]">
        <div className="relative w-full max-w-[1024px] flex flex-col md:flex-row gap-[3vw]">
          <div className="flex flex-col w-full md:w-[550px] items-start gap-15 z-10">
            <div className="flex flex-col items-start gap-5 w-full">
              <h1 className="max-w-[600px] text-bold text-[55px] text-left text-white leading-[1.1]">
                Let your community own NFTs with built-in Bitcoin mining logic
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-10 mt-[130px]">
            <div className="flex items-start gap-3">
              <button className="w-12 h-12 rounded-full bg-gray-800 text-white text-xl flex items-center justify-center hover:bg-gray-700">
                <img alt="arrow-left" src="./assets/images/icons/arrow-left.svg"/>
              </button>
              <button className="w-12 h-12 rounded-full bg-gray-800 text-white text-xl flex items-center justify-center hover:bg-gray-700">
                <img alt="arrow-right" src="./assets/images/icons/arrow-right.svg"/>
              </button>
            </div>
            <button className="flex px-3 py-3 bg-white text-black text-bold rounded-full font-button font-[number:500] text-[15px]">
              Join the Waitlist <img className="text-black pl-1" alt="arrow-right-black" src="./assets/images/icons/arrow-right-black.svg"/>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center px-4 mt-[80px]">
        <div className="relative w-full max-w-[1300px] flex flex-col md:flex-row gap-[3vw]">
            <div className="w-[400px] h-[400px] border-1">
                <div className="w-[400px] h-[320px] bg-gray-800 rounded-t-[20px]">
                    <p className="p-[20px] text-gray-400 text-left">"Integrity redefines NFTs for Web3:<br/>seamless mining, transparent Bitcoin-linked utility, and on-chain mechanics that promote sustainable scarcity. Exactly what Web3 was waiting for."</p>
                </div>
                <div className="flex w-full h-[80px] p-[10px] border-gray-800 border-[1px] rounded-b-[20px]">
                    <img className="w-[40px] h-[40px] rounded-full" src="/assets/images/icons/lev_zolotov.png" alt="Lev_zolotov"></img>
                    <div className="text-[10px] text-left m-[10px] bg-transparent">
                        <p className="text-white text-[15px]">Lev Zolotov</p>
                        <p>CEO @Integrity.farm</p>
                    </div>
                </div>
            </div>
            <div className="w-[400px] h-[400px] border-1">
                <div className="w-[400px] h-[320px] bg-gray-800 rounded-t-[20px]">
                    <p className="p-[20px] text-gray-400 text-left">"Integrity redefines NFTs for Web3:<br/>seamless mining, transparent Bitcoin-linked utility, and on-chain mechanics that promote sustainable scarcity. Exactly what Web3 was waiting for."</p>
                </div>
                <div className="flex w-full h-[80px] p-[10px] border-gray-800 border-[1px] rounded-b-[20px]">
                    <img className="w-[40px] h-[40px] rounded-full" src="/assets/images/icons/lev_zolotov.png" alt="Lev_zolotov"></img>
                    <div className="text-[10px] text-left m-[10px] bg-transparent">
                        <p className="text-white text-[15px]">Lev Zolotov</p>
                        <p>CEO @Integrity.farm</p>
                    </div>
                </div>
            </div>
            <div className="w-[400px] h-[400px] border-1">
                <div className="w-[400px] h-[320px] bg-gray-800 rounded-t-[20px]">
                    <p className="p-[20px] text-gray-400 text-left">"Integrity redefines NFTs for Web3:<br/>seamless mining, transparent Bitcoin-linked utility, and on-chain mechanics that promote sustainable scarcity. Exactly what Web3 was waiting for."</p>
                </div>
                <div className="flex w-full h-[80px] p-[10px] border-gray-800 border-[1px] rounded-b-[20px]">
                    <img className="w-[40px] h-[40px] rounded-full" src="/assets/images/icons/lev_zolotov.png" alt="Lev_zolotov"></img>
                    <div className="text-[10px] text-left m-[10px] bg-transparent">
                        <p className="text-white text-[15px]">Lev Zolotov</p>
                        <p>CEO @Integrity.farm</p>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 -right-4 w-[400px] h-full bg-gradient-to-l from-black/80 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-[400px] h-full bg-gradient-to-r from-black/80 to-transparent pointer-events-none"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-white text-center gap-6 px-4 my-[80px] sm:mt-[300px]">
        <img
          src="/assets/images/center-logo.png"
          alt="Integrity Symbol"
          className="w-32 h-32 mb-4 drop-shadow-[0_0_100px_#00ff00] -mt-[100px] sm:-mt-[120px] scale-[1.1]"
        />
        <h1
          className="text-6xl font-custom"
          style={{ fontFamily: "previewfont" }}
        >
          On-Chain Protocol Bringing<br/>Bitcoin Mining Logic to NFT<br/>Collections
        </h1>
        <p className="text-lg sm:text-2xl text-gray-400 max-w-md sm:max-w-xl mt-2 sm:mt-3 px-2">
          Provably fair, decentralized, and transparent Bitcoin-linked utility-no hardware, no inflation, powered by Integrity.
        </p>

        {/* Button */}
        <button className="flex mt-4 px-8 sm:px-12 text-base sm:text-lg py-2.5 sm:py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          Enter Website →
        </button>
      </div>
    </div>
  );
}
