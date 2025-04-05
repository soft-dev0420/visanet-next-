import React from "react";

// Navigation menu items data

export default function Frame() {
  return (
    <div className="relative w-full min-h-[100vh] bg-black text-white overflow-hidden bg-no-repeat bg-center bg-cover">
      <div className="w-full flex justify-center px-4 mt-[150px]">
        <div className="relative w-full max-w-[1024px] flex flex-col md:flex-row gap-[3vw]" >
          <div className="flex flex-col w-full md:w-[670px] items-start gap-15 z-10">
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex items-left gap-[1vw]">
                <div>
                  <img src="/assets/images/icons/user.svg" alt="axe"></img>
                </div>
                <div className="text-[20px]">
                  <p>Team and Roadmap</p>
                </div>
              </div>
              <h1 className="max-w-[600px] text-bold text-[55px] text-left text-white leading-[1.1]">
                About the project
              </h1>
              <p className="max-w-[670px] text-white text-left text-[22px]">
                Discover the vision behind our innovative NFT protocol-built by
                a dedicated team to unlock a second layer of programmable
                utility for digital collectibles through Bitcoin-linked,
                on-chain logic.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-10 mt-[170px]">
            <div className="flex items-start gap-3">
              <button class="w-12 h-12 rounded-full bg-gray-800 text-white text-xl flex items-center justify-center hover:bg-gray-700">
                &lt;
              </button>
              <button class="w-12 h-12 rounded-full bg-gray-800 text-white text-xl flex items-center justify-center hover:bg-gray-700">
                &gt;
              </button>
            </div>
            <button className="px-[15px] py-[10px] bg-white text-black text-bold rounded-full font-button font-[number:500] text-[15px]">
              Join the Waitlist {">"}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center px-4 mt-[120px]">
        <div className="relative w-full max-w-[1024px] flex flex-col md:flex-row gap-[1vw]">
          <div className="flex flex-col w-full md:w-[52px] items-start gap-15 z-10">
            <img className="h-full" src="/assets/images/timeline.png" alt="timeline"></img>
          </div>
          <div className="w-[440px]">
            <div className="text-left pb-[25px]">
              <p className="text-[grey] text-[13px]">DEC 2021</p>
              <p className="mt-[4px]">Title</p>
              <p className="text-[grey] mt-[4px] text-[15px]">Some details</p>
            </div>
            <div className="text-left pb-[25px]">
              <p className="text-[grey] text-[13px]">DEC 2021</p>
              <p className="mt-[4px]">Title</p>
              <p className="text-[grey] mt-[4px] text-[15px]">Some details</p>
            </div>
            <div className="text-left pb-[25px]">
              <p className="text-[grey] text-[13px]">DEC 2021</p>
              <p className="mt-[4px]">Title</p>
              <p className="text-[grey] mt-[4px] text-[15px]">Some details</p>
            </div>
            <div className="text-left pb-[25px]">
              <p className="text-[grey] text-[13px]">DEC 2021</p>
              <p className="mt-[4px]">Title</p>
              <p className="text-[grey] mt-[4px] text-[15px]">Some details</p>
            </div>
          </div>
          <div className="w-full flex gap-[1vw]" >
            <div class="w-[1px] h-[300px] bg-gray-800 mt-[20px]"></div>
            <div className="w-full flex flex-col md:flex-row gap-[1vm] pl-[30px]">
              <div className="w-[260px]">
                <div>
                  <img className="rounded-[30px] py-[10px]" src="/assets/images/kevin.png" alt="kevin"></img>
                </div>
                <div className="text-left">
                  <h1 className="text-[16px]">Kevin Heuzey</h1>
                  <p className="text-gray-500 text-[14px]">CEO @integrity</p>
                  <p className="text-gray-500 text-[13px] py-[5px] w-[240px]">Building Bitcoin mining farms since 2016, I'm driven by a passion for bridging traditional Bitcoin mining with the innovation of the Web3 world-creating solutions rooted in transparency, trust, and genuine value, which inspired the integrity protocol.</p>
                </div>
              </div>
              <div className="w-[260px]">
                <div>
                  <img className="rounded-[30px] py-[10px]" src="/assets/images/kevin.png" alt="kevin"></img>
                </div>
                <div className="text-left">
                  <h1 className="text-[16px]">Kevin Heuzey</h1>
                  <p className="text-gray-500 text-[14px]">CEO @integrity</p>
                  <p className="text-gray-500 text-[13px] py-[5px] w-[240px]">Building Bitcoin mining farms since 2016, I'm driven by a passion for bridging traditional Bitcoin mining with the innovation of the Web3 world-creating solutions rooted in transparency, trust, and genuine value, which inspired the integrity protocol.</p>
                </div>
              </div>
              <div className="w-[260px]">
                <div>
                  <img className="rounded-[30px] py-[10px]" src="/assets/images/kevin.png" alt="kevin"></img>
                </div>
                <div className="text-left">
                  <h1 className="text-[16px]">Kevin Heuzey</h1>
                  <p className="text-gray-500 text-[14px]">CEO @integrity</p>
                  <p className="text-gray-500 text-[13px] py-[5px] w-[240px]">Building Bitcoin mining farms since 2016, I'm driven by a passion for bridging traditional Bitcoin mining with the innovation of the Web3 world-creating solutions rooted in transparency, trust, and genuine value, which inspired the integrity protocol.</p>
                </div>
              </div>
              <div class="absolute inset-0 bg-gradient-to-l from-black/100 to-black/0 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center px-4 mt-[60px]">
        <div className="relative w-[1024px] md:flex-row gap-[1vw] bg-no-repeat border-[1px] p-[5px] border-gray-500">
          <div className="flex flex-col md:flex-row w-full flex gap-[2vw] p-[10px] border-gray-500 bg-gray-950 border-[1px]" >
            <img src="/assets/images/bottom_logo.png" alt="bottomlogo"></img>
            <div className="mt-[5px]">
              <div className="flex gap-[1vw] text-gray-500">
                <p className="text-[13px]">UNITED STATES PATENT N 1234</p>
                <img src="/assets/images/icons/verify.svg" alt="verify"></img>
              </div>
              <p className="text-left">Our core technology is secured by a proprietary, patent-pending process ensuring <br/>exclusive innovation and unique market advantage.</p>
            </div>
            <div className="mt-[15px] ml-[30px]">
              <button className="px-[20px] py-[10px] bg-gray-800 text-white text-bold rounded-full font-button font-[number:500] text-[15px]">
                See patent {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
