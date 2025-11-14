export default function SpendingByCategory({ data }) {
  const total = data.reduce((sum, item) => sum + item.amount, 0);
  const radius = 80;
  const centerX = 120;
  const centerY = 120;

  // Calculate cumulative percentages and create pie slices
  let cumulativePercentage = 0;
  const slices = data.map((item) => {
    const startAngle = (cumulativePercentage / 100) * 360;
    cumulativePercentage += item.percentage;
    const endAngle = (cumulativePercentage / 100) * 360;

    // Convert angles to radians
    const startAngleRad = (startAngle - 90) * (Math.PI / 180);
    const endAngleRad = (endAngle - 90) * (Math.PI / 180);

    // Calculate arc endpoints
    const startX = centerX + radius * Math.cos(startAngleRad);
    const startY = centerY + radius * Math.sin(startAngleRad);
    const endX = centerX + radius * Math.cos(endAngleRad);
    const endY = centerY + radius * Math.sin(endAngleRad);

    // Large arc flag
    const largeArcFlag = item.percentage > 50 ? 1 : 0;

    // Create path
    const pathData = [
      `M ${centerX} ${centerY}`,
      `L ${startX} ${startY}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      'Z'
    ].join(' ');

    return {
      ...item,
      pathData,
      startAngle,
      endAngle
    };
  });

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 h-96">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xl">📊</span>
        <h2 className="text-xl font-bold text-white">Spending by Category</h2>
      </div>
      <p className="text-gray-400 mb-6 text-sm">Distribution of your subscription costs</p>

      <div className="flex items-center justify-center h-64">
        {/* SVG Pie Chart with external labels */}
        <div className="relative">
          <svg width="280" height="280" viewBox="0 0 280 280" className="overflow-visible">
            {/* Pie slices */}
            {slices.map((slice, index) => (
              <path
                key={index}
                d={slice.pathData}
                fill={slice.color}
                stroke="#1f2937"
                strokeWidth="1"
              />
            ))}
            
            {/* External labels */}
            {slices.map((slice, index) => {
              const midAngle = (slice.startAngle + slice.endAngle) / 2;
              const labelRadius = 110; // Distance from center for labels
              const labelAngleRad = (midAngle - 90) * (Math.PI / 180);
              const labelX = 140 + labelRadius * Math.cos(labelAngleRad);
              const labelY = 140 + labelRadius * Math.sin(labelAngleRad);
              
              return (
                <text
                  key={`label-${index}`}
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white text-sm font-semibold"
                  style={{ fontSize: '14px' }}
                >
                  {slice.category} {slice.percentage}%
                </text>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Legend at bottom */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-gray-300 text-sm">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}