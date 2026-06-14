import { useState } from "react";
import "./Budget.css";

function Budget() {
  const expenses =
    JSON.parse(localStorage.getItem("expenses")) || [];

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  const [budget, setBudget] = useState(() => {
    return Number(localStorage.getItem("budget")) || 0;
  });

  const [amount, setAmount] = useState("");

  const addBudget = () => {
    const value = Number(amount);

    if (!value || value <= 0) {
      alert("Enter a valid amount");
      return;
    }

    const updatedBudget = budget + value;

    setBudget(updatedBudget);
    localStorage.setItem("budget", updatedBudget);

    setAmount("");
  };

  const removeBudget = () => {
    const value = Number(amount);

    if (!value || value <= 0) {
      alert("Enter a valid amount");
      return;
    }

    const updatedBudget = Math.max(
      0,
      budget - value
    );

    setBudget(updatedBudget);
    localStorage.setItem("budget", updatedBudget);

    setAmount("");
  };

  const remainingBudget =
    budget - totalExpenses;

  return (
    <div className="budget-container">
      <h2>Budget Manager</h2>

      <div className="budget-cards">
        <div className="budget-card">
          <h3>Total Budget</h3>
          <p>₹{budget}</p>
        </div>

        <div className="budget-card">
          <h3>Total Expenses</h3>
          <p>₹{totalExpenses}</p>
        </div>

        <div className="budget-card">
          <h3>Remaining Budget</h3>
          <p
            className={
              remainingBudget >= 0
                ? "positive"
                : "negative"
            }
          >
            ₹{remainingBudget}
          </p>
        </div>
      </div>

      <div className="budget-form">
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <div className="budget-buttons">
          <button
            className="add-btn"
            onClick={addBudget}
          >
            Add Budget
          </button>

          <button
            className="remove-btn"
            onClick={removeBudget}
          >
            Remove Budget
          </button>
        </div>
      </div>
    </div>
  );
}

export default Budget;