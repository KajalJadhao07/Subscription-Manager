export default function SubscriptionCard({ subscription }) {
  const { name, category, price, billing, nextBilling, status } = subscription;
  
  // Get category color
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'entertainment':
        return 'text-red-400';
      case 'music':
        return 'text-green-400';
      case 'software':
        return 'text-purple-400';
      default:
        return 'text-gray-400';
    }
  };

  // Get service icon/initial
  const getServiceIcon = (name) => {
    const firstLetter = name.charAt(0).toUpperCase();
    const colors = {
      'Netflix': 'bg-red-600',
      'Spotify': 'bg-green-600', 
      'Adobe Creative Cloud': 'bg-purple-600'
    };
    
    return (
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold text-sm ${colors[name] || 'bg-gray-600'}`}>
        {firstLetter}
      </div>
    );
  };

  return (
    <div className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-colors">
      {/* Header with Service Icon and Options */}
      <div className="flex items-center justify-between mb-3">
        {getServiceIcon(name)}
        <button className="text-gray-400 hover:text-gray-300 p-1 rounded">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>

      {/* Service Name */}
      <h3 className="text-white font-semibold text-lg mb-1">{name}</h3>
      
      {/* Category */}
      <p className={`text-sm mb-3 ${getCategoryColor(category)}`}>{category}</p>

      {/* Price */}
      <div className="flex items-center mb-2">
        <span className="text-white text-lg font-bold">
          ${price}
        </span>
        <span className="text-gray-400 text-sm ml-1">/ {billing}</span>
      </div>

      {/* Next Billing */}
      <div className="flex items-center text-sm">
        <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-gray-400">Next billing: {nextBilling}</span>
      </div>

      {/* Status Indicator */}
      <div className="flex items-center mt-3">
        <div className={`w-2 h-2 rounded-full mr-2 ${status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className={`text-xs font-medium ${status === 'active' ? 'text-green-400' : 'text-red-400'}`}>
          {status}
        </span>
      </div>
    </div>
  );
}