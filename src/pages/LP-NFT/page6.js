import React from "react";
import FeatureItem from "../../components/featureItem";
import bgImage1 from '../../assets/images/card-background-1.png';
import bgImage2 from '../../assets/images/card-background.png';

function NFTCard1() {
  return (
    <div 
      className="relative bg-no-repeat bg-cover bg-center h-[600px] w-[472px] rounded-3xl border flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage1})` }}
    >
        <div className="absolute bg-zinc-800 rounded-2xl aspect-square flex items-center justify-center">
          <img
            src="./assets/images/Card miner new.png"
            alt="NFT Preview"
            className="rounded-2xl grayscale"
          />
        </div>
    </div>
  );
}

function NFTCard2() {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center h-[600px] w-[472px] rounded-3xl border flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage2})` }}
    >
        {/* <div className="bg-zinc-800 rounded-2xl aspect-square flex items-center justify-center">
          <img
            src="./assets/images/Rectangle 2540.png"
            alt="NFT Preview"
            className="rounded-2xl grayscale"
          />
        </div> */}
    </div>
  );
}

function FeatureItemTemp({ icon: Icon, title }) {
  return (
    <div className="flex items-start align-center gap-x-1 text-sm">
        <Icon size={16} />
        <p className="text-zinc-400">{title}</p>
    </div>
  );
}

const Page5 = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="mx-auto space-y-32 max-w-[1024px] mb-[100px]">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <NFTCard1 />
          <div className="space-y-1 w-[477px]">
            <div className="flex items-center gap-2 py-2 text-zinc-400 text-sm">
              <img alt="pick axe" src="./assets/images/icons/pickaxe.svg" className="animate-pulse"/>
              Emulated mining output
            </div>
            <div>
              <h1 className="text-4xl text-[42px] leading-normal text-start">
                Transparent, On-Chain Mechanics Driven by Verified Bitcoin Mining Data
              </h1>
              <p className="text-zinc-400 text-[22px] text-start leading-normal">
                Each NFT includes programmable mining parameters and wBTC collateral, enabling on-chain logic that tracks 24/7 real Bitcoin mining conditions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-1 gap-y-1 text-start pt-4">
              <FeatureItem
                iconUrl="/assets/images/icons/oracle.svg"
                title="Oracle-powered logic"
              />
              <FeatureItem
                iconUrl="/assets/images/icons/claimable.svg"
                title="Daily claimable wBTC-based logic"
              />
              <FeatureItem
                iconUrl="/assets/images/icons/userclaim.svg"
                title="Instant user claims"
              />
              <FeatureItem
                iconUrl="/assets/images/icons/middleman.svg"
                title="No middlemen"
              />
              <FeatureItem
                iconUrl="/assets/images/icons/real_network.svg"
                title="Fully decentralized"
              />
              <FeatureItem
                iconUrl="/assets/images/icons/real_network.svg"
                title="Outputs you control"
              />
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-1 w-[477px]">
            <div className="flex items-center gap-2 py-2 text-zinc-400 text-sm">
              <img alt="pick axe" src="./assets/images/icons/eye.svg" className="animate-pulse"/>
              Transparency
            </div>
            <div className="space-y-4 text-start">
              <h1 className="text-4xl text-[42px] leading-normal text-start">
                Fully Transparent & Verifiable On-Chain
              </h1>
              <p className="text-zinc-400 text-[22px] text-start leading-normal">
                Integrity Protocol ensures complete transparency and auditability. Every calculation, output, and collateral assignment is verifiable on-chain through decentralized oracles, ensuring trust and transparency for your community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-start pt-4">
              <FeatureItem
                iconUrl="/assets/images/icons/present.svg"
                title="Transparent reward tracking"
              />
              <FeatureItem
                iconUrl="/assets/images/icons/chat.svg"
                title="Auditable on-chain data"
              />
              <FeatureItem
                iconUrl="/assets/images/icons/oracle.svg"
                title="Decentralized oracle verification"
              />
              <FeatureItem
                iconUrl="/assets/images/icons/secure.svg"
                title="Tamper-proof, blockchain-secured database"
              />
            </div>
          </div>
          <div className="relative">
            <NFTCard2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page5
