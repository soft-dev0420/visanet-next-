const AssetCard = ({ name, number, hashRate, power, btc, address, image }) => {
  return (
    <div className="bg-[#111111] rounded-2xl p-4 border border-gray-800">
      <div className="aspect-square rounded-xl bg-[#1A1A1A] mb-4 overflow-hidden">
        <img src={image} alt={`${name} #${number}`} className="w-full h-full object-cover" />
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-sm">{name}</span>
            <span className="text-gray-500">#{number}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
            <span className="text-xs text-gray-500">Active</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <img src="/hash-icon.png" alt="Hash Rate" className="w-4 h-4" />
            <span className="text-gray-400">{hashRate}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/power-icon.png" alt="Power" className="w-4 h-4" />
            <span className="text-gray-400">{power}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/bitcoin-icon.png" alt="BTC" className="w-4 h-4" />
            <span className="text-gray-400">{btc} wBTC</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/address-icon.png" alt="Address" className="w-4 h-4" />
            <span className="text-gray-400">{address}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetCard