export default function ExpenseTrends({ data }) {
  const maxAmount = 260; // Fixed max value

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      {/* Chart Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-4 h-4 bg-blue-500 rounded"></div>
        <h2 className="text-xl font-bold text-white">Expense Trends</h2>
      </div>
      <p className="text-gray-400 mb-6 text-sm">Monthly spending over the last 7 months</p>

        {/* Chart Container */}
        <div className="bg-gray-900/50 rounded-lg p-4">
          <div className="relative h-64">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 w-10">
              <span>$260</span>
              <span>$195</span>
              <span>$130</span>
              <span>$65</span>
              <span>$0</span>
            </div>

            {/* Chart area */}
            <div className="ml-12 h-full flex items-end justify-between relative">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="border-t border-gray-700"></div>
                <div className="border-t border-gray-700"></div>
                <div className="border-t border-gray-700"></div>
                <div className="border-t border-gray-700"></div>
                <div className="border-t border-gray-700"></div>
              </div>

              {/* Bars */}
              {data.map((item, index) => {
                const heightPercentage = (item.amount / maxAmount) * 100;
                return (
                  <div key={index} className="flex-1 flex flex-col items-center justify-end h-full relative group">
                    {/* Tooltip */}
                    <div className="absolute -top-8 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      ${item.amount}
                    </div>
                    
                    {/* Bar */}
                    <div 
                      className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg mb-3 transition-all duration-300 hover:from-blue-500 hover:to-blue-300"
                      style={{ height: `${heightPercentage * 0.85}%` }}
                    ></div>
                    
                    {/* Month label */}
                    <span className="text-xs text-gray-300 absolute -bottom-5">{item.month}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    </div>
  );
}