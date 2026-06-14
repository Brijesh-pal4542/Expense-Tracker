import "./Dashboard.css";

function Dashboard() {

  const expenses =
  JSON.parse(
    localStorage.getItem("expenses")
  ) || [];

  const budget =Number(localStorage.getItem("budget")) || 0;

  const totalExpense = expenses.reduce(
    (sum, expense) =>
      sum + expense.amount,
    0
  );
  const savings =
    budget - totalExpense;

  const budgetUsage =
    (totalExpense / budget) * 100;

  return (
    <div className="dashboard">

      {/* Greeting */}

      <div className="greeting">
        <h2>
          Welcome Back 👋
        </h2>

        <p>
          Here's an overview of your
          spending this month.
        </p>
      </div>

      {/* Stats Cards */}

      <div className="cards">

        <div className="card">
          <h3>Total Expenses</h3>
          <p>
            ₹{totalExpense}
          </p>
        </div>

        <div className="card">
          <h3>Monthly Budget</h3>
          <p>
            ₹{budget}
          </p>
        </div>

        <div className="card">
          <h3>Savings</h3>
          <p>
            ₹{savings}
          </p>
        </div>

        <div className="card">
          <h3>Transactions</h3>
          <p>
            {expenses.length}
          </p>
        </div>

      </div>

      {/* Budget Tracker */}

      <div className="budget-section">

        <h2>
          Budget Usage
        </h2>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${budgetUsage}%`
            }}
          />

        </div>

        <p>
          {budgetUsage.toFixed(1)}%
          of budget used
        </p>

      </div>

      {/* Quick Stats */}

      <div className="quick-grid">

        <div className="quick-card">

          <h3>
            Highest Expense
          </h3>

          <p>
            ₹1200
          </p>

        </div>

        <div className="quick-card">

          <h3>
            Most Used Category
          </h3>

          <p>
            Food
          </p>

        </div>

      </div>

      {/* Recent Expenses */}

      <div className="recent-expenses">

        <h2>
          Recent Expenses
        </h2>

        <table>

          <thead>

            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>

          </thead>

          <tbody>

            {expenses.map(
              (expense) => (

                <tr
                  key={expense.id}
                >
                  <td>
                    {expense.title}
                  </td>

                  <td>
                    {expense.category}
                  </td>

                  <td>
                    ₹{expense.amount}
                  </td>
                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;