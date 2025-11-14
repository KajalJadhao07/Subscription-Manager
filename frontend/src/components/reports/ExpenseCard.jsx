export default function ExpenseCard({ 
  title, 
  period, 
  amount, 
  change, 
  isPositive, 
  subtitle,
  showProgressBar = false 
}) {
  const formatAmount = (amount) => {
    return `$${amount.toLocaleString()}`;
  };

  const getChangeColor = (isPositive) => {
    return isPositive ? 'text-green-400' : 'text-red-400';
  };

  const getChangeIcon = (isPositive) => {
    return isPositive ? (
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ) : (
      <svg className="w-4 h-4 mr-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    );
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className={`flex items-center ${getChangeColor(isPositive)}`}>
          {getChangeIcon(isPositive)}
        </div>
      </div>

      {/* Period (for quarterly cards) */}
      {period && (
        <p className="text-sm text-gray-400 mb-2">{period}</p>
      )}

      {/* Amount */}
      <div className="mb-2">
        <span className="text-2xl font-bold text-white">
          {formatAmount(amount)}
        </span>
      </div>

      {/* Progress Bar (for quarterly cards) */}
      {showProgressBar && (
        <div className="w-full bg-gray-700 rounded-full h-1 mb-2">
          <div 
            className="bg-blue-500 h-1 rounded-full" 
            style={{ width: `${Math.min((amount / 800) * 100, 100)}%` }}
          ></div>
        </div>
      )}

      {/* Change Percentage */}
      <div className={`flex items-center text-sm ${getChangeColor(isPositive)}`}>
        <span>
          {isPositive ? '-' : '+'}{Math.abs(change)}% {subtitle}
        </span>
      </div>
    </div>
  );
}