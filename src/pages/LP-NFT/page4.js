import React from "react";

const Page4 = () => {
  return (
    <div className="bg-[#111113] text-white relative py-[50px] md:py-[200px] px-5">
      {/* How it works button */}
      <div className="flex items-start md:justify-center gap-2 mb-1">
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
          <img alt="green-warning" src="./assets/images/icons/pickaxe.svg"/>
          <span className="text-white-400 text-[14px] font-bold">How it works?</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto md:px-4 pt-4">
        <div className="max-w-4xl mx-auto text-left md:text-center">
          <h1 className="text-3xl md:text-6xl font-light max-w-4xl  leading-tight mb-5 ">
            Add Programmable, On-Chain Bitcoin Mining Logic to All Your NFTs Collections
          </h1>
          <p className="text-gray-400 mb-4 max-w-[585px] text-[16px] md:text-lg mx-auto">
            from Art and Collectibles to PFPs, Music, Tickets, and Membership NFTs.
            Drive engagement, stabilize digital asset ecosystems, and support long-term community value through verifiable, Bitcoin-based utility.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="hidden md:flex flex-wrap justify-center gap-4">
          <img alt="ss" src="./assets/images/cycle.png"/>
        </div>
        <div className="md:hidden flex-wrap justify-center gap-4">
          <img alt="ss" src="./assets/images/cycle_horizontal.png"/>
        </div>

      </div>
    </div>
  )
}

export default Page4
