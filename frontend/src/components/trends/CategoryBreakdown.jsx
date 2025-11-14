export default function CategoryBreakdown({ data }) {
  // Only show first 4 items - no scrolling
  const displayData = data.slice(0, 4);
  
  // Find max amount for progress bar calculation
  const maxAmount = Math.max(...displayData.map(item => item.amount));

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 h-96 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xl">💰</span>
        <h2 className="text-xl font-bold text-white">Category Breakdown</h2>
      </div>
      <p className="text-gray-400 mb-5 text-sm">Detailed view of spending by category</p>

      {/* Category List - No scrolling */}
      <div className="flex-1 space-y-4">
        {displayData.map((item, index) => (
          <div key={index}>
            {/* Category Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-white font-semibold text-sm">{item.category}</span>
              </div>
              <span className="text-white font-bold text-sm flex-shrink-0">${item.amount}</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-500 ease-out"
                style={{ 
                  backgroundColor: item.color,
                  width: `${(item.amount / maxAmount) * 100}%`
                }}
              ></div>
            </div>
            
            {/* Percentage indicator */}
            <div className="flex justify-end mt-1">
              <span className="text-xs text-gray-400">
                {((item.amount / displayData.reduce((sum, item) => sum + item.amount, 0)) * 100).toFixed(1)}% of total
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Total - Fixed at bottom */}
      <div className="mt-4 pt-4 border-t border-gray-600">
        <div className="flex items-center justify-between bg-gray-700 rounded-lg px-4 py-3">
          <span className="text-gray-300 font-semibold text-sm">Total Monthly</span>
          <span className="text-white font-bold text-base">
            ${displayData.reduce((sum, item) => sum + item.amount, 0).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}