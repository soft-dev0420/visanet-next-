import React from "react";

const networks = [
  { name: 'Solana', logo: '/images/solana.svg' },
  { name: 'Atom', logo: '/images/atom.svg' },
  { name: 'Cosmos', logo: '/images/cosmos.svg' },
  { name: 'Polkadot', logo: '/images/polkadot.svg' },
  { name: 'Near', logo: '/images/near.svg' },
  { name: 'Polygon', logo: '/images/polygon.svg' },
  { name: 'Avalanche', logo: '/images/avalanche.svg' },
  { name: 'zkSync', logo: '/images/zksync.svg' },
  { name: 'Arbitrum', logo: '/images/arbitrum.svg' },
  { name: 'Optimism', logo: '/images/optimism.svg' },
  { name: 'Base', logo: '/images/base.svg' },
  { name: 'BNB Chain', logo: '/images/bnb.svg' },
]

const Page2 = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl mb-12">
          Blockchain-agnostic, supporting the following networks
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {networks.map((network) => (
            <div 
              key={network.name}
              className="flex items-center justify-center p-4 hover:opacity-80 transition-opacity"
            >
              <img
                src={network.logo}
                alt={`${network.name} logo`}
                className="h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page2;
