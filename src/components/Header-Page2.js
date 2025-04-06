const Header = () => {
  return (
    <header className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Integrity" className="h-6" />
          <span className="text-xl font-medium">Integrity</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-sm">Testnet</span>
          </div>
          
          <div className="flex items-center gap-2">
            <img src="/avatar.png" alt="User" className="w-6 h-6 rounded-full" />
            <span className="text-sm text-gray-400">0xDEAF..f8BB</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header