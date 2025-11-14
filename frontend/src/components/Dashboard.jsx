import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import StatCard from "./dashboard/StatCard";
import UpcomingRenewals from "./dashboard/UpcomingRenewals";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalSubscriptions: 12,
    monthlySpending: 243.89,
    nextRenewal: { name: "Adobe Creative Cloud", days: 3 },
    annualTotal: 2926.68,
    monthlyChange: -12,
    annualChange: 8
  });

  const [upcomingRenewals, setUpcomingRenewals] = useState([
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
    }
  ]);

  return (
    <>
      <Navbar />
      <main className="pt-20 px-6 min-h-screen bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-400">Welcome back! Here's an overview of your subscriptions.</p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Subscriptions"
              value={dashboardData.totalSubscriptions}
              subtitle="Active subscriptions"
              icon={
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              }
              iconColor="text-blue-500"
              iconBg="bg-blue-500/10"
            />
            
            <StatCard
              title="Monthly Spending"
              value={`$${dashboardData.monthlySpending}`}
              subtitle={`${dashboardData.monthlyChange}% from last month`}
              icon={
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              }
              iconColor="text-blue-500"
              iconBg="bg-blue-500/10"
              change={dashboardData.monthlyChange}
              isNegative={dashboardData.monthlyChange < 0}
            />

            <StatCard
              title="Next Renewal"
              value={`${dashboardData.nextRenewal.days} days`}
              subtitle={dashboardData.nextRenewal.name}
              icon={
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              iconColor="text-blue-500"
              iconBg="bg-blue-500/10"
            />

            <StatCard
              title="Annual Total"
              value={`$${dashboardData.annualTotal.toLocaleString()}`}
              subtitle={`${dashboardData.annualChange}% from last year`}
              icon={
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
              iconColor="text-blue-500"
              iconBg="bg-blue-500/10"
              change={dashboardData.annualChange}
              isNegative={false}
            />
          </div>

          {/* Upcoming Renewals Section */}
          <UpcomingRenewals subscriptions={upcomingRenewals} />
        </div>
      </main>
    </>
  );
}
