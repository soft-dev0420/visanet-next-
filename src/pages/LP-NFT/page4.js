import React from "react";

const features = [
  { name: 'Minting website', icon: '🟢' },
  { name: 'Swap - DeX', icon: '🔄' },
  { name: 'Chainlink VRF', icon: '🔗' },
  { name: 'Smart Contract Logic', icon: '📝' },
  { name: 'NFT with wBTC collateral', icon: '🎨' },
]

const Page4 = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* How it works button */}
      <div className="flex items-center justify-center gap-2 mb-1">
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
          <img alt="green-warning" src="./assets/images/icons/nft-page3-warning.svg"/>
          <span className="text-white-400 text-[14px] font-bold">How it works?</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl text-center font-light max-w-4xl  leading-tight mb-6 ">
            Add Programmable, On-Chain Bitcoin Mining Logic to All Your NFTs Collections
          </h1>
          <p className="text-gray-400 text-lg mb-4 max-w-[585px] text-[17px] mx-auto">
            from Art and Collectibles to PFPs, Music, Tickets, and Membership NFTs.
            Drive engagement, stabilize digital asset ecosystems, and support long-term community value through verifiable, Bitcoin-based utility.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <img alt="ss" src="./assets/images/cycle.png"/>
        </div>

      </div>
    </div>
  )
}

export default Page4
