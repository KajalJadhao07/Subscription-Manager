import { useState } from "react";
import Navbar from "./Navbar";
import MonthlyExpenses from "./reports/MonthlyExpenses";
import QuarterlyExpenses from "./reports/QuarterlyExpenses";
import YearlyOverview from "./reports/YearlyOverview";

export default function Reports() {
  // Sample data - in a real app, this would come from an API
  const [reportsData, setReportsData] = useState({
    monthlyExpenses: [
      {
        month: "January",
        amount: 243.89,
        change: 2.5,
        isPositive: false
      },
      {
        month: "December", 
        amount: 237.91,
        change: 1.2,
        isPositive: true
      },
      {
        month: "November",
        amount: 241.00,
        change: 3.1,
        isPositive: false
      },
      {
        month: "October",
        amount: 233.75,
        change: 0.8,
        isPositive: false
      },
      {
        month: "September",
        amount: 231.89,
        change: 2.3,
        isPositive: true
      },
      {
        month: "August",
        amount: 237.35,
        change: 1.5,
        isPositive: false
      }
    ],
    quarterlyExpenses: [
      {
        quarter: "Q4 2024",
        period: "Oct - Dec",
        amount: 722.80,
        change: 0.8,
        isPositive: false
      },
      {
        quarter: "Q3 2024",
        period: "Jul - Sep", 
        amount: 701.09,
        change: 1.5,
        isPositive: true
      },
      {
        quarter: "Q2 2024",
        period: "Apr - Jun",
        amount: 710.25,
        change: 2.1,
        isPositive: false
      },
      {
        quarter: "Q1 2024",
        period: "Jan - Mar",
        amount: 692.54,
        change: 1.2,
        isPositive: false
      }
    ],
    yearlyOverview: {
      annualTotal: 2926.68,
      annualChange: 1.2,
      averageMonthly: 243.89,
      highestMonth: {
        amount: 241.00,
        month: "November 2024"
      }
    }
  });

  return (
    <>
      <Navbar />
      <main className="pt-16 px-6 min-h-screen bg-gray-900 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Reports</h1>
            <p className="text-gray-400">Analyze your subscription spending patterns</p>
          </div>

          {/* Monthly Expenses Section */}
          <MonthlyExpenses data={reportsData.monthlyExpenses} />

          {/* Quarterly Expenses Section */}
          <QuarterlyExpenses data={reportsData.quarterlyExpenses} />

          {/* Yearly Overview Section */}
          <YearlyOverview data={reportsData.yearlyOverview} />
        </div>
      </main>
    </>
  );
}