import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

import "./Report.css";

const COLORS = [
  "#6366f1",
  "#22c55e",
  "#ef4444",
  "#f59e0b",
  "#06b6d4",
  "#8b5cf6",
];

function Report() {
  const expenses =
    JSON.parse(localStorage.getItem("expenses")) || [];

  const categories = {};

  expenses.forEach((expense) => {
    const category = expense.category || "Others";

    categories[category] =
      (categories[category] || 0) +
      Number(expense.amount);
  });

  const categoryData = Object.entries(categories).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <div className="report-container">
      <div className="report-header">
        <h2>Expense Reports</h2>

        <div className="report-total">
          ₹{totalExpense}
        </div>
      </div>

      {categoryData.length === 0 ? (
        <div className="empty-report">
          No expense data available.
        </div>
      ) : (
        <>
          <div className="chart-card">
            <h3>Category Distribution</h3>

            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[index % COLORS.length]
                      }
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>Category Expenses</h3>

            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Legend />

                <Bar
                  dataKey="value"
                  name="Expense"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}

export default Report;