import React from "react";
import VideoCard from "../../components/Card";
import FeatureItem from "../../components/featureItem";


export default function Frame() {
  return (
    <div className="relative w-full min-h-[100vh] bg-black text-white overflow-hidden">

      <main className="w-full flex justify-center px-4 mt-[130px]">
        <div className="relative w-full max-w-[1024px] flex flex-col md:flex-row gap-[2vw]">
          {/* Left Content */}
          <div className="flex flex-col w-full md:w-[650px] items-start gap-15 z-10">
            <div className="flex flex-col items-start gap-5 w-full">
              <h1 className="text-bold text-4xl md:text-6xl text-left text-white leading-[1.1]">
                Make Any NFT Behave Like a Bitcoin Miner—Without the Hardware
              </h1>
              <p className="text-white text-left text-[20px]">
                Our protocol adds a programmable layer that emulates Bitcoin mining mechanics using real-time blockchain data—completely on-chain, trustless, and yield-free.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-start pt-4">
              <FeatureItem
                iconUrl="/assets/images/icons/onchain.svg"
                title="100% On-Chain Logic"
                alt="on-chain"
              />
              <FeatureItem
                iconUrl="/assets/images/icons/real_network.svg"
                title="Real Network Data Integration"
                alt="network"
              />
              <FeatureItem
                iconUrl="/assets/images/icons/oracle.svg"
                title="Oracle-powered Logic"
                alt="oracle-powered"
              />
              <FeatureItem
                iconUrl="/assets/images/icons/blockchain.svg"
                title="Blockchain-secured database"
                alt="blockchain-secured"
              />
              <FeatureItem
                iconUrl="/assets/images/icons/no_hardware.svg"
                title="No hardware required"
                alt="no-hardware"
              />
              <FeatureItem
                iconUrl="/assets/images/icons/real_time.svg"
                title="Real-time transparency**"
                alt="real-time"
              />
            </div>

            <div className="flex items-start gap-3 mt-[30px]">
              <button
                className="px-4 py-2 bg-white text-black text-bold rounded-full font-button font-[number:500] text-[16px]"
                data-sizes-mode="large"
              >
                Join the Waitlist {'>'}
              </button>

              <button
                className="px-4 py-2 text-white text-bold rounded-full font-button font-[number:500] text-[16px] border border-[#a3979733]"
                data-sizes-mode="large"
              >
                Try our dApp {'>'}
              </button>
            </div>
          </div>

          {/* Right Content - Card with Visual Elements */}
          <div
            className="absolute md:relative w-[477px] -top-10 right-0 md:left-auto rounded-3xl">
            <VideoCard/>
          </div>
        </div>
      </main>

      <div className="w-full flex justify-center px-4 my-[100px]">
        <div className="flex flex-col items-center gap-10 w-[1024px] relative">
          <p className="text-[18px]">Blockchain-agnostic, supporting the following networks</p>
          <div className="grid grid-cols-6 gap-y-2 text-start pt-4 justify-items-center w-[1024px]">
            <div className=" w-[125.07px] h-[60px]"><img alt="icon" className=" w-[125.07px] h-[60px]" src="/assets/images/logos/clip-path-group.svg" /></div>
            <img alt="icon" className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/logo-2.svg" />
            <div className="relative w-[125.07px] h-[60px]"><img alt="icon" className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/page.svg" /></div>
            <div className="relative w-[125.07px] h-[60px]"><img alt="icon" className="absolute w-[106px] h-[23px] top-[19px] left-[9px]" src="/assets/images/logos/polkadot-new-dot-logo-horizontal-1.svg" /></div>
            <div className="relative w-[125.07px] h-[60px]">
              <div className="relative w-[103px] h-[35px] top-[13px] left-[11px]">
                <img alt="icon"className="absolute w-[61px] h-[15px] top-[10px] left-[35px]" src="/assets/images/logos/group-2.svg" /> <img alt="icon"className="absolute w-[22px] h-[21px] top-[7px] left-[7px]" src="/assets/images/logos/vector.svg" />
              </div>
            </div>
            <img alt="icon" className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/image.svg" />
            <div className="relative w-[125.07px] h-[60px]"><img alt="icon"className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/logo-solana-2.svg" /></div>
            <div className="relative w-[125.07px] h-[60px]"><img alt="icon" className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/zksync-seeklogo.svg" /></div>
            <div className="relative w-[125.07px] h-[60px]"><img alt="icon" className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/arbitrum-arb-logo-full.svg" /></div>
            <div className="relative w-[125.07px] h-[60px]"><img alt="icon" className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/idubisfpni-1743412399080-1.svg" /></div>
            <div className="relative w-[125.07px] h-[60px]"><img alt="icon" className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/full-base-logo.svg" /></div>
            <img alt="icon"className="relative w-[125.07px] h-[60px]" src="/assets/images/logos/logo.svg" />
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
