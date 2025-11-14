import { useState } from "react";
import Navbar from "./Navbar";
import ExpenseTrends from "./trends/ExpenseTrends";
import SpendingByCategory from "./trends/SpendingByCategory";
import CategoryBreakdown from "./trends/CategoryBreakdown";

export default function MonthlyTrends() {
  // Sample data - in a real app, this would come from an API
  const [trendsData, setTrendsData] = useState({
    expenseTrends: [
      { month: "Jul", amount: 231.89 },
      { month: "Aug", amount: 237.35 },
      { month: "Sep", amount: 241.00 },
      { month: "Oct", amount: 233.75 },
      { month: "Nov", amount: 243.89 },
      { month: "Dec", amount: 237.91 },
      { month: "Jan", amount: 245.50 }
    ],
    categorySpending: [
      { category: "Software", amount: 89.98, percentage: 37, color: "#8B5CF6" },
      { category: "Entertainment", amount: 45.98, percentage: 19, color: "#3B82F6" },
      { category: "Shopping", amount: 44.97, percentage: 18, color: "#10B981" },
      { category: "Other", amount: 34.01, percentage: 14, color: "#6B7280" },
      { category: "Music", amount: 19.98, percentage: 8, color: "#F59E0B" },
      { category: "Storage", amount: 8.97, percentage: 4, color: "#F97316" }
    ]
  });

  return (
    <>
      <Navbar />
      <main className="pt-16 px-6 min-h-screen bg-gray-900 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-3">Monthly Trends</h1>
            <p className="text-gray-400 text-base">Visualize your subscription spending patterns over time</p>
          </div>

          {/* Expense Trends Chart - Full Width */}
          <div className="mb-8">
            <ExpenseTrends data={trendsData.expenseTrends} />
          </div>

          {/* Category Analytics - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Spending by Category - Pie Chart */}
            <SpendingByCategory data={trendsData.categorySpending} />

            {/* Category Breakdown - Detailed List */}
            <CategoryBreakdown data={trendsData.categorySpending} />
          </div>
        </div>
      </main>
    </>
  );
}