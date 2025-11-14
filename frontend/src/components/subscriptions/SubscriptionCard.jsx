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
      case 'shopping':
        return 'text-orange-400';
      case 'storage':
        return 'text-blue-400';
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
      'Adobe Creative Cloud': 'bg-purple-600',
      'Amazon Prime': 'bg-orange-600',
      'GitHub Pro': 'bg-gray-800',
      'Apple iCloud': 'bg-blue-600'
    };
    
    return (
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-semibold text-lg ${colors[name] || 'bg-gray-600'}`}>
        {firstLetter}
      </div>
    );
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
      {/* Header with Service Icon and Options */}
      <div className="flex items-center justify-between mb-4">
        {getServiceIcon(name)}
        <button className="text-gray-400 hover:text-gray-300 p-1 rounded">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>

      {/* Service Name */}
      <h3 className="text-white font-semibold text-xl mb-1">{name}</h3>
      
      {/* Category */}
      <p className={`text-sm mb-4 ${getCategoryColor(category)}`}>{category}</p>

      {/* Price */}
      <div className="flex items-center mb-4">
        <span className="text-white text-2xl font-bold">
          ${price}
        </span>
        <span className="text-gray-400 text-sm ml-1">/ {billing}</span>
      </div>

      {/* Next Billing */}
      <div className="flex items-center text-sm mb-4">
        <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-gray-400">Next billing: {nextBilling}</span>
      </div>

      {/* Status and Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2 ${status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className={`text-xs font-medium ${status === 'active' ? 'text-green-400' : 'text-red-400'}`}>
            {status}
          </span>
        </div>
        <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm px-3 py-1 rounded-md transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          View Details
        </button>
      </div>
    </div>
  );
}