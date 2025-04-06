import { useState } from 'react'
import Header from '../../components/Header-Page2'
import AssetCard from '../../components/AssetCard'
import ActivityItem from '../../components/ActivityItem'
import Chart from '../../components/Chart'

function App() {
  const [timeRange, setTimeRange] = useState('Today')
  const [selectedAsset, setSelectedAsset] = useState('All assets')

  const timeRanges = ['Today', 'Yesterday', 'Last 30 days', 'All time']
  
  return (
    <div className="w-full h-screen bg-[url('./assets/images/sm-background.png')] bg-cover bg-center bg-no-repeat bg-black flex justify-center">
      <div className="flex flex-col bg-black text-white max-w-[1000px] mt-[150px] overflow-hidden">
        <Header />
        
        <main className="flex-grow px-4 py-6 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Chart and Activity */}
            <div className="lg:col-span-2 space-y-8">
              {/* Mining Stats */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF9900]"></div>
                  <span className="text-sm text-gray-400">On-Chain Result WBTC</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <h1 className="text-4xl font-medium">0.02675 BTC</h1>
                  <span className="text-gray-400">≈$2,502.54*</span>
                </div>
              </div>

              {/* Time Range Selector */}
              <div className="flex space-x-6">
                {timeRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`text-sm ${
                      timeRange === range ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>

              {/* Chart */}
              <Chart />

              {/* Mining Claim */}
              <div className="bg-[#111111] rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                      <img src="/bitcoin-icon.png" alt="Bitcoin" className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg">0.0023 wBTC ≈ $200.56</div>
                      <div className="text-sm text-gray-500">Next mining output in 9 hours</div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-[#00FF85] to-[#00FF85]/0 px-6 py-2 rounded-full text-black font-medium">
                    Run Claim
                  </button>
                </div>
              </div>

              {/* Activity */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Activity</h2>
                <div className="space-y-4">
                  <ActivityItem
                    type="activated"
                    name="Bored Ape Yacht Club #1823"
                    time="3 hours ago"
                    price="$80k"
                  />
                  <ActivityItem
                    type="activated"
                    name="Doodle #296"
                    time="3 days ago"
                    price="$75k"
                  />
                  <ActivityItem
                    type="paused"
                    name="Crypto Punk #986"
                    time="3 hours ago"
                    price="$100k"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Assets */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium">Assets</h2>
                <select
                  value={selectedAsset}
                  onChange={(e) => setSelectedAsset(e.target.value)}
                  className="bg-transparent text-gray-400 text-sm border-none focus:ring-0"
                >
                  <option value="All assets">All assets</option>
                </select>
              </div>

              <div className="grid gap-4">
                <AssetCard
                  name="Bored Ape Yacht Club"
                  number="1823"
                  hashRate="234 Th/s"
                  power="4.7 kW/h"
                  btc="0.12983"
                  address="0x8474f23..45697"
                  image="/bayc-1823.png"
                />
                <AssetCard
                  name="Doodles"
                  number="296"
                  hashRate="234 Th/s"
                  power="4.7 kW/h"
                  btc="0.35097"
                  address="0x8474f23..45697"
                  image="/doodle-296.png"
                />
                {/* <AssetCard
                  name="CryptoPunks"
                  number="986"
                  hashRate="234 Th/s"
                  power="4.7 kW/h"
                  btc="0.90912"
                  address="0x8474f23..45697"
                  image="/punk-986.png"
                /> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App