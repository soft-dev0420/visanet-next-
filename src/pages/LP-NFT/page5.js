
import React from "react";

// Navigation menu items data

export default function Frame() {
  return (
    <div className="relative w-full min-h-[100vh] bg-black text-white overflow-hidden bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url(/assets/images/page5.png)"}}>

      <main className="w-full flex justify-center px-4 my-[100px]">
        <div className="relative w-full max-w-[1024px] flex flex-col md:flex-row gap-[8vw]">
        
          {/* Left Content */}
          <div className="flex flex-col w-full md:w-[653px] items-start gap-15 z-10">
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex items-left gap-[1vw]">
                <div>
                  <img src="/assets/images/icons/pickaxe.svg" alt="axe"></img>
                </div>
                <div className="text-[20px]">
                  <p>Bitcoin-Powered On-Chain Utility Layer</p>
                </div>
              </div>
              <h1 className="max-w-[600px] text-bold text-[55px] text-left text-white leading-[1.1]">
                Embed On-Chain, Bitcoin-Linked Utility into Your NFT Collections
              </h1>
              <p className="max-w-[600px] text-gray-100 text-left text-[27px]">
                With the Integrity SDK, allocate a portion of asset sales to decentralized wBTC collateral-powering on-chain utility based on real Bitcoin mining network data.
              </p>
            </div>

            <div className="mt-[50px]">
              <div className="w-full flex flex-col md:flex-row gap-3 pb-5">
                <div className="md:w-[15vw] flex items-left gap-[1vw]">
                  <div>
                    <img src="/assets/images/icons/onchain.svg" alt="on-chain"></img>
                  </div>
                  <div>
                    <p className="text-gray-500">NFTs with embedded utility</p>
                  </div>
                </div>
                <div className="md:w-[15vw] flex items-left gap-[1vw]">
                  <div>
                    <img src="/assets/images/icons/real_network.svg" alt="net-work"></img>
                  </div>
                  <div>
                    <p className="text-gray-500">Decentralized BTC logic</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-3 pb-5">
                <div className="md:w-[15vw] flex items-left gap-[1vw]">
                  <div>
                    <img src="/assets/images/icons/no_hardware.svg" alt="no-hardware"></img>
                  </div>
                  <div>
                    <p className="text-gray-500">No hardware required</p>
                  </div>
                </div>
                <div className="md:w-[15vw] flex items-left gap-[1vw]">
                  <div>
                    <img src="/assets/images/icons/real_time.svg" alt="real-time"></img>
                  </div>
                  <div>
                    <p className="text-gray-500">Real-time transparency**</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
