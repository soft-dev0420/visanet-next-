const ActivityItem = ({ type, name, time, price }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-800">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          type === 'activated' ? 'bg-green-400/10' : 'bg-red-400/10'
        }`}>
          {type === 'activated' ? (
            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <div>
          <div className="text-sm">{name} {type === 'activated' ? 'activated' : 'paused'}</div>
          <div className="text-sm text-gray-500">after BTC price hit {price}</div>
        </div>
      </div>
      <span className="text-sm text-gray-500">{time}</span>
    </div>
  )
}

export default ActivityItem