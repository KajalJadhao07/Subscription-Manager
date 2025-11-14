import SubscriptionCard from './SubscriptionCard';

export default function UpcomingRenewals({ subscriptions }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Upcoming Renewals</h2>
        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
          View All
        </button>
      </div>

      {/* Subscriptions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subscriptions.map((subscription) => (
          <SubscriptionCard 
            key={subscription.id}
            subscription={subscription}
          />
        ))}
      </div>
    </div>
  );
}