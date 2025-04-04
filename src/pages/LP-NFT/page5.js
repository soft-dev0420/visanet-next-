import React from "react";
import { Shield, Zap, Users, Lock, Database } from 'lucide-react';
import bgImage from '../../assets/images/card-background-1.png';

function NFTCard() {
  return (
    <div className="relative bg-no-repeat bg-cover bg-center h-[600px] w-[472px] rounded-3xl border" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-transparent rounded-3xl blur-xl"></div>
        {/* <div className="bg-zinc-800 rounded-2xl aspect-square flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1614792446525-5392891c3140?auto=format&fit=crop&q=80&w=400&h=400"
            alt="NFT Preview"
            className="rounded-2xl grayscale"
          />
        </div> */}
    </div>
  );
}

function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <div className="mt-1 text-green-400">
        <Icon size={16} />
      </div>
      <div className="space-y-1">
        <div className="text-zinc-400">{title}</div>
        <div className="text-zinc-600">{description}</div>
      </div>
    </div>
  );
}

const Page5 = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="mx-auto space-y-32 max-w-[1024px]">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <NFTCard />
          <div className="space-y-8 ">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-zinc-400 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              Emulated mining output
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">
                Transparent, On-Chain Mechanics Driven by Verified Bitcoin Mining Data
              </h1>
              <p className="text-zinc-400">
                Each NFT includes programmable mining parameters and wBTC collateral, enabling on-chain logic that tracks 24/7 real Bitcoin mining conditions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <FeatureItem
                icon={Database}
                title="Oracle-powered logic"
                description="Real-time data feeds from verified sources"
              />
              <FeatureItem
                icon={Lock}
                title="Daily claimable wBTC-based logic"
                description="Automated rewards distribution"
              />
              <FeatureItem
                icon={Zap}
                title="Instant user claims"
                description="No waiting periods for withdrawals"
              />
              <FeatureItem
                icon={Users}
                title="No middlemen"
                description="Direct interaction with smart contracts"
              />
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-zinc-400 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              Transparency
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                Fully Transparent & Verifiable On-Chain
              </h2>
              <p className="text-zinc-400">
                Integrity Protocol ensures complete transparency and auditability. Every calculation, output, and collateral assignment is verifiable on-chain through decentralized oracles, ensuring trust and transparency for your community.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <FeatureItem
                icon={Database}
                title="Transparent reward tracking"
                description="Real-time monitoring of all distributions"
              />
              <FeatureItem
                icon={Shield}
                title="Decentralized oracle verification"
                description="Multiple independent data sources"
              />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative aspect-square bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=472&h=600')] bg-cover bg-center rounded-3xl border border-zinc-800/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page5
