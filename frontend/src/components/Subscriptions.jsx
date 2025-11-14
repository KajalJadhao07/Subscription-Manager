import { useState } from "react";
import Navbar from "./Navbar";
import SubscriptionCard from "./subscriptions/SubscriptionCard";
import AddSubscriptionModal from "./subscriptions/AddSubscriptionModal";

export default function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([
    {
      id: 1,
      name: "Netflix",
      category: "Entertainment",
      price: 15.99,
      billing: "monthly",
      nextBilling: "Jan 15, 2025",
      status: "active"
    },
    {
      id: 2,
      name: "Spotify",
      category: "Music",
      price: 9.99,
      billing: "monthly",
      nextBilling: "Jan 20, 2025",
      status: "active"
    },
    {
      id: 3,
      name: "Adobe Creative Cloud",
      category: "Software",
      price: 52.99,
      billing: "monthly",
      nextBilling: "Jan 10, 2025",
      status: "active"
    },
    {
      id: 4,
      name: "Amazon Prime",
      category: "Shopping",
      price: 14.99,
      billing: "monthly",
      nextBilling: "Jan 25, 2025",
      status: "active"
    },
    {
      id: 5,
      name: "GitHub Pro",
      category: "Software",
      price: 7.00,
      billing: "monthly",
      nextBilling: "Jan 18, 2025",
      status: "active"
    },
    {
      id: 6,
      name: "Apple iCloud",
      category: "Storage",
      price: 2.99,
      billing: "monthly",
      nextBilling: "Jan 22, 2025",
      status: "active"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique categories
  const categories = ["All Categories", ...new Set(subscriptions.map(sub => sub.category))];

  // Filter subscriptions
  const filteredSubscriptions = subscriptions.filter(subscription => {
    const matchesSearch = subscription.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || subscription.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddSubscription = (newSubscription) => {
    const subscription = {
      ...newSubscription,
      id: Date.now(),
      status: "active"
    };
    setSubscriptions([...subscriptions, subscription]);
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 px-6 min-h-screen bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Subscriptions</h1>
              <p className="text-gray-400">Manage all your subscriptions in one place</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Subscription
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search subscriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-w-[200px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Subscriptions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubscriptions.map((subscription) => (
              <SubscriptionCard 
                key={subscription.id}
                subscription={subscription}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredSubscriptions.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">No subscriptions found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Add Your First Subscription
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Add Subscription Modal */}
      {isModalOpen && (
        <AddSubscriptionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddSubscription}
        />
      )}
    </>
  );
}