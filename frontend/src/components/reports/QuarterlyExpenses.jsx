import ExpenseCard from './ExpenseCard';

export default function QuarterlyExpenses({ data }) {
  return (
    <div className="mb-6">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-white mb-2">Quarterly Expenses</h2>
      </div>

      {/* Quarterly Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((quarterData, index) => (
          <ExpenseCard
            key={quarterData.quarter}
            title={quarterData.quarter}
            period={quarterData.period}
            amount={quarterData.amount}
            change={quarterData.change}
            isPositive={quarterData.isPositive}
            subtitle="from previous quarter"
            showProgressBar={true}
          />
        ))}
      </div>
    </div>
  );
}