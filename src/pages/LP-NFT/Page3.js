import React from "react";

const challenges = [
  {
    id: 1,
    title: 'Volatile Floor Prices',
    description: 'Maintaining stable NFT floor prices is challenging during market downturns. Integrity enables NFTs to include Bitcoin-linked utility through verifiable on-chain collateral—creating transparent value beyond speculation.',
    icon: 'nft-page3-item1.svg',
    gradient: 'from-[#052e16] via-[#111113] to-[#111113]'
  },
  {
    id: 2,
    title: 'Weak Long-term Engagement',
    description: 'NFT projects often struggle with post-launch engagement. Integrity introduces Bitcoin-linked utility that encourages ongoing interaction and supports long-term community value.',
    icon: 'nft-page3-item2.svg',
    gradient: 'from-[#171717] via-[#111113] to-[#111113]'
  },
  {
    id: 3,
    title: 'Limited Intrinsic Value',
    description: 'Most NFTs lack verifiable backing, creating uncertainty. Integrity enables NFTs to hold Bitcoin-linked on-chain collateral—adding transparent utility and increasing user trust.',
    icon: 'nft-page3-item3.svg',
    gradient: 'from-[#171717] via-[#111113] to-[#111113]'
  }
]

const Page3 = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 md:pt-[120px] pt-20 max-w-[1024px]">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img alt="green-warning" src="./assets/images/icons/nft-page3-warning.svg"/>
          <span className="text-white-400 text-[14px] font-bold">Challenge</span>
        </div>

        <h1 className="text-center font-light mx-auto max-w-4xl text-4xl/10 md:text-6xl pb-10 md:pb-[120px]">
          Because sustaining NFT value
          and engagement is challenging
        </h1>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl justify-center mx-auto">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`bg-gradient-to-br ${challenge.gradient} rounded-3xl max-w-[330px] p-8 backdrop-blur-lg flex flex-col justify-between`}
            >
              <div className="bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center mb-12">
                <img className="text-2xl" alt="item1" src={`./assets/images/icons/${challenge.icon}`}/>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-light mb-1 text-start">{challenge.title}</h3>
                <p className="text-gray-400 leading-relaxed text-start text-[14px]">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page3;
