import React from "react";

const Page4 = () => {
  return (
    <div className=" bg-black text-white relative">
      {/* How it works button */}
      <div className="flex items-center justify-center gap-2 mb-1">
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
          <img alt="green-warning" src="./assets/images/icons/pickaxe.svg"/>
          <span className="text-white-400 text-[17px]">How it works?</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl text-center font-light max-w-4xl  leading-tight mb-6 ">
            Add Programmable, On-<br/>Chain Bitcoin Mining Logic to <br/>All Your NFTs Collections
          </h1>
          <p className="text-gray-400 text-lg mb-4 max-w-[650px] text-[17px] mx-auto">
            from Art and Collectibles to PFPs, Music, Tickets, and Membership NFTs.<br/>
            Drive engagement, stabilize digital asset ecosystems, and support long-term <br/>community value through verifiable, Bitcoin-based utility.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-4">
          <img alt="ss" src="./assets/images/cycle.png"/>
        </div>

      </div>
    </div>
  )
}

export default Page4
