export default function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  iconColor = "text-blue-500", 
  iconBg = "bg-blue-500/10",
  change,
  isNegative = false 
}) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
      {/* Icon */}
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-lg ${iconBg}`}>
          <div className={iconColor}>
            {icon}
          </div>
        </div>
        {change !== undefined && (
          <div className="flex items-center text-sm">
            <svg 
              className={`w-4 h-4 mr-1 ${isNegative ? 'text-red-400 rotate-180' : 'text-green-400'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className={isNegative ? 'text-red-400' : 'text-green-400'}>
              {Math.abs(change)}%
            </span>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
      
      {/* Value */}
      <p className="text-white text-2xl font-bold mb-1">{value}</p>
      
      {/* Subtitle */}
      <p className={`text-sm ${change !== undefined ? 
        (isNegative ? 'text-red-400' : 'text-green-400') : 
        'text-gray-400'
      }`}>
        {subtitle}
      </p>
    </div>
  );
}