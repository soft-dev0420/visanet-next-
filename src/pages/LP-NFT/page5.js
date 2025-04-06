
import React, { useEffect, useState } from "react";
import FeatureItem from "../../components/featureItem";

// Navigation menu items data

export default function Frame() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);

    checkWidth(); // initial check
    window.addEventListener('resize', checkWidth);

    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div className="relative w-full min-h-[100vh] bg-black text-white overflow-hidden bg-no-repeat bg-center bg-cover" 
    style={{backgroundImage: "url(/assets/images/page5.png)", backgroundPosition: "72% center"}}>

      <main className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-20 my-[100px]">
        <div className="relative w-full max-w-[1024px] flex flex-col md:flex-row gap-[8vw]">
           <div className="flex flex-col w-full md:w-[653px] gap-15 z-10">
            <div className="flex flex-col items-start gap-2 md:gap-3 w-full">
              <div className="flex items-left gap-[1vw]">
                <div>
                  <img src="/assets/images/icons/pickaxe.svg" alt="axe" className="w-4 h-4 md:w-5 md:h-5"/>
                </div>
                <div className="text-[16px]/5 md:text-[20px]/5">
                  {isMobile
                    ? 'Sybthetic Mining'
                    : 'Bitcoin-Powered On-Chain Utility Layer'
                  }
                </div>
              </div>
              <h1 className="max-w-[600px] text-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[55px] text-left text-white leading-[1.1] py-4">
                Embed On-Chain, Bitcoin-Linked Utility into Your NFT Collections
              </h1>
              <p className="max-w-[600px] text-white text-left text-[15px] sm:text-[16px] md:text-[20px] lg:text-[22px]">
                With the Integrity SDK,
                <span className="text-gray-600"> easily allocate a portion of asset sales to decentralized wBTC collateral-activating transparent, on-chain utility linked to Bitcoin mining market  performance.</span>
              </p>
            </div>

            <div className="my-4 grid grid-cols-2 gap-x-3">
                <FeatureItem
                  iconUrl="/assets/images/icons/onchain.svg"
                  title="NFTs with embedded utility"
                  textColor='text-gray-500'
                  alt="tag"
                />
                <FeatureItem
                  iconUrl="/assets/images/icons/real_network.svg"
                  title="Decentralized BTC logic"
                  textColor='text-gray-500'
                  alt="network"
                />
                <FeatureItem
                  iconUrl="/assets/images/icons/no_hardware.svg"
                  title="No hardware required"
                  textColor='text-gray-500'
                  alt="no hardware"
                />
                <FeatureItem
                  iconUrl="/assets/images/icons/real_time.svg"
                  title="Real-time transparency**"
                  textColor='text-gray-500'
                  alt="real-time"
                />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
