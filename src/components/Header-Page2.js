const Header = () => {
  return (
    <header className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/assets/images/integrity_logo.svg" alt="Integrity" className="h-6" />
          <span className="text-base">Integrity</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-gray-800 py-1 px-3">
            <img src="/assets/images/icons/ethereum.svg" alt="ethereum" className="rounded-full h-4" />
            <span className="text-sm">Testnet</span>
            <img src="/assets/images/icons/arrow down.svg" alt="arrow down" className="w-3" />
          </div>
          
          <div className="flex items-center gap-2 rounded-full border border-gray-800 pr-4">
            <span className="w-6 h-6 bg-red-400 rounded-full"></span>
            <span className="text-sm">0xDEAF...f8B8</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

