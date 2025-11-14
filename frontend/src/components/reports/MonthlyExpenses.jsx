import ExpenseCard from './ExpenseCard';

export default function MonthlyExpenses({ data }) {
  return (
    <div className="mb-6">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h2 className="text-xl font-bold text-white">Monthly Expenses</h2>
      </div>

      {/* Monthly Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((monthData, index) => (
          <ExpenseCard
            key={monthData.month}
            title={monthData.month}
            amount={monthData.amount}
            change={monthData.change}
            isPositive={monthData.isPositive}
            subtitle="from previous month"
          />
        ))}
      </div>
    </div>
  );
}