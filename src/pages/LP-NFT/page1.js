import React from "react";

import { Card } from "../../components/ui/Card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

// Navigation menu items data
const navItems = ["NFTs", "Gaming Assets", "Metaverse", "Team"];

export default function Frame() {
  return (
    <div className="relative w-full min-h-[100vh] bg-black text-white overflow-hidden">
      <header className="flex justify-center w-full py-5 px-2 border-b border-[#ffffff33]">
        <div className="flex w-full max-w-[1250px] items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-[5.25px]">
              <div className="w-7 h-7 relative">
                <img src="/assets/images/integrity_logo.svg" alt="Logo" className="w-full h-full scale-[1.2]" />
              </div>
              <div className="flex items-center justify-center py-[5.25px]">
                <span className="font-semibold text-[24px]">
                  Integrity
                </span>
              </div>
            </div>

            {/* Navigation */}
            <NavigationMenu>
              <NavigationMenuList className="flex gap-[2vw]">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink className="inline-flex h-2 items-center justify-center px-[1] text-white text-[length:var(--button-font-size)]">
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Documentation Button */}
          <button
            className="border-2 py-1 px-3 bg-[#00000012] rounded-[100px] border-[#ffffff33] text-white"
          >
            Documentation
          </button>
        </div>
      </header>

      <main className="w-full flex justify-center px-4 mt-[130px]">
        <div className="relative w-full max-w-[1300px] flex flex-col md:flex-row gap-[8vw]">
          {/* Left Content */}
          <div className="flex flex-col w-full md:w-[653px] items-start gap-15 z-10">
            <div className="flex flex-col items-start gap-5 w-full">
              <h1 className="max-w-[600px] text-bold text-[67px] text-left text-white leading-[1.1]">
                Boost Your NFT Collections with <br/>On-Chain Bitcoin- Linked Mining Logic
              </h1>
              <p className="max-w-[600px] text-white text-left text-[25px]">
                Bring programmable Bitcoin-linked logic to your NFTs through a fully on-chain, hardware-free protocol-automated, trustless, and built for Web3 creators.
              </p>
            </div>

            <div className="mt-[60px]">
              <div className="w-full flex flex-col md:flex-row gap-3 pb-5">
                <div className="md:w-[15vw] flex items-left gap-[1vw]">
                  <div>
                    <img src="/assets/images/icons/onchain.svg" alt="on-chain"></img>
                  </div>
                  <div>
                    <p>100% On-Chain Logic</p>
                  </div>
                </div>
                <div className="md:w-[15vw] flex items-left gap-[1vw]">
                  <div>
                    <img src="/assets/images/icons/real_network.svg" alt="net-work"></img>
                  </div>
                  <div>
                    <p>Real Network Data Integration</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-3 pb-5">
                <div className="md:w-[15vw] flex items-left gap-[1vw]">
                  <div>
                    <img src="/assets/images/icons/oracle.svg" alt="oracle-powered"></img>
                  </div>
                  <div>
                    <p>Oracle-powered Logic</p>
                  </div>
                </div>
                <div className="md:w-[15vw] flex items-left gap-[1vw]">
                  <div>
                    <img src="/assets/images/icons/blockchain.svg" alt="blockchain-secured"></img>
                  </div>
                  <div>
                    <p>Blockchain-secured database</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-3 pb-5">
                <div className="md:w-[15vw] flex items-left gap-[1vw]">
                  <div>
                    <img src="/assets/images/icons/no_hardware.svg" alt="no-hardware"></img>
                  </div>
                  <div>
                    <p>No hardware required</p>
                  </div>
                </div>
                <div className="md:w-[15vw] flex items-left gap-[1vw]">
                  <div>
                    <img src="/assets/images/icons/real_time.svg" alt="real-time"></img>
                  </div>
                  <div>
                    <p>Real-time transparency**</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-[30px]">
              <button
                className="px-[30px] py-[15px] bg-white text-black text-bold rounded-full font-button font-[number:500] text-[20px]"
                data-sizes-mode="large"
              >
                Join the Waitlist {'>'}
              </button>

              <button
                className="px-[30px] py-[15px] text-white text-bold rounded-full font-button font-[number:500] text-[20px]"
                data-sizes-mode="large"
              >
                Try our dApp {'>'}
              </button>
            </div>
          </div>

          {/* Right Content - Card with Visual Elements */}
          <Card className="absolute md:relative w-[600px] h-[550px] -top-10 right-0 md:left-auto rounded-3xl border border-solid border-[#111112] [background:linear-gradient(319deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_100%),linear-gradient(0deg,rgba(17,17,19,1)_0%,rgba(17,17,19,1)_100%)] bg-[color:var(--theme-colors-neutral-soft)]" />
        </div>
      </main>
      <div className="w-full flex justify-center px-4 my-[100px]">
        <div className="flex flex-col items-center gap-10 w-[1300px] relative">
          <p className="text-[22px]">Blockchain-agnostic, supporting the following networks</p>
          <div className="flex flex-col items-start gap-5 w-full flex-none relative self-stretch">
            <div className="flex items-center justify-between w-full flex-none relative self-stretch">
              <div className="relative w-[125.07px] h-[27.04px]"><img alt="icon"className="absolute w-[123px] h-[18px] top-[5px] left-[2px]" src="/assets/images/logos/clip-path-group.svg" /></div>
              <img alt="icon"className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/logo-2.svg" />
              <div className="relative w-[125.07px] h-[60px]"><img alt="icon" className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/page.svg" /></div>
              <div className="relative w-[125.07px] h-[60px]"><img alt="icon"className="absolute w-[106px] h-[23px] top-[19px] left-[9px]" src="/assets/images/logos/polkadot-new-dot-logo-horizontal-1.svg" /></div>
              <div className="relative w-[125.07px] h-[60px]">
                <div className="relative w-[103px] h-[35px] top-[13px] left-[11px]">
                  <img alt="icon"className="absolute w-[61px] h-[15px] top-[10px] left-[35px]" src="/assets/images/logos/group-2.svg" /> <img alt="icon"className="absolute w-[22px] h-[21px] top-[7px] left-[7px]" src="/assets/images/logos/vector.svg" />
                </div>
              </div>
              <img alt="icon"className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/image.svg" />
            </div>
            <div className="flex items-center justify-between w-full flex-none relative self-stretch">
              <div className="relative w-[125.07px] h-[60px]"><img alt="icon"className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/logo-solana-2.svg" /></div>
              <div className="relative w-[125.07px] h-[60px]"><img alt="icon"className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/zksync-seeklogo.svg" /></div>
              <div className="relative w-[125.07px] h-[60px]"><img alt="icon"className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/arbitrum-arb-logo-full.svg" /></div>
              <div className="relative w-[125.07px] h-[60px]"><img alt="icon"className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/idubisfpni-1743412399080-1.svg" /></div>
              <div className="relative w-[125.07px] h-[60px]"><img alt="icon"className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/full-base-logo.svg" /></div>
              <img alt="icon"className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/logo.svg" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute top-[5vh] left-[63vw] rotate-[13.84deg] w-[190px] h-[120px] bg-[#d9d9d9] rounded-[95px/60px] scale-[1.3]" />
      <img
        className="absolute w-[394px] h-[218px] top-[432px] left-[901px] z-0"
        alt="Rectangle"
        src=""
      />
      <div className="absolute top-[352px] left-[63vw] w-[190px] h-[120px] bg-[#d9d9d9] rounded-[95px/60px] z-0 scale-[1.3]" />
      <div className="absolute top-[197px] left-[63vw] rotate-[-25.07deg] w-[190px] h-[120px] bg-[#d9d9d9] rounded-[95px/60px] z-0" /> */}
      {/* <img
        className="absolute w-[170px] h-[78px] top-[552px] left-[754px] z-0"
        alt="Vector1"
        src=""
      />
      <img
        className="absolute w-[117px] h-[71px] top-[584px] left-[867px] z-0"
        alt="Vector2"
        src=""
      />
      <img
        className="absolute w-[238px] h-[38px] top-[445px] left-[1213px] z-0"
        alt="Vector3"
        src=""
      />
      <img
        className="absolute w-[162px] h-8 top-[491px] left-[1293px] z-0"
        alt="Vector4"
        src=""
      />
      <img
        className="absolute w-[82px] h-[90px] top-[316px] left-[862px] z-0"
        alt="Vector5"
        src=""
      />
      <img
        className="absolute w-[172px] h-[47px] top-[588px] left-[1273px] z-0"
        alt="Vector6"
        src=""
      /> */}
    </div>
  );
}
