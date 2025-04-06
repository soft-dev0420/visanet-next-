import React from "react";

// Navigation menu items data

export default function Frame() {
  return (
    <div
      className="relative w-full min-h-[100vh] bg-black text-white overflow-hidden bg-no-repeat bg-bottom"
      style={{ backgroundImage: "url(/assets/images/page7-2.png)" }}
    >
      <div className="bg-repeat" style={{ backgroundImage: "url(/assets/images/page7-1.png)" }}>
        <main className="w-full flex justify-center px-4 mt-[110px]">
          <div
            className="relative w-full max-w-[1024px] flex flex-col md:flex-row gap-[8vw]"
            
          >
            {/* Left Content */}
            <div className="flex flex-col w-full md:w-[100vw] items-start gap-15 z-10">
              <div className="flex flex-col items-start gap-5 w-full">
                <div className="flex items-left gap-[1vw]">
                  <div>
                    <img src="/assets/images/icons/quote.svg" alt="axe"></img>
                  </div>
                  <div className="text-[20px]">
                    <p>Why choosing integrity?</p>
                  </div>
                </div>
                <h1 className="max-w-[100vw] text-bold text-[55px] text-left text-white leading-[1.1]">
                  Empower your community with Bitcoin-linked utility-fueling
                  transparent, <br />
                  on-chain ecosystem activity.
                </h1>
                <p className="max-w-[700px] text-white text-left text-[22px] text-gray-500">
                  When your users interact with Bitcoin-linked utility, our
                  protocol can trigger <b className="text-white">on-chain swaps into your token</b>
                  -creating transparent utility flows and strengthening your
                  token ecosystem.
                </p>
              </div>

              <div className="mt-[30px]">
                <div className="w-full md:flex-row gap-3 pb-5">
                  <div className="flex items-left gap-[1vw] py-5">
                    <div>
                      <img
                        src="/assets/images/icons/uparrow.svg"
                        alt="on-chain"
                      ></img>
                    </div>
                    <div>
                      <p className="text-gray-500">
                        Automated swap logic -{">"} Higher interaction -{">"}{" "}
                        Enhanced project sustainability
                      </p>
                    </div>
                  </div>
                  <div className="flex items-left gap-[1vw] py-5">
                    <div>
                      <img
                        src="/assets/images/icons/lighting.svg"
                        alt="net-work"
                      ></img>
                    </div>
                    <div>
                      <p className="text-gray-500">Organic ecosystem growth driven by token utility</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="text-green-400 py-[15px] text-white text-bold rounded-full font-button font-[number:500] text-[20px]">
                  Join the waiting list {">"}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
