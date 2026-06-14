import { useEffect, useState } from "react";
import "./Expenses.css";

function Expenses() {
  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setExpenses(
        JSON.parse(localStorage.getItem("expenses")) || []
      );
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <div className="expenses-container">
      <div className="expenses-header">
        <h2>Daily Expenses</h2>
        <h3>₹{totalExpense}</h3>
      </div>

      {expenses.length === 0 ? (
        <p className="empty-message">
          No expenses added yet.
        </p>
      ) : (
        <div className="expenses-list">
          {expenses.map((expense) => (
            <div className="expense-card" key={expense.id}>
              <div>
                <h4>{expense.title}</h4>
                <p>{expense.category}</p>
              </div>

              <div className="expense-right">
                <h4>₹{expense.amount}</h4>
                <small>{expense.date}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Expenses;