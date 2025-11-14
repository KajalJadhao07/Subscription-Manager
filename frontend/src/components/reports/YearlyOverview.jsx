export default function YearlyOverview({ data }) {
  const { annualTotal, annualChange, averageMonthly, highestMonth } = data;

  return (
    <div className="mb-6">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-white mb-2">Yearly Overview</h2>
      </div>

      {/* Yearly Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Annual Total */}
        <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">Annual Total</h3>
          <div className="mb-3">
            <span className="text-3xl font-bold text-blue-400">
              ${annualTotal.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center text-sm">
            <svg className={`w-4 h-4 mr-1 ${annualChange >= 0 ? 'text-red-400' : 'text-green-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={annualChange >= 0 ? "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" : "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"} />
            </svg>
            <span className={`${annualChange >= 0 ? 'text-red-400' : 'text-green-400'}`}>
              +{Math.abs(annualChange)}% from last year
            </span>
          </div>
        </div>

        {/* Average Monthly */}
        <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">Average Monthly</h3>
          <div className="mb-3">
            <span className="text-3xl font-bold text-white">
              ${averageMonthly}
            </span>
          </div>
          <p className="text-sm text-gray-400">Per month in 2024</p>
        </div>

        {/* Highest Month */}
        <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">Highest Month</h3>
          <div className="mb-3">
            <span className="text-3xl font-bold text-white">
              ${highestMonth.amount}
            </span>
          </div>
          <p className="text-sm text-gray-400">{highestMonth.month}</p>
        </div>
      </div>
    </div>
  );
}